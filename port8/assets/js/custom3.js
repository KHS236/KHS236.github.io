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
//		$progressBar.css({ width: current + '%' });
		$progressText.text( Math.floor(current) + '%' );
		
		if(current >= 100){
			clearInterval(progressTimer);
			$container.addClass("progress-complete");
			$progressBar.add($progressText)
				.delay(500)
				.animate({opacity: 0},250,function(){
					$container.animate({top: '-100%'},1000,'easeInOutQuint');
                    $(".box").animate({height: '0'},1000,'easeInOutQuint');
				});
			$("body").addClass("active");
		}
		if(current > 99.9){
			current = 100;
		}
		
	}	
}

//레이어 팝업
$(".open").click(function() {
    var num = $(this).attr("data-num");
    $(".modal_wrap"+num+" .modal").removeClass("out");
    $(".modal_wrap"+num+" .modal").addClass("in");
    setTimeout(function() {
    $(".modal_wrap"+num+" .modal").css("z-index", "1000");
        $(".modal_wrap"+num+" .modal").css("height", "700px");
        $(".modal_wrap"+num+" .modal").css("width", "1000px");
    }, 700);
    setTimeout(function() {
        $(".modal_wrap"+num+" .modal-container").fadeIn("slow");
    }, 900);
    $(".modal_wrap"+num+" .circle").addClass("circle-active");
    setTimeout(function() {
        $(".modal_wrap"+num+" .circle").removeClass("circle-hide");
        $(".modal_wrap"+num+" .circle").addClass("circle-active");
    }, 800);
});

$(".close").click(function() {
    var num = $(this).attr("data-num");
    $(".modal_wrap"+num+" .modal-container").fadeOut("fast");
    $(".modal_wrap"+num+" .circle").removeClass("circle-active");
    setTimeout(function() {
        $(".modal_wrap"+num+" .modal").removeClass("in");
        $(".modal_wrap"+num+" .modal").addClass("out");
    }, 150);
    setTimeout(function() {
    $(".modal_wrap"+num+" .modal").css("z-index", "0");
        $(".modal_wrap"+num+" .modal").css("height", "0");
        $(".modal_wrap"+num+" .modal").css("width", "0");
    }, 150);
});

$(".app_boll").hover(function(){
    $(".app_boll > img").attr("src","assets/img/redbolldown.svg");
});
$(".app_boll").mouseleave(function(){
    $(".app_boll > img").attr("src","assets/img/redboll_bg.svg");
});