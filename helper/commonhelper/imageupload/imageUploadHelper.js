function imageUpload(router, serverpath, req, res, imagepath) {
    router.use(function (req, res, next) {
        // res.header("Access-Control-Allow-Origin", "http://localhost:1234");
        res.header("Access-Control-Allow-Origin", serverpath);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });


    var multer = require('multer');
    var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            // cb(null, './public/uploads/')
            cb(null, imagepath)
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
        }
    });


    var upload = multer({ //multer settings
        storage: storage
    }).single('file');

    upload(req, res, function (err) {
        if (err) {
            res.json({ error_code: 1, err_desc: err });
            return;
        }
        //entry of image path in db....
        console.log("image name and path is : ", res.req.file);

        res.json({ error_code: 0, err_desc: null, uploadpath: res.req.file.destination.slice(8) + res.req.file.filename });
    });
}
module.exports = imageUpload;