const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/school", {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "连接失败"));
db.once("open", () => {
  console.log("连接成功");
});
