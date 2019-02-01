const express = require("express");
const router = require("express").Router();

module.exports = function(app) {
    app.get("/test", function(req, res) {
        console.log("test route works")
        res.send("Greetings from the Test controller!");
    });
  };