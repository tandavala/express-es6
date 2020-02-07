import express from "express";
let router = express.Router();
import User from "../models/User";

router.get("/", (req, res, next) => {
  let languages = [
    {
      language: "Spanish"
    },
    {
      language: "French"
    },
    {
      language: "German"
    }
  ];
  res.json(languages);
});

router.get("/users", (req, res, next) => {
  let users = [
    new User("James Coonce", "jcononse", "none@none.com"),
    new User("Bo Coonce", "bcoonce", "none@none.com"),
    new User("Eur1", "eur1", "none@none.com")
  ];
  res.json(users);
});

router.post("/user/create", (req, res) => {
  let user = new User(req.body.name, req.body.username, req.body.email);
  res.json(user);
});

module.exports = router;
