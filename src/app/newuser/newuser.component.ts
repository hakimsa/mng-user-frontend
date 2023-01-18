import { JitEvaluator } from '@angular/compiler';
import { Component } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { __values } from 'tslib';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent {



  selectList: SelectListItem[] = [];
clear() {
  this.resetCheckBox()
  this.userserve.clear()



}

  user:any;
  users: User[] | any;
  list: any[] = [];
  constructor(private userserve: UserService) { }

  



add(name: string,email: string,favorit: string[]) {
  name = name.trim();
  email = email.trim();
 favorit= favorit


  if (!name) { 
    return; 
  }
;
if(this.getSelectedItem()!=null){
  favorit.forEach((value:any , key: any) => {//worked

    favorit.push(value.text)
})

console.log( favorit);
  this.userserve.addUser({ name, email, favorit } as unknown  as User)
console.log( name);
console.log( email);


  
}}



  ngOnInit() {
  this.selectList.push({ value: '1', text: 'Dart', checked: false });
  this.selectList.push({ value: '2', text: 'Java', checked: false });
  this.selectList.push({ value: '3', text: 'Python', checked: false });
  this.selectList.push({ value: '4', text: 'C#', checked: false });
  this.selectList.push({ value: '5', text: 'Perl', checked: false });
  this.selectList.push({ value: '6', text: 'C++', checked: false });
    
    }

 // get list of selected Items
 getSelectedItem() {

 this.list=this.selectList.filter(item => item.checked === true);


  return this.list;
}


// reset list
resetCheckBox() {
 
this.selectList.forEach(item => {
  const foundIndex = this.selectList.findIndex(x => x.value === item.value);
  item.checked = false;
  this.selectList[foundIndex] = item;
});
}

}
export interface SelectListItem {
  value: string;
  text: string;
  checked: boolean;
 }