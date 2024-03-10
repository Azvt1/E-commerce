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

app.get("/kaira/footer", (req, res) => {
  db.collection("homepage")
    .find({ type: "footer" })
    .toArray()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Could not fetch information about complements" });
    });
});

app.get("/kaira/complements", (req, res) => {
  db.collection("homepage")
    .find({ type: "complements" })
    .toArray()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Could not fetch information about complements" });
    });
});

app.get("/kaira/shopItems", (req, res) => {
  db.collection("shopItems")
    .find()
    .toArray()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Could not fetch information about complements" });
    });
});

app.get("/kaira/shopItems/colors", (req, res) => {
  db.collection("shopItems")
    .distinct("color")
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Could not fetch information about colors" });
    });
});

app.get("/kaira/shopItems/sizes", (req, res) => {
  db.collection("shopItems")
    .distinct("size")
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Could not fetch information about colors" });
    });
});
app.get("/kaira/shopItems/filteredItems", (req, res) => {
  db.collection("shopItems")
    .find({ size: "X" })
    .toArray()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "Could not fetch information about colors" });
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

app.post("/kaira/insertShopItems", (req, res) => {
  const items = req.body;
  db.collection("shopItems")
    .insertMany(items)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: err });
    });
});

// put requests

app.put("/kaira/updateShopItems", (req, res) => {
  const updateData = req.body.updateData;
  const filter = req.body.filter;

  db.collection("shopItems")
    .updateMany(filter, { $rename: updateData })
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      res.status(500).json({ err: err });
      console.err("Couldn't update", err);
    });
});

app.put("/kaira/addAttributeShopitems", (req, res) => {
  const updateData = req.body.size;
  const filter = req.body.filter;
  db.collection("shopItems")
    .updateOne(filter, { $set: { size: updateData } })
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      res.status(500).json({ err: err });
      console.err("Couldn't insert a property", err);
    });
});

// delete requests

app.delete("/kaira/removeAttributeByPrice", (req, res) => {
  const itemPrice = 95;
  db.collection("shopItems")
    .updateOne({ price: itemPrice }, { $unset: { updateData: "" } })
    .then((result) => {
      res
        .status(200)
        .json({ message: "Property deleted successfully", result: result });
    })
    .catch((err) => {
      res.status(500).json({ error: "Couldn't delete property", err: err });
      console.error("Couldn't delete property", err);
    });
});
