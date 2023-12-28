// Read security data from backend
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class SecurityService {
	private portThreatsUrl = "../../assets/port-threat.json";

	constructor(private _httpClient: HttpClient) {}

	getPortThreats(): Observable<PortThreat[]> {
		return this._httpClient.get<{ ports: any[] }>(this.portThreatsUrl).pipe(
			map((data) =>
				data.ports.map((port) => {
					// Determine vulnerability grade based on the highest severity
					const vulnerabilityGrade = this.determineVulnerabilityGrade(
						port.vulnerabilities
					);
					const overallGrade = this.calculateOverallGrade(port);

					return {
						portNumber: port.portNumber,
						portStatus: port.portStatus,
						portService: port.service,
						overallGrade,
						vulnerabilities: port.vulnerabilities.map((vuln: any) => ({
							name: vuln.name,
							severity: vuln.severity,
						})),
						vulnerabilityGrade,
						sslConfigGrade: port.sslConfig ? "Low" : "High",
						firewallRules: port.firewallRules ? "AllowSpecificIPs" : "AllowAll",
						firewallRulesGrade: port.firewallRules ? "Low" : "High",
						actions: port.actions,
					};
				})
			)
		);
	}

	private determineVulnerabilityGrade(vulnerabilities: any[]): "High" | "Medium" | "Low" {
		let hasHighSeverity = false;
		let hasMediumSeverity = false;

		for (const vuln of vulnerabilities) {
			const severity = vuln.severity;
			if (severity === "High") {
				hasHighSeverity = true;
				break;
			} else if (severity === "Medium") {
				hasMediumSeverity = true;
			}
		}

		if (hasHighSeverity) {
			return "Low";
		} else if (hasMediumSeverity) {
			return "Medium";
		} else {
			return "High";
		}
	}

	private calculateOverallGrade(port: any): number {
		const { portStatus, vulnerabilityGrade, sslConfig, firewallRules } = port;

		if (portStatus === "Close") return 1; // Low

		const grades = [
			this.mapGradeToNumber(vulnerabilityGrade),
			this.mapGradeToNumber(sslConfig ? "Low" : "High"),
			this.mapGradeToNumber(firewallRules ? "Low" : "High"),
		];

		return Math.max(...grades);
	}

	private mapGradeToNumber(grade: string): number {
		switch (grade) {
			case "High":
				return 3;
			case "Medium":
				return 2;
			case "Low":
				return 1;
			default:
				return 1; // Default to Low
		}
	}
}

export interface PortThreat {
	portNumber: number;
	portStatus: "Open" | "Close";
	portService: string;
	overallGrade: number;
	vulnerabilities: Vulnerabilities[];
	vulnerabilityGrade: "High" | "Medium" | "Low";
	sslConfigGrade: "High" | "Low";
	firewallRules: "AllowAll" | "AllowSpecificIPs" | "DenyAll";
	firewallRulesGrade: "High" | "Medium" | "Low";
	actions: string;
}

interface Vulnerabilities {
	name: string;
	severity: "High" | "Medium" | "Low";
}
