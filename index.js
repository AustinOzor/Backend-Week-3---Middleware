const express = require("express");
const path =require('path')

const server = express();


//middlewares

const serveHomePage = (req, res) => {
    //res.send("Welcome to the home page")
    //1.find the html file and send it to the client
    const homePageFilePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(homePageFilePath);
}

const serverServicesPage = (req, res) => {
    const servicesPageFilePath = path.join(__dirname, 'public', 'services.html');
    res.sendFile(servicesPageFilePath );
}
//routes definitions
server.get('/', serveHomePage);
server.get('/services', serverServicesPage);

server.listen(3003, () => console.log("Server is ready for use"));