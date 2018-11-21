const companyDetailsSchema = require("../../../db/schema/companydetails/companydetailsSchema");
const categoriesSchema = require("../../../db/schema/categories/categoriesSchema");
const companyDetailsModel = require("../../../models/companydetailsmodel/companyDetails");
const configuration = require("./../../../db/config");
const create = require("../../../db/common/crud/create");
const json = require('../../../models/commonmodels/jsonmodel');


function start() {
    let object = new companyDetailsModel();
    object.superusersetter("default", configuration.defaultsuperuserid, configuration.defaultsuperuserpassword, "default", "default", false);

    let jsonObject = new json();
    jsonObject.errorjson.message = "error initializing app";
    jsonObject.successjson.message = "success initializing app";

    create(companyDetailsSchema, object, {}, jsonObject);

    categoriesSchema.create({}, (err, res) => {
        if (err) {
            console.log("Some error initializing categories ");
        }
        else if (res) {
            console.log("Success initializing categories ");
        }
        else {
            console.log("res is empty");
        }
    });



}

module.exports = start;