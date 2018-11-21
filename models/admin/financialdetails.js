class FinancialDetails{
    constructor(accountno,accounttype,holdername,bankname,branch,ifsc){
        this.accountno=accountno;
        this.accounttype=accounttype;
        this.holdername=holdername;
        this.bankname=bankname;
        this.branch=branch;
        this.ifsc=ifsc;
    }
}
module.exports=FinancialDetails;