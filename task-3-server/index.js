const express = require("express");
const app = express();
const cors = require("cors");
const { default: axios } = require("axios");
app.use(express.json());

app.use(cors());

app.get("/api/getData/:number", async (req, res) => {
  try {
    let mobileNumber = req.params.number;
    console.log(mobileNumber);
    const postData = { phonenumber: mobileNumber };
    let data = await axios.post("https://chimpu.xyz/api/post.php", postData);
    return res.status(200).send({ data: data.headers });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.listen(4000, () => {
  console.log("server started in port " + 4000);
});
