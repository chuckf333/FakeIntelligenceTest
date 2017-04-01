//Charles Franklin

var ans1 = 32;
var ans2 = 211;
var ans3 = 365;
var correct1 = 0;
var correct2 = 0;
var correct3 = 0;
var numberQuestions = 3;

function test1() {
  var ans = document.getElementById("p1Answer").value;
  if(isNaN(ans)) {
    document.getElementById("checkAnswer").innerHTML= "The answer must be a number";
    document.getElementById("checkAnswer").classList.remove("correct");
    document.getElementById("checkAnswer").classList.add("incorrect");
    document.getElementById("checkAnswer").classList.remove("hideMess");
    document.getElementById("checkAnswer").classList.add("showMess");
    correct1 = 0;
  }
  else if(ans!=ans1) {
    document.getElementById("checkAnswer").innerHTML= "Incorrect";
    document.getElementById("checkAnswer").classList.remove("correct");
    document.getElementById("checkAnswer").classList.add("incorrect");
    document.getElementById("checkAnswer").classList.remove("hideMess");
    document.getElementById("checkAnswer").classList.add("showMess");
    correct1 = 0;
  }
  else {
    document.getElementById("checkAnswer").innerHTML= "Correct!";
    document.getElementById("checkAnswer").classList.remove("incorrect");
    document.getElementById("checkAnswer").classList.add("correct");
    document.getElementById("checkAnswer").classList.remove("hideMess");
    document.getElementById("checkAnswer").classList.add("showMess");
    correct1 = 1;
  }
}

function test2() {
  var ans = document.getElementById("p2Answer").value;
  if(isNaN(ans)) {
    document.getElementById("checkAnswer").innerHTML= "The answer must be a number";
    document.getElementById("checkAnswer").classList.remove("correct");
    document.getElementById("checkAnswer").classList.add("incorrect");
    document.getElementById("checkAnswer").classList.remove("hideMess");
    document.getElementById("checkAnswer").classList.add("showMess");
    correct2 = 0;
  }
  else if(ans!=ans2) {
    document.getElementById("checkAnswer").innerHTML= "Incorrect";
    document.getElementById("checkAnswer").classList.remove("correct");
    document.getElementById("checkAnswer").classList.add("incorrect");
    document.getElementById("checkAnswer").classList.remove("hideMess");
    document.getElementById("checkAnswer").classList.add("showMess");
    correct2 = 0;
  }
  else {
    document.getElementById("checkAnswer").innerHTML= "Correct!";
    document.getElementById("checkAnswer").classList.remove("incorrect");
    document.getElementById("checkAnswer").classList.add("correct");
    document.getElementById("checkAnswer").classList.remove("hideMess");
    document.getElementById("checkAnswer").classList.add("showMess");
    correct2 = 1;
  }
}

function test3() {
  var ans = document.getElementById("p3Answer").value;
  if(isNaN(ans)) {
    document.getElementById("checkAnswer").innerHTML= "The answer must be a number";
    document.getElementById("checkAnswer").classList.remove("correct");
    document.getElementById("checkAnswer").classList.add("incorrect");
    document.getElementById("checkAnswer").classList.remove("hideMess");
    document.getElementById("checkAnswer").classList.add("showMess");
    correct3 = 0;
  }
  else if(ans!=ans3) {
    document.getElementById("checkAnswer").innerHTML= "Incorrect";
    document.getElementById("checkAnswer").classList.remove("correct");
    document.getElementById("checkAnswer").classList.add("incorrect");
    document.getElementById("checkAnswer").classList.remove("hideMess");
    document.getElementById("checkAnswer").classList.add("showMess");
    correct3 = 0;
  }
  else {
    document.getElementById("checkAnswer").innerHTML= "Correct!";
    document.getElementById("checkAnswer").classList.remove("incorrect");
    document.getElementById("checkAnswer").classList.add("correct");
    document.getElementById("checkAnswer").classList.remove("hideMess");
    document.getElementById("checkAnswer").classList.add("showMess");
    correct3 = 1;
  }
}

function answerCheck(testNum) {
  if(testNum==1) {
    test1();
  }
  else if(testNum==2) {
    test2();
  }
  else if(testNum==3) {
    test3();
  }
}

function submitButton(page) {

  if(page==1) {
    console.log("message");
    setCookie("score1", correct1, 1);
    location.href="page2.html";
  }
  else if(page==2) {
    setCookie("score2", correct2, 1);
    location.href="page3.html";
  }
  else if(page==3) {
    setCookie("score3", correct3, 1);
    location.href="finalScore.html";
  }
  else {
    console.log="Invalid";
  }
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function finalScore() {
  var score = Number(getCookie("score1")) + Number(getCookie("score2")) +
  Number(getCookie("score3"));

  document.getElementById("final").innerHTML="You scored: " + score + "/" +
  numberQuestions + "!  That's " + ((score/numberQuestions)*100) + "%";
}
