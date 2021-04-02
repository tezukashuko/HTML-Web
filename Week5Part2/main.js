$(document).ready(function() {

  $(".gallery img").click(function() {
    $(".gallery img").removeClass("active");
    $(this).addClass("active");
    let src = $(this).attr("src");
    loadImg(src);
  });

  $(".next").click(function() {
    let currentnode = $(".gallery img.active");
    let nextnode = currentnode.next();
    let src = nextnode.attr("src");
    console.log(src);
    if(src == null) {
      nextnode = $(".gallery img").first();
      src = nextnode.attr("src");
    }
    nextnode.addClass("active");
    currentnode.removeClass("active");
    loadImg(src);
  })

  function loadImg(src) {
    $(".viewer img").css("opacity", 0);
    setTimeout(function(){
      $(".viewer img").css("opacity", 1);
      $(".viewer img").attr("src", src);
    }, 200);
  }


});
