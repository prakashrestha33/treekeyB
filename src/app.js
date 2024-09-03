import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import products from "./routes/products.js";
import auth from "./routes/auth.js";
import connectDB from "./database.js";
import logger from "./middlewares/logger.js";

const app = express();

dotenv.config();

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger);

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  // JSON => JavaScript Object Notation
  res.json({
    appName: "nodejs-20240823",
    version: "1.0.0",
    port: PORT,
  });
});

app.use("/api/products", products);
app.use("/api/auth", auth);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}...`);
});

// HTTP Methods
/** CRUD
 * Read = GET /products
 * Write (Create) = POST /products
 * Update = PUT /products/:id
 * Delete = DELETE /products/:id
 */

// MVC => Model, View, Controller
