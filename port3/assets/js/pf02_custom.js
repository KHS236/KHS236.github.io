$(window).scroll(function(){
  var wScroll = $(this).scrollTop();  //자기 자신을 표현할 땐, this 를 쓰자
  wScroll = parseInt(wScroll);
  $(".scroll_top").text(wScroll);
});

        // ------------------------------ ( Group1 - blue )
        //image traslate _ blue
        $(window).scroll(function(){
            var wScroll = $(this).scrollTop();


        // hello 화면 
        if(wScroll >= 1){
          $(".section1_hello_box .layer1 p").addClass("typing");
        } else {
          $(".section4_container > img").removeClass("typing");
        }   

        // intro
        if(wScroll >= $(".section1_intro .intro1").offset().top - $(window).height()/2 ){
            $(".section1_intro .intro1").addClass("show");
        } else {
            $(".section1_intro .intro1").removeClass("show");
        }   
        
        if(wScroll >= $(".section1_intro .intro2").offset().top - $(window).height()/2 ){
            $(".section1_intro .intro2").addClass("show");
        } else {
            $(".section1_intro .intro2").removeClass("show");
        }     
        
    
        // 파란색 도형들 이동
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

            
        // ------------------------------ ( Group2 - yellow )
        // 노란색 배경 이동
        if(wScroll >= $("#section2").offset().top){
        
            var offset = wScroll - $("#section2").offset().top;

            $(".back").css({ 'transform' : 'translate(0px, '+ offset/3 +'px)'  });
            $(".mid").css({ 'transform' : 'translate(0px, '+ offset/6 +'px)'  });
            $(".front").css({ 'transform' : 'translate(0px, -'+ offset/3 +'px)'  });
        };
            
        //site이미지들 
        if(wScroll >= $(".siteWeb").offset().top - $(window).height()/2 ){
            $(".siteWeb").addClass("show");
        } else {
            $(".siteWeb").removeClass("show");
        }          
        if(wScroll >= $(".siteGa").offset().top - $(window).height()/2 ){
            $(".siteGa").addClass("show");
        } else {
            $(".siteGa").removeClass("show");
        }   
        if(wScroll >= $(".siteHtml").offset().top - $(window).height()/2 ){
            $(".siteHtml").addClass("show");
        } else {
            $(".siteHtml").removeClass("show");
        }   
        if(wScroll >= $(".siteSlide").offset().top - $(window).height()/2 ){
            $(".siteSlide").addClass("show");
        } else {
            $(".siteSlide").removeClass("show");
        }               
        if(wScroll >= $(".sitePa").offset().top - $(window).height()/2 ){
            $(".sitePa").addClass("show");
        } else {
            $(".sitePa").removeClass("show");
        }               
        if(wScroll >= $(".siteMo").offset().top - $(window).height()/2 ){
            $(".siteMo").addClass("show");
        } else {
            $(".siteMo").removeClass("show");
        }  
            
            
            
            
        // ------------------------------ ( Group3 - green )
        // 초록색 배경 이동    
        if(wScroll >= $("#section3").offset().top){
        
            var offset = wScroll - $("#section3").offset().top;

            // $(".map").css({ 'transform' : 'scaleY('+ offset/700 +')','transform-origin' : ''+ data +'% 100%' , 'left'' : '+ offset/700 +'% });
            $(".map").css({ 'transform' : 'scaleY('+ offset/450 +')','left':'0%','transformOrigin':'center bottom'});
            $(".ball").css({ 'transform' : 'rotate(-'+ offset/10 +'deg'});
        };    

        $(".ani1 .aniImg").click(function(){
            $(".ani1 #modal").addClass("show");
        });
        $(".ani1 #modal .close2").click(function(){
            $(".ani1 #modal").removeClass("show");
        });

        $(".ani2 .aniImg").click(function(){
            $(".ani2 #modal").addClass("show");
        });
        $(".ani2 #modal .close2").click(function(){
            $(".ani2 #modal").removeClass("show");
        });

        $(".ani3 .aniImg").click(function(){
            $(".ani3 #modal").addClass("show");
        });
        $(".ani3 #modal .close2").click(function(){
            $(".ani3 #modal").removeClass("show");
        });

        $(".ani4 .aniImg").click(function(){
            $(".ani4 #modal").addClass("show");
        });
        $(".ani4 #modal .close2").click(function(){
            $(".ani4 #modal").removeClass("show");
        });

        $(".ani5 .aniImg").click(function(){
            $(".ani5 #modal").addClass("show");
        });
        $(".ani5 #modal .close2").click(function(){
            $(".ani5 #modal").removeClass("show");
        });

        $(".ani6 .aniImg").click(function(){
            $(".ani6 #modal").addClass("show");
        });
        $(".ani6 #modal .close2").click(function(){
            $(".ani6 #modal").removeClass("show");
        });

        $(".ani7 .aniImg").click(function(){
            $(".ani7 #modal").addClass("show");
        });
        $(".ani7 #modal .close2").click(function(){
            $(".ani7 #modal").removeClass("show");
        });

        $(".ani8 .aniImg").click(function(){
            $(".ani8 #modal").addClass("show");
        });
        $(".ani8 #modal .close2").click(function(){
            $(".ani8 #modal").removeClass("show");
        });

        $(".ani9 .aniImg").click(function(){
            $(".ani9 #modal").addClass("show");
        });
        $(".ani9 #modal .close2").click(function(){
            $(".ani9 #modal").removeClass("show");
        });

        $(".ani10 .aniImg").click(function(){
            $(".ani10 #modal").addClass("show");
        });
        $(".ani10 #modal .close2").click(function(){
            $(".ani10 #modal").removeClass("show");
        });




        // ------------------------------ ( Group4 - pink )
        // 핑크 도형 이동
        // var wScrollPer = wScroll/23500*100

        //     if(wScrollPer >= 50){
        //       $(".section4_container > img").addClass("move");
        // } else {
        //   $(".section4_container > img").removeClass("move");
        // }
        if(wScroll >= $(".pinkBg").offset().top - $(window).height()/2 ){
            $(".section4_container > img").addClass("move");
        } else {
            $(".section4_container > img").removeClass("move");
        }  


        //View my note
        if(wScroll >= $(".viewBox_wrap").offset().top - $(window).height()/2 ){
            $(".viewBox_wrap").addClass("show");
        } else {
            $(".viewBox_wrap").removeClass("show");
        }  



        //키워드
        if(wScroll >= $("#section5").offset().top - $(window).height()/2 ){
            $(".keywordWrap").addClass("show");
        } else {
            $(".keywordWrap").removeClass("show");
        }  
 

        //.storyWrap1
        if(wScroll >= $(".storyWrap.one").offset().top - $(window).height()/2 ){
            $(".storyWrap.one").addClass("show");
        } else {
            $(".storyWrap.one").removeClass("show");
        }  
        //.storyWrap2
        if(wScroll >= $(".storyWrap.two").offset().top - $(window).height()/2 ){
            $(".storyWrap.two").addClass("show");
        } else {
            $(".storyWrap.two").removeClass("show");
        }  
        //.storyWrap3
        if(wScroll >= $(".storyWrap.three").offset().top - $(window).height()/2 ){
            $(".storyWrap.three").addClass("show");
        } else {
            $(".storyWrap.three").removeClass("show");
        }  

});

// $(window).scroll(function(){
//     var wScroll = $(this).scrollTop();
//      $(".pinkF1").css({ 'transform' : 'translate(0px, -'+ offset/5 +'px)'  });
//     $(".pinkF2").css({ 'transform':'translateY(-'+ wScroll/4 +'px)' });
//     $(".pinkF3").css({ 'transform':'translateY(-'+ wScroll/2 +'px)' });
// });


/*******************************************************/
$(".me").click(function(){
    $(".pop-me").addClass("show");
});
$(".pop-me .closePop").click(function(){
    $(".pop-me").removeClass("show");
});

$(".charming").click(function(){
    $(".pop-charming").addClass("show");
});
$(".pop-charming .closePop").click(function(){
    $(".pop-charming").removeClass("show");
});

$(".chocolate").click(function(){
    $(".pop-chocolate").addClass("show");
});
$(".pop-chocolate .closePop").click(function(){
    $(".pop-chocolate").removeClass("show");
});

$(".publisher").click(function(){
    $(".pop-publisher").addClass("show");
});
$(".pop-publisher .closePop").click(function(){
    $(".pop-publisher").removeClass("show");
});

$(".developer").click(function(){
    $(".pop-developer").addClass("show");
});
$(".pop-developer .closePop").click(function(){
    $(".pop-developer").removeClass("show");
});

$(".travel").click(function(){
    $(".pop-travel").addClass("show");
});
$(".pop-travel .closePop").click(function(){
    $(".pop-travel").removeClass("show");
});

$(".family").click(function(){
    $(".pop-family").addClass("show");
});
$(".pop-family .closePop").click(function(){
    $(".pop-family").removeClass("show");
});

$(".professional").click(function(){
    $(".pop-professional").addClass("show");
});
$(".pop-professional .closePop").click(function(){
    $(".pop-professional").removeClass("show");
});

$(".Australia").click(function(){
    $(".pop-Australia").addClass("show");
});
$(".pop-Australia .closePop").click(function(){
    $(".pop-Australia").removeClass("show");
});

$(".extreme").click(function(){
    $(".pop-extreme").addClass("show");
});
$(".pop-extreme .closePop").click(function(){
    $(".pop-extreme").removeClass("show");
});

$(".Doggy").click(function(){
    $(".pop-Doggy").addClass("show");
});
$(".pop-Doggy .closePop").click(function(){
    $(".pop-Doggy").removeClass("show");
});

$(".abroad").click(function(){
    $(".pop-abroad").addClass("show");
});
$(".pop-abroad .closePop").click(function(){
    $(".pop-abroad").removeClass("show");
});


$(".YOUTUBE").click(function(){
    $(".pop-YOUTUBE").addClass("show");
});
$(".pop-YOUTUBE .closePop").click(function(){
    $(".pop-YOUTUBE").removeClass("show");
});

$(".nature").click(function(){
    $(".pop-nature").addClass("show");
});
$(".pop-nature .closePop").click(function(){
    $(".pop-nature").removeClass("show");
});

$(".friends").click(function(){
    $(".pop-friends").addClass("show");
});
$(".pop-friends .closePop").click(function(){
    $(".pop-friends").removeClass("show");
});

$(".future").click(function(){
    $(".pop-future").addClass("show");
});
$(".pop-future .closePop").click(function(){
    $(".pop-future").removeClass("show");
});

$(".Throne").click(function(){
    $(".pop-Throne").addClass("show");
});
$(".pop-Throne .closePop").click(function(){
    $(".pop-Throne").removeClass("show");
});

$(".kitty").click(function(){
    $(".pop-kitty").addClass("show");
});
$(".pop-kitty .closePop").click(function(){
    $(".pop-kitty").removeClass("show");
});

$(".English").click(function(){
    $(".pop-English").addClass("show");
});
$(".pop-English .closePop").click(function(){
    $(".pop-English").removeClass("show");
});

$(".LOVE").click(function(){
    $(".pop-LOVE").addClass("show");
});
$(".pop-LOVE .closePop").click(function(){
    $(".pop-LOVE").removeClass("show");
});

$(".twenty8").click(function(){
    $(".pop-twenty8").addClass("show");
});
$(".pop-twenty8 .closePop").click(function(){
    $(".pop-twenty8").removeClass("show");
});

$(".ocean").click(function(){
    $(".pop-ocean").addClass("show");
});
$(".pop-ocean .closePop").click(function(){
    $(".pop-ocean").removeClass("show");
});

$(".latte").click(function(){
    $(".pop-latte").addClass("show");
});
$(".pop-latte .closePop").click(function(){
    $(".pop-latte").removeClass("show");
});

$(".car").click(function(){
    $(".pop-car").addClass("show");
});
$(".pop-car .closePop").click(function(){
    $(".pop-car").removeClass("show");
});

/*******************************************************/
// //이미지 이펙트1
// var $wrap1 = $(".storyWrap").eq(0).find(".storyImg");
// var x1 = 0;
// var y1 = 0;
// var folloxX1 = 0;
// var folloxY1 = 0;
// var friction1 = 1/20;    //속도

// function animate1(){
//     x1 += (folloxX1 - x1) * friction1;
//     y1 += (folloxY1 - y1) * friction1;
//     $wrap1.css({
//     "transform":"perspective(600px) rotatey("+ -x1 +"deg) rotatex("+ y1 +"deg)" 
//     });
//     window.requestAnimationFrame(animate1);
//     //console.log(x);
// }

//  $(".storyWrap").eq(0).on('mousemove click', function(e){
//     var iMouseX = Math.max(-100, Math.min(100,  $(".storyWrap").eq(0).width()/2 - e.clientX));
//     var iMouseY = Math.max(-100, Math.min(100,  $(".storyWrap").eq(0).height()/2 - e.clientY));
//     folloxX1 = (12 * iMouseX) / 100;
//     folloxY1 = (12 * iMouseY) / 100;
// })
// animate1();


// //이미지 이펙트2
// var $wrap2 = $(".storyWrap").eq(1).find(".storyImg");
// var x2 = 0;
// var y2 = 0;
// var folloxX2 = 0;
// var folloxY2 = 0;
// var friction2 = 1/20;    //속도

// function animate2(){
//     x2 += (folloxX2 - x2) * friction2;
//     y2 += (folloxY2 - y2) * friction2;
//     $wrap2.css({
//     "transform":"perspective(600px) rotatey("+ -x2 +"deg) rotatex("+ y2 +"deg)" 
//     });
//     window.requestAnimationFrame(animate2);
//     //console.log(x);
// }

//  $(".storyWrap").eq(1).on('mousemove click', function(e){
//     var iMouseX = Math.max(-100, Math.min(100,  $(".storyWrap").eq(1).width()/2 - e.clientX));
//     var iMouseY = Math.max(-100, Math.min(100,  $(".storyWrap").eq(1).height()/2 - e.clientY));
//     folloxX2 = (12 * iMouseX) / 100;
//     folloxY2 = (12 * iMouseY) / 100;
// })
// animate2();


// //이미지 이펙트3
// var $wrap3 = $(".storyWrap").eq(2).find(".storyImg");
// var x3 = 0;
// var y3 = 0;
// var folloxX3 = 0;
// var folloxY3 = 0;
// var friction3 = 1/20;    //속도

// function animate3(){
//     x3 += (folloxX3 - x3) * friction3;
//     y3 += (folloxY3 - y3) * friction3;
//     $wrap3.css({
//     "transform":"perspective(600px) rotatey("+ -x3 +"deg) rotatex("+ y3 +"deg)" 
//     });
//     window.requestAnimationFrame(animate3);
//     //console.log(x);
// }

//  $(".storyWrap").eq(2).on('mousemove click', function(e){
//     var iMouseX = Math.max(-100, Math.min(100,  $(".storyWrap").eq(2).width()/2 - e.clientX));
//     var iMouseY = Math.max(-100, Math.min(100,  $(".storyWrap").eq(2).height()/2 - e.clientY));
//     folloxX3 = (12 * iMouseX) / 100;
//     folloxY3 = (12 * iMouseY) / 100;
// })
// animate3();




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

/***************************************************************/
// //드래그 이미지
// var _DRAGGGING_STARTED = 0;
// var _LAST_MOUSEMOVE_POSITION = { x: null, y: null };
// var _DIV_OFFSET = $('#image-container').offset();
// var _CONTAINER_WIDTH = $("#image-container").outerWidth();
// var _CONTAINER_HEIGHT = $("#image-container").outerHeight();
// var _IMAGE_WIDTH;
// var _IMAGE_HEIGHT;
// var _IMAGE_LOADED = 0;

// // Check whether image is cached or wait for the image to load 
// // This is necessary before calculating width and height of the image
// if($('#drag-image').get(0).complete) {
//     ImageLoaded();
// }
// else {
//     $('#drag-image').on('load', function() {
//         ImageLoaded();
//     });
// }

// // Image is loaded
// function ImageLoaded() {
//     _IMAGE_WIDTH = $("#drag-image").width();
//     _IMAGE_HEIGHT = $("#drag-image").height();
//     _IMAGE_LOADED = 1;  
// }

// $('#image-container').on('mousedown', function(event) {
//     /* Image should be loaded before it can be dragged */
//     if(_IMAGE_LOADED == 1) { 
//         _DRAGGGING_STARTED = 1;

//         /* Save mouse position */
//         _LAST_MOUSE_POSITION = { x: event.pageX - _DIV_OFFSET.left, y: event.pageY - _DIV_OFFSET.top };
//     }
// });

// $('#image-container').on('mouseup', function() {
//     _DRAGGGING_STARTED = 0;
// });

// $('#image-container').on('mousemove', function(event) {
//     if(_DRAGGGING_STARTED == 1) {
//         var current_mouse_position = { x: event.pageX - _DIV_OFFSET.left, y: event.pageY - _DIV_OFFSET.top };
//         var change_x = current_mouse_position.x - _LAST_MOUSE_POSITION.x;
//         var change_y = current_mouse_position.y - _LAST_MOUSE_POSITION.y;

//         /* Save mouse position */
//         _LAST_MOUSE_POSITION = current_mouse_position;

//         var img_top = parseInt($("#drag-image").css('top'), 10);
//         var img_left = parseInt($("#drag-image").css('left'), 10);

//         var img_top_new = img_top + change_y;
//         var img_left_new = img_left + change_x;

//         /* Validate top and left do not fall outside the image, otherwise white space will be seen */
//         if(img_top_new > 0)
//             img_top_new = 0;
//         if(img_top_new < (_CONTAINER_HEIGHT - _IMAGE_HEIGHT))
//             img_top_new = _CONTAINER_HEIGHT - _IMAGE_HEIGHT;

//         if(img_left_new > 0)
//             img_left_new = 0;
//         if(img_left_new < (_CONTAINER_WIDTH - _IMAGE_WIDTH))
//             img_left_new = _CONTAINER_WIDTH - _IMAGE_WIDTH;

//         $("#drag-image").css({ top: img_top_new + 'px', left: img_left_new + 'px' });
//     }
// });



/******************************************************************/
//이미지 클릭시 팝업창 - days
$(".daysback.d1-back").click(function(){
    $(".daysPop.dpop1").addClass("show");
});
$(".dpop1 .imgClose").click(function(){
    $(".daysPop.dpop1").removeClass("show");
});

$(".daysback.d2-back").click(function(){
    $(".daysPop.dpop2").addClass("show");
});
$(".dpop2 .imgClose").click(function(){
    $(".daysPop.dpop2").removeClass("show");
});

$(".daysback.d3-back").click(function(){
    $(".daysPop.dpop3").addClass("show");
});
$(".dpop3 .imgClose").click(function(){
    $(".daysPop.dpop3").removeClass("show");
});

$(".daysback.d4-back").click(function(){
    $(".daysPop.dpop4").addClass("show");
});
$(".dpop4 .imgClose").click(function(){
    $(".daysPop.dpop4").removeClass("show");
});




//3D cube 
// var events = new Events();
// events.add = function(obj) {
//   obj.events = { };
// }
// events.implement = function(fn) {
//   fn.prototype = Object.create(Events.prototype);
// }

// function Events() {
//   this.events = { };
// }
// Events.prototype.on = function(name, fn) {
//   var events = this.events[name];
//   if (events == undefined) {
//     this.events[name] = [ fn ];
//     this.emit('event:on', fn);
//   } else {
//     if (events.indexOf(fn) == -1) {
//       events.push(fn);
//       this.emit('event:on', fn);
//     }
//   }
//   return this;
// }
// Events.prototype.once = function(name, fn) {
//   var events = this.events[name];
//   fn.once = true;
//   if (!events) {
//     this.events[name] = [ fn ];
//     this.emit('event:once', fn);
//   } else {
//     if (events.indexOf(fn) == -1) {
//       events.push(fn);
//       this.emit('event:once', fn);
//     }
//   }
//   return this;
// }
// Events.prototype.emit = function(name, args) {
//   var events = this.events[name];
//   if (events) {
//     var i = events.length;
//     while(i--) {
//       if (events[i]) {
//         events[i].call(this, args);
//         if (events[i].once) {
//           delete events[i];
//         }
//       }
//     }
//   }
//   return this;
// }
// Events.prototype.unbind = function(name, fn) {
//   if (name) {
//     var events = this.events[name];
//     if (events) {
//       if (fn) {
//         var i = events.indexOf(fn);
//         if (i != -1) {
//           delete events[i];
//         }
//       } else {
//         delete this.events[name];
//       }
//     }
//   } else {
//     delete this.events;
//     this.events = { };
//   }
//   return this;
// }

// var userPrefix;

// var prefix = (function () {
//   var styles = window.getComputedStyle(document.documentElement, ''),
//     pre = (Array.prototype.slice
//       .call(styles)
//       .join('') 
//       .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
//     )[1],
//     dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
//   userPrefix = {
//     dom: dom,
//     lowercase: pre,
//     css: '-' + pre + '-',
//     js: pre[0].toUpperCase() + pre.substr(1)
//   };
// })();

// function bindEvent(element, type, handler) {
//   if(element.addEventListener) {
//     element.addEventListener(type, handler, false);
//   } else {
//     element.attachEvent('on' + type, handler);
//   }
// }

// function Viewport(data) {
//   events.add(this);

//   var self = this;

//   this.element = data.element;
//   this.fps = data.fps;
//   this.sensivity = data.sensivity;
//   this.sensivityFade = data.sensivityFade;
//   this.touchSensivity = data.touchSensivity;
//   this.speed = data.speed;

//   this.lastX = 0;
//   this.lastY = 0;
//   this.mouseX = 0;
//   this.mouseY = 0;
//   this.distanceX = 0;
//   this.distanceY = 0;
//   this.positionX = 1122;
//   this.positionY = 136;
//   this.torqueX = 0;
//   this.torqueY = 0;

//   this.down = false;
//   this.upsideDown = false;

//   this.previousPositionX = 0;
//   this.previousPositionY = 0;

//   this.currentSide = 0;
//   this.calculatedSide = 0;


//   bindEvent(document, 'mousedown', function() {
//     self.down = true;
//   });

//   bindEvent(document, 'mouseup', function() {
//     self.down = false;
//   });
  
//   bindEvent(document, 'keyup', function() {
//     self.down = false;
//   });

//   bindEvent(document, 'mousemove', function(e) {
//     self.mouseX = e.offsetX;
//     self.mouseY = e.offsetY;
//   });

//   bindEvent(document, 'touchstart', function(e) {

//     self.down = true;
//     e.touches ? e = e.touches[0] : null;
//     self.mouseX = e.offsetX / self.touchSensivity;
//     self.mouseY = e.offsetY / self.touchSensivity;
//     self.lastX  = self.mouseX;
//     self.lastY  = self.mouseY;
//   });

//   bindEvent(document, 'touchmove', function(e) {
//     if(e.preventDefault) { 
//       e.preventDefault();
//     }

//     if(e.touches.length == 1) {

//       e.touches ? e = e.touches[0] : null;

//       self.mouseX = e.offsetX / self.touchSensivity;
//       self.mouseY = e.offsetY / self.touchSensivity;

//     }
//   });

//   bindEvent(document, 'touchend', function(e) {
//     self.down = false;
//   });  

//   setInterval(this.animate.bind(this), this.fps);

// }
// events.implement(Viewport);
// Viewport.prototype.animate = function() {

//   this.distanceX = (this.mouseX - this.lastX);
//   this.distanceY = (this.mouseY - this.lastY);

//   this.lastX = this.mouseX;
//   this.lastY = this.mouseY;

//   if(this.down) {
//     this.torqueX = this.torqueX * this.sensivityFade + (this.distanceX * this.speed - this.torqueX) * this.sensivity;
//     this.torqueY = this.torqueY * this.sensivityFade + (this.distanceY * this.speed - this.torqueY) * this.sensivity;
//   }

//   if(Math.abs(this.torqueX) > 1.0 || Math.abs(this.torqueY) > 1.0) {
//     if(!this.down) {
//       this.torqueX *= this.sensivityFade;
//       this.torqueY *= this.sensivityFade;
//     }

//     this.positionY -= this.torqueY;

//     if(this.positionY > 360) {
//       this.positionY -= 360;
//     } else if(this.positionY < 0) {
//       this.positionY += 360;
//     }

//     if(this.positionY > 90 && this.positionY < 270) {
//       this.positionX -= this.torqueX;

//       if(!this.upsideDown) {
//         this.upsideDown = true;
//         this.emit('upsideDown', { upsideDown: this.upsideDown });
//       }

//     } else {

//       this.positionX += this.torqueX;

//       if(this.upsideDown) {
//         this.upsideDown = false;
//         this.emit('upsideDown', { upsideDown: this.upsideDown });
//       }
//     }





//     if(this.calculatedSide !== this.currentSide) {
//       this.currentSide = this.calculatedSide;
//       this.emit('sideChange');
//     }

//   }

//   this.element.style[userPrefix.js + 'Transform'] = 'rotateX(' + this.positionY + 'deg) rotateY(' + this.positionX + 'deg)';

//   if(this.positionY != this.previousPositionY || this.positionX != this.previousPositionX) {
//     this.previousPositionY = this.positionY;
//     this.previousPositionX = this.positionX;

//     this.emit('rotate');

//   }

// }
// var viewport = new Viewport({
//   element: document.getElementsByClassName('cube')[0],
//   fps: 20,
//   sensivity: .1,
//   sensivityFade: .93,
//   speed: 0.5,
//   touchSensivity: 1.5
// });

// function Cube(data) {
//   var self = this;

//   this.element = data.element;
//   this.sides = this.element.getElementsByClassName('side');

//   this.viewport = data.viewport;
//   this.viewport.on('rotate', function() {
//     self.rotateSides();
//   });
//   this.viewport.on('upsideDown', function(obj) {
//     self.upsideDown(obj);
//   });
//   this.viewport.on('sideChange', function() {
//     self.sideChange();
//   });
// }



// new Cube({
//   viewport: viewport,
//   element: document.getElementsByClassName('cube')[0]
// });