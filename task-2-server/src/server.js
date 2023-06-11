const express = require("express");
const cors = require("cors");
const route  = require('./routes/router')
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}))

app.use('/api', route)



app.listen(process.env.PORT, () => {
  console.log(`server is started in port ${process.env.PORT}`);
});
