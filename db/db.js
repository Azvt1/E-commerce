const { MongoClient } = require("mongodb");

let dbConnection;

let uri =
  "mongodb+srv://patrick:Aboka123@cluster0.voew14d.mongodb.net/kaira?retryWrites=true&w=majority";
module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
