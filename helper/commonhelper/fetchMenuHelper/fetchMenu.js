const categoriesSchema = require("../../../db/schema/categories/categoriesSchema");
const json = require('../../../models/commonmodels/jsonmodel');
const find = require("../../../db/common/crud/find");

function fetchMenu() {
    console.log("Inside Fetch companydetails method");
    let jsonObject = new json();
    find(categoriesSchema, {}, {}, {}, {}, jsonObject);
}
module.exports = fetchMenu;