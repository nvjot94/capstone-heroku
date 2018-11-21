const connection = require("../../connection");
const Schema = connection.Schema;

const clientsSchema = new Schema({
    name: { type: String },
    email: { type: String },
    isEmailVerified:{ type: String},
    password: { type: String, required: true },
 //next line tp be removerd
 confirmPw:{ type: String },
    forgetpasswordcode: { type: String },
    forgotpasswordcodegenerationtime: { type: Date },
    phone: { type: String },
    alternatephone: { type: String },
    dob: { type: Date },
    status: { type: String },
    address: {
        streetaddress: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String },
        zipcode: { type: String },
    },
    cart: [{ productId: String ,subCategory:String}],
    wishlist: [{ productId: String ,subCategory:String}],
    orders: [{ type: String }],
    products: [{ type: String }],
    financialdetails: {
        bankingdetails: {
            accountnumber: { type: String },
            accountholdername: { type: String },
            accounttype: { type: String },
            bankname: { type: String },
            bankbranch: { type: String },
            ifsccode: { type: String }
        },
        carddetails: {
            cardtype: { type: String },
            cardnumber: { type: String },
            cardholdername: { type: String },
            expirydate: { type: Date },
            cvv: { type: String },
            cardprovider: { type: String },
            bankname: { type: String },
            branchname: { type: String }
        }
    }
});
var clientsModel = connection.model("clients", clientsSchema);
module.exports = clientsModel;