// import { autoIncrement } from 'mongoose-plugin-autoinc';
const autoIncrement = require("mongoose-plugin-autoinc");

const connection = require("../../connection");
const Schema = connection.Schema;

// autoIncrement = require('mongoose-auto-increment');
// autoIncrement.initialize(connection);

const productsSchema = new Schema({
    //systemproductid: { type: Number, required: true, min: 0, unique: true },

    //customproductid: { type: String, unique: true, default: Date.now().toString() },

    category: { type: String, required: true },
    subcategory: { type: String, required: true },

    averagerating: { type: Number },

    name: { type: String, required: true, unique: true },
    shortdescription: { type: String, required: true },
    description: { type: String, required: true },
    purchaseprice: { type: Number, required: true },
    mrp: { type: Number, required: true },
    sellingprice: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    stock: { type: Number, required: true, default: 0 },
    status: { type: Boolean, required: true, default: true },
    tax: { type: Number, required: true, default: 0 },
    brand: { type: String, default: "null" },
    creationdate: { type: Date, required: true, default: Date.now() },
    modificationdate: { type: Date, required: true, default: Date.now() },
    maximumquantitylimit: { type: Number, required: true, default: 0 },

    variants: [{ type: String }],
    images: [{ type: String }],
    specifications: [
        {
            keyname: { type: String },
            keyvalue: { type: String }
        }
    ],

    reviews: [
        {
            rating: { type: String },
            review: { type: String },
            description: { type: String },
            by: { type: String },
            time: { type: Date }
        },
        {
            rating: { type: String },
            review: { type: String },
            description: { type: String },
            by: { type: String },
            time: { type: Date }
        }
    ],
    faq: [
        {
            question: { type: String },
            by: { type: String },
            time: { type: Date },
            upvote: { type: String },
            downvote: { type: String },
            answers: [
                {
                    by: { type: String },
                    time: { type: Date },
                    description: { type: String }
                }
            ]
        }
    ]
});

productsSchema.plugin(autoIncrement.plugin, { model: 'products', field: 'systemproductid', startAt: 1, incrementBy: 1 });

var productsModel = connection.model("products", productsSchema);
module.exports = productsModel;





