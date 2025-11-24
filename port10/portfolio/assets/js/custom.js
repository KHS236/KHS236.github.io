$(function(){
    imagesProgress(); //이미지 로딩 소스
    counter();            
});

var dot = $("#dot > ul > li");
var cont = $("#contents > section");
var menuBtn = $(".menu-button.wrap");

dot.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    var section = cont.eq(index);
    var offset = section.offset().top;
    $("html,body").animate({ scrollTop:offset },600,"easeInOutExpo");
});

//스크롤시 메뉴버튼 색변화
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    if(wScroll >= cont.eq(0).offset().top){
        menuBtn.removeClass("show");
    }
    if(wScroll >= cont.eq(1).offset().top -600){
        menuBtn.removeClass("show");
        menuBtn.eq(0).addClass("show");
    }
    if(wScroll >= cont.eq(2).offset().top -600){
        menuBtn.removeClass("show");
    }
    if(wScroll >= cont.eq(3).offset().top -600){
        menuBtn.removeClass("show");
        menuBtn.eq(0).addClass("show");
    }
    if(wScroll >= cont.eq(4).offset().top -600){
        menuBtn.removeClass("show");
    }
});

// 메인 버튼 클릭 시
$('a[href^="#"]').on("click",function(e){
    e.preventDefault();
    var target = $( $(this).attr("href") );

    if(target.length){
$("html, body").animate({ scrollTop: target.offset().top },600,"easeInOutExpo");
    }
});


//counter
function counter() {
    if ($('.about .count').size()) {
        $c = $('.about .count');

        $c.each(function () {
            var $this = $(this);
            $this.data('target', parseInt($this.html()));
            $this.data('counted', false);
            $this.html('0');
        });

        $(window).on('scroll', function () {
            var speed = 5000;

            $c.each(function (i) {
                var $t = $(this);
                if (!$t.data('counted') && $(window).scrollTop() + $(window).height() >= $t.offset().top) {

                    $t.data('counted', true);

                    $t.animate({
                        dummy: 1
                    }, {
                        duration: speed,
                        step: function (now) {
                            var $this = $(this);
                            var val = Math.round($this.data('target') * now);
                            $this.html(val);
                        },
                        easing: 'easeInOutQuart'
                    });

                    // easy pie
                    $('.pie').easyPieChart({
                        barColor: '#030303',
                        trackColor: '#030303',
                        scaleColor: '#030303',
                        scaleLength: 5,
                        lineWidth: 1,
                        size: 200,
                        lineCap: 'round',
                        animate: { duration: speed, enabled: true }
                    });
                }
            });
        }).triggerHandler('scroll');
    }
}

//imageProgress
function imagesProgress(){
    var $container = $("#progress"),
        $progressBar = $container.find(".bubble"),
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
            //$container.addClass("progress-complete");
            $progressBar.add($progressText)
                .delay(500)
                .animate({opacity: 0},100,function(){
                    $container.animate({top: '-110%'},1000,'easeInOutQuint');
                });
            $("body").addClass("active");
        }
        if(current > 99.98){
            current = 100;
        }
    }	
}

//modal
    $(".ani1").click(function(){
    $("#modal.modal1").removeAttr("class").addClass("one").addClass("modal1");
});
    $(".close").click(function(){
    $("#modal.modal1").addClass("out");
});
    $(".ani2").click(function(){
    $("#modal.modal2").removeAttr("class").addClass("one").addClass("modal2");
});
    $(".close").click(function(){
    $("#modal.modal2").addClass("out");
});
    $(".ani3").click(function(){
    $("#modal.modal3").removeAttr("class").addClass("one").addClass("modal3");
});
    $(".close").click(function(){
    $("#modal.modal3").addClass("out");
});
    $(".ani4").click(function(){
    $("#modal.modal4").removeAttr("class").addClass("one").addClass("modal4");
});
    $(".close").click(function(){
    $("#modal.modal4").addClass("out");
});
    $(".ani5").click(function(){
    $("#modal.modal5").removeAttr("class").addClass("one").addClass("modal5");
});
    $(".close").click(function(){
    $("#modal.modal5").addClass("out");
});

//스크롤 시 애니메이션
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    //section2 about
    if(wScroll >= $(".sec2 .strapline").offset().top -$(window).height()/1.5){
        $(".sec2 .strapline").addClass("show");
    }else {
        $(".sec2 .strapline").removeClass("show");
    }
    if(wScroll >= $(".sec2 h3").offset().top -$(window).height()/1.5){
        $(".sec2 h3").addClass("show");
    }else {
        $(".sec2 h3").removeClass("show");
    }
     if(wScroll >= $(".photo img").offset().top -$(window).height()/1.5){
        $(".photo img").addClass("show");
    }else {
        $(".photo img").removeClass("show");
    }
    if(wScroll >= $(".photo p").offset().top -$(window).height()/1.3){
        $(".photo p").addClass("show");
    }else {
        $(".photo p").removeClass("show");
    }
    if(wScroll >= $(".sec2 .skill-wrap").offset().top -$(window).height()/1.5){
        $(".sec2 .skill-wrap").addClass("show");
    }else {
        $(".sec2 .skill-wrap").removeClass("show");
    }
    
    //section3 coding
    if(wScroll >= $(".sec3 .strapline").offset().top -$(window).height()/1.5){
        $(".sec3 .strapline").addClass("show");
    }else {
        $(".sec3 .strapline").removeClass("show");
    }
    if(wScroll >= $(".sec3 h3").offset().top -$(window).height()/1.5){
        $(".sec3 h3").addClass("show");
    }else {
        $(".sec3 h3").removeClass("show");
    }
    if(wScroll >= $(".sec3 .cont_left .s3_img").offset().top -$(window).height()/1.5){
        $(".sec3 .cont_left .s3_img").addClass("show");
    }else {
        $(".sec3 .cont_left .s3_img").removeClass("show");
    }
    if(wScroll >= $(".sec3 .cont_left .revealer").offset().top -$(window).height()/1.5){
        $(".sec3 .cont_left .revealer").addClass("show");
    }else {
        $(".sec3 .cont_left .revealer").removeClass("show");
    }
    if(wScroll >= $(".sec3 .cont_left .s3_text").offset().top -$(window).height()/1.5){
        $(".sec3 .cont_left .s3_text").addClass("show");
    }else {
        $(".sec3 .cont_left .s3_text").removeClass("show");
    }
    if(wScroll >= $(".sec3 .cont_left .s3_img").eq(1).offset().top -$(window).height()/1.5){
        $(".sec3 .cont_left .s3_img").eq(1).addClass("show");
    }else {
        $(".sec3 .cont_left .s3_img").eq(1).removeClass("show");
    }
    if(wScroll >= $(".sec3 .cont_left .revealer").eq(1).offset().top -$(window).height()/1.5){
        $(".sec3 .cont_left .revealer").eq(1).addClass("show");
    }else {
        $(".sec3 .cont_left .revealer").eq(1).removeClass("show");
    }
    if(wScroll >= $(".sec3 .cont_left .s3_text").eq(1).offset().top -$(window).height()/1.5){
        $(".sec3 .cont_left .s3_text").eq(1).addClass("show");
    }else {
        $(".sec3 .cont_left .s3_text").eq(1).removeClass("show");
    }
    if(wScroll >= $(".sec3 .cont_left .s3_img").eq(2).offset().top -$(window).height()/1.5){
        $(".sec3 .cont_left .s3_img").eq(2).addClass("show");
    }else {
        $(".sec3 .cont_left .s3_img").eq(2).removeClass("show");
    }
    if(wScroll >= $(".sec3 .cont_left .revealer").eq(2).offset().top -$(window).height()/1.5){
        $(".sec3 .cont_left .revealer").eq(2).addClass("show");
    }else {
        $(".sec3 .cont_left .revealer").eq(2).removeClass("show");
    }
    if(wScroll >= $(".sec3 .cont_left .s3_text").eq(2).offset().top -$(window).height()/1.5){
        $(".sec3 .cont_left .s3_text").eq(2).addClass("show");
    }else {
        $(".sec3 .cont_left .s3_text").eq(2).removeClass("show");
    }
    if(wScroll >= $(".sec3 .cont_left .s3_img").eq(3).offset().top -$(window).height()/1.5){
        $(".sec3 .cont_left .s3_img").eq(3).addClass("show");
    }else {
        $(".sec3 .cont_left .s3_img").eq(3).removeClass("show");
    }
    if(wScroll >= $(".sec3 .cont_left .revealer").eq(3).offset().top -$(window).height()/1.5){
        $(".sec3 .cont_left .revealer").eq(3).addClass("show");
    }else {
        $(".sec3 .cont_left .revealer").eq(3).removeClass("show");
    }
    if(wScroll >= $(".sec3 .cont_left .s3_text").eq(3).offset().top -$(window).height()/1.5){
        $(".sec3 .cont_left .s3_text").eq(3).addClass("show");
    }else {
        $(".sec3 .cont_left .s3_text").eq(3).removeClass("show");
    }
    
    if(wScroll >= $(".sec3 .cont_right .s3_img").offset().top -$(window).height()/1.5){
        $(".sec3 .cont_right .s3_img").addClass("show");
    }else {
        $(".sec3 .cont_right .s3_img").removeClass("show");
    }
    if(wScroll >= $(".sec3 .cont_right .revealer").offset().top -$(window).height()/1.5){
        $(".sec3 .cont_right .revealer").addClass("show");
    }else {
        $(".sec3 .cont_right .revealer").removeClass("show");
    }
    if(wScroll >= $(".sec3 .cont_right .s3_text").offset().top -$(window).height()/1.5){
        $(".sec3 .cont_right .s3_text").addClass("show");
    }else {
        $(".sec3 .cont_right .s3_text").removeClass("show");
    }
    
    if(wScroll >= $(".sec3 .cont_right .s3_img").eq(1).offset().top -$(window).height()/1.5){
        $(".sec3 .cont_right .s3_img").eq(1).addClass("show");
    }else {
        $(".sec3 .cont_right .s3_img").eq(1).removeClass("show");
    }
    if(wScroll >= $(".sec3 .cont_right .revealer").eq(1).offset().top -$(window).height()/1.5){
        $(".sec3 .cont_right .revealer").eq(1).addClass("show");
    }else {
        $(".sec3 .cont_right .revealer").eq(1).removeClass("show");
    }
    if(wScroll >= $(".sec3 .cont_right .s3_text").eq(1).offset().top -$(window).height()/1.5){
        $(".sec3 .cont_right .s3_text").eq(1).addClass("show");
    }else {
        $(".sec3 .cont_right .s3_text").eq(1).removeClass("show");
    }
    if(wScroll >= $(".sec3 .cont_right .s3_img").eq(2).offset().top -$(window).height()/1.5){
        $(".sec3 .cont_right .s3_img").eq(2).addClass("show");
    }else {
        $(".sec3 .cont_right .s3_img").eq(2).removeClass("show");
    }
    if(wScroll >= $(".sec3 .cont_right .revealer").eq(2).offset().top -$(window).height()/1.5){
        $(".sec3 .cont_right .revealer").eq(2).addClass("show");
    }else {
        $(".sec3 .cont_right .revealer").eq(2).removeClass("show");
    }
    if(wScroll >= $(".sec3 .cont_right .s3_text").eq(2).offset().top -$(window).height()/1.5){
        $(".sec3 .cont_right .s3_text").eq(2).addClass("show");
    }else {
        $(".sec3 .cont_right .s3_text").eq(2).removeClass("show");
    }
    
    //section4 animation
    if(wScroll >= $(".sec4 .strapline").offset().top -$(window).height()/1){
        $(".sec4 .strapline").addClass("show");
    }else {
        $(".sec4 .strapline").removeClass("show");
    }
    if(wScroll >= $(".sec4 h3").offset().top -$(window).height()/1){
        $(".sec4 h3").addClass("show");
    }else {
        $(".sec4 h3").removeClass("show");
    }
    if(wScroll >= $(".sec4 .ani_wrap").offset().top -$(window).height()/1){
        $(".sec4 .ani_wrap").addClass("show");
    }else {
        $(".sec4 .ani_wrap").removeClass("show");
    }
    
    //section5 animation
    if(wScroll >= $(".sec5 .strapline").offset().top -$(window).height()/1){
        $(".sec5 .strapline").addClass("show");
    }else {
        $(".sec5 .strapline").removeClass("show");
    }
    if(wScroll >= $(".sec5 h3").offset().top -$(window).height()/1){
        $(".sec5 h3").addClass("show");
    }else {
        $(".sec5 h3").removeClass("show");
    }
    if(wScroll >= $(".sec5 .namecard .sp1").offset().top -$(window).height()/1){
        $(".sec5 .namecard .sp1").addClass("show");
    }else {
        $(".sec5 .namecard .sp1").removeClass("show");
    }
    if(wScroll >= $(".sec5 .namecard .card").offset().top -$(window).height()/1){
        $(".sec5 .namecard .card").addClass("show");
    }else {
        $(".sec5 .namecard .card").removeClass("show");
    }
    if(wScroll >= $(".sec5 .namecard .sp2").offset().top -$(window).height()/1){
        $(".sec5 .namecard .sp2").addClass("show");
    }else {
        $(".sec5 .namecard .sp2").removeClass("show");
    }
});

$(function(){
	//햄버거 메뉴 
	var menuBtn = $(".menu-wrapper");

	$(".icon-wrap").click(function(){
		$("body").toggleClass("scroll");
	   $(".icon").toggleClass("animation");
	   $(".overlay").toggleClass("open");
	   $(".box-wrap").toggleClass("show");
	   $(".menu").toggleClass("show");
		menuBtn.find(".menu-button.wrap").toggleClass("show3");
	});

	$(".menu-right > a").click(function(){
		$(".icon").removeClass("animation");
	   $(".box-wrap").removeClass("show");
	   $(".menu").removeClass("show");
	   $("body").removeClass("scroll");
        menuBtn.find(".menu-button.wrap").removeClass("show3");
	});
});















