const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const User = require("./models/users");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/tickEth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });

app.post("/register", (req, res) => {
  const { email } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send("User already registered");
    } else {
      const newUser = new User(req.body);
      console.log(newUser);
      newUser.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully registered" });
        }
      });
    }
  });
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
