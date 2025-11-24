//imageProgress
function imagesProgress(){
    var $container = $("#progress"),
        $progressBar = $container.find(".progress-bar"),
        $progressText = $container.find(".progress-text"),
        imgLoad = imagesLoaded("body"),	
        imgTotal = imgLoad.images.length,	
        imgLoaded = 0,										
        current = 0,							
        progressTimer = setInterval(updateProgress, 1000 / 60);

    imgLoad.on("progress", function(){
        imgLoaded++;
    });

    function updateProgress(){
        var target = ( imgLoaded / imgTotal) * 100;

        current += ( target - current) * 0.1;
        $progressBar.css({ width: current + '%' });
        $progressText.text( Math.floor(current) + '%' );

        if(current >= 100){
            clearInterval(progressTimer);
            $container.addClass("progress-complete");
            $progressBar.add($progressText)
                .delay(500)
                .animate({opacity: 0},250,function(){
                    $container.animate({top: '-100%'},1000,'easeInOutQuint');
                });
                $("body").addClass("active");
        }
        if(current > 99.9){
            current = 100;
        }
    }	
}

//Side Mini Menu
var row = $(".row > div");
var miniBar = $(".mini_bar");

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  
    if(wScroll > 1500){
        $(".mini_bar").addClass("on");
    } else if(wScroll == 0 ){
        $(".mini_bar").removeClass("on");
    }  
});


//text animation - PORTFOLIO (한줄씩 파도타기)
var text1 = $(".header .port h2").text().split("").join("</span><span>");
    text1 = "<span>" + text1 + "</span>";
$(".header .port h2").html(text1);


//textanimation
var cont = $(".about div .cont");
var aboutTitle = $(".about .title3");
var tourTitle2 = $(".tour .title2");

var text2 = $(".about .sentence.sent1 p").text().split(" ").join("</span> <span>");
    text2 = "<span>" + text2 + "</span>";
$(".about .sentence.sent1 p").html(text2);

var text3 = $(".about .sentence.sent2 p").text().split(" ").join("</span> <span>");
    text3 = "<span>" + text3 + "</span>";
$(".about .sentence.sent2 p").html(text3);

var text4 = $(".about .sentence.sent3 p").text().split(" ").join("</span> <span>");
    text4 = "<span>" + text4 + "</span>";
$(".about .sentence.sent3 p").html(text4);

var text5 = $(".about .sentence.sent4 p").text().split(" ").join("</span> <span>");
    text5 = "<span>" + text5 + "</span>";
$(".about .sentence.sent4 p").html(text5);

var text6 = $(".about .title3 h1").text().split("").join("</span><span>");
    text6 = "<span>" + text6 + "</span>";
$(".about .title3 h1").html(text6);

var text7 = $(".tour .title2 h1").text().split("").join("</span><span>");
    text7 = "<span>" + text7 + "</span>";
$(".tour .title2 h1").html(text7);

var text8 = $(".coding .title2 h1").text().split("").join("</span><span>");
    text8 = "<span>" + text8 + "</span>";
$(".coding .title2 h1").html(text8);

var text9 = $(".design .title2 h1").text().split("").join("</span><span>");
    text9 = "<span>" + text9 + "</span>";
$(".design .title2 h1").html(text9);

var text10 = $(".contact .title1 h1").text().split("").join("</span><span>");
    text10 = "<span>" + text10 + "</span>";
$(".contact .title1 h1").html(text10);


$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll >= aboutTitle.offset().top - $(window).height()/2){
        aboutTitle.addClass("show");
    }
    if(wScroll >= tourTitle2.offset().top - $(window).height()/2){
        tourTitle2.addClass("show");
    }
    if(wScroll >= $(".coding .title2").offset().top - $(window).height()/2){
        $(".coding .title2").addClass("show");
    }
    if(wScroll >= $(".design .title2").offset().top - $(window).height()/2){
        $(".design .title2").addClass("show");
    }
    if(wScroll >= cont.eq(0).offset().top - $(window).height()/2){
        cont.eq(0).addClass("show");
    }
    if(wScroll >= cont.eq(1).offset().top - $(window).height()/2){
        cont.eq(1).addClass("show");
    }
    if(wScroll >= $(".article1 .sentence").offset().top - $(window).height()/2){
        $(".article1 .sentence").addClass("show");
    }
    if(wScroll >= cont.eq(2).offset().top - $(window).height()/2){
        cont.eq(2).addClass("show");
    }
    if(wScroll >= $(".article2 .scroll3").offset().top - $(window).height()/3){
        $(".article2 .scroll3").addClass("show");
    }
    if(wScroll >= $(".article2 .pax_text").offset().top - $(window).height()/1){
        $(".article2 .pax_text").addClass("show");
    }
    if(wScroll >= $(".article2 .desc").offset().top - $(window).height()/2){
        $(".article2 .desc").addClass("show");
    }
    if(wScroll >= $(".article2 .desc2").offset().top - $(window).height()/2){
        $(".article2 .desc2").addClass("show");
    }
    if(wScroll >= cont.eq(3).offset().top - $(window).height()/3){
        cont.eq(3).addClass("show");
    }
    if(wScroll >= cont.eq(4).offset().top - $(window).height()/2){
        cont.eq(4).addClass("show");
    }
    if(wScroll >= cont.eq(5).offset().top - $(window).height()/2){
        cont.eq(5).addClass("show");
    }
    if(wScroll >= cont.eq(6).offset().top - $(window).height()/2){
        cont.eq(6).addClass("show");
    }
    if(wScroll >= cont.eq(7).offset().top - $(window).height()/2){
        cont.eq(7).addClass("show");
    }
    if(wScroll >= cont.eq(8).offset().top - $(window).height()/2){
        cont.eq(8).addClass("show");
    }
    if(wScroll >= $(".article4 .sentence").offset().top - $(window).height()/2){
        $(".article4 .sentence").addClass("show");
    }    
    if(wScroll >= $(".article4 .artc4_img").offset().top - $(window).height()/3){
        $(".article4 .artc4_img").addClass("show");
    }  
    if(wScroll >= $(".contact .title1").offset().top - $(window).height()/2){
        $(".contact .title1").addClass("show");
    }
    if(wScroll >= $(".contact .infor").offset().top - $(window).height()/2){
        $(".contact .infor").addClass("show");
    }
    if(wScroll >= $(".contact .profile").offset().top - $(window).height()/2){
        $(".contact .profile").addClass("show");
    }
    if(wScroll >= $(".footer").offset().top - $(window).height()/2){
        $(".footer").addClass("show");
    }
});

//about prallax
$(window).scroll(function(e){
  e.preventDefault();
  var wScroll = $(window).scrollTop();
  
  var offset2 = (wScroll - $(".scroll1").offset().top) * 0.5;
  var offset3 = (wScroll - $(".scroll2").offset().top) * 0.2;
  
  $(".scroll1").css({'transform' : 'translateY('+offset2+'px)' });
  $(".scroll2").css({'transform' : 'translateY('+offset3+'px)' });
});

//tour animation
var tour = $(".tour .list ul li");
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
   

    if(wScroll >= $(".tour .list h4").offset().top - $(window).height()/2){
        $(".tour .list h4").addClass("show");
    }
    if(wScroll >= tour.eq(0).offset().top - $(window).height()/2){
        tour.eq(0).addClass("show");
    }
    if(wScroll >= tour.eq(1).offset().top - $(window).height()/2){
        tour.eq(1).addClass("show");
    }
    if(wScroll >= tour.eq(2).offset().top - $(window).height()/2){
        tour.eq(2).addClass("show");
    }
    if(wScroll >= tour.eq(3).offset().top - $(window).height()/2){
        tour.eq(3).addClass("show");
    }
    if(wScroll >= tour.eq(4).offset().top - $(window).height()/2){
        tour.eq(4).addClass("show");
    }
    if(wScroll >= tour.eq(5).offset().top - $(window).height()/2){
        tour.eq(5).addClass("show");
    }
    if(wScroll >= tour.eq(6).offset().top - $(window).height()/2){
        tour.eq(6).addClass("show");
    }
}); 


//coding animation
var coding = $(".coding .coding_desc");
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll >= $(".coding_box1.box1 .img_container").offset().top - $(window).height()/2){
        coding.eq(0).addClass("show");
    }
    if(wScroll >= $(".coding_box2.box1 .img_container2").offset().top - $(window).height()/2){
        coding.eq(1).addClass("show");
    }
    if(wScroll >= $(".coding_box1.box2 .img_container").offset().top - $(window).height()/2){
        coding.eq(2).addClass("show");
    }
    if(wScroll >= $(".coding_box2.box2 .img_container2").offset().top - $(window).height()/2){
        coding.eq(3).addClass("show");
    }
}); 


//design animation
var design = $(".design .design_desc");
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll >= $(".design_box.box1 .img_container2").offset().top - $(window).height()/2){
        design.eq(0).addClass("show");
    }
    if(wScroll >= $(".design_box.box2 .img_container2").offset().top - $(window).height()/2){
        design.eq(1).addClass("show");
    }
    if(wScroll >= $(".design_box.box3 .img_container2").offset().top - $(window).height()/2){
        design.eq(2).addClass("show");
    }
}); 




// Image loaded animation
let imgLoad = imagesLoaded(document.querySelectorAll('.img_container'));

imgLoad.on('progress', function (instance, image) {
  if (image.isLoaded) {
    image.img.parentNode.classList.add('loaded');
  } else
  {
    image.img.parentNode.classList.add('error');
    image.img.parentNode.setAttribute('data-error', "Error loading");
    image.img.parentNode.setAttribute('data-file', image.img.src);
  }
});
let imgLoad2 = imagesLoaded(document.querySelectorAll('.img_container2'));

imgLoad2.on('progress', function (instance, image) {
  if (image.isLoaded) {
    image.img.parentNode.classList.add('loaded');
  } else
  {
    image.img.parentNode.classList.add('error');
    image.img.parentNode.setAttribute('data-error', "Error loading");
    image.img.parentNode.setAttribute('data-file', image.img.src);
  }
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll >= $(".article3 .img_container").offset().top - $(window).height()/3){
        $(".article3 .img_container").addClass("show");
    }
    if(wScroll >= $(".coding_box1.box1 .img_container").offset().top - $(window).height()/2){
        $(".coding_box1.box1 .img_container").addClass("show");
    }
    if(wScroll >= $(".coding_box2.box1 .img_container2").offset().top - $(window).height()/2){
        $(".coding_box2.box1 .img_container2").addClass("show");
    }
    if(wScroll >= $(".coding_box1.box2 .img_container").offset().top - $(window).height()/2){
        $(".coding_box1.box2 .img_container").addClass("show");
    }
    if(wScroll >= $(".coding_box2.box2 .img_container2").offset().top - $(window).height()/2){
        $(".coding_box2.box2 .img_container2").addClass("show");
    }
    if(wScroll >= $(".design_box.box1 .img_container2").offset().top - $(window).height()/2){
        $(".design_box.box1 .img_container2").addClass("show");
    }
    if(wScroll >= $(".design_box.box2 .img_container2").offset().top - $(window).height()/2){
        $(".design_box.box2 .img_container2").addClass("show");
    }
    if(wScroll >= $(".design_box.box3 .img_container2").offset().top - $(window).height()/2){
        $(".design_box.box3 .img_container2").addClass("show");
    }
});

