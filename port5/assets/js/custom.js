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






//햄버거 메뉴
$(".icon-wrap").click(function(){
  $(".icon1").toggleClass("animation");
  $(".icon2").toggleClass("animation");
  $(".icon3").toggleClass("animation");
  $("body").toggleClass("open");
  $("body").toggleClass("over");
});

//list 버튼
$(".mbtn1").click(function(){
    $("#modal.modal1").removeAttr("class").addClass("one").addClass("modal1");
});
$(".close").click(function(){
    $("#modal.modal1").addClass("out");
});
$(".mbtn2").click(function(){
    $("#modal.modal2").removeAttr("class").addClass("one").addClass("modal2");
});
$(".close").click(function(){
    $("#modal.modal2").addClass("out");
});
$(".mbtn3").click(function(){
    $("#modal.modal3").removeAttr("class").addClass("one").addClass("modal3");
});
$(".close").click(function(){
    $("#modal.modal3").addClass("out");
});
$(".mbtn4").click(function(){
    $("#modal.modal4").removeAttr("class").addClass("one").addClass("modal4");
});
$(".close").click(function(){
    $("#modal.modal4").addClass("out");
});
$(".mbtn5").click(function(){
    $("#modal.modal5").removeAttr("class").addClass("one").addClass("modal5");
});
$(".close").click(function(){
    $("#modal.modal5").addClass("out");
});
$(".mbtn6").click(function(){
    $("#modal.modal6").removeAttr("class").addClass("one").addClass("modal6");
});
$(".close").click(function(){
    $("#modal.modal6").addClass("out");
});
$(".mbtn7").click(function(){
    $("#modal.modal7").removeAttr("class").addClass("one").addClass("modal7");
});
$(".close").click(function(){
    $("#modal.modal7").addClass("out");
});
$(".mbtn8").click(function(){
    $("#modal.modal8").removeAttr("class").addClass("one").addClass("modal8");
});
$(".close").click(function(){
    $("#modal.modal8").addClass("out");
});

$("a[href^='#']").click(function(e){
  e.preventDefault;
  var target = $( $(this).attr("href") );
  
  if(target.length){
    $("html,body").animate({ scrollTop:target.offset().top },1000);
  }
});