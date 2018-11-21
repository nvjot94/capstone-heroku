let schema = require('../../../db/schema/companydetails/companydetailsSchema');
var bcrypt = require('bcrypt');
function start(response, financialdetailsobject, userid, password) {
    console.log("Inside start");
    schema.findOne({ 'superuser.email': userid }, (err, docs) => {
        if (err) {
            console.log("Some Error");
        }
        else if (docs) {
            console.log("docs inside financialdetailsupdate function", docs);
            //docs.imagesurl = carouselimagefilepath;
            //docs.superuser.registered = true;
            console.log(password);
            if (bcrypt.compareSync(password, docs.superuser.password)) {
                console.log("Inside bcrypt compare");
                // docs.companyname = object.companyname;

                // docs.description = object.description;
                // docs.logo = object.logo;

                // docs.address = object.address;
                // docs.tagline = object.tagline;
                // docs.contactdetails = object.contactdetails;
                docs.financialdetails = financialdetailsobject.financialdetails;
                console.log("docs after changes", docs);
                schema.findOneAndUpdate({ 'superuser.email': userid }, docs, (err, doc, res) => {
                    if (err) {
                        console.log("Some problem");
                    }
                    else if (doc) {
                        console.log("Docs and res is ", doc, "dfghjkl", res);
                        response.json({ result: true });
                    }
                    else {
                        console.log("did not execute");
                    }
                }).and();
            }
        }
        else {
            console.log("Docs is empty");
        }
    }).and();


}
module.exports = start;