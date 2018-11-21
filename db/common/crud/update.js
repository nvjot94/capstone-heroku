function update(schema, object, condition, andcondition, orcondition, response, jsonObject) {
    console.log("Inside update.....");
    console.log("Object is : ", object);
    console.log("andcondition object is : ", andcondition);
    schema.update(condition, object, function (err, docs) {
        if (err) {
            jsonObject.errorjson.error = err;
            jsonObject.errorjson.docs = docs;
            console.log("Error is ", jsonObject.errorjson);
            if (response.json) {
                response.json(jsonObject.errorjson);
            }
        }
        else if (docs.nModified > 0) {
            jsonObject.successjson.docs = docs;
            jsonObject.successjson.error = err;
            console.log("Successjson is : ", jsonObject.successjson);
            if (response.json) {
                response.json(jsonObject.successjson);
            }
        }
        else {
            console.log("Udates were not done ", object);
            jsonObject.failjson.docs = docs;
            jsonObject.failjson.error = err;
            console.log("FailJson is : ", jsonObject.failjson);
            if (response.json) {
                response.json(jsonObject.failjson);
            }
        }
    }).and(andcondition).or(orcondition);
}
module.exports = update;
