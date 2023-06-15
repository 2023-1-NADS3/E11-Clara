const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const routes = require("./routes/route");
const cors = require('cors');

app.use(cors({
  origin: "http://localhost:4200"
}));


mongoose.connect("mongodb+srv://Clara:fecap2023@cluster0.m4ru43x.mongodb.net/Clara", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongo Connected!");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(8086, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server listening on port 8086.");
  }
});

app.use(express.json());
app.use(routes);



