import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";

@Component({
	selector: "app-ports",
	standalone: true,
	imports: [HeaderComponent],
	templateUrl: "./ports.component.html",
	styleUrl: "./ports.component.scss",
})
export class PortsComponent {}
