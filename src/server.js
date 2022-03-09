const app = require("./index");
const connect = require("./Config/db");
require("dotenv").config();
let port = process.env.PORT;

app.listen(port, async () => {
  console.log(`Server listening on ${port}`);
  await connect();
});
