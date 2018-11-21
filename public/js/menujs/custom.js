$(function () {
    $(".thumbs a").click(function (e) {
        console.log("value of e", e);
        console.log("value of target", e.target);
        e.preventDefault();
        var imgpreview = $(this).attr("href");
        $("#img-preview").html('<img src="' + imgpreview + '">');
        // $(".zoomImg").html('<img src="' + imgpreview + '">');
    });
});


$(function () {
    $(".varients li a").click(function (e) {
        e.preventDefault();
        var imgpreview = $(this).attr("href");
        $("#img-preview").html('<img src="' + imgpreview + '">');

    });
});