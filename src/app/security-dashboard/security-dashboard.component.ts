import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { DashboardWidgetsComponent } from "../ui/port-threat-widget/port-threat-widget.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@Component({
	selector: "app-security-dashboard",
	standalone: true,
	imports: [CommonModule, HeaderComponent, DashboardWidgetsComponent, HttpClientModule],
	templateUrl: "./security-dashboard.component.html",
	styleUrl: "./security-dashboard.component.scss",
})
export class SecurityDashboardComponent {}
