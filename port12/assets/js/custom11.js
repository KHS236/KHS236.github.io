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
}


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
var aboutSpan4 = $('.about_con4 .about_show4');
var aboutSpan5 = $('.about_con5 .about_show5');
var aboutSpan6 = $('.about_con4 .about_show6');
var aboutSpan7 = $('.about_con5 .about_show6');

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    if(wScroll >= $('.about_con1').offset().top - $(window).height()/2){
        aboutSpan.addClass('on');
    }
    if(wScroll >= $('.about_con2').offset().top - $(window).height()/1.3){
        aboutSpan2.addClass('on');
    }
    if(wScroll >= $('.about_con3').offset().top - $(window).height()/1.5){
        aboutSpan3.addClass('on');
    }
    if(wScroll >= $('.about_con4').offset().top - $(window).height()){
        aboutSpan4.addClass('on');
        aboutSpan6.addClass('on');
    }
    if(wScroll >= $('.about_con5').offset().top - $(window).height()){
        aboutSpan5.addClass('on');
        aboutSpan7.addClass('on');
    }
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
                    $(".score_tit").addClass('show');
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

//skill animation
var skillLeft1 = $('.skill_l .skill_left span');
var skillRight1 = $('.skill_l .skill_right h4');
var skillLeft2 = $('.skill_s .skill_left span');
var skillRight2 = $('.skill_s .skill_right h4');
var skillLeft3 = $('.skill_m .skill_left span');
var skillRight3 = $('.skill_m .skill_right h4');

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    if(wScroll >= $(".skill_l").offset().top - $(window).height()/1.5){
        skillLeft1.addClass('on');
        skillRight1.addClass('on');
    }
    if(wScroll >= $(".skill_s").offset().top - $(window).height()/1.5){
        skillLeft2.addClass('on');
        skillRight2.addClass('on');
    }
    if(wScroll >= $(".skill_m").offset().top - $(window).height()/1.5){
        skillLeft3.addClass('on');
        skillRight3.addClass('on');
    }
});



//product animation
var proSpan = $('.project .pro_show');
var proSpan2 = $('.pro_con1 .pro_top .pro_tit span');
var proSpan3 = $('.pro_con1 .pro_top .pro_tit2 span');
var proSpan4 = $('.pro_con2 .pro_top .pro_tit span');
var proSpan5 = $('.pro_con2 .pro_top .pro_tit2 span');
var proImgRight = $('.pro_con1 .pro_bottom .pro_img');
var proImgLeft = $('.pro_con2 .pro_bottom .pro_img');
var proDesc1 = $('.pro_con1 .pro_bottom .pro_txt p');
var proDesc2 = $('.pro_con2 .pro_bottom .pro_txt p');
var proBtn1 = $('.pro_con1 .pro_bottom .pro_txt .view');
var proBtn2 = $('.pro_con2 .pro_bottom .pro_txt .view');

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    if(wScroll >= $(".project").offset().top - $(window).height()/2){
        proSpan.addClass('on');
    }
    if(wScroll >= $('.pro_con1').offset().top - $(window).height()/2){
        $('.pro_con1 .pro_top').addClass('on');
        proSpan2.addClass('on');
    }
    if(wScroll >= $('.pro_con1 .pro_tit').offset().top - $(window).height()/2){
        proSpan3.addClass('on');
    }
    if(wScroll >= $('.pro_con1 .pro_bottom').offset().top - $(window).height()/1.8){
        proImgRight.addClass('on');
        proDesc1.addClass('on');
        proBtn1.addClass('on');
    }
    if(wScroll >= $('.pro_con2').offset().top - $(window).height()/2){
        $('.pro_con2 .pro_top').addClass('on');
        proSpan4.addClass('on');
    }
    if(wScroll >= $('.pro_con2 .pro_tit').offset().top - $(window).height()/2){
        proSpan5.addClass('on');
    }
    if(wScroll >= $('.pro_con2 .pro_bottom').offset().top - $(window).height()/1.8){
        proImgLeft.addClass('on');
        proDesc2.addClass('on');
        proBtn2.addClass('on');
    }
});


