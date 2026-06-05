

const { mongo, default: mongoose } = require("mongoose");
const app = require("./src/app");
const connectDB = require('./src/db/db');

connectDB();


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is listening on port 4000");
});
