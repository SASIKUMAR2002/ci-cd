const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Deployment testi 1 Successful 🚀");
});

app.listen(3000, () => console.log("Server running"));

