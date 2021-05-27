const express = require("express");
const app = express();

app.listen(process.env.PORT || "8080");
app.get("/", (req, res) => res.json("marketplace"));

module.exports = app;
