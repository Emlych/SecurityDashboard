// Authentication and tokens

import { Injectable } from "@angular/core";
@Injectable({
	providedIn: "root",
})
export class AuthService {
	isAuthenticated(): boolean {
		return true;
	}
}
