//const superuser = require("../companydetailsmodel/SuperUser");
class companydetails {
    superusersetter(name1, email1, password1, phone1, dateofbirth1, registered1) {
        this.superuser = {
            dateofbirth: dateofbirth1,
            registered: registered1,
            name: name1,
            phone: phone1,
            email: email1,
            password: password1,
            singledocument: true
        }
    }
    appInit(email1, password1) {
        this.superuser = {
            dateofbirth: "default",
            registered: false,
            name: "default",
            phone: "default",
            email: email1,
            password: password1
        }
    }
    setCompanyDetails(companyname, description, tagline, logo, line1, city, state, country, zipcode, maplink, longitude, latitude, phoneno, officeno, emailid, fax) {
        this.companyname = companyname;
        this.description = description;
        this.tagline = tagline;
        this.logo = logo;
        this.address = {
            streetaddress: line1,
            city: city,
            state: state,
            country: country,
            zipcode: zipcode,
            maplink: maplink,
            longitude: longitude,
            latitude: latitude,
        }
        this.contactdetails = {
            mobile: phoneno,
            office: officeno,
            email: emailid,
            fax: fax,
        }
    }
    setFinancialDetails(accountno, accounttype, holdername, bankname, branch, ifsc) {
        this.financialdetails = {
            accountnumber: accountno,
            accounttype: accounttype,
            holdername: holdername,
            bankname: bankname,
            branchname: branch,
            ifsccode: ifsc,
        }
    }
    setCardDetails(cardno, cardholdername, cvv, cardtype, expirydate, cardprovider, bank, branch, ifsc) {
        this.carddetails = {
            cardtype: cardtype,
            cardno: cardno,
            holdername: cardholdername,
            expirydate: expirydate,
            cvv: cvv,
            cardprovider: cardprovider,
            bankname: bank,
            branchname: branch,
            ifsccode: ifsc,
        }

    }
}
module.exports = companydetails;








// class companydetails{
//     superusersetter(name1,email1,password1,phone1,dateofbirth1){
//         this.superuser={
//         registered:true,
//          name: name1,
//          phone:phone1,
//          email: email1,
//          password: password1,
//          dateofbirth:dateofbirth1
//         };
//     }
//  }
 // class CompanyDetails{
//     constructor(companyname,description,tagline,logo,address,line1,city,state,country,zipcode,longitude,latitude,phoneno,officeno,emailid,fax){
//            this.companyname = companyname;
//            this.description=description;
//            this.tagline = tagline;
//            this.logo=logo;
//            this.address=address;
//            this.line1=line1;
//            this.city=city;
//            this.state=state;
//            this.country=country;
//            this.zipcode=zipcode;
//            this.longitude=longitude;
//            this.latitude=latitude;
//            this.phoneno=phoneno;
//            this.officeno=officeno;
//            this.emailid=emailid;
//            this.fax=fax;
//     }
// }
// class FinancialDetails{
//     constructor(accountno,accounttype,holdername,bankname,branch,ifsc){
//         this.accountno=accountno;
//         this.accounttype=accounttype;
//         this.holdername=holdername;
//         this.bankname=bankname;
//         this.branch=branch;
//         this.ifsc=ifsc;
//     }
// }

// class Imageupload{
//     constructor(carouselimage){
//         this.carouselimage=carouselimage;
//     }
// }
// class CardDetails{
//     constructor(cardno,cardholdername,cvv,cardtype,expirydate,cardprovider,bank,branch){
//         this.cardno=cardno;
//         this.cardholdername=cardholdername;
//         this.cvv=cvv;
//         this.cardtype=cardtype;
//         this.expirydate=expirydate;
//         this.cardprovider=cardprovider;
//         this.bank=bank;
//         this.branch=branch;
//     }
// }
// module.exports=CardDetails;
// module.exports = CompanyDetails;
// module.exports=Imageupload;
// module.exports=FinancialDetails;

// module.exports = companydetails;
