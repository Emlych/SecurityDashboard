import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [RouterLink, RouterLinkActive, CommonModule],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent {
	getUser(): void {
		// Read token mail
	}

	isUserMenuOpen: boolean = false;
	toggleUserMenu(): void {
		this.isUserMenuOpen = !this.isUserMenuOpen;
	}
}
