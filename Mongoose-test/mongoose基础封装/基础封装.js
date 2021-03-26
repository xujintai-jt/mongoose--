
//commonJS方法
const mongoose = require("mongoose");

function mongooseBaseConfig(DataBaseName, collectName, options,) {
  mongoose.connect(`mongodb://localhost/${DataBaseName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "连接失败"));
  db.once("open", () => {
    console.log("连接成功");
  });

  const stuSchema = new mongoose.Schema(options);
  const StuModel = mongoose.model(collectName, stuSchema);
  return StuModel
}


module.exports = {
  mongooseBaseConfig
}
