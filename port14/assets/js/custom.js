//counter
function counter() {
    if ($('.skill_wrap .count').size()) {
        $c = $('.skill_wrap .count');

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
                        barColor: '#000',
                        trackColor: '#999',
                        scaleColor: '#999',
                        scaleLength: 4,
                        lineWidth: 4,
                        size: 180,
                        lineCap: 'round',
                        animate: {
                        duration: speed,
                        enabled: true
                        }
                    });
                }
            });
        }).triggerHandler('scroll');
    }
}


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
        $progressBar.css({ width: current + '%' });
        $progressText.text( Math.floor(current) + '%' );

        if(current >= 100){
            clearInterval(progressTimer);
            $container.addClass("progress-complete");
            $progressBar.add($progressText)
                .delay(500)
                .animate({opacity: 0},250,function(){
                    $container.animate({top: '-100%'},1000,'easeInOutQuint');
                });
                $("body").addClass("active");
        }
        if(current > 99.9){
            current = 100;
        }
    }	
}