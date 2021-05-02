import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  async addhotel(){
    var Username =(<HTMLInputElement>document.getElementById("user")).value
    var Country =(<HTMLInputElement>document.getElementById("co")).value
    var Hotel=(<HTMLInputElement>document.getElementById("ho")).value
    var Check_In =(<HTMLInputElement>document.getElementById("ci")).value
    var Check_out=(<HTMLInputElement>document.getElementById("cho")).value
    var Rooms=(<HTMLInputElement>document.getElementById("r")).value
    var Adults=(<HTMLInputElement>document.getElementById("ad")).value
    var Children =(<HTMLInputElement>document.getElementById("ch")).value

    var body = `{"Username":"${Username}" , "Country":"${Country}" , "Hotel":"${Hotel}" , "Check_In":"${Check_In}","Check_out":"${Check_out}","Rooms":"${Rooms}","Adults":"${Adults}","Children":"${Children}"}`
    const rep= await fetch( "http://127.0.0.1:8000/addhotel" ,{
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
