var mongoose=require("mongoose");

var config=require("./config");

mongoose.connect(config.dburl);

module.exports=mongoose;