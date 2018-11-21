const connection = require("../../connection");
const Schema = connection.Schema;

const otpSchema = new Schema({
    sessionActivity:{ type: Date, expires: '10m', default: Date.now },
    phone: { type: String },
    otp:{ type: String }
});

const otpModel=connection.model("otpdata", otpSchema);

module.exports=otpModel;