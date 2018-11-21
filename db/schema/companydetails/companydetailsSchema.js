const connection = require("../../connection");
const Schema = connection.Schema;
const companydetailsSchema = new Schema(
    {
        // companyname: {type:String,required :true},
        singledocument: { type: Boolean, default: true, required: true, unique: true },
        companyname: { type: String },
        description: { type: String },
        logo: { type: String },
        imagesurl: [{ type: String }],
        address: {
            streetaddress: { type: String },
            city: { type: String },
            state: { type: String },
            country: { type: String },
            zipcode: { type: String },
            maplink: { type: String },
            latitude: { type: String },
            longitude: { type: String },
        },
        contactdetails: {
            // mobile: [ {type:String,required:true} ],
            mobile: [{ type: String }],
            office: [{ type: String }],
            fax: [{ type: String }],
            email: [{ type: String }]
        },
        tagline: { type: String },
        superuser: {
            name: { type: String, required: true },
            phone: { type: String, required: true },
            email: { type: String, required: true, unique: true },
            password: { type: String, required: true },
            dateofbirth: { type: String },
            registered: { type: Boolean, required: true, default: false }
        },
        financialdetails: {
            accountnumber: { type: String },
            accounttype: { type: String },
            holdername: { type: String },
            bankname: { type: String },
            branchname: { type: String },
            ifsccode: { type: String }
        },
        carddetails: {
            cardtype: { type: String },
            cardno: { type: String },
            holdername: { type: String },
            expirydate: { type: String },
            cvv: { type: String },
            cardprovider: { type: String },
            bankname: { type: String },
            branchname: { type: String },
            ifsccode: { type: String }
        }
    });
var companydetailsModel = connection.model("companydetails", companydetailsSchema);
module.exports = companydetailsModel;