class adminReg{
    constructor(name,userid,password,reenterPassword,phone_no,dob,photo,signature){
           this.name = name;
          // if(password==reenterPassword)
           // this.login = {userid ,password};
           this.userid=userid;
           this.password = password;
           this.phone_no=phone_no;
           this.dob=dob;
           this.photo=photo;
           this.signature=signature;

    }
}
module.exports = adminReg;