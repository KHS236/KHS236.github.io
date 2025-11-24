var questionNum = 0;													// keep count of question, used for IF condition.
var question = '<h1>방문자 이름을 입력해주세요</h1>';				  // first question

var output = document.getElementById('output');				// store id="output" in output variable
output.innerHTML = question;													// ouput first question

function bot() {
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
    output.innerHTML = '<h1>환영합니다! ' + input + '님</h1>';// output response
    document.getElementById("input").value = "";   		// clear text box
    question = '<h1>나이는 몇살이니?</h1>';			    	// load next question
    setTimeout(timedQuestion, 2500);									// output next question after 2sec delay
    }

    else if (questionNum == 1) {
    output.innerHTML = '<h1>그럼 넌 ' + (2020 - input) + '년 생이네!</h1>';
    document.getElementById("input").value = "";
    question = '<h1>어느 나라 사람이니?</h1>';
    setTimeout(timedQuestion, 2500);
    }

    else if (questionNum == 2) {
    output.innerHTML = '<h1>뭐? ' + input + ' 사람이라고?!</h1>';
    document.getElementById("input").value = "";
    question = '<h1>그럼 아버지가 '+input+' 국적이야?</h1>';
    setTimeout(timedQuestion, 2500);
    }
}

function timedQuestion() {
    output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						// run bot function when enter key pressed
    questionNum++;																		// increase questionNum count by 1
  }
});
