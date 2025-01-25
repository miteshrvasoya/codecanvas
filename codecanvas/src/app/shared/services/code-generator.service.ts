import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CodeGeneratorService {
    private readonly apiUrl = 'http://localhost:3000/api/generate';

    constructor(private http: HttpClient) {}

    generateCode(prompt: string): Observable<{ html: string }> {
        return this.http.post<{ html: string }>(this.apiUrl, { prompt });
    }
}
