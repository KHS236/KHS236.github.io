/* nav */
var nav = $("#nav ul li");
var cont = $("#contents > div");

nav.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
                //alert(index);
                var section = cont.eq(index);
                var offset = section.offset().top;
                $("html,body").animate({ scrollTop:offset },600,"easeInOutExpo");
            });

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
});
var wHeight = $(window).height();
var dHeight = $(document).height();
var navHeight = $("#nav").outerHeight();
var lastScrollTop = 0;
var moveScroll;
            

            $(window).scroll(function(event){ //스크롤을 감지
                moveScroll = true;
            });

            setInterval(function(){ //스크롤이 감지가 되면 0,25마다 실행
                if(moveScroll){
                    hasScroll();
                    moveScroll = false;
                }
            },250);

            function hasScroll(){
                var wScroll = $(this).scrollTop();  //현재 스크롤 값

                if( wScroll > lastScrollTop && wScroll > navHeight ){
                     //스크롤을 내렸을 때 
                     $("#nav").addClass("on");
                 }else{
                     //스크롤을 올렸을 때 
                     if(wScroll + wHeight < dHeight) {
                         $("#nav").removeClass("on")
                     }
                 }
                 lastScrollTop = wScroll;
             }

/* 뒷배경 */
$(document).ready(function () {
    var stars = 800;
    var $stars = $(".stars");
    var r = 800;
    for (var i = 0; i < stars; i++) {
        var $star = $("<div/>").addClass("star");
        $stars.append($star);
    }
    $(".star").each(function () {
        var cur = $(this);
        var s = 0.2 + (Math.random() * 1);
        var curR = r + (Math.random() * 300);
        cur.css({
            transformOrigin: "0 0 " + curR + "px",
            transform: " translate3d(0,0,-" + curR + "px) rotateY(" + (Math.random() * 360) + "deg) rotateX(" + (Math.random() * -50) + "deg) scale(" + s + "," + s + ")"

        })
    })
});

/* 자바스크립트 메인글 */
(d => {
    const word = d.querySelector(".word");
    
    const shadow = e => {
        const {x, y} = e;
        const gBCR = word.getBoundingClientRect();
        const w = this;
        const moveX = (x - gBCR.left - gBCR.width / 2) / gBCR.width * 5;
        const moveY = (y - gBCR.left - gBCR.height / 2) / gBCR.height * 5;
        
        //console.log(moveX);
        transform(moveX, moveY);
    }
    
    const transform = (x, y) => {
        word.style.textShadow = `${x}px ${-y}px 0px rgb(102, 249, 255, 0.7),
        ${-x}px ${y}px 0px rgb(255, 35, 251, 0.7),
        ${y}px ${-x}px 0px rgb(255, 255, 73, 0.7),
        ${-y}px ${x}px 0px rgb(102, 249, 255, 0.7)`;
    }

    window.addEventListener("mousemove", shadow);
})(document);




