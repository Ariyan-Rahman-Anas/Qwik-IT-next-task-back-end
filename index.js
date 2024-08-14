const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const cors = require("cors");
require("dotenv").config();
const dbConfig = require("./src/config/dbConfig");
dbConfig();

const booksRouter = require("./src/route/bookRoute");

// Basic middleware
app.use(express.json());
app.use(cors({
    // origin: "http://localhost:3000",
    origin: "https://qwik-it-next.vercel.app",
    credentials: true
}));
app.use(express.urlencoded({ extended: true }));

app.use("/books", booksRouter);

// Root route
app.get("/", (req, res) => {
    res.send({ message: "Qwik IT test task is running..." });
});

// Testing route
app.listen(port, () => {
    console.log(`Qwik IT test task is running on: http://localhost:${port}`);
});