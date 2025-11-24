//counter
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
                        barColor: '#ffffff',
                        trackColor: '#000000',
                        scaleColor: '#ffffff',
                        scaleLength: 5,
                        lineWidth: 2,
                        size: 200,
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
            //$container.addClass("progress-complete");
            $progressBar.add($progressText)
                .delay(500)
                .animate({opacity: 0},100,function(){
                    $container.animate({top: '-110%'},1000,'easeInOutQuint');
                });
            $("body").addClass("active");
        }
        if(current > 99.98){
            current = 100;
        }
    }	
}

//backgorund
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