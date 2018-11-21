app.controller("chooseProCtrl", function ($scope, indexFactory, $routeParams, $localStorage, PRODUCTURL, $rootScope) {
    indexFactory.callToserver(PRODUCTURL).then(function (response) {
            getProductData(response.data[$routeParams.subCategory]);
        }),
        function (err) {};


    $scope.addToCart = function () {
        if (!$localStorage.uservalid) {
            if ($localStorage.products) {
                let check = $localStorage.products.filter((element) => {
                    console.log(element.productId == $scope.productData._id);
                    return element.productId == $scope.productData._id;
                }).length;

                // console.log(check);
                if (check == 0) {
                    $localStorage.products.push({
                        productId: $scope.productData._id,
                        subCategory: $routeParams.subCategory
                    });
                    $rootScope.cartCount = $localStorage.products.length;
                    console.log($rootScope.cartCount);
                } else {
                    alert("product already added");
                }

            } else {
                $localStorage.products = [];
                $localStorage.products.push({
                    productId: $scope.productData._id,
                    subCategory: $routeParams.subCategory
                });
                $rootScope.cartCount = $localStorage.products.length;
                // console.log( $rootScope.cartCount);
            }


        } else if ($localStorage.uservalid) {
            // indexFactory.cart.push({productId:$scope.productData._id,subCategory:$routeParams.subCategory});
            if ($localStorage.products) {
                let check = $localStorage.products.filter((element) => {
                    console.log(element.productId == $scope.productData._id);
                    return element.productId == $scope.productData._id;
                }).length;

                if (check == 0) {
                    $localStorage.products.push({
                        productId: $scope.productData._id,
                        subCategory: $routeParams.subCategory
                    });
                    $rootScope.cartCount = $localStorage.products.length;
                } else {

                    alert("product already added");
                }

            } else if (!$localStorage.products) {
                $localStorage.products = [];
                $localStorage.products.push({
                    productId: $scope.productData._id,
                    subCategory: $routeParams.subCategory
                });
                $rootScope.cartCount = $localStorage.products.length;
            }
            indexFactory.postAjaxCall("/addtocart", {
                productId: $scope.productData._id,
                subCategory: $routeParams.subCategory
            });
        }
    };


    $scope.addToFav = function () {
        if (!$localStorage.uservalid) {

            $('#LoginModal').modal('show');

        } else if ($localStorage.uservalid) {

            if ($localStorage.favProducts) {
                let check = $localStorage.favProducts.filter((element) => {
                    console.log(element.productId == $scope.productData._id);
                    return element.productId == $scope.productData._id;
                }).length;

                if (check == 0) {
                    alert("product added to Favourites");
                    $localStorage.favProducts.push({
                        productId: $scope.productData._id,
                        subCategory: $routeParams.subCategory
                    });

                } else {

                    alert("product already added to Favourites");
                }

            } else if (!$localStorage.favProducts) {
                alert("product added to Favourites");
                $localStorage.favProducts = [];
                $localStorage.favProducts.push({
                    productId: $scope.productData._id,
                    subCategory: $routeParams.subCategory
                });
            }
            indexFactory.postAjaxCall("/addtofav", {
                productId: $scope.productData._id,
                subCategory: $routeParams.subCategory
            });
        }
    };


    getProductData = function (arr) {
        $scope.productData = arr.filter((mobile) => mobile._id == $routeParams.productId)[0];

    }

});