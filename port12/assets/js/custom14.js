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
        $progressText.text( Math.floor(current) + '%' );

        if(current >= 100){
            clearInterval(progressTimer);
            $progressBar.add($progressText).delay(500)
                .animate({opacity: 0},100,function(){
                    $container.animate({top: '-110%'},1000,'easeInOutQuint');
                });
            $(".sec1 .sec1_top").delay(200).animate({height: "50vh"},700,'easeInOutQuint').add().delay(700).animate({height: "100px"},500,'easeInOutQuint');
            $(".sec1 .sec1_bom").delay(200).animate({height: "50vh"},700,'easeInOutQuint').add().delay(700).animate({height: "100px"},500,'easeInOutQuint');

            $("body").addClass("active");
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
    
    if(wScroll >= $("#section1").offset().top - $(window).height()){
        mainTitle.addClass('on');
    }
    if(wScroll >= $("#section2").offset().top - $(window).height()/1.2){
        aboutTitle.addClass('on');
    }
    if(wScroll >= $("#section3").offset().top - $(window).height()/2 - 400){
        skillTitle.addClass('on');
    }
    if(wScroll >= $("#section4").offset().top - $(window).height()/2 - 400){
        proTitle.addClass('on');
    }
    if(wScroll >= $("#section5").offset().top - $(window).height()/2 - 400){
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
    }
    if(wScroll >= $('.keywordWrap').offset().top - $(window).height()/1.5){
        $(".keywordWrap .line").addClass('on');
    }
    if(wScroll >= $('.about_con3').offset().top - $(window).height()/1.5){
        aboutSpan3.addClass('on');
    }
    if(wScroll >= $('.img_scroll2').offset().top - $(window).height()/2){
        $('.img_scroll2').addClass('on');
    }
});


//keyword 팝업창
$(".me").click(function(){
    $(".pop-me").addClass('on');
});
$(".pop-me .closePop").click(function(){
    $(".pop-me").removeClass('on');
});

$(".charming").click(function(){
    $(".pop-charming").addClass('on');
});
$(".pop-charming .closePop").click(function(){
    $(".pop-charming").removeClass('on');
});

$(".coffee").click(function(){
    $(".pop-coffee").addClass('on');
});
$(".pop-coffee .closePop").click(function(){
    $(".pop-coffee").removeClass('on');
});

$(".publisher").click(function(){
    $(".pop-publisher").addClass('on');
});
$(".pop-publisher .closePop").click(function(){
    $(".pop-publisher").removeClass('on');
});

$(".developer").click(function(){
    $(".pop-developer").addClass('on');
});
$(".pop-developer .closePop").click(function(){
    $(".pop-developer").removeClass('on');
});

$(".wooshik").click(function(){
    $(".pop-wooshik").addClass('on');
});
$(".pop-wooshik .closePop").click(function(){
    $(".pop-wooshik").removeClass('on');
});

$(".wooshik").click(function(){
    $(".pop-flipped").addClass('on');
});
$(".pop-wooshik .closePop").click(function(){
    $(".pop-wooshik").removeClass('on');
});

$(".flipped").click(function(){
    $(".pop-flipped").addClass('on');
});
$(".pop-flipped .closePop").click(function(){
    $(".pop-flipped").removeClass('on');
});

$(".bear").click(function(){
    $(".pop-bear").addClass('on');
});
$(".pop-bear .closePop").click(function(){
    $(".pop-bear").removeClass('on');
});

$(".idle").click(function(){
    $(".pop-idle").addClass('on');
});
$(".pop-idle .closePop").click(function(){
    $(".pop-idle").removeClass('on');
});

$(".travel").click(function(){
    $(".pop-travel").addClass('on');
});
$(".pop-travel .closePop").click(function(){
    $(".pop-travel").removeClass('on');
});

$(".family").click(function(){
    $(".pop-family").addClass('on');
});
$(".pop-family .closePop").click(function(){
    $(".pop-family").removeClass('on');
});

$(".professional").click(function(){
    $(".pop-professional").addClass('on');
});
$(".pop-professional .closePop").click(function(){
    $(".pop-professional").removeClass('on');
});

$(".jeju").click(function(){
    $(".pop-jeju").addClass('on');
});
$(".pop-jeju .closePop").click(function(){
    $(".pop-jeju").removeClass('on');
});

$(".extreme").click(function(){
    $(".pop-extreme").addClass('on');
});
$(".pop-extreme .closePop").click(function(){
    $(".pop-extreme").removeClass('on');
});

$(".pizza").click(function(){
    $(".pop-pizza").addClass('on');
});
$(".pop-pizza .closePop").click(function(){
    $(".pop-pizza").removeClass('on');
});

$(".study").click(function(){
    $(".pop-study").addClass('on');
});
$(".pop-study .closePop").click(function(){
    $(".pop-study").removeClass('on');
});

$('.iphone').click(function(){
    $('.pop-iphone').addClass('on');
});
$('.pop-iphone .closePop').click(function(){
    $('.pop-iphone').removeClass('on');
});

$('.macaron').click(function(){
    $('.pop-macaron').addClass('on');
});
$('.pop-macaron .closePop').click(function(){
    $('.pop-macaron').removeClass('on');
});

$('.honest').click(function(){
    $('.pop-honest').addClass('on');
});
$('.pop-honest .closePop').click(function(){
    $('.pop-honest').removeClass('on');
});

$('.dabin').click(function(){
    $('.pop-dabin').addClass('on');
});
$('.pop-dabin .closePop').click(function(){
    $('.pop-dabin').removeClass('on');
});

$('.hoyoon').click(function(){
    $('.pop-hoyoon').addClass('on');
});
$('.pop-hoyoon .closePop').click(function(){
    $('.pop-hoyoon').removeClass('on');
});

$('.seokmin').click(function(){
    $('.pop-seokmin').addClass('on');
});
$('.pop-seokmin .closePop').click(function(){
    $('.pop-seokmin').removeClass('on');
});

$('.gaeun').click(function(){
    $('.pop-gaeun').addClass('on');
});
$('.pop-gaeun .closePop').click(function(){
    $('.pop-gaeun').removeClass('on');
});

$('.unique').click(function(){
    $('.pop-unique').addClass('on');
});
$('.pop-unique .closePop').click(function(){
    $('.pop-unique').removeClass('on');
});

$(".Doggy").click(function(){
    $(".pop-Doggy").addClass('on');
});
$(".pop-Doggy .closePop").click(function(){
    $(".pop-Doggy").removeClass('on');
});

$(".abroad").click(function(){
    $(".pop-abroad").addClass('on');
});
$(".pop-abroad .closePop").click(function(){
    $(".pop-abroad").removeClass('on');
});

$(".YOUTUBE").click(function(){
    $(".pop-YOUTUBE").addClass('on');
});
$(".pop-YOUTUBE .closePop").click(function(){
    $(".pop-YOUTUBE").removeClass('on');
});

$(".nature").click(function(){
    $(".pop-nature").addClass('on');
});
$(".pop-nature .closePop").click(function(){
    $(".pop-nature").removeClass('on');
});

$(".friends").click(function(){
    $(".pop-friends").addClass('on');
});
$(".pop-friends .closePop").click(function(){
    $(".pop-friends").removeClass('on');
});

$(".future").click(function(){
    $(".pop-future").addClass('on');
});
$(".pop-future .closePop").click(function(){
    $(".pop-future").removeClass('on');
});

$(".singer").click(function(){
    $(".pop-singer").addClass('on');
});
$(".pop-singer .closePop").click(function(){
    $(".pop-singer").removeClass('on');
});

$(".kitty").click(function(){
    $(".pop-kitty").addClass('on');
});
$(".pop-kitty .closePop").click(function(){
    $(".pop-kitty").removeClass('on');
});

$(".English").click(function(){
    $(".pop-English").addClass('on');
});
$(".pop-English .closePop").click(function(){
    $(".pop-English").removeClass('on');
});

$('.sneakers').click(function(){
    $('.pop-sneakers').addClass('on');
});
$('.pop-sneakers .closePop').click(function(){
    $('.pop-sneakers').removeClass('on');
});

$('.passion').click(function(){
    $('.pop-passion').addClass('on');
});
$('.pop-passion .closePop').click(function(){
    $('.pop-passion').removeClass('on');
});

$('.nietzsche').click(function(){
    $('.pop-nietzsche').addClass('on');
});
$('.pop-nietzsche .closePop').click(function(){
    $('.pop-nietzsche').removeClass('on');
});

$('.coke').click(function(){
    $('.pop-coke').addClass('on');
});
$('.pop-coke .closePop').click(function(){
    $('.pop-coke').removeClass('on');
});

$(".LOVE").click(function(){
    $(".pop-LOVE").addClass('on');
});
$(".pop-LOVE .closePop").click(function(){
    $(".pop-LOVE").removeClass('on');
});

$(".twenty6").click(function(){
    $(".pop-twenty6").addClass('on');
});
$(".pop-twenty6 .closePop").click(function(){
    $(".pop-twenty6").removeClass('on');
});

$(".mountain").click(function(){
    $(".pop-mountain").addClass('on');
});
$(".pop-mountain .closePop").click(function(){
    $(".pop-mountain").removeClass('on');
});

$(".latte").click(function(){
    $(".pop-latte").addClass('on');
});
$(".pop-latte .closePop").click(function(){
    $(".pop-latte").removeClass('on');
});

$(".notebook").click(function(){
    $(".pop-notebook").addClass('on');
});
$(".pop-notebook .closePop").click(function(){
    $(".pop-notebook").removeClass('on');
});

$('.trip').click(function(){
    $('.pop-trip').addClass('on');
});
$('.pop-trip .closePop').click(function(){
    $('.pop-trip').removeClass('on');
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

$('.stress').click(function(){
    $('.pop-stress').addClass('on');
});
$('.pop-stress .closePop').click(function(){
    $('.pop-stress').removeClass('on');
});

$('.salmon').click(function(){
    $('.pop-salmon').addClass('on');
});
$('.pop-salmon .closePop').click(function(){
    $('.pop-salmon').removeClass('on');
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
    
    if(wScroll >= $('.pro1').offset().top - $(window).height()){
        $('.pro1').find('.txt1').addClass('on');
        $('.pro1').find('.txt2').addClass('on');
    }
    if(wScroll >= $('.pro2').offset().top - $(window).height()){
        $('.pro2').find('.txt1').addClass('on');
        $('.pro2').find('.txt2').addClass('on');
    }
    if(wScroll >= $('.pro3').offset().top - $(window).height()){
        $('.pro3').find('.txt1').addClass('on');
        $('.pro3').find('.txt2').addClass('on');
    }
    if(wScroll >= $('.pro4').offset().top - $(window).height()){
        $('.pro4').find('.txt1').addClass('on');
        $('.pro4').find('.txt2').addClass('on');
    }
    if(wScroll >= $('.pro5').offset().top - $(window).height()){
        $('.pro5').find('.txt1').addClass('on');
        $('.pro5').find('.txt2').addClass('on');
    }
});


