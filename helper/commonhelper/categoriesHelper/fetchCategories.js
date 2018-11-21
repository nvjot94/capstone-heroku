const schema = require('../../../db/schema/categories/categoriesSchema');
function start(response) {
    schema.find({}, (err, res) => {
        if (err) {
            response.json("Could not update categories inside fetchCategories");
            console.log("Error inside findOne inside fetchCategories");
        }
        else if (res) {
            console.log("Res inside fetchCategories is ", res);
            console.log("Categories inside fetchCategories actual is ", res[0]);
            response.json({ result: true, message: "Success", categoriesjson: res[0] });
        }
        else {
            console.log("res is empty inside fetchCategories");
        }
    });
}
module.exports = start;