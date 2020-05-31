const express = require('express');
const cors = require('cors');
const mongoose =  require('mongoose');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json({limit:'50mb'});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(jsonParser);

const uri = "mongodb+srv://heads:heads@cluster0-v6kuo.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port,()=>{
    console.log(`listening on port : ${port}`);
});