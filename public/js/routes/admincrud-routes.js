app.config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');    // to configure how the application deep linking paths are stored.
    
    $routeProvider.when("/products", {
            templateUrl: './../../views/admin/products.html',
            controller: 'productController'
        }).when("/", {
            templateUrl: './../../views/admin/categories.html',
            controller: 'categoryController'
        }).when("/categories", {
            templateUrl: './../../views/admin/categories.html',
            controller: 'categoryController'
        }).when("/orders", {
            templateUrl: './../../views/admin/orders.html',
            controller: ''
        }).when("/users", {
            templateUrl: './../../views/admin/manageUsers.html',
            controller: 'manageusers'
        })
        .otherwise({
            template: 'Something went wrong !!'
        })
});