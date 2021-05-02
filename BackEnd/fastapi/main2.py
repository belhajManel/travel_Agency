from typing import Optional
from fastapi import FastAPI , Request
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector
import json
from pydantic import BaseModel
from datetime import datetime,date

class hotel(BaseModel):
    Username: str
    Country: str
    Hotel: str
    Check_In: date
    Check_out: date
    Rooms:int
    Adults:int
    Children:int




    




app=FastAPI()
origins =[
    "http://localhost",
    "http://localhost:4200",
    
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/addhotel")
async def add(hotel:hotel):
    mydb =mysql.connector.connect(host="localhost", user="root",password="",database="serenitytravel")
    mycursor=mydb.cursor()
    #body=json.loads( request.body())
    query = (f"insert into reservationhotel(Username,Country,Hotel,Check_In,Check_out,Rooms,Adults,Children)  values ( '{hotel.Username}','{hotel.Country}','{hotel.Hotel}', '{hotel.Check_In}','{hotel.Check_out}','{hotel.Rooms}','{hotel.Adults}','{hotel.Children}');")

    try:
       
       # mycursor.execute(f"INSERT INTO client (username, phone, email, password) VALUES( '{client.username}' ,'{client.phone}' ,'{client.email}' ,'{body.password}' ")
        mycursor.execute(query)
        mydb.commit()
        return("ok")
    except:
        mydb.rollback()
        return("no")
   