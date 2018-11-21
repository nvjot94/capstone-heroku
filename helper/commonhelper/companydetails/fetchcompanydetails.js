const companyDetailsSchema = require("../../../db/schema/companydetails/companydetailsSchema");
const json = require('../../../models/commonmodels/jsonmodel');
const find = require("../../../db/common/crud/find");

// function fetchCompanyDetails() {
//     console.log("Inside Fetch companydetails method");
//     let jsonObject = new json();
//     find(companyDetailsSchema, {}, {}, {}, {}, jsonObject);
// }
function fetchCompanyDetails(response) {
    console.log("Inside Fetch companydetails method");
    let jsonObject = new json();
    find(companyDetailsSchema, {}, {}, {}, response, jsonObject);
}
module.exports = fetchCompanyDetails;