app.controller("cartCtrl",function($scope,$rootScope,indexFactory,PRODUCTURL,$localStorage)
{

   $scope.arrCustom =[];
     let cartPromise=indexFactory.callToserver(PRODUCTURL);
     cartPromise.then(function (res) {
         $scope.productdata=res.data;   
         getCartItems($scope.productdata); 
    }, function (err) {
        $scope.productdata = err;
    });
   
         function getCartItems(items=$scope.productdata){
            $scope.arrCustom =[];
              items.mobiles.forEach(element => {
            $localStorage.products.forEach(x=>{
                if(element._id==x.productId)
                {
                   $scope.arrCustom.push(element);
                }
            });
          
         })
        
         $rootScope.cartCount = $localStorage.products.length;
         $scope.totalProducts=$scope.arrCustom.length;
         $scope.totalcost=0;
         $scope.arrCustom.forEach((element)=>
        {
            $scope.totalcost+=parseInt(element.purchaseprice);
        });

        };
       
   $scope.deleteProduct=function(id)
   {
    $localStorage.products=$localStorage.products.filter(element=>
        {
          return  element.productId!=id;
    });
    getCartItems();
    indexFactory.postAjaxCall("/deleteProduct", {
        productId:id,
        deleteFrom:"cart"
    });
   };


   $scope.checkOut=function()
   {
    if (!$localStorage.uservalid) {

        $('#LoginModal').modal('show');

    }
    else
    window.location.href="#/profile";
   }
});
