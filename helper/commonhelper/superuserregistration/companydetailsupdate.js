let schema = require('../../../db/schema/companydetails/companydetailsSchema');
var bcrypt = require('bcrypt');
function start(object, response, userid, password) {
    // schema.findOne({ 'superuser.email': userid }, { 'superuser.password': password }, (err, data) => {
    //     if (err) {
    //         response.json("Error");
    //     }
    //     else if (data) {
    //         data.companyname = object.companyname;
    //         data.save();
    //         response.json({ result: true });
    //     }
    // });

    schema.findOne({ 'superuser.email': userid }, (err, docs) => {
        if (err) {
            console.log("Some Error");
        }
        else if (docs) {
            console.log("docs inside companydetailsupdate function", docs);
            //docs.imagesurl = carouselimagefilepath;
            //docs.superuser.registered = true;
            console.log(password);
            if (bcrypt.compareSync(password, docs.superuser.password)) {
                console.log("Inside bcrypt compare");
                docs.companyname = object.companyname;

                docs.description = object.description;
                docs.logo = object.logo;

                docs.address = object.address;
                docs.tagline = object.tagline;
                docs.contactdetails = object.contactdetails;
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
    }).and();

}
module.exports = start;