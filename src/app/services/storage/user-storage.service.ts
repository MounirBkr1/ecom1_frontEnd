import { Injectable } from '@angular/core';



const TOKEN= 'ecom-token'
const USER= 'ecom-user'

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }


  public saveToken(token: string):void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  public saveUser(user):void{
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  static getToken(): string{
    return window.localStorage.getItem(TOKEN);
    return "111";
  }

  static getUser():any{

    return JSON.parse(localStorage.getItem(USER));
  }

  static getUserRole():string{
    const user=this.getUser();
    if(user==null){
      return '';
    }
    return user.role;
  }

  //check if the user is admin
  static isAdminLoggedIn():boolean{
    if(this.getToken()===null){
      return false
    }
    //return true if role = admin
    const role:string = this.getUserRole();
    return role== "ADMIN";
  }


  //check if the usr is customer
  static isCustomerLoggedIn():boolean{
    if(this.getToken()===null){
      return false
    }
    //return true if role = admin
    const role:string = this.getUserRole();
    return role== "CUSTOMER";
  }

  //
  static signout():void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);

  }

}
