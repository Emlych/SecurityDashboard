import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class LoggingService {
	log(message: string): void {
		console.log(`[INFO] ${message}`);
	}

	logError(error: any, message?: string): void {
		console.error(`[ERROR] ${message || "An error occured"}`);
		console.error(error);
	}

	logWarning(message: string): void {
		console.warn(`[WARNING] ${message}`);
	}

	logDebug(message: string): void {
		console.debug(`[DEBUG] ${message}`);
	}
}
