Player1_name = localStorage.getItem("player1");
Player2_name = localStorage.getItem("player2");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = Player1_name + ":";
document.getElementById("player2_name").innerHTML = Player2_name + ":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question turn - " + Player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - " + Player2_name;
function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    row1 = number1 + "X" + number2;
    row2 = "<br>Answer:<input id='Answer_input' type='text'>";
    row3 = "<br><br><button id='check' class='btn btn-info' onclick='check()'>Check</button";
    row = row1+row2+row3;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").innerHTML = "";
}

    