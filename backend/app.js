const dotenv = require('dotenv') // dotenv is used to manage environment variables i.e server port
dotenv.config()

//Core Modules
const path = require("path");

//External Modules
const express = require("express");
const cors = require('cors')
const DB_PATH = process.env.MONGO_URL;
  

//Local Modules
const { default: mongoose } = require("mongoose");
const authRouter = require("./routes/authRoutes");

const app = express()

//for multipart(File Upload)
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())

// all routers
app.use('/api/auth' ,authRouter)


const PORT = 3001

mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("Connected to Mongoose");
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`)
    });
  })
  .catch((err) => {
    console.log("Error while connecting to Mongoose: ", err);
  });
