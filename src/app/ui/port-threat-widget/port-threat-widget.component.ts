import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { PortThreat, SecurityService } from "../../services/security.service";

@Component({
	selector: "app-port-threat-widget",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./port-threat-widget.component.html",
	styleUrl: "./port-threat-widget.component.scss",
})
export class DashboardWidgetsComponent {
	ports: PortThreat[] = [];

	constructor(private securityService: SecurityService) {}

	ngOnInit(): void {
		this.securityService.getPortThreats().subscribe(
			(portThreats) => {
				console.log(portThreats);
				// nb de ports avec threats high ou medium
				// ng total de ports

				this.ports = portThreats;
			},
			(error) => {
				console.error("Error fetching port threats: ", error);
			}
		);
	}

	isCardExpanded: boolean = false;
	expandCard(): void {
		this.isCardExpanded = !this.isCardExpanded;
	}

	countRiskyPorts = 1;
}
