
//{ "_id": "5a76af878c649c32dcc54687", "adminid": "", "name": "", "dateofbirth": "", "dateofjoining": "", "nickname": "", "designation": "", "email": "", "password": "", "forgotpasswordcode": "", "forgotpasswordcodegenerationtime": "1999-12-31T18:30:00.000Z", "phone": ["phone1", "phone2"], "status": "", "salary": "", "photo": "", "orders": ["orderid1", "orderid2", "orderid3"], "sales": { "weekly": "", "monthly": "", "quarterly": "", "annually": "", "totalsales": "" } }
const admindetailsschema = new Schema({

    adminid: { type: String, required: true },
    name: { type: String, required: true },
    dateofbirth: { type: Date, required: true },
    dateofjoining: { type: Date, required: true },
    nickname: { type: String },
    designation: { type: String, required: true },
    email: { type: String, required: true, unquie: true },
    password: { type: String, required: true },
    forgotpasswordcode: { type: Date },
    forgotpasswordcodegenerationtime: { type: Date },
    phone: [{ type: String, required: true }],
    status: { type: String, required: true },
    salary: { type: String, required: true },
    photo: { type: String, required: true },
    orders: [{ type: String, required: true }],
    sales: {
        weekly: { type: String },
        monthly: { type: String },
        quarterly: { type: String },
        annually: { type: String },
        totalsales: { type: String, required: true }
    }

})