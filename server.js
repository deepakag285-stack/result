const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(express.static("public"));

const FILE = "buyers.json";

app.get("/buyers", (req, res) => {
  fs.readFile(FILE, "utf8", (err, data) => {
    if (err) return res.json([]);
    res.json(JSON.parse(data || "[]"));
  });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
