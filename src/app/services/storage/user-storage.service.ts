import { Injectable } from '@angular/core';
import {window} from "rxjs/operators";




const TOKEN= 'ecom-token'
const USER= 'ecom-user'

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  public saveToken(token: string):void{
    localStorage.removeItem(TOKEN);
    localStorage.setItem(TOKEN, token);
  }

  public saveUser(user):void{
    localStorage.removeItem(USER);
    localStorage.setItem(TOKEN, JSON.stringify(user));
  }
}
