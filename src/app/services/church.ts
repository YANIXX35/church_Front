import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface Programme {
  id?: number;
  titre: string;
  description?: string;
  date_heure: string;
  lieu?: string;
  type_programme?: string;
  heures?: string[];
  heure_principale?: string;
  jour?: string;
}

export interface ContactMessage {
  nom: string;
  email: string;
  sujet?: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ChurchService {
  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);

  getProgrammes(): Observable<Programme[]> {
    return this.http.get<Programme[]>(`${this.apiUrl}/programmes`).pipe(
      catchError(() => of([]))
    );
  }

  envoyerContact(data: ContactMessage): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/contact`, data);
  }

  abonnerNewsletter(email: string): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/contact/newsletter`, { email });
  }

  getInfoEglise(): Observable<unknown> {
    return this.http.get(`${this.apiUrl}/info`).pipe(
      catchError(() => of(null))
    );
  }
}
