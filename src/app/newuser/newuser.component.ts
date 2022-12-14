import { JitEvaluator } from '@angular/compiler';
import { Component } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent {
  users:any;
  constructor(private userserve: UserService) { }
  isChecked:boolean = false;
addUserr(name: string,email :String, op:String []) {
  var element = <HTMLInputElement> document.getElementById("flexSwitchCheckChecked");
var isChecked = element.checked;
if(isChecked==true){
  op[0]="Dart"
  op[1]="Java"
  op[2]="Python"
  op[3]="LangGo"
  console.log(name,op ,email)
}else {
  console.log("No checke¡d:"+ name,email,op)
}


}




 /*aaddnewUser(names: string,email:String,program:String[]) {
this.userserve.addnewUser().subscribe(
    (response) => { console.log(response) },
    (error) => { console.log(names+email,program); });
throw new Error('Method not implemented.');}*/
/** POST: add a new hero to the database */

  ngOnInit() {
   
    
    }
}
