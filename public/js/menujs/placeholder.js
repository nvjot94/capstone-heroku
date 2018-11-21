$('.myinput').focus(function(){
    $(this).parent().addClass("focus");
}).blur(function(){
    if($(this).val()===''){
        $(this).parent().removeClass("focus");
    }
})