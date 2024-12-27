import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessioneDTO } from '../DTO/SessioneDTO';

@Injectable({
  providedIn: 'root'
})
export class SessioniService {

  private apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  addSessione(sessione: SessioneDTO): Observable<any> {
    return this.http.post<any>(this.apiUrl+"sessioneTecnica", sessione);
  }

  getSessioni(): Observable<SessioneDTO[]> {
    return this.http.get<any>(this.apiUrl+"sessioneTecnica");
  }

  deleteSession(id: any): Observable<any> {
    return this.http.delete<any>(this.apiUrl+"sessioneTecnica/"+ id);
  }
}
