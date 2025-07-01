const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Ermöglicht das Parsen von JSON-Anfragekörpern
const { MongoClient } = require("mongodb");

const url =
  "mongodb://homeoffice_pilesmoke:17bdbef92b79dd2bb4e60fea99259703a7b3d399@i8gut.h.filess.io:61004/";
const client = new MongoClient(url);

let conn;
app.get("/", async (_, res) => {
  try {
    conn = await client.connect();
  } catch (e) {
    console.log(e);
  }
  console.log(conn);
  let db = conn.db("homeoffice_pilesmoke");
  let collection = await db.collection("users");
  let result = await collection.findOne({});
  res.send(result).status(200);
  await client.close();
});

app.post("/usrLogin", async (req, res) => {
  try {
    conn = await client.connect();
  } catch (e) {
    console.log(e);
  }
  let db = conn.db("homeoffice_pilesmoke");
  let collection = await db.collection("users");
  let result = await collection.find({ username: req.query["username"] });
  console.log(result);
  await client.close();
});

app.listen(8080, () => {
  console.log("server listening on port 8080");
});
