/* index.js */

/* 네비게이션 변수 선언 */
var nav = $("#nav_wrap .menu li");
var cont = $("#section_wrap > div");
// 구조: 0:Home(#section1), 1:Skills(#section_skills), 2:Portfolio(#section2), 3:Contact(#section_contact), 4:Footer

/* 메뉴 클릭 시 부드러운 이동 */
nav.click(function (e) {
    e.preventDefault();
    var target = $(this);
    var index = target.index(); // 0, 1, 2, 3

    // 타겟 섹션 선택
    var section = cont.eq(index);

    // 네비게이션 높이(76px) 만큼 빼서 정확한 위치로 이동
    var offset = section.offset().top - 76;
    $("html,body").animate({ scrollTop: offset }, 800, "easeInOutExpo");
});

/* 스크롤 이벤트 통합 */
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // 1. 네비게이션 디자인 변경 (배경 흰색)
    if (wScroll > 50) {
        $("#nav_wrap").addClass("on");
    } else {
        $("#nav_wrap").removeClass("on");
    }

    // 2. 스크롤 위치에 따른 메뉴 활성화 (SpyScroll)
    var gap = 150; // 인식 오차 범위

    // 기본 로직: 각 섹션의 top 위치를 지나면 활성화
    if (wScroll >= cont.eq(0).offset().top - gap) {
        nav.removeClass("active");
        nav.eq(0).addClass("active");
    }
    if (wScroll >= cont.eq(1).offset().top - gap) {
        nav.removeClass("active");
        nav.eq(1).addClass("active");
    }
    if (wScroll >= cont.eq(2).offset().top - gap) {
        nav.removeClass("active");
        nav.eq(2).addClass("active");
    }
    if (wScroll >= cont.eq(3).offset().top - gap) {
        nav.removeClass("active");
        nav.eq(3).addClass("active");
    }

    // [중요] 스크롤이 문서 끝까지 닿았을 때 강제로 마지막(Contact) 활성화
    // (문서 전체 높이 - 창 높이 = 최대로 내릴 수 있는 스크롤 값)
    if (wScroll + $(window).height() >= $(document).height() - 10) {
        nav.removeClass("active");
        nav.eq(3).addClass("active"); // Contact 메뉴 활성화
    }
});

/* index.js */
$(document).ready(function () {
    $('#contact-form').on('submit', function (event) {
        event.preventDefault();

        var btn = $(this).find('button');
        var originalText = btn.text();
        btn.text('SENDING...').prop('disabled', true);

        // 여기에 "Service ID"와 "Template ID"를 순서대로 넣으세요.
        // 세 번째 'this'는 지우지 말고 그대로 두세요! (폼 데이터를 의미함)
        emailjs.sendForm('service_zxua0iv', 'template_36xjiyt', this)
            .then(function () {
                alert('메세지가 성공적으로 전송되었습니다!');
                btn.text(originalText).prop('disabled', false);
                $('#contact-form')[0].reset();
            }, function (error) {
                alert('전송 실패... 잠시 후 다시 시도해주세요.\n에러: ' + JSON.stringify(error));
                btn.text(originalText).prop('disabled', false);
            });
    });
});