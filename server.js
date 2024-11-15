//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();

//web root
server.use(express.static(__dirname+"/AgencyProject"));

var DB = require("nedb-promises");
var Profolio = DB.create(__dirname+"Profolio.db");

Profolio.insert({modal: "#portfolioModal1", imgSrc:"roundicons.png", heading:"Round Icons", text:"Graphic Design"})

server.get("/services",(req, res)=>{
    //DB
    ver Services=[
        {icon: "fa-shopping-cart", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
        {icon: "fa-laptop", heading"Responsive Design", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
    ];
    res.send(Services);
})

server.get("/profolio", (req,res)=>{
       //DB        
       res.send("Profolio");

})

server.listen(80,()=>{
    console.log("Server is running at port 80");
})