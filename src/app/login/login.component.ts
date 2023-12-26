import { Component, Input } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-login",
	standalone: true,
	imports: [FormsModule, CommonModule],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.scss",
})
export class LoginComponent {
	@Input() userEmail!: string;
	password: string = "";
	errorMessage: string = "";

	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit(): void {
		this.checkAuthentication();
	}

	onContinue(): void {
		this.router.navigateByUrl("dashboard");
	}

	onSubmitForm(): void {
		console.log(this.userEmail);
	}

	private checkAuthentication(): void {
		if (this.authService.isAuthenticated()) {
			//
		} else {
			// Redirect to authentication page
			this.errorMessage = "Invalid email or password";
		}
	}
}
