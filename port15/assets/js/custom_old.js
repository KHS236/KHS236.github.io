//포트폴리오 백그라운드
var particleNumber = 250;
// number of particles (change it!)

window.requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();
// requesting the keyframes

var c = document.getElementById('c');
var ctx = c.getContext('2d');
//context and id of canvas

var w = c.width = $("#contents").width();
var h = c.height = $("#contents").height();
//width and height of canvas

c.width = w;
c.height = h;
//setting the width and height for canvas

var particles = [];
// the particles storage
    
for(i = 0; i < particleNumber; i++) {
  setTimeout(function(){
    particles.push(new createParticle);
  }, i * 15);
  // add a particle (not all at once - setTimeout(); )
}
// adding 55 particles

function createParticle() {
  this.x = Math.random() * c.width;
  this.y = Math.random() * c.height;
  // the x and y
  
  this.vx = Math.random() * 8 - 4;
  this.vy = Math.random() * 8 - 4;
  // the velocities
  
  this.size = 20;
  // the size
  
  this.life = Math.random() * 100;
  // the life
  
  var g = 'rgba(237, 42, 74, 1.0)'; 
  var gg = 'rgba(255, 255, 255,0.45)';
  var ggg = 'rgba(237, 42, 74,0.2)';
  var array = [g, gg, ggg];
  this.color = array[Math.floor(Math.random() * 3)];
  // making 3 mandatory colors (change it and fork - i might use that!)
  
  this.reset = function() {
    // the reset
    
    this.x = Math.random() * c.width;
    this.y = Math.random() * c.height;
    this.vx = Math.random() * 8 - 4;
    this.vy = Math.random() * 8 - 4;
    this.size = 20;
    this.life = Math.random() * 33;
  }
}
  
function draw() {
  requestAnimFrame(draw);
  // requesting the keyframes
  
  ctx.fillStyle = "#000";
  ctx.fillRect(0,0, c.width, c.height);
  // the canvas
  
  for(t = 0; t < particles.length; t++) {
    var p = particles[t];
    // using the particle we want to use
    
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
    // making the particle
    
    p.x+=p.vx;
    p.y+=p.vy;
    // velocities
    
    p.life*=0.9;
    p.size*=0.89999;
    // making the life and size decrease
    
    if(p.life < 1) {
      p.reset();
    }
    // reseting the particles when dead
  }  
}
draw();

var nav = $(".menu_inner > .menu_bg > ul > li");
var cont = $("#contents > section");

nav.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    //alert(index);
    var section = cont.eq(index);
    var offset = section.offset().top;
    //alert(offset);
    $("html ,body").animate({scrollTop: offset},600,"easeInOutExpo");
});


//메인 텍스트
function mAni(){
    $(".sec1").addClass("show");
}
setInterval(mAni, 1000);

//메인 메뉴
$(function(){
	  $('.menu_wrapper').click(function() {
        $('.hamburger').toggleClass('animate');
        $(".menu_inner").addClass("open");
    });
});  

//소개 텍스트
const TYPING_SPEED = 53;
let $targetList;

const init = () => {

  $targetList = document.querySelectorAll('[data-js="typing"]');

  setup();
  run();

}

const setup = () => {

 for (const $dom of $targetList) {

	const textList = $dom.innerText.split('');
	let   html     = '';

	for (const char of textList) {
	  html += `<span>${char}</span>`;
	}

	$dom.innerHTML = html;

 }

}

const run = () => {

 let delay = 0;

 for (let i = 0; i < $targetList.length; i++) {

	const $target = $targetList[i];
	const $chars  = $target.querySelectorAll('span');

	for (let l = 0; l < $chars.length; l++) {

	  const $char = $chars[l];
	  const text  = $char.textContent;

	  delay += TYPING_SPEED;
	  if (text === ' ') delay += TYPING_SPEED * 2;

	  const animate = () => {

		 $char.style.display = 'inline-block';

	  }

	  setTimeout(animate,delay);

	  if ($chars.length - 1 <= l) {
		 delay += TYPING_SPEED * 4;
		 setTimeout(() => $target.style.display = 'block',delay);
	  }

	}

 }

}
document.addEventListener('DOMContentLoaded',init,false);

//스킬 카운터
function counter() {
  if ($('.about .count').size()) {
    $c = $('.about .count');

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

          // easy pie
          $('.pie').easyPieChart({
              barColor: '#ed2a4a',
              trackColor: '#000',
              scaleColor: '#000',
              scaleLength: 5,
              lineWidth: 9,
              size: 230,
              lineCap: 'round',
              animate: { duration: speed, enabled: true }
          });
        }
      });
    }).triggerHandler('scroll');
  }
}
counter();  

//포트폴리오 이미지 움직임
$(document).ready(function(){
    var img = $(".site_img > a");
    var EfX = 200;
    var EfY = 95;
    
    img.mousemove(function(e){
       var parentOffset = $(this).offset();
       var relX = ((e.pageX - parentOffset.left) - $(this).innerWidth()/2)/EfX;
       var relY = -((e.pageY - parentOffset.top) - $(this).height()/2)/EfY;
       //console.log(relX);
        $(this).find(".glitch_img").removeClass("cardNotranslate").attr("style", "transform: perspective(1000px) rotateY("+relX+"deg) rotateX("+relY+"deg);-webkit-transform: rotateY("+relX+"deg) rotateX("+relY+"deg);-moz-transform: rotateY("+relX+"deg) rotateX("+relY+"deg)");
    }).mouseleave(function(){
        $(this).find(".glitch_img").addClass("cardNotranslate")
    })
})

//애니메이션 탭바
$(function(){
    $(".tab").each(function () {
        $(this)
            .find(".tabbar")
            .eq(0)
            .addClass("active");
    });

    $(".ani_right").each(function () {
        $(this)
            .find(".ani_box")
            .eq(0)
            .addClass("active");
    });

    $(".tabbar").click(function () {
        var index=$(this).index();

        $(".tabbar").removeClass("active");
        $(this).addClass("active");

        $(".ani_box").removeClass("active");
        $(".ani_box").eq(index).addClass("active");
    });
});

//컨택트 버튼
$(function(){
    $(".sec5 .left_side .contact_me button").click(function(){
        $(".form").addClass("active");
    });

    $(".form .form_header .close").click(function(){
        $(".form").removeClass("active");
    });
});

//스크롤 애니메이션
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    //스크롤시 타이틀
    if(wScroll >= $(".sec2").offset().top - $(window).height()/4){
        $(".sec2 .title").addClass("show");
    }
    if(wScroll >= $(".sec3").offset().top - $(window).height()/3.5){
        $(".sec3 .title").addClass("show");
    }
    if(wScroll >= $(".sec4").offset().top - $(window).height()/3){
        $(".sec4 .title").addClass("show");
    }

    //스크롤시 어바웃미 이미지
    if(wScroll >= $(".sec2 .face").offset().top -$(window).height()/2.5){
      $(".sec2 .face").addClass("show");
    }

    //스크롤시 스킬
    if(wScroll >= $(".sec2 .skill_wrap").offset().top -$(window).height()/1.5){
        $(".sec2 .skill_wrap").addClass("show");
    }/*else{
        $(".sec2 .skill_wrap").removeClass("show");
    }*/

    //스크롤시 포트폴리오
    if(wScroll >= $(".sec3 .site_wrap").eq(0).offset().top - $(window).height()/2){
        $(".site_txt").eq(0).addClass("show");
    }
    if(wScroll >= $(".sec3 .site_wrap").eq(0).offset().top - $(window).height()/2){
        $(".site_img").eq(0).addClass("show");
    }
    if(wScroll >= $(".sec3 .site_wrap").eq(0).offset().top - $(window).height()/2){
        $(".revealer").eq(0).addClass("show");
    }
    if(wScroll >= $(".sec3 .site_wrap").eq(0).offset().top - $(window).height()/2){
        $(".site_btn").eq(0).addClass("show");
    }

    if(wScroll >= $(".sec3 .site_wrap").eq(1).offset().top - $(window).height()/1.5){
        $(".site_txt").eq(1).addClass("show");
    }
    if(wScroll >= $(".sec3 .site_wrap").eq(1).offset().top - $(window).height()/1.5){
        $(".site_img").eq(1).addClass("show");
    }
    if(wScroll >= $(".sec3 .site_wrap").eq(1).offset().top - $(window).height()/1.5){
        $(".revealer").eq(1).addClass("show");
    }
    if(wScroll >= $(".sec3 .site_wrap").eq(1).offset().top - $(window).height()/1.5){
        $(".site_btn").eq(1).addClass("show");
    }

    if(wScroll >= $(".sec3 .site_wrap").eq(2).offset().top - $(window).height()/1.5){
      $(".site_txt").eq(2).addClass("show");
    }
    if(wScroll >= $(".sec3 .site_wrap").eq(2).offset().top - $(window).height()/1.5){
        $(".site_img").eq(2).addClass("show");
    }
    if(wScroll >= $(".sec3 .site_wrap").eq(2).offset().top - $(window).height()/1.5){
        $(".revealer").eq(2).addClass("show");
    }
    if(wScroll >= $(".sec3 .site_wrap").eq(2).offset().top - $(window).height()/1.5){
        $(".site_btn").eq(2).addClass("show");
    }

    if(wScroll >= $(".sec3 .site_wrap").eq(3).offset().top - $(window).height()/1.5){
        $(".site_txt").eq(3).addClass("show");
    }
    if(wScroll >= $(".sec3 .site_wrap").eq(3).offset().top - $(window).height()/1.5){
        $(".site_img").eq(3).addClass("show");
    }
    if(wScroll >= $(".sec3 .site_wrap").eq(3).offset().top - $(window).height()/1.5){
        $(".revealer").eq(3).addClass("show");
    }
    if(wScroll >= $(".sec3 .site_wrap").eq(3).offset().top - $(window).height()/1.5){
        $(".site_btn").eq(3).addClass("show");
    }

    if(wScroll >= $(".sec3 .site_wrap").eq(4).offset().top - $(window).height()/1.5){
      $(".site_txt").eq(4).addClass("show");
    }
    if(wScroll >= $(".sec3 .site_wrap").eq(4).offset().top - $(window).height()/1.5){
        $(".site_img").eq(4).addClass("show");
    }
    if(wScroll >= $(".sec3 .site_wrap").eq(4).offset().top - $(window).height()/1.5){
        $(".revealer").eq(4).addClass("show");
    }
    if(wScroll >= $(".sec3 .site_wrap").eq(4).offset().top - $(window).height()/1.5){
        $(".site_btn").eq(4).addClass("show");
    }

    //스크롤시 컨택트
    if(wScroll >= $(".sec5 .left_side").offset().top -$(window).height()/3){
      $(".sec5 .left_side").addClass("show");
    }
    if(wScroll >= $(".sec5 .info").offset().top -$(window).height()/3){
      $(".sec5 .info").addClass("show");
    }
});
