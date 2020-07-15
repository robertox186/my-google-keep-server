const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/googleKeep',


{

  useMongoClient:true
});
