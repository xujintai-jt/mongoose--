const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/school", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "连接失败"));
db.once("open", () => {
  console.log("连接成功");
});

// 创建Schema约束：约束文档
const stuSchema = new mongoose.Schema({
  sex: {
    type: String,
    default: "female",
  },
  age: Number,
  name: String,
});
//根据Schema创建Model(集合)
//mongoose.model(modelName,schema)
//modelName: 需要映射的集合名称，schema：约束
const StuModel = mongoose.model("student", stuSchema); //Model:用于向集合中创建Schema规范的文档
// StuModel.create({ sex:"male", age: 18, name: '路飞' }, (error,doc) => {
//   if (!error) {
//     console.log("数据插入成功！");
//   }
//   console.log(doc);
// });

StuModel.find({},"name age -_id",(error,docs) => {
  if (!error) {
    console.log(docs);
  }

});