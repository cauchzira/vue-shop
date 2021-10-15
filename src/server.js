const express = require("express");
const fs = require("fs");
const app = express();

const CATALOG_FILE_URL = "./db.json";
const CART_FILE_URL = "./src/userCart.json";

app.use(express.json());
app.use("/", express.static("./dist"));

//API Catalog

app.get("/api/products", (req, res) => {
  fs.readFile(CATALOG_FILE_URL, "utf-8", (err, data) => {
    console.log(data);
    if (err) {
      res.send({
        result: 0,
        err
      });
    } else res.send(data);
  });
});

//Assets
app.get("/assets/:file", (req, res) => {
  const {file} = req.params;
  console.log(req.params);
  res.sendFile(__dirname + "/assets/images/" + file);
});

//API Cart

app.get("/api/cart", (req, res) => {
  fs.readFile(CART_FILE_URL, "utf-8", (err, data) => {
    if (err) {
      res.send({
        result: 0,
        err
      });
    } else res.send(data);
  });
});

app.listen(5555, () => {
  console.log("Server was started!");
});
