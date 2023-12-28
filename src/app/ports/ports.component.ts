import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { MatTooltipModule } from "@angular/material/tooltip";

@Component({
	selector: "app-ports",
	standalone: true,
	imports: [HeaderComponent, MatTooltipModule],
	templateUrl: "./ports.component.html",
	styleUrl: "./ports.component.scss",
})
export class PortsComponent {}
