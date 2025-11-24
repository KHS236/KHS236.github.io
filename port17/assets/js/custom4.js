//패럴랙스
var nav = $("#nav ul li");
var cont = $("#contents > section");

nav.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
            //alert(index);
            var section = cont.eq(index);
            var offset = section.offset().top;
            $("html,body").animate({ scrollTop:offset },600,"easeInOutExpo");
        });

$(window).scroll(function(event){
    var wScroll = $(this).scrollTop();
        moveScroll = true;

    //스크롤시 #section4 이미지 움직임 변화
    var offset1 = (wScroll  - $(window).height()) * 0.1;
    var offset2 = (wScroll  - $(window).height()) * 0.15;

    $(".visual-middle").css({ 'transform':'translateY(-'+ offset1 +'px)' });
    $(".visual-fast").css({ 'transform':'translateY(-'+ offset2 +'px)' });

    if(wScroll >= cont.eq(0).offset().top){
        nav.removeClass("active");
        nav.eq(0).addClass("active");
    }
    if(wScroll >= cont.eq(1).offset().top){
        nav.removeClass("active");
        nav.eq(1).addClass("active");
    }
    if(wScroll >= cont.eq(2).offset().top){
        nav.removeClass("active");
        nav.eq(2).addClass("active");
    }
    if(wScroll >= cont.eq(3).offset().top){
        nav.removeClass("active");
        nav.eq(3).addClass("active");
    }
    if(wScroll >= cont.eq(4).offset().top){
        nav.removeClass("active");
        nav.eq(4).addClass("active");
    }
    if(wScroll >= cont.eq(5).offset().top){
        nav.removeClass("active");
        nav.eq(5).addClass("active");
    }

    //section2 about
    if(wScroll >= $(".sec2 h3").offset().top -$(window).height()/1.0){
        $(".sec2 h3").addClass("show");
    }else {
        $(".sec2 h3").removeClass("show");
    }
    if(wScroll >= $(".sec2 .skill").offset().top -$(window).height()/1.0){
        $(".sec2 .skill").addClass("show");
    }else {
        $(".sec2 .skill").removeClass("show");
    }
    if(wScroll >= $(".sec2 .skill2").offset().top -$(window).height()/1.0){
        $(".sec2 .skill2").addClass("show");
    }else {
        $(".sec2 .skill2").removeClass("show");
    }
    
    //section3 coding
    if(wScroll >= $(".sec3 h3").offset().top -$(window).height()/1.0){
        $(".sec3 h3").addClass("show");
    }else {
        $(".sec3 h3").removeClass("show");
    }
    if(wScroll >= $(".sec3 .intro").offset().top -$(window).height()/0.7){
        $(".sec3 .intro").addClass("show");
    }else {
        $(".sec3 .intro").removeClass("show");
    }

    
    //section4 portfolio
    if(wScroll >= $(".sec4 h3").offset().top -$(window).height()/1.0){
        $(".sec4 h3").addClass("show");
    }else {
        $(".sec4 h3").removeClass("show");
    }
    if(wScroll >= $(".port .pright").offset().top -$(window).height()/1.0){
        $(".port .pright").addClass("show");
    }else {
        $(".port .pright").removeClass("show");
    }
    if(wScroll >= $(".port .pright").eq(1).offset().top -$(window).height()/1.0){
        $(".port .pright").eq(1).addClass("show");
    }else {
        $(".port .pright").eq(1).removeClass("show");
    }
    if(wScroll >= $(".port .pright").eq(2).offset().top -$(window).height()/1.0){
        $(".port .pright").eq(2).addClass("show");
    }else {
        $(".port .pright").eq(2).removeClass("show");
    }
    if(wScroll >= $(".port .pright").eq(3).offset().top -$(window).height()/1.0){
        $(".port .pright").eq(3).addClass("show");
    }else {
        $(".port .pright").eq(3).removeClass("show");
    }
    if(wScroll >= $(".port .pleft").offset().top -$(window).height()/1.0){
        $(".port .pleft").addClass("show");
    }else {
        $(".port .pleft").removeClass("show");
    }
    if(wScroll >= $(".port .pleft").eq(1).offset().top -$(window).height()/1.0){
        $(".port .pleft").eq(1).addClass("show");
    }else {
        $(".port .pleft").eq(1).removeClass("show");
    }
    if(wScroll >= $(".port .pleft").eq(2).offset().top -$(window).height()/1.2){
        $(".port .pleft").eq(2).addClass("show");
    }else {
        $(".port .pleft").eq(2).removeClass("show");
    }
    if(wScroll >= $(".port .pleft").eq(3).offset().top -$(window).height()/1.1){
        $(".port .pleft").eq(3).addClass("show");
    }else {
        $(".port .pleft").eq(3).removeClass("show");
    }
    
    
    //section5 animation
    if(wScroll >= $(".sec5 h3").offset().top -$(window).height()/1.0){
        $(".sec5 h3").addClass("show");
    }else {
        $(".sec5 h3").removeClass("show");
    }
    if(wScroll >= $(".tit-left").offset().top -$(window).height()/1.4){
        $(".tit-left").addClass("show");
    }else {
        $(".tit-left").removeClass("show");
    }
    if(wScroll >= $(".iframe.iframe-left").offset().top -$(window).height()/1.6){
        $(".iframe.iframe-left").addClass("show");
    }else {
        $(".iframe.iframe-left").removeClass("show");
    }
    if(wScroll >= $(".desc-left").offset().top -$(window).height()/1.2){
        $(".desc-left").addClass("show");
    }else {
        $(".desc-left").removeClass("show");
    }
    if(wScroll >= $(".code-left").offset().top -$(window).height()/1.2){
        $(".code-left").addClass("show");
    }else {
        $(".code-left").removeClass("show");
    }
    if(wScroll >= $(".tit-left").eq(1).offset().top -$(window).height()/1.4){
        $(".tit-left").eq(1).addClass("show");
    }else {
        $(".tit-left").eq(1).removeClass("show");
    }
    if(wScroll >= $(".iframe.iframe-left").eq(1).offset().top -$(window).height()/1.6){
        $(".iframe.iframe-left").eq(1).addClass("show");
    }else {
        $(".iframe.iframe-left").eq(1).removeClass("show");
    }
    if(wScroll >= $(".desc-left").eq(1).offset().top -$(window).height()/1.2){
        $(".desc-left").eq(1).addClass("show");
    }else {
        $(".desc-left").eq(1).removeClass("show");
    }
    if(wScroll >= $(".code-left").eq(1).offset().top -$(window).height()/1.2){
        $(".code-left").eq(1).addClass("show");
    }else {
        $(".code-left").eq(1).removeClass("show");
    }
   
    if(wScroll >= $(".tit-right").offset().top -$(window).height()/1.4){
        $(".tit-right").addClass("show");
    }else {
        $(".tit-right").removeClass("show");
    }
    if(wScroll >= $(".iframe.iframe-right").offset().top -$(window).height()/1.6){
        $(".iframe.iframe-right").addClass("show");
    }else {
        $(".iframe.iframe-right").removeClass("show");
    }
    if(wScroll >= $(".desc-right").offset().top -$(window).height()/1.2){
        $(".desc-right").addClass("show");
    }else {
        $(".desc-right").removeClass("show");
    }
    if(wScroll >= $(".code-right").offset().top -$(window).height()/1.2){
        $(".code-right").addClass("show");
    }else {
        $(".code-right").removeClass("show");
    }
    if(wScroll >= $(".tit-right").eq(1).offset().top -$(window).height()/1.4){
        $(".tit-right").eq(1).addClass("show");
    }else {
        $(".tit-right").eq(1).removeClass("show");
    }
    if(wScroll >= $(".iframe.iframe-right").eq(1).offset().top -$(window).height()/1.6){
        $(".iframe.iframe-right").eq(1).addClass("show");
    }else {
        $(".iframe.iframe-right").eq(1).removeClass("show");
    }
    if(wScroll >= $(".desc-right").eq(1).offset().top -$(window).height()/1.2){
        $(".desc-right").eq(1).addClass("show");
    }else {
        $(".desc-right").eq(1).removeClass("show");
    }
    if(wScroll >= $(".code-right").eq(1).offset().top -$(window).height()/1.2){
        $(".code-right").eq(1).addClass("show");
    }else {
        $(".code-right").eq(1).removeClass("show");
    }
    $(".iframe-left").hover(function(){
        $(".tit-left.show").css({"left":"0","top":"20px"});
    // $(".iframe-left.show").css({"width":"100%"});
    $(".desc-left").css({"top":"73%"});
    },function(){
    $(".tit-left.show").css({"left":"40%","top":"120px"});
    // $(".iframe-left.show").css({"width":"50%"});
    $(".desc-left").css({"top":"40%"});
    }); 

    $(".iframe-right").hover(function(){
        $(".tit-right.show").css({"right":"0","top":"20px"});
    // $(".iframe-right.show").css({"width":"100%"});
    $(".desc-right").css({"top":"73%"});
    },function(){
    $(".tit-right.show").css({"right":"40%","top":"120px"});
    // $(".iframe-right.show").css({"width":"50%"});
    $(".desc-right").css({"top":"40%"});
    }); 

     //section6 animation
    if(wScroll >= $(".sec6 h3").offset().top -$(window).height()/1.0){
        $(".sec6 h3").addClass("show");
    }else {
        $(".sec6 h3").removeClass("show");
    }
    if(wScroll >= $(".sec6").offset().top -$(window).height()/2){
        $(".sec6").addClass("show");
    }else {
        $(".sec6").removeClass("show");
    }
    
});



var wHeight = $(window).height();
var dHeight = $(document).height();
var navHeight = $("#nav").outerHeight();
var lastScrollTop = 0;
var moveScroll;

        setInterval(function(){ //스크롤이 감지가 되면 0,25마다 실행
            if(moveScroll){
                hasScroll();
                moveScroll = false;
            }
        },250);

        function hasScroll(){
            var wScroll = $(this).scrollTop();  //현재 스크롤 값

            if( wScroll > lastScrollTop && wScroll > navHeight ){
                 //스크롤을 내렸을 때 
                 $("#nav").addClass("on");
             }else {
                 //스크롤을 올렸을 때 
                 if(wScroll + wHeight < dHeight) {
                   $("#nav").removeClass("on");
               }
           }

           lastScrollTop = wScroll;
       };

//counter
function counter() {
    if ($('.skill .count').size()) {
        $c = $('.skill .count');

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
                        barColor: '#ffffff',
                        trackColor: '#000000',
                        scaleColor: '#ffffff',
                        scaleLength: 5,
                        lineWidth: 10,
                        size: 290,
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
        $progressBar = $container.find(".bubble2"),
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
                .animate({opacity: 0},250,function(){
                    $container.animate({width: '0%'},2000,'easeInOutQuint').addClass('active');
                });
            $("body").addClass("active");
        }
        if(current > 99.98){
            current = 100;
        }
    }   
}

//backgorund
var stars = 800;
var $stars = $(".stars");
var r = 800;
for (var i = 0; i < stars; i++) {
    var $star = $("<div/>").addClass("star");
    $stars.append($star);
}
$(".star").each(function () {
    var cur = $(this);
    var s = 0.2 + (Math.random() * 1);
    var curR = r + (Math.random() * 300);
    cur.css({
        transformOrigin: "0 0 " + curR + "px",
        transform: " translate3d(0,0,-" + curR + "px) rotateY(" + (Math.random() * 360) + "deg) rotateX(" + (Math.random() * -50) + "deg) scale(" + s + "," + s + ")"

    })
});

/* roket */
TweenMax.fromTo(".fire", .03, {x:-.5, y:-.4}, {x:.5, y:.4, repeat: -1, yoyo:true})

var tl = new TimelineMax({repeat:-1}),
        tl_sky = new TimelineMax({repeat:-1});

tl_sky.fromTo(".sky", 12, {transform:"translateY(-100vh)"}, 
                            {transform:"translateY(0vh)", ease:Power0.easeNone});

tl.to(".rocket", 3, {transform:"translateY(-5vh)",ease:Expo.easeOut})
    .fromTo(".fire", .4, {scaleY: .7}, {scaleY: 1.5}, "+=1.5")
    .add(() => tl_sky.timeScale(25),"-=.4")
    .to(".rocket", 2, {transform:"translateY(-103vh)", ease:Power3.easeOut},"+=2.5")
    .add(() => TweenMax.to(tl_sky, 1.5, {timeScale:2}))

tl_sky.timeScale(1);
