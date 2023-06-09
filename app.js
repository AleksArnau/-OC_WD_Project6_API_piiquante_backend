const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const saucesRoutes = require("./routes/sauces");
const userRoutes = require("./routes/user");
const path = require("path");

const app = express();
//base de donnee, a placer apres la declaration de app, DBUSERNAME et DBPASWORD dans .env
mongoose
  .connect(
    `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@clusterp6.5pmujpo.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.log(error, "Connexion à MongoDB échouée !"));
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

//routes pour les requetes /api/sauces etc
app.use("/api/sauces", saucesRoutes);
app.use("/api/auth", userRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
