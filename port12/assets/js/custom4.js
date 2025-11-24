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

//text animation

//Tit
var aboutTitle = $('.sec2 .tit');
var skillTitle = $('.sec3 .tit');
var proTitle = $('.sec4 .tit');
var conTitle = $('.sec5 .tit');

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


//about
var aboutSpan = $('.about_con1 .desc > span');
var aboutSpan2 = $('.about_con1 .desc2 > span');
var aboutSpan3 = $('.about_con2 .desc4 > span');
var aboutSpan4 = $('.about_con2 .desc6 > span');

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    if(wScroll >= $("#section2").offset().top - $(window).height()/2 - 400){
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
    if(wScroll >= $(".desc").offset().top - $(window).height()/1.1){
        aboutSpan.addClass('on');
    }
    if(wScroll >= $(".desc2").offset().top - $(window).height()/1.2){
        aboutSpan2.addClass('on');
    }
    if(wScroll >= $(".desc4").offset().top - $(window).height()/1.2){
        aboutSpan3.addClass('on');
    }
    
});

//skill
 //count
function counter() {        //함수안에 설정되어 있기 때문에 html에 실행함수 count(); 를 써주어야 작동이 됩니다.
    if ($('.counter .count').size()) {      //카운터의 갯수 설정
        $c = $('.counter .count');      //카운트의 카운트 사이즈를 재서 변수 설정

        $c.each(function () {
            var $this = $(this);
            $this.data('target', parseInt($this.html()));       //html에 숫자로 넣어줌
            $this.data('counted', false);
            $this.html('0');
        });

        $(window).on('scroll', function () {
            var speed = 3000;       //숫자 올라가는 스피드

            $c.each(function (i) {
                var $t = $(this);
                if (!$t.data('counted') && $(window).scrollTop() + $(window).height() >= $t.offset().top) {     //화면 사이즈
                    $(".score_tit").addClass("show");
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

