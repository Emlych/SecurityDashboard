// Read security data from backend
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class SecurityService {
	private portThreatsUrl = "./port-thread.json";

	constructor(private _httpClient: HttpClient) {}

	getPortThreats(): Observable<PortThreat[]> {
		// Read data from port-threat.json and generate array of objects with:
		return this._httpClient.get<{ ports: any[] }>(this.portThreatsUrl).pipe(
			map((data) =>
				data.ports.map((port) => ({
					portNumber: port.portNumber,
					overallGrade: port.overallGrade,
					vulnerabilityGrade:
						port.vulnerabilities.length > 0 ? port.vulnerabilities[0].severity : "Low",
					sslConfigGrade: port.sslConfig ? port.sslConfig.grade : "Strong",
					firewallRulesGrade: port.firewallRules
						? port.firewallRules[0].allow
						: "AllowAll",
					actions: port.actions,
				}))
			)
		);
	}
}

interface PortThreat {
	portNumber: number;
	overallGrade: number;
	vulnerabilityGrade: "High" | "Medium" | "Low";
	sslConfigGrade: "Weak" | "Moderate" | "Strong";
	firewallRulesGrade: "AllowAll" | "AllowSpecificIPs" | "DenyAll";
	actions: string;
}
