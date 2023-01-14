const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config({ path: path.resolve(__dirname, "./config/.env") });
const connectDB = require("./config/db");
const authRoute = require("./routes/authRoute");

// DB CONNECT
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 2121;
app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});
