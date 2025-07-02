const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Ermöglicht das Parsen von JSON-Anfragekörpern
const { MongoClient } = require("mongodb");

const url =
  "mongodb://homeoffice_pilesmoke:17bdbef92b79dd2bb4e60fea99259703a7b3d399@i8gut.h.filess.io:61004/homeoffice_pilesmoke";
const client = new MongoClient(url);

let dbConnection;
const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Erfolgreich mit MongoDB verbunden");
    dbConnection = client.db("homeoffice_pilesmoke");
  } catch (error) {
    console.error("Fehler beim Verbinden mit MongoDB:", error);
    process.exit(1);
  }
};
connectToDatabase();

app.get("/", async (_, res) => {
  if (!dbConnection) {
    return res.status(500).send("Datenbankverbindung nicht verfügbar.");
  }
  try {
    let collection = await dbConnection.collection("users");
    let result = await collection.findOne({});
    res.status(200).send(result);
  } catch (error) {
    console.error("Fehler beim Abrufen der Daten:", error);
    res.status(500).send("Fehler beim Abrufen der Daten.");
  }
});

app.post("/usrLogin", async (req, res) => {
  if (!dbConnection) {
    return res.status(500).send("Datenbankverbindung nicht verfügbar.");
  }
  try {
    let collection = await dbConnection.collection("users");
    const username = req.body.username;
    let result = await collection.find({ username: username }).toArray();
    if (result.length > 0) {
      const password = req.body.password;
      const storedHash = result[0].password;
      const match = await bcrypt.compare(password, storedHash);
      if (match) {
        res
          .status(200)
          .send({
            result: true,
            message: "Benutzer gefunden",
            user: result[0],
          });
      } else {
        res.status(401).send({ message: "Anmeldedaten falsch!" });
      }
    } else {
      res.status(404).send({ message: "Benutzer nicht gefunden" });
    }
  } catch (error) {
    console.error("Fehler bei der Benutzeranmeldung:", error);
    res.status(500).send("Fehler bei der Benutzeranmeldung.");
  }
});

app.listen(8080, () => {
  console.log("server listening on port 8080");
});

process.on("SIGINT", async () => {
  console.log("Server wird heruntergefahren...");
  if (client) {
    await client.close();
    console.log("MongoDB-Verbindung geschlossen.");
  }
  process.exit(0);
});
