//스크롤값 
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();  //자기 자신을 표현할 땐, this 를 쓰자
  wScroll = parseInt(wScroll);
  $(".scroll_top").text(wScroll);
});

//------------------------------------------------------