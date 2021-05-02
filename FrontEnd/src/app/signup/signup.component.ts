import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 async add(){
    var username =(<HTMLInputElement>document.getElementById("username")).value
    var phone=(<HTMLInputElement>document.getElementById("phone")).value
    var email=(<HTMLInputElement>document.getElementById("email")).value
    var password=(<HTMLInputElement>document.getElementById("password")).value
    console.log(username,phone,email,password);
    var body = `{"username":"${username}" , "phone":"${phone}" , "email":"${email}" , "password":"${password}"}`  
    console.log(body)
    const rep= await fetch( "http://127.0.0.1:8000/add" ,{
      method:"post",
      body :body
      
    })
    if (rep.ok){
      rep.json() .then((data)=>{
        console.log(data)
      })
    }
    
      

    
  

    
     




  }
  
}
