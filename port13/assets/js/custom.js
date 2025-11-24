/*백그라운드 캔버스 스크립트:비트맵------------------*/
var c = document.getElementById("canv");
var $1 = c.getContext("2d");

var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;

var arr = [];
var u = 0;
var dep = w;
var dp = 0.70;
var ms = {
  x: 0,
  y: 0
};
var msd = {
  x: 0,
  y: 0
};

function Obj(x, y, z) {
  this.set(x, y, z);
}

Obj.prototype = {
  set: function(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  },
  rotX: function(ang) {
    var y = this.y;
    var z = this.z;
    this.y = y * Math.cos(ang) - z * Math.sin(ang);
    this.z = z * Math.cos(ang) + y * Math.sin(ang);
  },
  rotY: function(ang) {
    var x = this.x;
    var z = this.z;
    this.x = x * Math.cos(ang) - z * Math.sin(ang);
    this.z = z * Math.cos(ang) + x * Math.sin(ang);
  },
  rotZ: function(ang) {
    var x = this.x;
    var y = this.y;
    this.x = x * Math.cos(ang) - y * Math.sin(ang);
    this.y = y * Math.cos(ang) + x * Math.sin(ang);
  }
};

function Part(x, y, z) {
  this.op = new Obj(x, y, z);
  this.rp = new Obj(x, y, z);
  this.rot = new Obj();
  this.vel = new Obj();
  this.col = 'hsla(216,95%,85%,'+rnd(0.5, 1)+')';
}

function upd(rot) {
  var pos;
  var rot;
  var vel;
  var op;
  var rp;
  var col;
  var size;
  for (var i in arr) {
    op = arr[i].op;
    rp = arr[i].rp;
    rot = arr[i].rot;
    vel = arr[i].vel;
    col = arr[i].col;
    vel.x += msd.x * 0.15;
    vel.y += msd.y * 0.15;
    rp.set(op.x, op.y, op.z);

    rot.x += vel.x;
    rot.y += vel.y;
    rot.z += vel.z;

    rot.x = rot.x > Math.PI * 2 ? 0 : rot.x;
    rot.y = rot.y > Math.PI * 2 ? 0 : rot.y;

    rp.rotY(rot.y);
    rp.rotX(rot.x);

    vel.set(
      vel.x * dp,
      vel.y * dp,
      0
    );
  }
  msd.x = 0.0005;
  msd.y = 0.0005;
}

function draw() {
  //var t = "Sparkling Blue".split("").join(String.fromCharCode(0x2004));
  $1.font = "4em Poiret One";
  $1.fillStyle = 'hsla(216,95%,85%,.3)';
  $1.textBaseline = 'middle';
  //$1.fillText(t, (c.width - $1.measureText(t).width) * 0.5, c.height * 0.5);
  var p, dth;
  for (var i in arr) {
    p = arr[i];
    dth = ((p.rp.z / dep) + 1);
    $1.fillStyle = p.col;
    $1.fillRect(w + p.rp.x, h + p.rp.y, rnd(dth/0.8, dth/2),  dth/0.9);
  }
}

function rnd(min, max) {
  return Math.random() * (max - min) + min;
}

function go() {
  for (var i = 0; i < 6800; i++) {
    var d = new Part(
      rnd(-w, h),
      rnd(-w, h),
      rnd(-dep, dep)
    );
    d.vel.set(0, 0, 0);
    arr.push(d);
  }
}

window.addEventListener('mousemove', function(e) {
  msd.x = (e.clientY - ms.y) / w;
  msd.y = (e.clientX - ms.x) / h;
  ms.x = e.clientX;
  ms.y = e.clientY;
}, false);

window.addEventListener('touchmove', function(e) {
  e.preventDefault();
  msd.x = (e.touches[0].clientY - ms.y) / w;
  msd.y = (e.touches[0].clientX - ms.x) / h;
  ms.x = e.touches[0].clientX;
  ms.y = e.touches[0].clientY;
}, false);

window.addEventListener('resize', function(e) {
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
}, false);

function run() {
  $1.clearRect(0, 0, w, h);
  var g_ = $1.createLinearGradient(c.width + c.width,
    c.height + c.height * 1.5,
    c.width + c.width, 1);
  g_.addColorStop(0, 'hsla(253, 5%, 75%, 1)');
  g_.addColorStop(0, "black");
  g_.addColorStop(0, "black");
  g_.addColorStop(0, "black");
  $1.globalCompositeOperation = 'normal';
  $1.fillStyle = g_;
  $1.fillRect(0, 0, w, h);
  $1.globalCompositeOperation = 'lighter';
  upd();
  draw();
  window.requestAnimationFrame(run);
}

go();
run();




/*전체스크립트-------------------*/
setTimeout(function(){
//custom.js
$( document ).ready(function() {
/*인트로 텍스트 효과+fixed 인트로*/   
    $("#section1").removeClass("show");
function func1(){
    $("#section1").addClass("show");
    }
setTimeout(func1, 1000);
function lfixed(){
    $(".ltext").addClass("afterintro");  
    }
    setTimeout(lfixed, 4800);
/*그리드 라인 생성*/
function line(){
    $(".grid").addClass("show");
    }
    setTimeout(line, 5800);
/*fixed 메뉴 생성*/
function navshow(){
    $(".fixed-nav").fadeIn(1200);
    }
    setTimeout(navshow, 6100);
/*메인이펙트*/    
function mainEffec1t(){
    $(".text-m").addClass("show");
    $(".mainEffect").addClass("show");
    $(".main-img").addClass("show");    
    }
    setTimeout(mainEffec1t, 6200);
/*로고 새로고침*/
$(".reload").click(function(){
     location.reload();
})    
/*페럴럭스 구조 스크립트*/
$(document).ready(function(){    
    var nav = $(".fixed-nav .nav li");//버튼을 변수에 할당(저장)
    var cont =$("#contents>section");//컨텐츠를 변수에 할당
//메뉴버튼을 클랙했을때
    nav.click(function(e){
        e.preventDefault();
        var target=$(this); //클릭한 타겟을 변수에 할당
        var index=target.index();//클릭한 타겟에 번호를 할당
        var section=cont.eq(index)//클릭한 버튼과 컨텐츠를 연결
        var offset = section.offset().top;//각 컨텐츠의 오프셋 값을 할당
        // alert(offset);
        $("html,body").animate({scrollTop:offset+20},1000);
        })
//스크롤 이벤트    
$(window).scroll(function(){
        var wScroll = $(this).scrollTop();
/*픽스드 메뉴 엑티브:섹션별 엑티브*/
        if (wScroll>= cont.eq(0).offset().top){
            nav.children().removeClass("active");
            nav.eq(0).children().addClass("active");
            }                
        if (wScroll>= cont.eq(1).offset().top){
            nav.children().removeClass("active");
            nav.eq(1).children().addClass("active");
            }          
        if (wScroll>= cont.eq(2).offset().top){
            nav.children().removeClass("active");
            nav.children().eq(2).addClass("active");
            }
        if (wScroll>= cont.eq(3).offset().top){
            nav.children().removeClass("active");
            nav.children().eq(3).addClass("active");
            }
        if (wScroll>= cont.eq(4).offset().top){
            nav.children().removeClass("active");
            nav.children().eq(4).addClass("active");
            }
//섹션1:어바웃 텍스트효과 
        if (wScroll >= cont.eq(0).offset().top - $(window).height()/2){
            $(".con-num").eq(0).children("span").addClass("view");
            $(".con-tit").eq(0).addClass("view");    
            }
        if(wScroll >= $('.atext-e').offset().top - $(window).height()/1.2){
            $(".atext-e").addClass("show");
            }
            if(wScroll >= $('.atext-e1').offset().top - $(window).height()/1.3){
            $(".atext-e1").addClass("show");
            }
            if(wScroll >= $('.atext-e2').offset().top - $(window).height()/1.4){
            $(".atext-e2").addClass("show");
            }
            if(wScroll >= $('.atext-e3').offset().top - $(window).height()/1.5){
            $(".atext-e3").addClass("show");
            }
            if(wScroll >= $('.atext-e4').offset().top - $(window).height()/1.6){
            $(".atext-e4").addClass("show");
            }
            if(wScroll >= $('.atext-e5').offset().top - $(window).height()/1.7){
            $(".atext-e5").addClass("show");
            }
            if(wScroll >= $('.atext-e6').offset().top - $(window).height()/1.8){
            $(".atext-e6").addClass("show");
            }
            if(wScroll >= $('.atext-e7').offset().top - $(window).height()/1.9){
            $(".atext-e7").addClass("show");
            }
            if(wScroll >= $('.atext-e8').offset().top - $(window).height()/2){
            $(".atext-e8").addClass("show");
            }
//sec2:스크롤시 트렌스레이트X 결과물           
            var offset1 = (wScroll - $('.off1').offset().top) * 0.2;
            var offset2 = -(wScroll - $('.off2').offset().top) * 0.2;
            
            var offset3 = (wScroll - $('.off3').offset().top) * 0.2;
            var offset4 = -(wScroll - $('.off4').offset().top) * 0.2;
            var offset5 = (wScroll - $('.off5').offset().top) * 0.2;
            
            var offset6 = (wScroll - $('.off6').offset().top) * 0.2;
            var offset7 = -(wScroll - $('.off7').offset().top) * 0.2;
            
            var offset8 = (wScroll - $('.off8').offset().top) * 0.2;
            var offset9 = -(wScroll - $('.off9').offset().top) * 0.2;
            var offset10 = (wScroll - $('.off10').offset().top) * 0.2;
            
            var offset11 = (wScroll - $('.off11').offset().top) * 0.2;
            var offset12 = -(wScroll - $('.off12').offset().top) * 0.2;
/*sec2:스크롤시 트렌스레이트X 결과물:움직임*/          
            $(".off1").css({'transform':'translateX('+ offset1 +'px)'});
            $(".off2").css({'transform':'translateX('+ offset2 +'px)'});
            
            $(".off3").css({'transform':'translateX('+ offset3 +'px)'});
            $(".off4").css({'transform':'translateX('+ offset4 +'px)'});
            $(".off5").css({'transform':'translateX('+ offset5 +'px)'});
            
            $(".off6").css({'transform':'translateX('+ offset6 +'px)'});
            $(".off7").css({'transform':'translateX('+ offset7 +'px)'});
            
            $(".off8").css({'transform':'translateX('+ offset8 +'px)'});
            $(".off9").css({'transform':'translateX('+ offset9 +'px)'});
            $(".off10").css({'transform':'translateX('+ offset10 +'px)'});
            
            $(".off11").css({'transform':'translateX('+ offset11 +'px)'});
            $(".off12").css({'transform':'translateX('+ offset12 +'px)'});
/*스크롤별 show view 효과*/
//섹션2 텍스트 애니메이션    
            if (wScroll >= $('#section2').offset().top  - $(window).height()/1.7){
                 $(".con-num").eq(1).children("span").addClass("view");
                 $(".con-tit").eq(1).addClass("view");
             }
            if(wScroll >= $('.text-left').offset().top - $(window).height()/1.5){
                 $(".text-left").eq(0).addClass("show");
                 $(".text-left").eq(1).addClass("show");
                 $(".text-left").eq(2).addClass("show");
            }
            if(wScroll >= $(".text-left").eq(3).offset().top - $(window).height()/1.5){
                 $(".text-left").eq(3).addClass("show");
                 $(".text-left").eq(4).addClass("show");
                 $(".text-left").eq(5).addClass("show");
             }
            if(wScroll >= $(".text-left").eq(6).offset().top - $(window).height()/1.7){
                 $(".text-left").eq(6).addClass("show");
                 $(".text-left").eq(7).addClass("show");
                 $(".text-left").eq(8).addClass("show");
                 $(".text-left").eq(9).addClass("show");
                 $(".text-left").eq(10).addClass("show");    
             }
//섹션2 결과물 전체 목업 쇼 애니메이션     
            if(wScroll >= $(".p-mood").offset().top -  $(window).height()/1.05){
                 $(".p-desktop").addClass("view");
                 $(".p-mood").addClass("view");
                 $(".p-mobile").addClass("view");
             }
//섹션2 결과물 디테일보여주기
             if(wScroll >= $(".frw").offset().top - $(window).height()/1.5){
                 $(".frw").addClass("show");
             }
             if(wScroll >= $(".frw .rw-about").offset().top - $(window).height()/1.3){
                  $(".frw .rw-about").addClass("show");
             }
             if(wScroll >= $(".frw2").offset().top - $(window).height()/1.5){
                 $(".frw2").addClass("show");
             }
             if(wScroll >= $(".frw2 .rw-about").offset().top - $(window).height()/1.3){
                  $(".frw2 .rw-about").addClass("show");
             }
            if(wScroll >= $(".frw3").offset().top - $(window).height()/1.5){
                 $(".frw3").addClass("show");
             }
             if(wScroll >= $(".frw3 .rw-about").offset().top - $(window).height()/1.3){
                  $(".frw3 .rw-about").addClass("show");
             }
             if(wScroll >= $(".frw4").offset().top - $(window).height()/1.5){
                 $(".frw4").addClass("show");
             }
             if(wScroll >= $(".frw4 .rw-about").offset().top - $(window).height()/1.3){
                  $(".frw4 .rw-about").addClass("show");
             }
             if(wScroll >= $(".frw5").offset().top - $(window).height()/1.5){
                 $(".frw5").addClass("show");
             }
             if(wScroll >= $(".frw5 .rw-about").offset().top - $(window).height()/1.3){
                  $(".frw5 .rw-about").addClass("show");
             }
//섹션2 dream 부분 쇼이벤트    
             if(wScroll >= $(".dream").offset().top - $(window).height()/2){
                  $(".dream").addClass("show");
             }
             if(wScroll >= $(".dream-b").offset().top - $(window).height()/1.1){
                 $(".dream-b").addClass("show");
             }
//섹션3 ability 텍스트 이벤트    
            if (wScroll >= cont.eq(2).offset().top -  $(window).height()/1.3){
                 $(".con-num").eq(2).children("span").addClass("view");
                 $(".ab-tit").addClass("show");
                 $(".abilityEffect").addClass("show");
             }
            if(wScroll >= $(".ae-t1").offset().top-  $(window).height()/1.3){
                 $(".con-num").eq(2).children("span").addClass("view");
                 $(".ab-tit").addClass("show");
                 $(".ae-t1").addClass("show");
                 $(".ae-t2").addClass("show");
             }
             if(wScroll >= $(".ae-t3").offset().top-  $(window).height()/1.3){
                 $(".ae-t3").addClass("show");
                 $(".ae-t4").addClass("show");
                 $(".ae-t5").addClass("show");
                 $(".ae-t6").addClass("show");
             }
            if(wScroll >= $(".ae-t7").offset().top-  $(window).height()/1.3){
                 $(".ae-t7").addClass("show");
                 $(".ae-t8").addClass("show");
                 $(".ae-t9").addClass("show");
             }
//섹션3 ability 123..a 카운터 쇼 이벤트
            if (wScroll >= $(".ab-count").offset().top -  $(window).height() /1.3){
                 $(".ab-count").addClass("show");
             }
//섹션4 animation 텍스트쇼 이벤트    
             if (wScroll >= cont.eq(3).offset().top -  $(window).height()/1.4){
                $(".con-num").eq(3).children("span").addClass("view");
                 $(".an-tit").addClass("show");
             }    
            if (wScroll >= $(".animation-effect .ani-e  > div > .ae-t1 > em").offset().top - $(window).height()/1.3){
                 $(".animation-effect .ani-e  > div > .ae-t1 > em").addClass("show");
                 $(".animation-effect .ani-e  > div > .ae-t2> em").addClass("show");
                 $(".animation-effect .ani-e  > div > .ae-t3> em").addClass("show");   
             }
            if (wScroll >= $(".animation-effect .ani-e  > div > .ae-t4 > em").offset().top - $(window).height()/1.3){
                 $(".animation-effect .ani-e  > div > .ae-t4 > em").addClass("show");
                 $(".animation-effect .ani-e  > div > .ae-t5> em").addClass("show");
                 $(".animation-effect .ani-e  > div > .ae-t6> em").addClass("show");   
             }
            if (wScroll >= $(".animation-effect .ani-e  > div > .ae-t7 > em").offset().top - $(window).height()/1.3){
                 $(".animation-effect .ani-e  > div > .ae-t7 > em").addClass("show");
                 $(".animation-effect .ani-e  > div > .ae-t8> em").addClass("show");
                 $(".animation-effect .ani-e  > div > .ae-t9> em").addClass("show"); 
             }
//animation  결과물 보여주기
            if (wScroll >= $(".anibox").offset().top -   $(window).height()/1.2){
                 $(".anibox").addClass("show");
            }
            if (wScroll >= $(".ani-list").offset().top -   $(window).height()/1){
                 $(".ani-list").addClass("show");
            }
            if (wScroll >= $(".ani-itduce").offset().top - $(window).height()/1.2){
                 $(".ani-itduce").addClass("show");
            }
//contact 텍스트이펙트쇼
            if (wScroll >= cont.eq(4).offset().top -  $(window).height()/1.4){
                $(".con-num").eq(4).children("span").addClass("view");
                 $(".cn-tit").addClass("show");
                 
            }
            if (wScroll >= $(".contact-effect .cn-e  > div > .ae-t1> em").offset().top - $(window).height()/1.3){
                 $(".contact-effect .cn-e  > div > .ae-t1> em").addClass("show");
                 $(".contact-effect .cn-e  > div > .ae-t2> em").addClass("show");
                 $(".contact-effect .cn-e  > div > .ae-t3> em").addClass("show");   
             }
            if (wScroll >= $(".contact-effect .cn-e  > div > .ae-t4> em").offset().top - $(window).height()/1.3){
                 $(".contact-effect .cn-e  > div > .ae-t4> em").addClass("show");
                 $(".contact-effect .cn-e  > div > .ae-t5> em").addClass("show");
                 $(".contact-effect .cn-e  > div > .ae-t6> em").addClass("show");   
                 $(".contact-effect .cn-e  > div > .ae-t7> em").addClass("show");   
             }
//contact 디테일이펙트쇼           
            if (wScroll >= $(".mycontact").offset().top - $(window).height()/2){
                $(".mycontact .contact-text .cnt-t em").addClass("view");
                $(".contact-pic .pic-inner").addClass("view");
            }
            if (wScroll >= $(".email-sns").offset().top - $(window).height()/1.4){
                 $(".email-sns .arrow-icon img").addClass("view");
                 $(".email-address2").addClass("view");
                 $(".email-address").addClass("view");
            }
            if (wScroll >= $(".social").offset().top - $(window).height()/0.7){
                 $(".social").addClass("view");
                $(".social .social-icon").addClass("view");
            }
            if (wScroll >= $(".myform").offset().top - $(window).height()/0.7){
                 $(".myform").addClass("show");
                
            }
        })
//result 결과물 호버효과
            $(".project-wrap ul a").hover(function () {  
                var num=$(".project-wrap ul a").index($(this));
                $(".project-img img").removeClass("show"),
                $(".p-img-list:nth-of-type(1) .project-img img").eq(num).addClass("show").siblings().removeClass("show");
                $(".p-img-list:nth-of-type(2) .project-img img").eq(num).addClass("show").siblings().removeClass("show");
                $(".p-img-list:nth-of-type(3) .project-img img").eq(num).addClass("show").siblings().removeClass("show");
                });
            $(".project-wrap ul a").click(function(){
                event.preventDefault();
            })
     
    });
    //애니메이션 목차 토글이벤트   
    $(".anibox .ani-list .ani-shower li").eq(0).show();
    $(".ani-itduce li").eq(0).addClass("show");
    $(".anibox .ani-list .ani-mok .mok-list li").eq(0).addClass("cl");
    $(".mok-list li").click(function(){
        var otnum=$(".mok-list li").index($(this));
        $(".code").eq(otnum).toggleClass("open");
        $(this).toggleClass("show");
        
        $(".anibox .ani-list .ani-shower li").eq(otnum).fadeIn().siblings().fadeOut();
        $(".anibox .ani-list .ani-mok .mok-list li").eq(otnum).addClass("cl").siblings().removeClass();
        $(".ani-itduce li").eq(otnum).addClass("show").siblings().removeClass();
    })
    //컨텐트 이메일 아이콘 호버효과      
    $(".email-address2 a").mouseenter(function(){
        $(".email-sns .arrow-icon").removeClass("impact");
        $(".email-sns .arrow-icon").addClass("impact");
    });
     $(".email-address2 a").mouseleave(function(){
        $(".email-sns .arrow-icon").removeClass("impact");
    });          
    
    
    
});//doc

//skills
$(function(){
            //imagesProgress();
            counter();		
        });
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
                    
                    $('.pie').easyPieChart({        
                         barColor: 'gold',
                         trackColor: '#121212',                        
                         scaleColor: '#fff',
                         scaleLength: 3,
                         lineWidth: 15,
                         size: 220,
                         lineCap: 'round',
                         animate: { duration: speed, enabled: true }
                    });
                }
            });
        }).triggerHandler('scroll');
    }
}
    
},500);


