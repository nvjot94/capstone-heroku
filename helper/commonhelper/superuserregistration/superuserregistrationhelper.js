const schema = require("../../../db/schema/companydetails/companydetailsSchema");
const update = require('../../../db/common/crud/update');
const json = require("./../../../models/commonmodels/jsonmodel");

function start(companydetailsObject, registrationuserid, oldpassword, response) {
    let superusersettercondition = {};
    let superusersetterandcondition = [{ 'superuser.email': registrationuserid }, { 'superuser.registered': false }, { 'superuser.password': oldpassword }];
    let superusersetterorcondition = [{}];

    let jsonObject = new json();

    jsonObject.successjson.message = "User Registered Successfully";
    jsonObject.failjson.message = "Error Registering User";

    update(schema, companydetailsObject, superusersettercondition, superusersetterandcondition, superusersetterorcondition, response, jsonObject);
}
module.exports = start;