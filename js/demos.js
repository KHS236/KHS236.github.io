document.addEventListener('DOMContentLoaded', function() {
  
  // 메인 배너 타이핑 효과 (#typed)
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings', // index.html에 있는 문구 id
    typeSpeed: 50,    // 타이핑 속도
    backSpeed: 20,    // 지우는 속도
    startDelay: 1000, // 시작 전 대기 시간
    loop: true,       // 반복 여부
    loopCount: Infinity,
    showCursor: true, // 커서 보이기
    cursorChar: '|',  // 커서 모양
    autoInsertCss: true
  });

  // 아래에 있던 typed2, typed3 등의 불필요한 코드는 모두 삭제했습니다.
});