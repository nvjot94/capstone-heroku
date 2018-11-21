app.factory("indexFactory", function ($http, $q) {

    const object = {
        cart: [],
        redirectToRegister(path) {
            console.log("inside redirectToRegister");
            window.location.href = path;
        },

        uploadImage() {
            console.log("will upload image in factory");
        },
         genOtp(url,obj)
        {

          return this.postAjaxCall(url,obj);
           
        },
        verifyOtp(url,obj)
        {

         return this.postAjaxCall(url,obj);
            
        },

        callToserver(url) {
            var defer = $q.defer();
            $http.get(url).then(function (response) {
                defer.resolve(response);
                //    console.log("success",response);
            }, function (err) {
                defer.reject(err);
            });
            return defer.promise;
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
    }
    return object;
});