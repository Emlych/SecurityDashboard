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
	@Input() password: string = "";
	errorMessage: string = "";

	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit(): void {}

	onSubmitForm(): void {
		this.authService.authenticate(this.userEmail, this.password).subscribe(
			(result) => {
				if (result) {
					this.router.navigate(["/dashboard"]);
				} else {
					this.errorMessage = "Invalid email or password";
				}
			},
			(error) => {
				console.error("Authentication error", error);
				this.errorMessage = "Authentication Failed";
			}
		);
	}
}
