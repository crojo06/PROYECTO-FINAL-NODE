const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./src/routes/user");

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use('/api', userRoutes);



app.get("/", (req, res) => {
  res.send("Bienvenido a mi API");
});


mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch((error) => console.error(error));


app.listen(PORT, () => {
  console.log(`Escuchando puerto http://localhost:${PORT}`);
});
