import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservationvol',
  templateUrl: './reservationvol.component.html',
  styleUrls: ['./reservationvol.component.css']
})
export class ReservationvolComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  async addvol(){
    var Departure =(<HTMLInputElement>document.getElementById("d")).value
    var Arrive=(<HTMLInputElement>document.getElementById("a")).value
    var Date_of_Depart=(<HTMLInputElement>document.getElementById("dd")).value
    var Date_of_arival =(<HTMLInputElement>document.getElementById("da")).value
    var Categorie=(<HTMLInputElement>document.getElementById("c")).value
    var adults=(<HTMLInputElement>document.getElementById("ad")).value
    var children =(<HTMLInputElement>document.getElementById("ch")).value

    var body = `{"Departure":"${Departure}" , "Arrive":"${Arrive}" , "Date_of_Depart":"${Date_of_Depart}" , "Date_of_arival":"${Date_of_arival}","Categorie":"${Categorie}","adults":"${adults}","children":"${children}"}`
    const rep= await fetch( "http://127.0.0.1:8000/addvol" ,{
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
