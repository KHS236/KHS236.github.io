function counter() {
    if ($('.counter .count').size()) {
        $c = $('.counter .count');

        $c.each(function () {
            var $this = $(this);
            $this.data('target', parseInt($this.html()));
            $this.data('counted', false);
            $this.html('0');
        });

        $(window).bind('scroll', function () {
            var speed = 5000;

            $c.each(function (i) {
                var $t = $(this);
                if (!$t.data('counted') && $(window).scrollTop() + $(window).height() >= $t.offset().top) {

                    $(".skill-wrap").addClass("show");
                    $(".sec2").addClass("show");
          
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
                        barColor: '#fff',
                        trackColor: '#121212',
                        scaleColor: '#ccc',
                        scaleLength: 5,
                        lineWidth: 10,
                        size: 300,
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
	var $container = $("#progress"),
		$progressBar = $container.find(".bubble"),
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
			$container.addClass("progress-complete");
			$progressBar.add($progressText)
				.delay(500)
				.animate({opacity: 0},250,function(){
					$container.animate({top: '-110%'},1000,'easeInOutQuint');
				});
			$("#section1").addClass("active");
		}
		if(current > 99.98){
			current = 100;
		}
	}	
}

//로딩 별 모양
var loader = new TimelineMax({ repeat: -1, yoyo: true }),
		svglength = $("svg polygon").length,
		bubbles = [ ];


for(var i = 1; i <= svglength; i++){
	bubbles.push( $(".bubble polygon:nth-of-type("+ i +")") );
}

loader.staggerTo(bubbles, 0.675, {
	css : {
		fill : "none",
		opacity: 1,
		transform: "scale(4)"
	},
}, 0.25);


function page(){
    $(".page-loader").addClass("visible");
    $(".sec1 .tbox1").addClass("visible");
    $(".sec1 .tbox2").addClass("visible");
    $("#hunstrokes").addClass("visible");
}


// ball
function ball(){
    const colors = ["#ffd94a", "#fff"];

    const numBalls = 20;
    const balls = [];

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add("ball");
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random()}em`;
      ball.style.height = ball.style.width;

      balls.push(ball);
      document.body.append(ball);
    }

    // Keyframes
    balls.forEach((el, i, ra) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
      };

      let anim = el.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
          duration: (Math.random() + 1) * 2000, // random duration
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      );
    });
}

$("a[href^='#']").click(function(e){
  e.preventDefault;
  var target = $( $(this).attr("href") );
  
  if(target.length){
    $("html,body").animate({ scrollTop:target.offset().top },1000);
  }
});




//햄버거 메뉴
$(".icon-wrap").click(function(){
  $(".icon1").toggleClass("animation");
  $(".icon2").toggleClass("animation");
  $(".icon3").toggleClass("animation");
  $("body").toggleClass("open");
  $("body").toggleClass("over");
});