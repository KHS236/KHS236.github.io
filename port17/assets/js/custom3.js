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

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

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
});

var wHeight = $(window).height();
var dHeight = $(document).height();
var navHeight = $("#nav").outerHeight();
var lastScrollTop = 0;
var moveScroll;

        $(window).scroll(function(event){ //스크롤을 감지
            moveScroll = true;
        });

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

//스크롤 시 애니메이션
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
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
    
    //section3 coding
    if(wScroll >= $(".sec3 h3").offset().top -$(window).height()/1.0){
        $(".sec3 h3").addClass("show");
    }else {
        $(".sec3 h3").removeClass("show");
    }
    
    //section4 animation
    if(wScroll >= $(".sec4 h3").offset().top -$(window).height()/1.0){
        $(".sec4 h3").addClass("show");
    }else {
        $(".sec4 h3").removeClass("show");
    }
    
    //section5 animation
    if(wScroll >= $(".sec5 h3").offset().top -$(window).height()/1){
        $(".sec5 h3").addClass("show");
    }else {
        $(".sec5 h3").removeClass("show");
    }

     //section6 animation
    if(wScroll >= $(".sec6 h3").offset().top -$(window).height()/1){
        $(".sec6 h3").addClass("show");
    }else {
        $(".sec6 h3").removeClass("show");
    }
});
