




// skill ability
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
                        barColor: '#fff',
                        trackColor: '#050821',
                        scaleColor: '#000',
                        scaleLength: 0,
                        lineWidth: 7,
                        size: 130,
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


//MENU BAR


$(".ham").click(function(){
    $(this).toggleClass("active")
});



function init(){
    body = document.querySelector('body');
    menu = document.querySelector('.ham');
    menuItems = document.querySelectorAll('.list-item');
    applyListeners();
};

function applyListeners() {
    menu.addEventListener('click', function () {
        return toggleClass(body, 'nav-active');
    });
};

function toggleClass(element, stringClass) {
    if (element.classList.contains(stringClass)) {
        element.classList.remove(stringClass);
    } else {
        element.classList.add(stringClass);
    }   
};

$(".nav__list > li").click(function(){
    $("body").removeClass("nav-active");
    $(".ham").removeClass("active");
});


$("#ddd4").click(function(e){
                //e.preventDefault();
                 $('html,body').scrollTop('10500px');
            });



//canvas
var c = document.getElementById("space");
var ctx = c.getContext("2d");
var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;
var ai = 200;
var arr = [];
var u = 0;
var dep = w;
var dp = 0.80;
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
  var t = "JEONG AH STORY";
  ctx.font = "800 3vw K2D";
  ctx.fillStyle = 'hsla(216,95%,85%,.6)';
  ctx.textBaseline = 'middle';
  ctx.fillText(t, (c.width - ctx.measureText(t).width) * 0.5, c.height * 0.2);
  var p, dth;
  for (var i in arr) {
    p = arr[i];
    dth = ((p.rp.z / dep) + 1);
    ctx.fillStyle = p.col;
    ctx.fillRect(w + p.rp.x, h + p.rp.y, rnd(dth/0.8, dth/2),  dth/0.9);
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


window.addEventListener('resize', function(e) {
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
}, false);

function run() {
  ctx.clearRect(0, 0, w, h);
  var g_ = ctx.createLinearGradient(c.width + c.width, c.height + c.height * 1.5, c.width + c.width, 1);
  g_.addColorStop(0, 'hsla(256, 96%, 1%, 1)');
  g_.addColorStop(0.8, 'hsla(256, 96%, 1%, 1)');
  g_.addColorStop(0.6, 'hsla(250, 94%,20%, 1)');
  g_.addColorStop(0.3, 'hsla(250, 94%,26%, 1)');
  ctx.globalCompositeOperation = 'normal';
  ctx.fillStyle = g_;
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'lighter';
  upd();
  draw();
  window.requestAnimationFrame(run);
}
go();
run();





