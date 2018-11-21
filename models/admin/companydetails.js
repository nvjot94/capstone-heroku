class CompanyDetails{
    constructor(companyname,description,tagline,logo,line1,line2,city,state,country,zipcode,longitude,latitude,phoneno,officeno,emailid,fax){
           this.companyname = companyname;
           this.description=description;
           this.tagline = tagline;
           this.logo=logo;
           this.line1=line1;
           this.line2=line2;
           this.city=city;
           this.state=state;
           this.country=country;
           this.zipcode=zipcode;
           this.longitude=longitude;
           this.latitude=latitude;
           this.phoneno=phoneno;
           this.officeno=officeno;
           this.emailid=emailid;
           this.fax=fax;
    }
}
module.exports = CompanyDetails;
