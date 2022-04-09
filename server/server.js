const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const festivalsRoutes = require("./festivals/festivals-routes");

require("dotenv").config();

const app = express();

// middleware
// more: https://blog.logrocket.com/express-middleware-a-complete-guide/
// add security and rate limiting
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(morgan("combined"));

// routes
app.use("/api/festivals", festivalsRoutes);

app.listen(process.env.PORT || 8080, (err) => {
  if (err) console.error(err);
  console.log("Listening on port", process.env.PORT || 8080)
});
