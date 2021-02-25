$(document).ready(function () {
    console.log("loaded");
    $(".gallery img").click(function (e) {
        e.preventDefault();
        console.log("clicked");
        $(this).addClass("active");
        let src = $(this).attr("src");
        loadimg(src);
        loadlightbox(src);
    });

    $(".lightbox").click(function (e) {
        e.preventDefault();
        $(".gallery img.active").removeClass("active");
        hidelightbox();
    });

    $(".lightbox ul").click(function (e) {
        e.stopPropagation();
    });
    $(".lightbox img").click(function (e) {
        
        $(this).addClass("active");
        e.stopPropagation();
    });

    $(".lightbox ul li.next").click(function (e) {
        let node = $(".gallery img.active");
        let nodenext = $(".gallery img.active").next();

        if (nodenext == null) {
            nodenext = $(".gallery img").first().addClass("active");
        }

        
        nextimg = nodenext.attr("src");
        loadimg(nextimg);

      

        nodenext.addClass("active");

        node.removeClass();

    });
});


function loadimg(src) {
    $(".lightbox img").attr("src", src);
}
function loadlightbox() {

    setTimeout(() => {
        $(".lightbox").css("opacity", 1);
    }, 300);
    $(".lightbox").css("display", "flex");
}

function hidelightbox() {
    $(".lightbox").css("opacity", 0);
    setTimeout(() => {
        $(".lightbox").css("display", "none");

    }, 300);
}



