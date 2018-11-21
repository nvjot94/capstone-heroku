app.controller("categoriescontroller", function ($scope, categoriesfactory, $routeParams, DATAURL) {

        categoriesfactory.callToserver(DATAURL).then(function (response) {
                $scope.carouselArr = response.data.carouselurls;
                getCategoryData(response.data.categories);
            }),
            function (err) {
                $scope.productdata = err;
            };
        $scope.categoryName = $routeParams.categoryname;

        function getCategoryData(arr) {
            //console.log(arr);
            $scope.categorisedData = (arr.filter((category) => category.name == $routeParams.categoryname)[0].subcategories);
        };

    }


);