const dotenv = require("dotenv"); // dotenv is used to manage environment variables i.e server port
dotenv.config();

const path = require("path");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
import cookieParser from "cookie-parser";

const express = require("express");
const cors = require("cors");
const DB_PATH = process.env.MONGO_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;

//Local Modules
const { default: mongoose } = require("mongoose");
const authRouter = require("./routes/authRoutes");

const app = express();

// access the connect-mongodb-store
const store = new MongoDBStore({
  uri: DB_PATH,
  collection: "sessions",
});

//for multipart(File Upload)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true, // Allows cookies to be sent/received
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(cookieParser());

// for express session
app.use(
  session({
    secret: "Airbnb Session",
    resave: false,
    saveUninitialized: true,
    store,
  }),
);

// all routers
app.use("/api/auth", authRouter);

const PORT = 3001;

mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("Connected to Mongoose");
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to Mongoose: ", err);
  });
