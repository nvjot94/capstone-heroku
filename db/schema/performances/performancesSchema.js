const Schema=connection.Schema;
const performancesSchema= new Schema({
    name:{type:String},
    userid:{type:String},
    password:{type:String},    
    phone_no:{type:String},
    dob:{type:String},
    photo:{type:String},
    signature:{type:String}
    /*name:String,userid:String,password:String,contact_no:String*/
}) ;
var performancesModel=connection.model("performances",performancesSchema);
module.exports=performancesModel;