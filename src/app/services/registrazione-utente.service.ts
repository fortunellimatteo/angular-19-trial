import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrazioneUtenteService {
  private apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+"registrazioneUtente", user);
  }

  checkUser(email: string): Observable<any> {
    const params = new HttpParams().set('email', email);
    return this.http.get<any>(this.apiUrl+"registrazioneUtente", { params });
  }
}
 