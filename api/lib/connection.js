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
