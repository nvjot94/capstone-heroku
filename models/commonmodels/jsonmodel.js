class json {
    constructor() {
        this.errorjson = {
            result: undefined,
            error: "",
            docs: "",
            message: "Some error occured performing db operation",
            data: {},
        };
        this.successjson = {
            result: true,
            error: "",
            docs: "",
            message: "Success performing db operation",
            data: {},
        };
        this.failjson = {
            result: false,
            error: "",
            docs: "",
            message: "Failed performing db operation",
            data: {},
        };

    }
}
module.exports = json;