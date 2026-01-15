const express = require("express");
const mongoose = require("mongoose");

const username = "trocipon";
const password = "test0*?";
const cluster = "cluster0.ttmpigl.mongodb.net";
const dbName = "mon_vieux_grimoire";
const uri = `mongodb+srv://${username}:${encodeURIComponent(
  password
)}@${cluster}/${dbName}?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.error("Connexion MongoDB échouée :", error));

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.post("/api/books", (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: "Objet créé !",
  });
});

app.get("/api/books", (req, res, next) => {
  const books = [{}, {}];
  res.status(200).json(books);
});

module.exports = app;
