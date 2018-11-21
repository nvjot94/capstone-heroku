const companyDetailsSchema = require("../../../db/schema/companydetails/companydetailsSchema");
//const companyDetailsModel = require("../../../models/companydetailsmodel/companyDetails");
const find = require("../../../db/common/crud/find");
const json = require('../../../models/commonmodels/jsonmodel');

//let object = new companyDetailsModel();

function start(response) {
    let andcondition = [{ 'superuser.registered': true }];
    let orcondition = [{}];
    let jsonObject = new json();
    jsonObject.failjson.message = "Website is Unregistered or registered status is false";
    jsonObject.successjson.message = "Website or companydetails or superuser is already registered can't register again...";

    jsonObject.failjson.data.redirectpath = '/views/superuserregistration/demo.html';
    console.log("will make db call now");
    find(companyDetailsSchema, { 'superuser.registered': true }, andcondition, orcondition, response, jsonObject);
}
module.exports = start;
