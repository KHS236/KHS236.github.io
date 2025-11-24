//loading page
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
                 $container.animate({top: '-110%'},1000,'easeInOutQuint');
             });
         $("body").addClass("active");       //progressbar 애니메이션이 끝나고 바디에 active가 생김
     }
     if(current >99.9){
         current = 100;
     }

 }
}

//------------------------------------------------------

//스크롤값
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();  //자기 자신을 표현할 땐, this 를 쓰자
  wScroll = parseInt(wScroll);
  $(".scroll_top").text(wScroll);
});

//------------------------------------------------------

// ------------------------------ ( Group1 - blue )
//image traslate _ blue
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();


// hello 화면
if(wScroll >= 1){
  $(".section1_hello_box .layer1 p").addClass("typing");
} else {
  $(".section4_container > img").removeClass("typing");
}

// intro
if(wScroll >= $(".section1_intro .intro1").offset().top - $(window).height()/2 ){
  $(".section1_intro .intro1").addClass("show");
} else {
  $(".section1_intro .intro1").removeClass("show");
}

if(wScroll >= $(".section1_intro .intro2").offset().top - $(window).height()/2 ){
  $(".section1_intro .intro2").addClass("show");
} else {
  $(".section1_intro .intro2").removeClass("show");
}


  // 파란색 도형들 이동
  if(wScroll >= $("#section1").offset().top){

    var offset = wScroll - $("#section1").offset().top;

    $(".left").css({ 'transform' : 'translate('+ offset/5.9 +'px, '+ offset/15 +'px)'  });
    $(".right").css({ 'transform' : 'translate(-'+ offset/5.9 +'px, '+ offset/15 +'px)'  });
    $(".bottom-M2").css({ 'transform' : 'translate(0px, '+ offset/30 +'px)'  });
    $(".bottom-M1").css({ 'transform' : 'translate(0px, '+ offset/25 +'px)'  });
    $(".bottom0").css({ 'transform' : 'translate(0px, '+ offset/20 +'px)'  });
    $(".bottom-P1").css({ 'transform' : 'translate(0px, '+ offset/15 +'px)'  });
    $(".bottom-P1-5").css({ 'transform' : 'translate(0px, '+ offset/10 +'px)'  });
    $(".bottom-P1-Up").css({ 'transform' : 'translate(0px, -'+ offset/15 +'px)'  });
    $(".bottom-P2").css({ 'transform' : 'translate(0px, '+ offset/6 +'px)'  });
    $(".bottom-P2-Up").css({ 'transform' : 'translate(0px, -'+ offset/6 +'px)'  });
    $(".bottom-P3").css({ 'transform' : 'translate(0px, '+ offset/5 +'px)'  });
    $(".bottom-P4").css({ 'transform' : 'translate(0px, -'+ offset/5 +'px)'  });
  }

