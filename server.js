import express from "express";
const app = express();
import path from "path";
const port = 8080;

app.use(express.static("public"));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
