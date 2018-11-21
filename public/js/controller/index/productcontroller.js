app.controller("productcontroller", function ($scope, productfactory, $routeParams, PRODUCTURL) {
    $scope.subcategory=$routeParams.subcategory;
    var sub=$routeParams.subcategory;
    console.log(sub);
    productfactory.callToserver(PRODUCTURL).then(function (response) 
    {
            
         $scope.productData = response.data[sub];
         console.log("data is",$scope.productData);
        })
,
        function (err) {
                console.log(err);
        };
});
