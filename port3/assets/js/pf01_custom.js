$(window).scroll(function(){
  var wScroll = $(this).scrollTop();  //자기 자신을 표현할 땐, this 를 쓰자
  wScroll = parseInt(wScroll);
  $(".scroll_top").text(wScroll);
});

 //이미지 
//image traslate _ blue
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
    
    
    if(wScroll >= $("#section1").offset().top){
        
        var offset = wScroll - $("#section1").offset().top;
        
        $(".left").css({ 'transform' : 'translate('+ offset/5.9 +'px, '+ offset/15 +'px)'  });
        $(".right").css({ 'transform' : 'translate(-'+ offset/5.9 +'px, '+ offset/15 +'px)'  });
        $(".bottom-M2").css({ 'transform' : 'translate(0px, '+ offset/30 +'px)'  });
        $(".bottom-M1").css({ 'transform' : 'translate(0px, '+ offset/25 +'px)'  });
        $(".bottom0").css({ 'transform' : 'translate(0px, '+ offset/20 +'px)'  });
        $(".bottom-P1").css({ 'transform' : 'translate(0px, '+ offset/15 +'px)'  });
        $(".bottom-P1-5").css({ 'transform' : 'translate(0px, '+ offset/10 +'px)'  });
        $(".bottom-P1-Up").css({ 'transform' : 'translate(0px, -'+ offset/15 +'px)'  });
        $(".bottom-P2").css({ 'transform' : 'translate(0px, '+ offset/6 +'px)'  });
        $(".bottom-P2-Up").css({ 'transform' : 'translate(0px, -'+ offset/6 +'px)'  });
        $(".bottom-P3").css({ 'transform' : 'translate(0px, '+ offset/5 +'px)'  });
    };

        if(wScroll >= $("#section2").offset().top){
        
        var offset = wScroll - $("#section2").offset().top;
        
        $(".back").css({ 'transform' : 'translate(0px, '+ offset/3 +'px)'  });
        $(".mid").css({ 'transform' : 'translate(0px, '+ offset/6 +'px)'  });
        $(".front").css({ 'transform' : 'translate(0px, -'+ offset/3 +'px)'  });
    };

        if(wScroll >= $("#section3").offset().top){
        
        var offset = wScroll - $("#section3").offset().top;

        // $(".map").css({ 'transform' : 'scaleY('+ offset/700 +')','transform-origin' : ''+ data +'% 100%' , 'left'' : '+ offset/700 +'% });
        $(".map").css({ 'transform' : 'scaleY('+ offset/500 +')','left':'0%','transformOrigin':'center bottom'});
        $(".ball").css({ 'transform' : 'rotate(-'+ offset/10 +'deg'});
    };    

        if(wScroll >= 12945){
          $(".section4_container > img").addClass("move");
    } else {
      $(".section4_container > img").removeClass("move");
    }




});

// $(window).scroll(function(){
//     var wScroll = $(this).scrollTop();
//      $(".pinkF1").css({ 'transform' : 'translate(0px, -'+ offset/5 +'px)'  });
//     $(".pinkF2").css({ 'transform':'translateY(-'+ wScroll/4 +'px)' });
//     $(".pinkF3").css({ 'transform':'translateY(-'+ wScroll/2 +'px)' });
// });



/*******************************************************/
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
                    // $(".skill_wrap").addClass("show");
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

