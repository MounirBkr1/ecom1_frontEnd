import { Component } from '@angular/core';
import {UserStorageService} from "./services/storage/user-storage.service";
import {Router} from "@angular/router";
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecom1_front';

  isCustromerLoggedIn: boolean = UserStorageService.isCustomerLoggedIn();
  isAdminLoggedIn : boolean= UserStorageService.isAdminLoggedIn();

  constructor(private router : Router) {}

  ngOnInit():void{
    this.router.events.subscribe(event =>{
      this.isCustromerLoggedIn=UserStorageService.isCustomerLoggedIn();
      this.isAdminLoggedIn=UserStorageService.isAdminLoggedIn();
    })
  }

  logout(){
    UserStorageService.signout();
    this.router.navigateByUrl('login');
  }
}
