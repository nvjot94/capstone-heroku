const connection = require("../../connection");
const Schema = connection.Schema;

const adminSchema = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String, required: true },
    forgetpasswordcode: { type: String },
    empId: { type: String },
    salary: { type: String },
    designation: { type: String },
    forgotpasswordcodegenerationtime: { type: Date },
    phone: { type: String },
    alternatephone: { type: String },
    dob: { type: Date },
    status: { type: String },
    address:{type:String},
    // address:{
    //     streetaddress: { type: String },
    //     city: { type: String },
    //     state: { type: String },
    //     country: { type: String },
    //     zipcode: { type: String },
    // },
    orders: [{ type: String }],
    products: [{ type: String }]
 
});
var adminModel = connection.model("admins", adminSchema);
module.exports = adminModel;