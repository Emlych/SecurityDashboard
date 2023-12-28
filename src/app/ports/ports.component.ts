import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { MatTooltipModule } from "@angular/material/tooltip";
import { DashboardWidgetsComponent } from "../ui/port-threat-widget/port-threat-widget.component";

@Component({
	selector: "app-ports",
	standalone: true,
	imports: [HeaderComponent, MatTooltipModule, DashboardWidgetsComponent],
	templateUrl: "./ports.component.html",
	styleUrl: "./ports.component.scss",
})
export class PortsComponent {}
