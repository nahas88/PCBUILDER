import { Component } from '@angular/core';
import { AuthorService } from 'src/app/author.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public auth:AuthorService){}
  logout(){
    this.auth.logout()
    }

}
