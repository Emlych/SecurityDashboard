import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SecurityDashboardComponent } from "./security-dashboard/security-dashboard.component";
import { PortsComponent } from "./ports/ports.component";

export const routes: Routes = [
	{ path: "", component: LoginComponent },
	{ path: "dashboard", component: SecurityDashboardComponent },
	{ path: "ports", component: PortsComponent },
];
