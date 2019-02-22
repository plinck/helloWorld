"use strict";
// Dependencies
const express = require("express");
const path = require('path');
const HelloWorldModel = require("./data/HelloWorldModel");
let helloWorldModel = new HelloWorldModel;

// Create an instance of the express app.
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// client dir
app.use("/public", express.static(path.join(__dirname, "public")));

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// directory where html files are
const htmlRoutes = {
    "/"          : "index.html",
    "/test"    : "test.html"
};

for (let key in htmlRoutes) {
    app.get(key, (req, res) => {
        let htmlToSend = path.join(__dirname,`public/${htmlRoutes[key]}`);
        res.sendFile(path.resolve(htmlToSend));
    });
}

// APIs
app.get("/api/message", (req, res) => {
    helloWorldModel.fetchWorlds( worlds => {
        res.json({worlds});
    });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});