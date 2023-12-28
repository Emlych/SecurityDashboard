import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SecurityService } from "../../services/security.service";

@Component({
	selector: "app-port-threat-widget",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./port-threat-widget.component.html",
	styleUrl: "./port-threat-widget.component.scss",
})
export class DashboardWidgetsComponent {
	portThreats: string[] = [];

	constructor(private securityService: SecurityService) {}

	ngOnInit(): void {
		console.log("Before security service get port threats");
		this.securityService.getPortThreats().subscribe(
			(threats) => {
				console.log(threats);
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
}
