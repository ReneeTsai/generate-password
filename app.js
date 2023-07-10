const express = require("express");
const app = express();
const port = 3000;
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const generatePassword = require("./generate_password");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//app.use規定不管從哪個路由發送請求，都要先經過 app.use
app.use(bodyParser.urlencoded({ extended: true }));
//---------------------------------------------------------------------
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/", (req, res) => {
  const options = req.body;
  const password = generatePassword(options);
  res.render("index", { password: password, options: options });
  console.log(options);
});

app.listen(port, () => {
  console.log(`The express server is running on localhost:${port}`);
});
