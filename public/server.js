const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.status("server/public"));

app.listen(PORT, function() {
  console.log(`listening on ${PORT}`);
});
