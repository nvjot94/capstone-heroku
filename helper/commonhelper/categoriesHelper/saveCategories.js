const schema = require('../../../db/schema/categories/categoriesSchema');
function start(categoriesData, response) {
    let objects = [];
    categoriesData.forEach((element) => {
        let obj = {
            category: element.category,
            description: element.desc || "desc",
            imageurl: element.imageurl || "dummypath",
            fields: element.fields,
            subcategories: element.subcategories,
        };
        objects.push(obj);
    });
    schema.find({}, (err, res) => {
        if (err) {
            response.json("Could not update categories");
            console.log("Error inside findOne");
        }
        else if (res) {
            console.log("Res is ", res);
            res[0].categories = objects;
            console.log("Res after updating is ", res[0]);
            schema.findOneAndUpdate({}, res[0], (error, doc, result) => {
                if (error) {
                    console.log("Error inside findOneandUpdate");
                    response.json("Could not update categories");
                }
                else if (doc) {
                    console.log("Successfully updated categories");
                    response.json({ result: true, message: "Success" });
                }
            });
        }
        else {
            console.log("res is empty");
        }
    })
    // let noerror = true;
    // objects.forEach((element, index) => {
    //     console.log("Category is ", element, "index : ", index);
    //     schema.findOne({ 'name': element.category }, (err, res) => {
    //         if (err) {
    //             response.json("Error saving categories");
    //         }
    //         else if (res) {
    //             // res.name = element.category
    //             res.description = element.description;
    //             res.imageurl = element.imageurl;
    //             res.specification = element.specification;
    //             res.subcategory = element.subcategory;
    //             schema.findOneAndUpdate({ 'name': element.category }, element, (error, doc, result) => {
    //                 if (error) {
    //                     response.json("Error saving categories");
    //                     break;
    //                 }
    //                 else if (doc) {
    //                     console.log("Updated category successfully");
    //                     if (objects.length == index + 1) {
    //                         response.json("Categories Update Done ");
    //                     }
    //                 }
    //                 else {
    //                     response.json("Could not update");
    //                 }

    //             });

    //         }
    //         else {
    //             let object = {
    //                 name: element.name,
    //                 description: element.description,
    //                 imageurl: element.imageurl,
    //                 specification: element.specification,
    //                 subcategory: element.subcategory
    //             }
    //             schema.create(object, (err, res) => {
    //                 if (err) {
    //                     response.json("Error saving categories");
    //                 }
    //                 else if (res) {
    //                     console.log("Created new category successfully");
    //                     if (objects.length == index + 1) {
    //                         response.json("Categories Update Done ");
    //                     }
    //                 }
    //             });
    //         }
    //     });
    // });
    console.log();
}
module.exports = start;