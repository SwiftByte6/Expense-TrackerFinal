const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");
const path = require("path");

// config dot env file
dotenv.config();

// connect to database
connectDb();

// rest object
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/users", require("./routes/userRoute"));
app.use("/api/v1/transaction", require("./routes/transactionRoute"));

// serve static files from the frontend build folder
app.use(express.static(path.resolve(__dirname, "Expense-Fronted", "dist")));

// for any other route, serve the React frontend's index.html
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "Expense-Fronted", "dist", "index.html"));
});

// port
const PORT = process.env.PORT || 8080;

// start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`.green.bold);
});
