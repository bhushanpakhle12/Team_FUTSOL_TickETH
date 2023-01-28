const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  console.log("Hello");
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
