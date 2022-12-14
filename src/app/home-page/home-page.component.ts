import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

users:any;
constructor(private userserve: UserService) { }

ngOnInit() {
this.userserve.getUsers().subscribe(
(response) => { this.users = response; },
(error) => { console.log(error); });


}
}
