from typing import Optional
from fastapi import FastAPI , Request
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector
import json
from pydantic import BaseModel

from datetime import datetime,date

class vol(BaseModel):
    Departure: str
    Arrive: str
    Date_of_Depart: date
    Date_of_arival: date
    Categorie: str
    adults:int
    children:int




    




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

@app.post("/addvol")
async def add(vol:vol):
    mydb =mysql.connector.connect(host="localhost", user="root",password="",database="serenitytravel")
    mycursor=mydb.cursor()
    #body=json.loads( request.body())
    query = (f"insert into reservationvol(Departure,Arrive, Date_of_Depart,Date_of_arival,Categorie,adults,children)  values ( '{vol.Departure}','{vol.Arrive}','{vol.Date_of_Depart}', '{vol.Date_of_arival}','{vol.Categorie}',{vol.adults},{vol.children});")

    try:
       
       # mycursor.execute(f"INSERT INTO client (username, phone, email, password) VALUES( '{client.username}' ,'{client.phone}' ,'{client.email}' ,'{body.password}' ")
        mycursor.execute(query)
        mydb.commit()
        return("ok")
    except:
        mydb.rollback()
        return("no")
   