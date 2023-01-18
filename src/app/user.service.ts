import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { User } from './User';


@Injectable({
  providedIn: 'root'
})


export class UserService {
  clear() {
    var names =<HTMLButtonElement>document.getElementById("validationUsername");
    names.value=""
    var email =<HTMLButtonElement>document.getElementById("validationUseremail");
    email.value=""
  
    var lastname =<HTMLButtonElement>document.getElementById("validationUserlastname");
lastname.value=""
  }

  

  private usersUrl ='http://localhost:8080/api/v1/users';
  private  httpOptions = new HttpHeaders({ 'Content-Type': 'application/json' })
  status: any;
  

  constructor(private http: HttpClient) {

  }
  addUser(user: User){

    return this.http.post<User>(this.usersUrl+'/save', user, { headers: this.httpOptions, observe: 'response' }).subscribe(
       data => {
       
         alert(JSON.stringify(data.statusText, null, 2));
       },
       error => {
         alert(JSON.stringify(error.error.message,null,2));
     });
         
    // return this.http.post<User>(this.usersUrl+'/save', user, this.httpOptions);
   
   }

  getUser(id: number) : Observable<User> {
    return this.http.get<User>(this.usersUrl+"/"+id)
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl+"/all",)

  }

updateUser(user:User) {

  return this.http.put<User>(this.usersUrl+'/update/'+user.id, user, { headers: this.httpOptions, observe: 'response' }).subscribe(
    data => {
    
      alert(JSON.stringify(data.statusText, null, 2));
    },
    error => {
      alert(JSON.stringify(error.error.message,null,2));
  });

  
   }


   update(){
    alert("modifcation de datos")
    var name= <HTMLButtonElement>document.getElementById("user-name");
    name.style.color="gray";
    name.disabled = false;

    var email= <HTMLButtonElement>document.getElementById("user-email");
    email.style.color="gray";
    email.disabled = false;
 var favoritPrograming= <HTMLButtonElement>document.getElementById("user-favorit");
 favoritPrograming.style.color="gray";
 favoritPrograming.disabled = false;
 var btnvalidar= <HTMLButtonElement>document.getElementById("btnvalidar");
 btnvalidar.style.color="red";
 btnvalidar.disabled = false;
 var btndelete= <HTMLButtonElement>document.getElementById("btndelete");
 btndelete.style.color="red";
 btndelete.disabled = false;

}

deleteUser(user:User) {
   const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
   this.http.delete(this.usersUrl+'/'+user.id, { headers })
       .subscribe(() => this.status = 'Delete successful');
  
   }
 
 createElementWithClass(type:string, className:string) {
  const element = document.createElement(type);
  const btn = document.createElement("button");
  btn.className="btn-close"
 // btn.data-bs-dismiss="alert"

btn.addEventListener('click',function(){
  location.replace("/")
})

  element.className = className
  element.innerHTML="SE HA BORRADO CORRECTAMETE "
  let main = document.getElementById('addHere');
  main?.appendChild(element)
  main?.appendChild(btn)
  return element;
}

   userDelete (userId:String):Observable<User>{
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    this.createElementWithClass("div","alert alert-success alert-dismissible")
  
    return this.http.delete<User>(this.usersUrl+"/"+userId);
  }


}
