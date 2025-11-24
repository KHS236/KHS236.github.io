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