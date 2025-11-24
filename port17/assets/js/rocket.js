$(document).ready(function() {
            scrollPressed = 0;

            $('.rockett').animate({ left: '60%' , top: '-140px' },9000);
            setTimeout(function(){
                $('.rockett').css('left','-60px');
                $('.rockett').css('top','120%');
            },9000);
            setInterval(function(){
                $('.rockett').animate({ left: '60%' , top: '-240px' },9000);
                setTimeout(function(){
                    $('.rockett').css('left','-60px');
                    $('.rockett').css('top','120%');
                },9000);
            },9000);
            setInterval(function(){
                $('.rockett2').animate({ right: '60%' , top: '-240px' },9000);
                setTimeout(function(){
                    $('.rockett').css('right','-60px');
                    $('.rockett').css('top','120%');
            },9000);
        },10000);
        });
