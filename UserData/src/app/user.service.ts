import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userInterface } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  private _url="../assets/data/user.json";
  getAllUsers():Observable<userInterface[]> {
    return this._http.get<userInterface[]>(this._url);
  }
}
