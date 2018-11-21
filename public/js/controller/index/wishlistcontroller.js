app.controller("wishlistctrl",function($scope,indexFactory,PRODUCTURL,$localStorage)
{

    $scope.arrCustom =[];
     let cartPromise=indexFactory.callToserver(PRODUCTURL);
     cartPromise.then(function (res) {
         $scope.productdata=res.data;   
         getFavItems($scope.productdata); 
    }, function (err) {
        $scope.productdata = err;
    });
   
         function getFavItems(items=$scope.productdata){
            $scope.arrCustom =[];
              items.mobiles.forEach(element => {
            $localStorage.favProducts.forEach(x=>{
                if(element._id==x.productId)
                {
                   $scope.arrCustom.push(element);
                }
            });
          
         });
         console.log($scope.arrCustom);
        };   
       
   $scope.deleteProduct=function(id)
   {
    $localStorage.favProducts=$localStorage.favProducts.filter(element=>
        {
          return  element.productId!=id;
    });
    getFavItems();
    indexFactory.postAjaxCall("/deleteProduct", {
        productId:id,
        deleteFrom:"wishlist"
    });
   };

   $scope.addToCart=function(id,subcategory)
   {
      
    if ($localStorage.uservalid) {
       
        if ($localStorage.products) {
            let check = $localStorage.products.filter((element) => {
               // console.log(element.productId == $scope.productData._id);
                return element.productId == id;
            }).length;

            if (check == 0) {
                $localStorage.products.push({
                    productId: id,
                    subCategory: subcategory
                });
                $rootScope.cartCount = $localStorage.products.length;
            } else {

                alert("product already added");
            }

        } else if (!$localStorage.products) {
            $localStorage.products = [];
            $localStorage.products.push({
                productId: id,
                subCategory: subcategory
            });
            $rootScope.cartCount = $localStorage.products.length;
        }
        indexFactory.postAjaxCall("/addtocart", {
            productId: id,
            subCategory: subcategory
        });
    }
   }
});