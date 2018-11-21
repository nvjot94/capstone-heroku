const router = require("express").Router();
const mongoose = require("../../db/connection");
//const model = require("../../db/schema/clients/clientsSchema");
const passport = require("passport");
var jsSHA = require("jssha");



router.post("/payumoney",(req,res)=>
{
    if (!req.body.txnid || !req.body.amount || !req.body.productinfo   
        || !req.body.firstname || !req.body.email) {
          res.send("Mandatory fields missing");
    }
     else {
          var pd = req.body;
          var hashString = "purJ7Ks3" // Merchant Key 
                   + '|' + pd.txnid 
                   + '|' + pd.amount + '|' + pd.productinfo + '|'          
                   + pd.firstname + '|' + pd.email + '|' 
                   + '||||||||||' 
                   + "4rVFzsWLBI" // Your salt value
          var sha = new jsSHA('SHA-512', "TEXT");
          sha.update(hashString);
          var hash = sha.getHash("HEX");
          res.send({ 'hash': hash });
    }
 });

 router.post("/payumoney/response",(req,res)=>
{
    var pd = req.body;
    
    //Generate new Hash 
     var hashString = "4rVFzsWLBI"  + '|'  + '||||||||||' + '|' + pd.email + '|' + pd.firstname + '|' + pd.productinfo + '|' + pd.amount + '|' + pd.txnid + '|' + "purJ7Ks3";
     var sha = new jsSHA('SHA-512', "TEXT");
     sha.update(hashString);
     var hash = sha.getHash("HEX");
     // Verify the new hash with the hash value in response
     if (hash == pd.hash) {
         res.send({'status':"SUCCESS"});
     } else {
         res.send({'status':"Error occured"});
     }
  }
);
module.exports = router;