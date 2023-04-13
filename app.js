const express = require("express");
const mongoose = require("mongoose");

// const userRoutes = require("./routes/user");

const app = express();
//base de donnee, a placer apres la declaration de app UdayX7XHTk9ewjkx
mongoose
  .connect(
    "mongodb+srv://piiquante:UdayX7XHTk9ewjkx@clusterp6.5pmujpo.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
//middleware pour interpreter le json du front, a declarer apres la declaration de app
app.use(express.json());

//CORS, a placer avant la route d'API
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

//routes pour les requetes /api/stuff /api/sauces

module.exports = app;
