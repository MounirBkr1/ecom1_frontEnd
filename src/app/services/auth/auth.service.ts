import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {UserStorageService} from "../storage/user-storage.service";


const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //DEPENDENCY INJECTION
  constructor(private http: HttpClient,
              private userStorageService: UserStorageService
  ) {
  }


  //REGISTER
  register(signupRequest: any): Observable<any> {
    return this.http.post(BASIC_URL + "sign-up", signupRequest);
  }


  //LOGIN OR authenticate
  login(username: string, password: string ): any {


    const headers = new HttpHeaders().set('Content-type', 'application/json');
    const body = {username, password};

    return this.http.post(BASIC_URL + "authenticate", body, {headers, observe: 'response'}).pipe(
      map((res) => {
        console.log("im in service.login method: ");
          const token = res.headers.get("Authorization").substring(7);
          console.log("fffffffffffffff");
          const user = res.body;

          if (token && user) {
            this.userStorageService.saveToken(token);
            this.userStorageService.saveUser(user);
            console.log("************login service: true********");
            return true;


          }
        console.log("************login service: false********");
          return false;

        }
      )
    )


  }
}

