// Authentication and tokens
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
	providedIn: "root",
})
export class AuthService {
	private isAuthenticated: boolean = false;

	authenticate(email: string, password: string): Observable<boolean> {
		return new Observable<boolean>((observer) => {
			setTimeout(() => {
				const validEntry = email === "mail@mail.com" && password === "password";
				this.isAuthenticated = validEntry;
				observer.next(validEntry);
				observer.complete();
			}, 1000);
		});
	}

	isAuthenticatedUser(): boolean {
		return this.isAuthenticated;
	}

	logout(): void {
		this.isAuthenticated = false;
	}
}
