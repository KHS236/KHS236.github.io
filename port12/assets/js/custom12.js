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
        $progressText.text( Math.floor(current) + '%' );

        if(current >= 100){
            clearInterval(progressTimer);
            $progressBar.add($progressText).delay(500)
                .animate({opacity: 0},100,function(){
                    $container.animate({top: '-110%'},1000,'easeInOutQuint');
                });
            $(".sec1 .sec1_top").delay(200).animate({height: "50vh"},700,'easeInOutQuint').add().delay(700).animate({height: "100px"},500,'easeInOutQuint');
            $(".sec1 .sec1_bom").delay(200).animate({height: "50vh"},700,'easeInOutQuint').add().delay(700).animate({height: "100px"},500,'easeInOutQuint');

            $("body").addClass("active");
        }
        if(current > 99.98){
            current = 100;
        }
    }	
}


//title animation
var mainTitle = $('.sec1 .sec1_top');
var aboutTitle = $('.sec2 .tit');


//Main text
var mainTxt = $('.sec1_top strong').text().split('').join('</span><span>');
    mainTxt = '<span>' + mainTxt + '</span>';
$('.sec1_top strong').html(mainTxt);

var aboutTxt = $('.sec2 .tit h2').text().split('').join('</span><span>');
    aboutTxt = '<span>' + aboutTxt + '</span>';
$('.sec2 .tit h2').html(aboutTxt);



$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    if(wScroll >= $("#section1").offset().top - $(window).height()){
        mainTitle.addClass('on');
    }
    if(wScroll >= $("#section2").offset().top - $(window).height()/1.2){
        aboutTitle.addClass('on');
    }
    
});



//about animation
var aboutSpan = $('.about_con1 .about_show1');
var aboutSpan2 = $('.about_con2 .about_show2');
var aboutSpan3 = $('.about_con3 .about_show3');

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    if(wScroll >= $('.about_con1').offset().top - $(window).height()/2){
        aboutSpan.addClass('on');
    }
    if(wScroll >= $('.about_con2').offset().top - $(window).height()/1.3){
        aboutSpan2.addClass('on');
    }
    if(wScroll >= $('.keywordWrap').offset().top - $(window).height()/1.5){
        $(".keywordWrap .line").addClass('on');
        $(".sec5_days").addClass('on');
    }
    if(wScroll >= $('.about_con3').offset().top - $(window).height()/1.5){
        aboutSpan3.addClass('on');
    }
});


//이미지팝업
$(".me").click(function(){
    $(".pop-me").addClass('on');
});
$(".pop-me .closePop").click(function(){
    $(".pop-me").removeClass('on');
});

$(".charming").click(function(){
    $(".pop-charming").addClass('on');
});
$(".pop-charming .closePop").click(function(){
    $(".pop-charming").removeClass('on');
});

$(".coffee").click(function(){
    $(".pop-coffee").addClass('on');
});
$(".pop-coffee .closePop").click(function(){
    $(".pop-coffee").removeClass('on');
});

$(".publisher").click(function(){
    $(".pop-publisher").addClass('on');
});
$(".pop-publisher .closePop").click(function(){
    $(".pop-publisher").removeClass('on');
});

$(".developer").click(function(){
    $(".pop-developer").addClass('on');
});
$(".pop-developer .closePop").click(function(){
    $(".pop-developer").removeClass('on');
});

$(".travel").click(function(){
    $(".pop-travel").addClass('on');
});
$(".pop-travel .closePop").click(function(){
    $(".pop-travel").removeClass('on');
});

$(".family").click(function(){
    $(".pop-family").addClass('on');
});
$(".pop-family .closePop").click(function(){
    $(".pop-family").removeClass('on');
});

$(".professional").click(function(){
    $(".pop-professional").addClass('on');
});
$(".pop-professional .closePop").click(function(){
    $(".pop-professional").removeClass('on');
});

$(".jeju").click(function(){
    $(".pop-jeju").addClass('on');
});
$(".pop-jeju .closePop").click(function(){
    $(".pop-jeju").removeClass('on');
});

$(".extreme").click(function(){
    $(".pop-extreme").addClass('on');
});
$(".pop-extreme .closePop").click(function(){
    $(".pop-extreme").removeClass('on');
});

$(".Doggy").click(function(){
    $(".pop-Doggy").addClass('on');
});
$(".pop-Doggy .closePop").click(function(){
    $(".pop-Doggy").removeClass('on');
});

$(".abroad").click(function(){
    $(".pop-abroad").addClass('on');
});
$(".pop-abroad .closePop").click(function(){
    $(".pop-abroad").removeClass('on');
});


$(".YOUTUBE").click(function(){
    $(".pop-YOUTUBE").addClass('on');
});
$(".pop-YOUTUBE .closePop").click(function(){
    $(".pop-YOUTUBE").removeClass('on');
});

$(".nature").click(function(){
    $(".pop-nature").addClass('on');
});
$(".pop-nature .closePop").click(function(){
    $(".pop-nature").removeClass('on');
});

$(".friends").click(function(){
    $(".pop-friends").addClass('on');
});
$(".pop-friends .closePop").click(function(){
    $(".pop-friends").removeClass('on');
});

$(".future").click(function(){
    $(".pop-future").addClass('on');
});
$(".pop-future .closePop").click(function(){
    $(".pop-future").removeClass('on');
});

$(".singer").click(function(){
    $(".pop-singer").addClass('on');
});
$(".pop-singer .closePop").click(function(){
    $(".pop-singer").removeClass('on');
});

$(".kitty").click(function(){
    $(".pop-kitty").addClass('on');
});
$(".pop-kitty .closePop").click(function(){
    $(".pop-kitty").removeClass('on');
});

$(".English").click(function(){
    $(".pop-English").addClass('on');
});
$(".pop-English .closePop").click(function(){
    $(".pop-English").removeClass('on');
});

$(".LOVE").click(function(){
    $(".pop-LOVE").addClass('on');
});
$(".pop-LOVE .closePop").click(function(){
    $(".pop-LOVE").removeClass('on');
});

$(".twenty6").click(function(){
    $(".pop-twenty6").addClass('on');
});
$(".pop-twenty6 .closePop").click(function(){
    $(".pop-twenty6").removeClass('on');
});

$(".mountain").click(function(){
    $(".pop-mountain").addClass('on');
});
$(".pop-mountain .closePop").click(function(){
    $(".pop-mountain").removeClass('on');
});

$(".latte").click(function(){
    $(".pop-latte").addClass('on');
});
$(".pop-latte .closePop").click(function(){
    $(".pop-latte").removeClass('on');
});

$(".notebook").click(function(){
    $(".pop-notebook").addClass('on');
});
$(".pop-notebook .closePop").click(function(){
    $(".pop-notebook").removeClass('on');
});


//이미지 클릭시 팝업창 - days
$(".daysback.d1-back").click(function(){
    $(".daysPop.dpop1").addClass("show");
});
$(".dpop1 .imgClose").click(function(){
    $(".daysPop.dpop1").removeClass("show");
});

$(".daysback.d2-back").click(function(){
    $(".daysPop.dpop2").addClass("show");
});
$(".dpop2 .imgClose").click(function(){
    $(".daysPop.dpop2").removeClass("show");
});

$(".daysback.d3-back").click(function(){
    $(".daysPop.dpop3").addClass("show");
});
$(".dpop3 .imgClose").click(function(){
    $(".daysPop.dpop3").removeClass("show");
});

$(".daysback.d4-back").click(function(){
    $(".daysPop.dpop4").addClass("show");
});
$(".dpop4 .imgClose").click(function(){
    $(".daysPop.dpop4").removeClass("show");
});




