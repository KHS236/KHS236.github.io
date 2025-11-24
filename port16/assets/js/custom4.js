function counter() {
    if ($('.skill_wrap .count').size()) {
        $c = $('.skill_wrap .count');

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
                    
                   
                    $('.pie').easyPieChart({      
                         barColor: '#fff',
                         trackColor: '#121212',                        
                         scaleColor: '#f00',
                         scaleLength: 1,
                         lineWidth: 2,
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
    var $container = $('#progress'),
        $progressBar = $container.find('.progress-bar'),
        $progressText = $container.find('.progress-text'),
        imgLoad = imagesLoaded('body'),	
        imgTotal = imgLoad.images.length,	
        imgLoaded = 0,										
        current = 0,							
        progressTimer = setInterval(updateProgress, 1000 / 60);

    imgLoad.on('progress', function(){
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
            $('body').addClass('active');
        }
        if(current > 99.98){
            current = 100;
        }
    }	
};



var dot = $("#dot > ul > li");
        var cont = $("#contents > section");

        dot.click(function(e) {
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

        $(window).scroll(function() {
            var wScroll = $(this).scrollTop();

            if (wScroll >= cont.eq(0).offset().top) {
                dot.removeClass("active");
                dot.eq(0).addClass("active");
            }
            if (wScroll >= cont.eq(1).offset().top) {
                dot.removeClass("active");
                dot.eq(1).addClass("active");
            }
            if (wScroll >= cont.eq(2).offset().top) {
                dot.removeClass("active");
                dot.eq(2).addClass("active");
            }
            if (wScroll >= cont.eq(3).offset().top) {
                dot.removeClass("active");
                dot.eq(3).addClass("active");
            }
            if (wScroll >= cont.eq(4).offset().top) {
                dot.removeClass("active");
                dot.eq(4).addClass("active");
            }
            if (wScroll >= cont.eq(5).offset().top) {
                dot.removeClass("active");
                dot.eq(5).addClass("active");
            }
        });

        
        //햄버거메뉴
        const nav = document.getElementById('main-navigation')

        nav.addEventListener('mousemove', function(e) {
            const r = this.getBoundingClientRect()

            this.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
            this.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
        });

        nav.addEventListener('mouseout', function() {
            this.style.setProperty('--x', 0)
            this.style.setProperty('--y', 0)
        });
    
        
        $(window).scroll(function() {
            var wScroll = $(this).scrollTop();

            if (wScroll >= $("#section2").offset().top - $(window).height() / 2) {
                $("#section2").addClass("show");
            }
            if (wScroll >= $("#section3").offset().top - $(window).height() / 2) {
                $("#section3").addClass("show");
            }
            if (wScroll >= $("#section9").offset().top - $(window).height() / 2) {
                $("#section9").addClass("show");
            }
            if (wScroll >= $("#section10").offset().top - $(window).height() / 2) {
                $("#section10").addClass("show");
            }
            if (wScroll >= $("#section11").offset().top - $(window).height() / 2) {
                $("#section11").addClass("show");
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
            
            
            if (wScroll >= $("#section6").offset().top - $(window).height() / 2) {
                $("#section6").addClass("show");
            }
            if (wScroll >= $(".foot_content").offset().top - $(window).height() / 2) {
                $(".foot_content").addClass("show");
            }

            if (wScroll >= $(".foot_info").offset().top - $(window).height() / 2) {
                $(".foot_info").addClass("show");
            }
            if (wScroll >= $("#map").offset().top - $(window).height() / 2) {
                $("#map").addClass("show");
            }
            if (wScroll >= $(".mailForm").offset().top - $(window).height() / 2) {
                $(".mailForm").addClass("show");
            }
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


        //프로젝트 text-hover 효과
        $(".work_tit_list ul a").hover(function() {
            var num = $(".work_tit_pic ul a").index($(this));
            $(".work_view_list img").removeClass("show"),
                $(".work_view .work_view_list img").eq(num).addClass("show").siblings().removeClass("show");
        });
        $(".work_tit_pic ul a").click(function() {
            event.preventDefault();
        });


        //애니메이션 슬라이드 효과
        var mySwiper = new Swiper('.swiper-container2', {
            slidesPerView: 4,
            spaceBetween: 24,


            breakpoints: {
                600: {
                    slidesPerView: 1.4,
                    spaceBetween: 24
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24
                },
                960: {
                    slidesPerView: 3,
                    spaceBetween: 24
                }
            }
        });


        //버튼 마우스효과
        var docStyle = document.documentElement.style;

        // setting CSS variables inside this JS where they 
        // can be declaratively used inside the CSS file.
        document.addEventListener('mousemove', function(e) {
            docStyle.setProperty('--mouse-x', e.clientX);
            docStyle.setProperty('--mouse-y', e.clientY);
        });


       

        //스와이퍼 효과
        var mySwiper = new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'vertical',
            loop: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            autoplay: {
                delay: 5000,
            },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });