import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }
  signin:any;

  async ngOnInit() {
    const rep=await fetch("http://127.0.0.1:8000/signin");
    if (rep.ok){
      rep.json() .then(data =>{
        this.signin=data;
        console.log(this.signin)
      })
    }
  }
  
}
