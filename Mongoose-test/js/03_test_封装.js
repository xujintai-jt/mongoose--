const mongoose = require("mongoose");
//CommonJs模块语法
const { mongooseBaseConfig } = require("../mongoose基础封装/基础封装");

const Schema={
  sex: {
    type: String,
    default: "female",
  },
  age: Number,
  name: String,
}

mongooseBaseConfig('school','student',Schema).find({},"name age -_id",(error,docs) => {
  if (!error) {
    console.log(docs);
  }

});