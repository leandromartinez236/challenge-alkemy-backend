const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
require("./api/asociations/asociations");

const userRoutes = require("./api/routes/user.routes");
const ticketRoutes = require("./api/routes/ticket.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.use("/users", userRoutes);
app.use("/tickets", ticketRoutes);

app.listen(3000, () => console.log("Server running on port ", 3000));
