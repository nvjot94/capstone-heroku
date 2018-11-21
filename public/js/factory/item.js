class item {
    constructor(obj) {

        console.log("Inside item.js with object : ", obj);

        for (let key in obj) {
            this[key] = obj[key];
        }

    }
}