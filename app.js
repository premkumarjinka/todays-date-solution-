const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const val = new Date();
  const result = `${val.getDate()}-${val.getMonth() + 1}-${val.getFullYear()}`;

  response.send(result);
});
app.listen(3000);

module.exports = app;
