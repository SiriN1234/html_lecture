// Functions

var A = Math.floor(Math.random() * 10 + 1);
var B = Math.floor(Math.random() * 10 + 1);

function returnAnswer() {
    var ans = document.getElementById('answer').value;
    var ans2 = A + B;
    if (ans == ans2) {
        document.getElementById('YN').innerHTML = "정답입니다";
    }
    else if (isNaN(ans) == true) {
        document.getElementById('YN').innerHTML = "숫자를 입력하세요";
    }
    else {
        document.getElementById('YN').innerHTML = "정답이 아닙니다";
    }
}

function newQuestion() {
    document.getElementById('answer').innerHTML = ""
    document.getElementById('YN').value = ""
    A = Math.floor(Math.random() * 10) + 1;
    B = Math.floor(Math.random() * 10) + 1;

    document.getElementById('demo').innerHTML = A + " + " + B;
    correctAnswer = A + B;
}