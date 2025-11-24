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
            $('.sec1 .sec1_top').delay(200).animate({height: '50vh'},700,'easeInOutQuint').add().delay(700).animate({height: '100px'},500,'easeInOutQuint');
            $('.sec1 .sec1_bom').delay(200).animate({height: '50vh'},700,'easeInOutQuint').add().delay(700).animate({height: '100px'},500,'easeInOutQuint');
                
            $('body').addClass('active');
        }
        if(current > 99.98){
            current = 100;
        }
    }	
};


//title animation
var mainTitle = $('.sec1 .sec1_top');
var aboutTitle = $('.sec2 .tit');
var skillTitle = $('.sec3 .tit');
var proTitle = $('.sec4 .tit');
var conTitle = $('.sec5 .tit');

//Main text
var mainTxt = $('.sec1_top strong').text().split('').join('</span><span>');
    mainTxt = '<span>' + mainTxt + '</span>';
$('.sec1_top strong').html(mainTxt);

var aboutTxt = $('.sec2 .tit h2').text().split('').join('</span><span>');
    aboutTxt = '<span>' + aboutTxt + '</span>';
$('.sec2 .tit h2').html(aboutTxt);

var skillTxt = $('.sec3 .tit h2').text().split('').join('</span><span>');
    skillTxt = '<span>' + skillTxt + '</span>';
$('.sec3 .tit h2').html(skillTxt);

var proTxt = $('.sec4 .tit h2').text().split('').join('</span><span>');
    proTxt = '<span>' + proTxt + '</span>';
$('.sec4 .tit h2').html(proTxt);

var conTxt = $('.sec5 .tit h2').text().split('').join('</span><span>');
    conTxt = '<span>' + conTxt + '</span>';
$('.sec5 .tit h2').html(conTxt);


$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    if(wScroll >= $('#section1').offset().top - $(window).height()){
        mainTitle.addClass('on');
    }
    if(wScroll >= $('#section2').offset().top - $(window).height()/1.2){
        aboutTitle.addClass('on');
    }
    if(wScroll >= $('#section3').offset().top - $(window).height()/2 - 400){
        skillTitle.addClass('on');
    }
    if(wScroll >= $('#section4').offset().top - $(window).height()/2 - 400){
        proTitle.addClass('on');
    }
    if(wScroll >= $('#section5').offset().top - $(window).height()/2 - 400){
        conTitle.addClass('on');
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
    if(wScroll >= $('.img_scroll1').offset().top - $(window).height()/2){
        $('.img_scroll1').addClass('on');
        $('.words').addClass('on');
    }
    if(wScroll >= $('.keywordWrap').offset().top - $(window).height()/1.5){
        $('.keywordWrap .line').addClass('on');
    }
    if(wScroll >= $('.about_con3').offset().top - $(window).height()/1.5){
        aboutSpan3.addClass('on');
    }
    if(wScroll >= $('.img_scroll2').offset().top - $(window).height()/2){
        $('.img_scroll2').addClass('on');
    }
});


//keyword 팝업창
$('.me').click(function(){
    $('.pop-me').addClass('on');
});
$('.pop-me .closePop').click(function(){
    $('.pop-me').removeClass('on');
});

$('.charming').click(function(){
    $('.pop-charming').addClass('on');
});
$('.pop-charming .closePop').click(function(){
    $('.pop-charming').removeClass('on');
});

$('.coffee').click(function(){
    $('.pop-coffee').addClass('on');
});
$('.pop-coffee .closePop').click(function(){
    $('.pop-coffee').removeClass('on');
});

$('.publisher').click(function(){
    $('.pop-publisher').addClass('on');
});
$('.pop-publisher .closePop').click(function(){
    $('.pop-publisher').removeClass('on');
});

$('.developer').click(function(){
    $('.pop-developer').addClass('on');
});
$('.pop-developer .closePop').click(function(){
    $('.pop-developer').removeClass('on');
});

$('.idle').click(function(){
    $('.pop-idle').addClass('on');
});
$('.pop-idle .closePop').click(function(){
    $('.pop-idle').removeClass('on');
});

$('.travel').click(function(){
    $('.pop-travel').addClass('on');
});
$('.pop-travel .closePop').click(function(){
    $('.pop-travel').removeClass('on');
});

$('.professional').click(function(){
    $('.pop-professional').addClass('on');
});
$('.pop-professional .closePop').click(function(){
    $('.pop-professional').removeClass('on');
});

$('.pizza').click(function(){
    $('.pop-pizza').addClass('on');
});
$('.pop-pizza .closePop').click(function(){
    $('.pop-pizza').removeClass('on');
});

$('.study').click(function(){
    $('.pop-study').addClass('on');
});
$('.pop-study .closePop').click(function(){
    $('.pop-study').removeClass('on');
});

$('.YOUTUBE').click(function(){
    $('.pop-YOUTUBE').addClass('on');
});
$('.pop-YOUTUBE .closePop').click(function(){
    $('.pop-YOUTUBE').removeClass('on');
});

$('.singer').click(function(){
    $('.pop-singer').addClass('on');
});
$('.pop-singer .closePop').click(function(){
    $('.pop-singer').removeClass('on');
});

$('.sneakers').click(function(){
    $('.pop-sneakers').addClass('on');
});
$('.pop-sneakers .closePop').click(function(){
    $('.pop-sneakers').removeClass('on');
});

$('.nietzsche').click(function(){
    $('.pop-nietzsche').addClass('on');
});
$('.pop-nietzsche .closePop').click(function(){
    $('.pop-nietzsche').removeClass('on');
});

$('.LOVE').click(function(){
    $('.pop-LOVE').addClass('on');
});
$('.pop-LOVE .closePop').click(function(){
    $('.pop-LOVE').removeClass('on');
});

$('.latte').click(function(){
    $('.pop-latte').addClass('on');
});
$('.pop-latte .closePop').click(function(){
    $('.pop-latte').removeClass('on');
});

$('.soyeon').click(function(){
    $('.pop-soyeon').addClass('on');
});
$('.pop-soyeon .closePop').click(function(){
    $('.pop-soyeon').removeClass('on');
});

$('.react').click(function(){
    $('.pop-react').addClass('on');
});
$('.pop-react .closePop').click(function(){
    $('.pop-react').removeClass('on');
});

//skill
function counter() {
    if ($('.counter .count').size()) {
        $c = $('.counter .count'); 

        $c.each(function () {
            var $this = $(this);
            $this.data('target', parseInt($this.html()));
            $this.data('counted', false);
            $this.html('0');
        });

        $(window).on('scroll', function () {
            var speed = 3000;

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

                    // // easy pie : 동그라미 
                    // $('.pie').easyPieChart({        //데이터를 easyPieChart에서 가지고 와야함
                    //     barColor: '#fff',
                    //     trackColor: '#121212',                        
                    //     scaleColor: '#fff',
                    //     scaleLength: 5,
                    //     lineWidth: 10,
                    //     size: 300,
                    //     lineCap: 'round',
                    //     animate: { duration: speed, enabled: true }
                    // });
                }
            });
        }).triggerHandler('scroll');
    }
}

//project animation
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    var offset1 = (wScroll - $('.pro1 .desc .txt1').offset().top) * 0.4;
    var offset2 = (wScroll - $('.pro1 .desc .txt2').offset().top) * 0.2;
    
    var offset3 = (wScroll - $('.pro2 .desc .txt1').offset().top) * 0.4;
    var offset4 = (wScroll - $('.pro2 .desc .txt2').offset().top) * 0.2;
    
    var offset5 = (wScroll - $('.pro3 .desc .txt1').offset().top) * 0.4;
    var offset6 = (wScroll - $('.pro3 .desc .txt2').offset().top) * 0.2;
    
    var offset7 = (wScroll - $('.pro4 .desc .txt1').offset().top) * 0.4;
    var offset8 = (wScroll - $('.pro4 .desc .txt2').offset().top) * 0.2;
    
    var offset9 = (wScroll - $('.pro5 .desc .txt1').offset().top) * 0.4;
    var offset10 = (wScroll - $('.pro5 .desc .txt2').offset().top) * 0.2; 
    
    //pro1
    $('.pro1 .desc .txt1').css({'transform' : 'translateY('+ offset1 +'px)'});
    $('.pro1 .desc .txt2').css({'transform' : 'translateY('+ offset2 +'px)'});
    if(wScroll >= $('.pro1').offset().top - $(window).height()/1.3){
        $('.pro1').find('.txt1').addClass('on');
        $('.pro1').find('.txt2').addClass('on');
        $('.pro1 .desc .view').addClass('on');
        $('.pro1 .desc figure').addClass('on');
        $('.pro1 .pro_right').addClass('on');
    }
    
    //pro2
    $('.pro2 .desc .txt1').css({'transform' : 'translateY('+ offset3 +'px)'});
    $('.pro2 .desc .txt2').css({'transform' : 'translateY('+ offset4 +'px)'});
    if(wScroll >= $('.pro2').offset().top - $(window).height()/1.3){
        $('.pro2').find('.txt1').addClass('on');
        $('.pro2').find('.txt2').addClass('on');
        $('.pro2 .desc .view').addClass('on');
        $('.pro2 .desc figure').addClass('on');
        $('.pro2 .pro_left').addClass('on');
    }
    
    //pro3
    $('.pro3 .desc .txt1').css({'transform' : 'translateY('+ offset5 +'px)'});
    $('.pro3 .desc .txt2').css({'transform' : 'translateY('+ offset6 +'px)'});
    if(wScroll >= $('.pro3').offset().top - $(window).height()/1.3){
        $('.pro3').find('.txt1').addClass('on');
        $('.pro3').find('.txt2').addClass('on');
        $('.pro3 .desc .view').addClass('on');
        $('.pro3 .desc figure').addClass('on');
        $('.pro3 .pro_right').addClass('on');
    }
    
    //pro4
    $('.pro4 .desc .txt1').css({'transform' : 'translateY('+ offset7 +'px)'});
    $('.pro4 .desc .txt2').css({'transform' : 'translateY('+ offset8 +'px)'});
    if(wScroll >= $('.pro4').offset().top - $(window).height()/1.3){
        $('.pro4').find('.txt1').addClass('on');
        $('.pro4').find('.txt2').addClass('on');
        $('.pro4 .desc .view').addClass('on');
        $('.pro4 .desc figure').addClass('on');
        $('.pro4 .pro_left').addClass('on');
    }
    
    //pro5
    $('.pro5 .desc .txt1').css({'transform' : 'translateY('+ offset9 +'px)'});
    $('.pro5 .desc .txt2').css({'transform' : 'translateY('+ offset10 +'px)'});
    if(wScroll >= $('.pro5').offset().top - $(window).height()/1.3){
        $('.pro5').find('.txt1').addClass('on');
        $('.pro5').find('.txt2').addClass('on');
        $('.pro5 .desc .view').addClass('on');
        $('.pro5 .desc figure').addClass('on');
        $('.pro5 .pro_right').addClass('on');
    }
});

//Animation hover
$('.ani2').on('mouseover',function(){
    $(this).find('iframe').stop().animate({opacity:0.5},600);
    $(this).find('.ani_info').stop().animate({opacity:1},600);
}).on('mouseout',function(){
    $(this).find('iframe').stop().animate({opacity:1},600);
    $(this).find('.ani_info').stop().animate({opacity:0},600);
});

$('.ani3').on('mouseover',function(){
    $(this).find('iframe').stop().animate({opacity:0.5},600);
    $(this).find('.ani_info').stop().animate({opacity:1},600);
}).on('mouseout',function(){
    $(this).find('iframe').stop().animate({opacity:1},600);
    $(this).find('.ani_info').stop().animate({opacity:0},600);
});

$('.ani6').on('mouseover',function(){
    $(this).find('iframe').stop().animate({opacity:0.5},600);
    $(this).find('.ani_info').stop().animate({opacity:1},600);
}).on('mouseout',function(){
    $(this).find('iframe').stop().animate({opacity:1},600);
    $(this).find('.ani_info').stop().animate({opacity:0},600);
});

$('.ani7').on('mouseover',function(){
    $(this).find('iframe').stop().animate({opacity:0.5},600);
    $(this).find('.ani_info').stop().animate({opacity:1},600);
}).on('mouseout',function(){
    $(this).find('iframe').stop().animate({opacity:1},600);
    $(this).find('.ani_info').stop().animate({opacity:0},600);
});

$('.ani8').on('mouseover',function(){
    $(this).find('iframe').stop().animate({opacity:0.3},600);
    $(this).find('.ani_info').stop().animate({opacity:1},600);
}).on('mouseout',function(){
    $(this).find('iframe').stop().animate({opacity:1},600);
    $(this).find('.ani_info').stop().animate({opacity:0},600);
});

$('.ani9').on('mouseover',function(){
    $(this).find('iframe').stop().animate({opacity:0.3},600);
    $(this).find('.ani_info').stop().animate({opacity:1},600);
}).on('mouseout',function(){
    $(this).find('iframe').stop().animate({opacity:1},600);
    $(this).find('.ani_info').stop().animate({opacity:0},600);
});

//Animation modal
$('a[href="#"]').click(function(e) {
	e.preventDefault();
});
$('.ani2').click(function(){
    $('.modal.modal2').removeClass('out').removeClass('open').addClass('open')
});
$('.close').click(function(){
    $('.modal.modal2').addClass('out');
});
$('.ani3').click(function(){
    $('.modal.modal3').removeClass('out').removeClass('open').addClass('open')
});
$('.close').click(function(){
    $('.modal.modal3').addClass('out');
});
$('.ani6').click(function(){
    $('.modal.modal6').removeClass('out').removeClass('open').addClass('open')
});
$('.close').click(function(){
    $('.modal.modal6').addClass('out');
});
$('.ani7').click(function(){
    $('.modal.modal7').removeClass('out').removeClass('open').addClass('open')
});
$('.close').click(function(){
    $('.modal.modal7').addClass('out');
});
$('.ani8').click(function(){
    $('.modal.modal8').removeClass('out').removeClass('open').addClass('open')
});
$('.close').click(function(){
    $('.modal.modal8').addClass('out');
});
$('.ani9').click(function(){
    $('.modal.modal9').removeClass('out').removeClass('open').addClass('open')
});
$('.close').click(function(){
    $('.modal.modal9').addClass('out');
});

