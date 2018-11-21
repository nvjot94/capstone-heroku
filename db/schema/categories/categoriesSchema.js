const connection = require("../../connection");
const Schema = connection.Schema;

const categoriesSchema = new Schema(
    {
        singedocument: { type: Boolean, required: true, unique: true, default: true },
        categories: [
            {
                category: { type: String, required: true, unique: true },
                description: { type: String },
                imageurl: { type: String },
                fields:
                    [
                        {
                            field: { type: String },
                            keyvalue: { type: String }
                        }
                    ],
                subcategories:
                    [
                        {
                            // name: { type: String, required: true },
                            // name: { type: String },
                            subcategory: { type: String },
                            // description: { type: String, required: true },
                            description: { type: String },
                            imageurl: { type: String },
                            // specification:
                            sets:
                                [
                                    {
                                        // keyname: { type: String },
                                        field: { type: String },
                                        keyvalue: { type: String }
                                    }
                                ]
                        }
                    ]
            }
        ]
    }
);
var categoriesModel = connection.model("categories", categoriesSchema);
module.exports = categoriesModel;