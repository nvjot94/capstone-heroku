// function findfunction(schema, object, andcondition, response, errorjson, failjson, successjson) {
function findfunction(schema, object, andcondition, orcondition, response, jsonObject) {
    schema.find(object, (error, docs) => {
        console.log("Inside Find Method");
        console.log("Object is : ", object);
        console.log("and condition is : ", andcondition);
        if (error) {
            //console.log("error is : " + error);
            // errorjson.result = undefined;
            jsonObject.errorjson.error = error;
            jsonObject.errorjson.docs = docs;
            console.log("Error json is :");
            console.log(jsonObject.errorjson);
            if (response.json) {
                // response.json(errorjson);
                response.json(jsonObject.errorjson);
            }
        }
        else {
            console.log("docs is : ");
            console.log(docs);
            if (docs.length == 0) {
                // jsonObject.failjson.result = false;
                jsonObject.failjson.error = error;
                jsonObject.failjson.docs = docs;
                console.log("Fail json is :");
                console.log(jsonObject.failjson);
                if (response.json) {
                    // response.json({ redirectpath: '/register.html' });
                    response.json(jsonObject.failjson);
                }
            }
            else {
                if (docs.length >= 1) {
                    // successjson.result = true;
                    jsonObject.successjson.error = error;
                    jsonObject.successjson.docs = docs;
                    console.log("Success json is :");
                    console.log(jsonObject.successjson);
                    if (response.json) {
                        // response.json("Website/companydetails/superuser is already registered can't register again...");
                        response.json(jsonObject.successjson);
                    }
                }
            }
        }
    }).and(andcondition).or(orcondition);
}
module.exports = findfunction;