import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestCreate, ResponseCreate, ResponseUser, ResponseUsers, ResponseUpdate, RequestUpdate } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<ResponseUsers> {
    return this.http.get<ResponseUsers>(this.url);
  }

  createUser(request: RequestCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(this.url, request);
  }

  getUserByID(id: string | null): Observable<ResponseUser> {
    const _url = `${this.url}/${id}`
    return this.http.get<ResponseUser>(_url)
  }

  updateUser(id: string | null, request: RequestUpdate): Observable<ResponseUpdate> {
    const _url = `${this.url}/${id}`
    return this.http.put<ResponseUpdate>(_url, request)
  }

}
