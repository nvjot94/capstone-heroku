app.controller("payCtrl",function($scope,indexFactory)
{
  

    $scope.launch=function()
    {
        bolt.launch(pd,
            { responseHandler: function(response)
                {
                    console.log(pd);
                    let resPromise=indexFactory.postAjaxCall("/payment/payumoney/response",pd);
                    resPromise.then(function (res) {
                        console.log(res.data);
                    });
                           
                   
                    
            },
            catchException: function(response)
            {
            console.log(response);
            }
            });
    };

var pd={
    key: 'purJ7Ks3',
    txnid: 'mtx1234', 
    hash: "",
    amount: '1',
    firstname: 'navjot',
    email: 'nvjot94@gmail.com',
    phone: '9540128129',
    productinfo: 'Bag',
    surl : 'http://localhost:3000/#/cart',
    furl: 'http://localhost:3000/#/cart' 
    };

    let data = {
        'txnid': pd.txnid,
        'email': pd.email,
        'amount': pd.amount,
        'productinfo': pd.productinfo,
        'firstname': pd.firstname
    }

    $scope.getHash=function()
    {
       var promise= indexFactory.postAjaxCall("/payment/payumoney",data);
       promise.then(function(res)
    {
     pd.hash=res.data.hash;
        
       $scope.launch();
    })
    };

});