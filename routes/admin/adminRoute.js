const express = require("express");
const mongoose = require("../../db/connection");
const otpModel=require("../../db/schema/clients/otpSave");
const model = require("../../db/schema/clients/clientsSchema");
const adminModel = require("../../db/schema/clients/adminschema");
const passport = require("passport");
var jsSHA = require("jssha");
const companydetailsmodel = require("../../models/companydetailsModel/companydetails");
var bcrypt = require('bcrypt');
var router = express.Router();
const config = require('../../db/config');
const imageUploadMethod = require('./../../helper/commonhelper/imageupload/imageUploadHelper');
const querystring = require('querystring');
const configuration = require("./../../db/config");
let serverpath = configuration.serverurl;




//index routes navjot  
// ********************************************************************************************************************
// ********************************************************************************************************************
// ********************************************************************************************************************
// ********************************************************************************************************************
router.post("/addtocart", (req, res) => {

    console.log("m here in cart POST");
    if (req.isAuthenticated()) {

        let obj ={productId: req.body.productId,subCategory:req.body.subCategory};

        console.log("m here in cart POST",obj,req.user);
        model.findOne({
            _id: req.user
        }, (err, data) => {
            if (err) {
                console.log(err);
            } else if (data) {
                let length=  data.cart.filter((element)=>
              {
                 return element.productId==req.body.productId;
              }).length;
              if(length==0)
              {
                   // console.log("22222222222222222222",data);
                   data.cart = [...data.cart, obj];
                   data.save();
              }
                 
  
              }
        });

    } else

        res.send("please login to add to cart");

});
router.post("/addtofav", (req, res) => {

    console.log("m here in fav POST",req.body);
    if (req.isAuthenticated()) {

        let obj ={productId: req.body.productId,subCategory:req.body.subCategory};

        // console.log("m here in cart POST",obj,req.user);
        model.findOne({
            _id: req.user
        }, (err, data) => {
            if (err) {
                console.log(err);
            } else if (data) {
              let length=  data.wishlist.filter((element)=>
            {
               return element.productId==req.body.productId;
            }).length;
            if(length==0)
            {
                 // console.log("22222222222222222222",data);
                 data.wishlist = [...data.wishlist, obj];
                 data.save();
            }
               

            }
        });

    } else

        res.json({ msg: "please login to add to wishlist" });

});

router.post("/deleteProduct",(req,res)=>
{
    if(req.isAuthenticated())
    {
        model.findOne({_id:req.user},(err,data)=>
    {
        if (err) {
            console.log(err)
        } else if (data) 
        {
            if(req.body.deleteFrom=="wishlist")
            {
                data.wishlist=data.wishlist.filter(element=>
                    {
                        console.log("......wish.......");
                      return  element.productId!=req.body.productId;
                });
                data.save();
            }
           else if(req.body.deleteFrom=="cart")
            {
                data.cart=data.cart.filter(element=>
                    {
                        console.log(".............");
                      return  element.productId!=req.body.productId;
                });
                data.save();
            }
        }
    })
    }
});
router.get("/cartdata", (req, res) => {

    if (req.isAuthenticated()) {

        model.findOne({
            _id: req.user
        }, (err, data) => {

            if (err) {
                console.log(err)
            } else if (data) {
                if (data.cart.length == 0) {
                    res.json({
                        text: "Your Cart is Empty",
                        imageUrl: "https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/empty-cart_ee6141.png  "
                    })
                } else
                    res.json(data.cart);
            }

        })
    } else {
        console.log(req.isAuthenticated());
        res.json({
            text: "Your cart is Empty",
            imageUrl: "https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/empty-cart_ee6141.png  "
        });
    }
});
router.post("/signup", (req, res) => {
    console.log("i go her at signup", req.body);
    let clients = {
        "phone": req.body.mobilenumber,
        "name": req.body.username,
        "password": bcrypt.hashSync(req.body.password, 10),
        "confirmPw": req.body.pwagain
    };
    if (clients.phone && clients.name && clients.confirmPw && clients.password) {
        model.create(clients, (err) => {
            if (err)
                console.log("ERROR IS", err);
        });

        res.json({status:true});
    } else {
        res.json({msg:"some credential is wrong/empty"});
    }
});



router.post("/login", (req, res) => {

    if (req.body.mobilenumber && req.body.password) {
        model.findOne({
            phone: req.body.mobilenumber
        }, (err, data) => {
            if (err)
                console.log(err);

            else if (!data) {
                adminModel.findOne({
                    phone: req.body.mobilenumber
                }, (err, data) => {
                    if (err)
                        console.log(err);

                    else if (!data) {
                        res.json({ msg: "Username Or password is wrong" });
                    }
                    else if (data.length != 0) {
                        //  console.log("data is", data);

                        if (bcrypt.compareSync(req.body.password, data.password)) {

                            var userId = data._id;
                            req.login(userId, (err) => {
                                res.json({
                                    uservalid: req.isAuthenticated(),
                                    role: "admin"
                                });

                            });

                        }
                        else
                            res.json({ "pw": "password doesnot match" })
                    }


                });
            }
            else if (data.length != 0) {
                if (bcrypt.compareSync(req.body.password, data.password)) {
                    var userId = data._id;
                    req.login(userId, (err) => {
                        res.send({
                            uservalid: req.isAuthenticated(),
                            role: "client"
                        });
                    });

                }
                else
                    res.json({ "pw": "password doesnot match" })
            }


        });



    }

});


router.get("/logout", (req, res) => {
    if (req.isAuthenticated()) {
        req.logout();
        req.session.destroy();

        res.send({
            uservalid: req.isAuthenticated()
        });
    } else {
        res.send({
            uservalid: req.isAuthenticated()
        });
    }
});

router.post("/checkotp", (request, response) => {
    const SendOtp = require('sendotp');
    const sendOtp = new SendOtp(config.authKey);
    if (request.body.number) {
        let generatedOtp = Math.floor(Math.random() * 100000 + Math.random());
        sendOtp.send("+1" + request.body.number, "PRIIND", generatedOtp, function (error, data, response) {
            //save code to db;
            console.log("heeeeeey111",data);
       if(data.type=='success')
            {
                otpModel.create({phone:request.body.number,otp:generatedOtp},(err)=>
            {
                if(err)
                console.log(err);
            })
            }
            else if (error)
             console.log(error);
        });


        //mailing code
        // var nodemailer = require('nodemailer');
        // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        // var transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     secure: false,
        //     port: 25,
        //     auth: {
        //         user: config.id,
        //         pass: config.pw,
        //         tls: {
        //             rejectUnauthorised: false
        //         }
        //     }
        // });

        // let mailOptions = {
        //     from: config.id,
        //     to: request.body.number, // list of receivers
        //     subject: 'Passqord change email', // Subject line
        //     text: "ONE TIME PASSWORD IS : " + generatedOtp // plain text body
        //     // html body
        // };


        // transporter.sendMail(mailOptions, function (error, info) {
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         console.log('Email sent: ' + info.response);
        //     }
        // });
        //mailing code
    }
});

router.post("/isotpsame",function(req,res)
{
    console.log("i m in here");
    otpModel.findOne({phone:req.body.mobilenumber},(err,data)=>
{   if(err)
    console.log(err);

    else if(data)
    {
        console.log("i m in here at data");
        if(data.otp==req.body.otp)
        {
            res.json({status:true});
        }
        else
        res.json({status:false});
    }

});
});

passport.serializeUser(function (userId, done) {

    done(null, userId);
});
passport.deserializeUser(function (userId, done) {
    done(null, userId);
});



//********************************************************************************************************************
//admindashboard routes
router.post("/signupadmin", (req, res) => {
    console.log("i go her at signupAdmin", req.body);
    let clients = {
        "name": req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync("123", 10),
        empId: req.body.empId,
        designation: req.body.designation,
        salary: req.body.salary,
        phone: req.body.phone,
        address: req.body.address,
        status: req.body.status
    };
    console.log("heyyy", clients);
    if (clients.phone && clients.name && clients.password && clients.empId && clients.designation && clients.salary && clients.address && clients.status) {
        adminModel.create(clients, (err) => {
            if (err)
                console.log("ERROR IS", err);
        });
        res.json("User is added");
    } else {
        res.json("some credential is wrong/empty");
    }
});

router.get("/getadmins", (req, res) => {
    console.log("in get admins");
    adminModel.find({}, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(data);
            res.send(data);

        }

    })
});

router.post("/deleteadmin", (req, res) => {
    console.log(req.body.empId);
    adminModel.findOneAndRemove({
        empId: req.body.empId
    }, (err, res) => {
        if (err) {
            console.log(err);
        }

    })
});

router.post("/checkexistence", (req, response) => {

    model.findOne({
        phone: req.body.mobilenumber
    }, (err, res) => {
        if (err) {
            console.log(err);
        } else if (res) {
            response.json({
                "status": "true"
            })
        } else if (!res) {
            adminModel.findOne({
                phone: req.body.mobilenumber
            }, (error, resp) => {
                if (err) {
                    console.log(error);
                } else if (resp) {
                    response.json({
                        "status": "true"
                    });
                } else (!resp)
                {
                    console.log("qwerty");
                    response.json({
                        "status": "false"
                    });
                }
            });
        }



    })
});

router.post("/changepw",(req,res)=>
{
    console.log("im here 1");
    model.findOne({phone:req.body.mobilenumber},(err,data)=>
{
if(err)
console.log(err);

else if(data)
{
    console.log("im here 1");
    data.password=bcrypt.hashSync(req.body.password, 10);
    data.save();
    res.json({status:true});
}
else
res.json({status:true})
});
})






module.exports = router;
