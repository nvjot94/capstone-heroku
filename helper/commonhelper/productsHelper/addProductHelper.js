const schema = require('../../../db/schema/products/productsSchema');
function start(product, response) {
    try {
        schema.create(product, (err, docs) => {
            console.log("Product to be added is : ", product);
            if (err) {
                console.log("Error adding product ....", err);
                response.json({ result: false, message: "error" });
            }
            else if (docs) {
                console.log("docs is :", docs, "\n", "Product added successfully");
                response.json({ result: true, message: "success", product: docs });

            }
            else {
                console.log("Docs is empty");
                response.json({ result: false, message: "error" });

            }
        });
    }
    catch (Error) {
        console.log("Server error");
    }
}
module.exports = start;