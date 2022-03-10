const app = require("./src/index");
const connect = require("./src/Config/db");
require("dotenv").config();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.listen(port, async () => {
  console.log(`Server listening on ${port}`);
  await connect();
});
