const express = require("express");
const cors = require("cors");

const { connectToDb, getDb } = require("./db");

// invoking
const app = express();

app.use(express.json());
app.use(cors()); // Enable CORS

// db conenction
let db;
connectToDb((err) => {
  if (!err) {
    app.listen(3001, () => {
      console.log("App listening on port 3001");
    });
    db = getDb(); // variable to update remove data from database
  }
});

// GET requests
app.get("/kaira/newCollections", (req, res) => {
  db.collection("homepage")
    .find({ type: "newCollections" })
    .toArray()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch new Collections" });
    });
});

app.get("/kaira/categories", (req, res) => {
  db.collection("homepage")
    .find({ type: "categories" })
    .toArray()
    .then((items) => {
      res.status(200).json(items);
      console.log(items);
    })
    .catch((error) => {
      res.status(500).json({ error: "Could not fetch categories" });
    });
});

app.get("/kaira/collectionBackgrnd", (req, res) => {
  db.collection("homepage")
    .find({ type: "collectionWithBackgrndImage" })
    .toArray()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Could not fetch collection on the background" });
    });
});

app.get("/kaira/newArrivals", (req, res) => {
  db.collection("homepage")
    .find({ type: "newArrivals" })
    .toArray()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Could not fetch collection of new arrivals" });
    });
});

app.get("/kaira/sliderN2", (req, res) => {
  db.collection("homepage")
    .find({ type: "sliderN2" })
    .toArray()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Could not fetch information for slider #2" });
    });
});

app.get("/kaira/videoPlayer", (req, res) => {
  db.collection("homepage")
    .findOne({ type: "videoPlayer" })
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Could not fetch information about video slider" });
    });
});

// POST REQUESTS
// single item
app.post("/kaira/insertOne", (req, res) => {
  const item = req.body;
  db.collection("homepage")
    .insertOne(item)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: "Could not create a new item" });
    });
});

// Multiple items
app.post("/kaira/insertMany", (req, res) => {
  const items = req.body;
  db.collection("homepage")
    .insertMany(items)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: err });
    });
});
