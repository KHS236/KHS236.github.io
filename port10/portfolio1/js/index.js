/* 스크롤 */

var nav = $("#nav_wrap .menu li");
var cont = $("#section_wrap > div");
        
nav.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    var section = cont.eq(index);
    var offset = section.offset().top -74;
    $("html,body").animate({ scrollTop:offset}, 1000, "easeInOutExpo");
});
        

/* 네비게이션 */

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
        
    if(wScroll > 50){
    $("#nav_wrap").addClass("on");
    } else if (wScroll == 0){
    $("#nav_wrap").removeClass("on");
    }
});

/* 네비게이션 active */
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
            
    if(wScroll >= cont.eq(0).offset().top){
        nav.removeClass("active");
        nav.eq(0).addClass("active");
    }
            
    if(wScroll >= cont.eq(1).offset().top -78){
        nav.removeClass("active");
        nav.eq(1).addClass("active");
    }
            
    if(wScroll >= cont.eq(2).offset().top -840){
        nav.removeClass("active");
        nav.eq(2).addClass("active");
    }
});


