const express = require("express");
const app = express();
const port = 3000;
const app_id = 51352;

//app.use("/static", express.static(path.join(__dirname, "Views")));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/Views/index.html");
});

app.get("/login", function (req, res) {
  res.redirect(
    "https://oauth.deriv.com/oauth2/authorize?app_id=" + app_id + ""
  );
  console.log(req.body);
});

app.listen(port, function (req, res) {
  console.log("Go to port " + port);
});
