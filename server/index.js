const express = require("express");
const app = express();
const cors = require("cors");
const port = 8081;

console.log(app);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/data", (req, res) => {
  // Handle your API logic here
  res.json({ message: "Hello from Express!" });
});

app.listen(port, () => {
  console.log("server listening on port 8081");
});
