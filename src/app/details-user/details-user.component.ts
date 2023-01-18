import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent {
deleteUser() {
throw new Error('Method not implemented.');
}

  user: any;

  constructor(
    private userserve: UserService,
    private route: ActivatedRoute,

  ) {}
  goBack(): void {
   // this.location.back();
  }

  ngOnInit(): void {
    this.getUser();
    //this.update();
  }
  
  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userserve.getUser(id)
      .subscribe(user => this.user = user);

  }

  update(): void{
this.userserve.update();

  }
  updateUser(){
    this.userserve.updateUser(this.user)
;  }

save(): void {
  if (this.user) {
    this.userserve.updateUser(this.user)
    
  }
}
userDelete(userId:string){
  this.userserve.userDelete(userId)
  .subscribe(user=>{
this.user=user
  })
}
}

