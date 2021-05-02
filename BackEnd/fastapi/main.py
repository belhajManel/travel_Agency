from typing import Optional
from fastapi import FastAPI , Request
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector
import json
from pydantic import BaseModel

class Client(BaseModel):
	username:  str
	phone : str 
	email : str
	password : str
    


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

@app.post("/add")
async def add(client:Client):
    mydb =mysql.connector.connect(host="localhost", user="root",password="",database="serenitytravel")
    print(client.username)
    mycursor=mydb.cursor()
    #body=json.loads( request.body())
    query = (f"insert into client(username,phone, email, password)  values ( '{client.username}','{client.phone}','{client.email}', '{client.password}')")
    print(query)

    try:
       
       # mycursor.execute(f"INSERT INTO client (username, phone, email, password) VALUES( '{client.username}' ,'{client.phone}' ,'{client.email}' ,'{body.password}' ")
        mycursor.execute(query)
        mydb.commit()
        return("ok")
    except:
        mydb.rollback()
        return("no")

@app.get("/signin")
def gets():
    mydb = mysql.connector.connect ( host = "localhost" , user = "root" , password = "" , database = "serenitytravel")
    mycursor = mydb.cursor()
    mycursor.execute(f"SELECT email,password from client ")
    rv = mycursor.fetchall()
    row_headers = [x[0] for x in mycursor.description]
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv :
        json_data.append(dict(zip(row_headers,result)))
    return json_data
