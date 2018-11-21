app.factory("myfactory", function ($http, $q) {
    const productOperations = {
        userList: [],
        productList: [],

        add(itemproduct) {
            this.productList.push(itemproduct);
        },
        postAjaxCall(url, obj) {
            console.log("inside ajax call admin object is ");
            //console.log(obj);
            var deferObject = $q.defer();
            $http.post(url, obj).then(function (data) {
                deferObject.resolve(data);
            },
                function (error) {
                    deferObject.reject(error);

                });
            return deferObject.promise;
        }
    };
    return productOperations;
})