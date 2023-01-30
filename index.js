const express = require("express");
const path = require('path');
const server = express('server');

const bodyParser = require('body-parser');

//middleware definition
server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.urlencoded({extended:false}))
// const serveHomePage = (req, res) => {
//     //res.send("Welcome to the home page")
//     //1.find the html file and send it to the client
//     const homePageFilePath = path.join(__dirname, 'public', 'index.html');
//     res.sendFile(homePageFilePath);
// }
// const serverServicesPage = (req, res) => {
//     const servicesPageFilePath = path.join(__dirname, 'public', 'services.html');
//     res.sendFile(servicesPageFilePath );
// }
//create a handler method to handle the request
const loginRequestHandler = (req, res) => {
    // let body = "";

    // req.on('data', chunk => {
    //     body += chunk;
    // });
    // req.on('end', () => {
    //     console.log(body)
    // });
    console.log(req.body.email);
    console.log(req.body.password);
    res.send('Done');
}
//routes definitions
// server.get('/', serveHomePage);
// server.get('/services', serverServicesPage);
server.post('/login', loginRequestHandler)

server.listen(3003, () => console.log("Server is ready for use"));