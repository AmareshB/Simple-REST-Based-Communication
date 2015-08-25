# Simple-REST-Based-Communication
This project is an simple example for the exchange of JSON data between Server and client 

After Forking/downloading this project, run the project using Tomcat Server.
Server.java is the server which hosts the functions .
client.jsp is a Client which calls the functions in Server based on the method of request and type of response .

Running the Project .
In the Url append /rest/server ---> for GET Method,
                  /rest/server/postcheck ----> for POST Method.
                  
Now copy this URL,
Change the value of url in readJson.js to this new copied value.
Now run  client.jsp , this sends a simple string to the server and receives a JSON Response .

You are good to go now!
