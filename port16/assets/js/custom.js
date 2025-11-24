//페이지랜딩
$(function () {
    counter();
    imagesProgress();
});
//imageProgress

function imagesProgress() {
    var $container = $('#progress'),
        $progressBar = $container.find('.progress-bar'),
        $progressText = $container.find('.progress-text'),
        imgLoad = imagesLoaded('body'),
        imgTotal = imgLoad.images.length,
        imgLoaded = 0,
        current = 0,
        progressTimer = setInterval(updateProgress, 1000 / 60);

    imgLoad.on('progress', function () {
        imgLoaded++;
    });

    function updateProgress() {
        var target = (imgLoaded / imgTotal) * 100;

        current += (target - current) * 0.1;
        $progressText.text(Math.floor(current) + '%');

        if (current >= 100) {
            clearInterval(progressTimer);
            $progressBar.add($progressText).delay(500)
                .animate({
                    opacity: 0
                }, 100, function () {
                    $container.animate({
                        top: '-110%'
                    }, 1000, 'easeInOutQuint');
                });
            $('body').addClass('active');
        }
        if (current > 99.98) {
            current = 100;
        }
    }
};


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

                    //                    $('.pie').easyPieChart({      
                    //                         barColor: '#fff',
                    //                         trackColor: '#121212',                        
                    //                         scaleColor: '#f00',
                    //                         scaleLength: 1,
                    //                         lineWidth: 2,
                    //                         size: 200,
                    //                         lineCap: 'round',
                    //                         animate: { duration: speed, enabled: true }
                    //                    });
                }
            });
        }).triggerHandler('scroll');
    }
}


//스크롤 타입셋
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    if (wScroll >= $("#about").offset().top - $(window).height() / 2) {
        $("#about").addClass("show");
    }
    if (wScroll >= $("#learn").offset().top - $(window).height() / 2) {
        $("#learn").addClass("show");
    }
    if (wScroll >= $("#think").offset().top - $(window).height() / 2) {
        $("#think").addClass("show");
    }
    if (wScroll >= $("#create").offset().top - $(window).height() / 2) {
        $("#create").addClass("show");
    }
    if (wScroll >= $("#profile_txt").offset().top - $(window).height() / 2) {
        $("#profile_txt").addClass("show");
    }
    if (wScroll >= $(".work_tit_list").offset().top - $(window).height() / 2) {
        $(".work_tit_list").addClass("show");
    }
    if (wScroll >= $(".site01").offset().top - $(window).height() / 2) {
        $(".site01").addClass("show");
    }
    if (wScroll >= $(".site02").offset().top - $(window).height() / 2) {
        $(".site02").addClass("show");
    }
    if (wScroll >= $(".site03").offset().top - $(window).height() / 2) {
        $(".site03").addClass("show");
    }
    if (wScroll >= $(".site04").offset().top - $(window).height() / 2) {
        $(".site04").addClass("show");
    }
    if (wScroll >= $(".skill1").offset().top - $(window).height() / 2) {
        $(".skill1").addClass("show");
    }
    if (wScroll >= $(".skill2").offset().top - $(window).height() / 2) {
        $(".skill2").addClass("show");
    }
    if (wScroll >= $(".skill3").offset().top - $(window).height() / 2) {
        $(".skill3").addClass("show");
    }
    if (wScroll >= $(".skill4").offset().top - $(window).height() / 2) {
        $(".skill4").addClass("show");
    }
    if (wScroll >= $(".skill5").offset().top - $(window).height() / 2) {
        $(".skill5").addClass("show");
    }
    if (wScroll >= $(".skill6").offset().top - $(window).height() / 2) {
        $(".skill6").addClass("show");
    }
    if (wScroll >= $("#section5").offset().top - $(window).height() / 2) {
        $("#section5").addClass("show");
    }
    if (wScroll >= $(".profile1").offset().top - $(window).height() / 2) {
        $(".profile1").addClass("show");
    }
    if (wScroll >= $(".contact_info").offset().top - $(window).height() / 2) {
        $(".contact_info").addClass("show");
    }
    if (wScroll >= $("#map").offset().top - $(window).height() / 2) {
        $("#map").addClass("show");
    }
    if (wScroll >= $(".mailForm").offset().top - $(window).height() / 2) {
        $(".mailForm").addClass("show");
    }
});


//Dot 메뉴
var dot = $("#dot > ul > li");
var cont = $("#contents > section");

dot.click(function (e) {
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    //alert(index);
    var section = cont.eq(index);
    var offset = section.offset().top;
    $("html,body").animate({
        scrollTop: offset
    }, 600, "easeInOutExpo");
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    if (wScroll > 200) {
        $(".overlay_nav").addClass("add");
    } else if (wScroll == 0) {
        $(".overlay_nav").removeClass("add");
    }
    if (wScroll > 200) {
        $("#dot ul").addClass("add");
    } else if (wScroll == 0) {
        $("#dot ul").removeClass("add");
    }
    if (wScroll >= cont.eq(0).offset().top) {
        dot.removeClass("current");
        dot.eq(0).addClass("current");
    }
    if (wScroll >= cont.eq(1).offset().top) {
        dot.removeClass("current");
        dot.eq(1).addClass("current");
    }
    if (wScroll >= cont.eq(2).offset().top) {
        dot.removeClass("current");
        dot.eq(2).addClass("current");
    }
    if (wScroll >= cont.eq(3).offset().top) {
        dot.removeClass("current");
        dot.eq(3).addClass("current");
    }
    if (wScroll >= cont.eq(4).offset().top) {
        dot.removeClass("current");
        dot.eq(4).addClass("current");
    }
    if (wScroll >= cont.eq(5).offset().top) {
        dot.removeClass("current");
        dot.eq(5).addClass("current");
    }
});


/*마우스 효과*/
/*
 $("body, html").mousemove(function(e){
    $(".cursor").css("left",e.pageX-15).css("top",e.pageY-15);
});
*/
var cursor = $(".cursor"),
    follow = $(".cursor_follow"),
    positionX = 0,
    positionY = 0,
    mouseX = 0, //마우스 X축 좌표 값
    mouseY = 0; //마우스 Y축 좌표 값

$(document).mousemove(function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;

    positionX += (mouseX - positionX) / 7;
    positionY += (mouseY - positionY) / 7;

    cursor.css("left", mouseX).css("top", mouseY);
    follow.css("left", positionX).css("top", positionY);

});


//버튼 마우스효과
var docStyle = document.documentElement.style;
// setting CSS variables inside this JS where they 
// can be declaratively used inside the CSS file.
document.addEventListener('mousemove', function (e) {
    docStyle.setProperty('--mouse-x', e.clientX);
    docStyle.setProperty('--mouse-y', e.clientY);
});


//프로젝트 text-hover 효과
$(".work_tit_list ul li").hover(function () {
    var num = $(".work_tit_list ul li").index($(this));
    $(".work_view ul li img").removeClass("show"),
        $(".work_view ul li img").eq(num).addClass("show").siblings().removeClass("show");
});
$(".work_text ul").click(function () {
    event.preventDefault();
});




// 맵 소스
var marker;

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 37.498045,
            lng: 127.028742
        },
        zoom: 17
    });

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {
            lat: 37.498045,
            lng: 127.028742
        }
    });
    marker.addListener('click', toggleBounce);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}
