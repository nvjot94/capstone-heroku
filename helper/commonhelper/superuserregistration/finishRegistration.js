const schema = require('../../../db/schema/companydetails/companydetailsSchema');
function start(response, userid, password, carouselimagefilepath) {
    schema.findOne({ 'superuser.email': userid }, (err, docs) => {
        if (err) {
            console.log("Some Error");
        }
        else if (docs) {
            console.log("docs inside finshRegistration function", docs);
            docs.imagesurl = carouselimagefilepath;
            docs.superuser.registered = true;
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
            }).and({ 'superuser.password': password });
        }
    }).and();
}
module.exports = start;