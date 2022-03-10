const app = require("./index");
const connect = require("./Config/db");
require("dotenv").config();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.listen(port, async () => {
  console.log(`Server listening on ${port}`);
  await connect();
});
