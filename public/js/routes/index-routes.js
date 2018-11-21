app.config(function ($routeProvider, $locationProvider, HOME, PRODUCTS, CHOOSEPRODUCT, CATEGORIES, WISHLIST, CART, PROFILE, MYORDERS,PAYMENT) {

    $locationProvider.hashPrefix(''); // to configure how the application deep linking paths are stored.
        $routeProvider.when(HOME, {
            templateUrl: 'views/index/indexview.html',
            controller: 'indexController'
        }).when(PRODUCTS, {
            templateUrl: 'views/index/products.html',
            controller: 'productcontroller'
        }).when(CHOOSEPRODUCT, {
            templateUrl: 'views/index/chooseproduct.html',
            controller: 'chooseProCtrl'
        }).when(CATEGORIES, {
            templateUrl: 'views/index/categories.html',
            controller: 'categoriescontroller'
        }).when(WISHLIST, {
            templateUrl: 'views/index/wishlist.html',
            controller: 'wishlistctrl'
        }).when(CART, {
            templateUrl: 'views/index/cart.html',
            controller: 'cartCtrl'
        }).when(PROFILE, {
            templateUrl: 'views/index/profile.html',
            controller: ''
        }).when(MYORDERS, {
            templateUrl: 'views/index/myorders.html',
            controller: ''
        }).when(PAYMENT,{
            templateUrl: 'views/index/payment.html',
            controller: 'payCtrl'
        })
        .otherwise({
            template: 'Something went wrong !!'
        })
});