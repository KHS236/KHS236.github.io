$(document).ready(function(){
      /**/
      //페럴럭스 구조 스크립트
        var nav = $(".fixed-nav .nav li");//버튼을 변수에 할당(저장)
        var cont =$("#contents>section");//컨텐츠를 변수에 할당
        
        
        //버튼을 클랙했을떄
        nav.click(function(e){
            e.preventDefault();
            var target=$(this); //클릭한 타겟을 변수에 할당
            var index=target.index();//클릭한 타겟에 번호를 할당
            
            var section=cont.eq(index)//클릭한 버튼과 컨텐츠를 연결
            var offset = section.offset().top;//각 컨텐츠의 오프셋 값을 할당
        // alert(offset);
            $("html,body").animate({scrollTop:offset},1000);
        })
        
        $(window).scroll(function(){
            //픽스드 메뉴 엑티브 
            var wScroll=$(this).scrollTop();
            if (wScroll>= cont.eq(0).offset().top){
                nav.children().removeClass("active");
                nav.eq(0).children().addClass("active");
               }          

                
                
            
             if (wScroll>= cont.eq(1).offset().top){
                nav.children().removeClass("active");
                nav.eq(1).children().addClass("active");
                }
                
                
                
            
             if (wScroll>= cont.eq(2).offset().top){
                nav.children().removeClass("active");
                nav.children().eq(2).addClass("active");
            }
             if (wScroll>= cont.eq(3).offset().top){
                nav.children().removeClass("active");
                nav.children().eq(3).addClass("active");
            }
             if (wScroll>= cont.eq(4).offset().top){
                nav.children().removeClass("active");
                nav.children().eq(4).addClass("active");
            }
             if (wScroll>= cont.eq(5).offset().top){
                nav.children().removeClass("active");
                nav.children().eq(5).addClass("active");
            }
            
            
             
            
        })
        /**/
        //인트로 텍스트 쇼
        function ltextshow(){
            $("#section1").addClass("show");
        }
        setTimeout(ltextshow, 800);
        //인트로 텍스트 픽스드
        function lfixed(){
            $(".ltext").css({"position":"fixed","top":"9%","left":"9%","font-size":"1.3vw","transition":"0.8s"});  
        }
        setTimeout(lfixed, 4800);
        /*인트로 도형애니*/
         function textshow(){
            $("#section1").addClass("main-animation-start");
        }
        setInterval(textshow, 5600);
         /**/
        //포트폴리오 작업물 부분 호버 이벤트
        
        $(".portlist>li").mouseover(function(){
            
			page=$(".portlist>li").index($(this));
			
            $(".p-m-img>li").eq(page).children("img").addClass("view2");
            $(".p-d-img>li").eq(page).children("img").addClass("view2");
            $(".p-t-img>li").eq(page).children("img").addClass("view2");
					
        }).mouseleave(function(){
            
            $(".p-m-img>li").eq(page).children("img").removeClass("view2");
            $(".p-d-img>li").eq(page).children("img").removeClass("view2");
            $(".p-t-img>li").eq(page).children("img").removeClass("view2");
            
            $(".p-m-img>li").eq(0).children("img").addClass("view2");
            $(".p-d-img>li").eq(0).children("img").addClass("view2");
            $(".p-t-img>li").eq(0).children("img").addClass("view2");
        });
        
        
    
});