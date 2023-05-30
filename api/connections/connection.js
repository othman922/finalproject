const mongoose = require('mongoose');
require('dotenv').config()

const dateBank=`${process.env.MONGODB_URI}`

mongoose
  .connect(dateBank, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database is connected ");
  })
  .catch((err) => {
    console.log(err);
});

// Models

// require('./Category')
// require('./Recipe')


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://new-user:UaARjiwUgaRyGUjB@cluster0.csopccf.mongodb.net/?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
