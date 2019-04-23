const config = require('./mongo-config.json')
const MongoClient = require('mongodb').MongoClient;

const uri = config.mongo.uri;
MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("planetb").collection("exoplanets");

   var stream = collection.find({}).stream();
   stream.on("data", function(item) {
       console.log(item);
   });
   stream.on("end", function() {
       client.close();
   });
});