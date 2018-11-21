const schema = require('../../../db/schema/products/productsSchema');
function start(response) {
    schema.find((err, docs) => {
        if (err) {
            console.log("Some DB Server Error");
            response.json({ result: undefined });

        }
        else if (docs) {
            console.log("Docs is :", docs);
            response.json({ result: true, docs: docs });
        }
        else {
            console.log("Docs is empty");
            response.json({ result: false });
        }
    });
}
module.exports = start;