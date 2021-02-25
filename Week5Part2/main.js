$(document).ready(function () {
    $(".gallery img").click(function (e) {
        e.preventDefault();
        $(".gallery img.active").removeClass("active");
        $(this).addClass("active");
        loadimg($(this).attr("src"));

    });

    $(".next").click(function (e) {
        let node = $(".gallery img.active");
        let nodenext = $(".gallery img.active").next();

        if (nodenext.attr("src") == undefined) {
            nodenext = $(".gallery img").first().addClass("active");

        }
        nextimg = nodenext.attr("src");
        loadimg(nextimg);
        nodenext.addClass("active");
        node.removeClass("active");
    });

    $(".prev").click(function (e) {
        let node = $(".gallery img.active");
        let nodenext = $(".gallery img.active").prev();

        if (nodenext.attr("src") == undefined) {
            nodenext = $(".gallery img").last().addClass("active");

        }
        nextimg = nodenext.attr("src");
        loadimg(nextimg);
        nodenext.addClass("active");
        node.removeClass("active");
    });
});


function loadimg(src) {
    $(".viewer img").css("opacity", 0);
    setTimeout(() => {
        $(".viewer img").attr("src", src);
        $(".viewer img").css("opacity", 1);
    }, 200);

}
