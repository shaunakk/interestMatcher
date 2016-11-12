var nodemailer = require("nodemailer");
var http = require('http');
var util = require('util')
var http = require('http');

//Lets define a port we want to listen to
const PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
    email()
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    
    console.log("Server listening on: http://localhost:%s", PORT);
});
function email(){
    var smtpTransport = nodemailer.createTransport("SMTP", {
        service: "Gmail",
        auth: {
            user: "epicshaunak@gmail.com",
            pass: "iCool1248"
        }
    });
    smtpTransport.sendMail({
        from: "Shaunak Kale", // sender address
        to: "nikmandava@gmail.com", // comma separated list of receivers
        subject: "Your confirmation code is 1234", // Subject line
        text: "Please put this code in the app" // plaintext body
    }, function(error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response.message);
        }
    });
}