// Promise = require('bluebird')
// function start(){
//     return new Promise(function (resolve, reject) {
//         //code
//         resolve(result);
//     });
// }

Promise = require('bluebird')


function start(schema, object, response, jsonObject) {
    return new Promise(function (resolve, reject) {//code added for bluebird
        schema.create(object, function (err, docs) {
            console.log("object is : ");
            console.log(object);
            if (err) {
                jsonObject.errorjson.error = err;
                jsonObject.errorjson.docs = docs;
                console.log("ErrorJson is : ");
                console.log(jsonObject.errorjson);
                if (response.json)
                    response.json(jsonObject.errorjson);
            }
            else {
                jsonObject.successjson.error = err;
                jsonObject.successjson.docs = docs;
                console.log("SuccessJson is : ");
                console.log(jsonObject.successjson);
                if (response.json)
                    response.json(jsonObject.successjson);
            }
        });
        resolve();//code added for bluebird
    });//code added for bluebird
}
module.exports = start;