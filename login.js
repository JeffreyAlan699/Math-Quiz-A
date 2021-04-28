function Adduser(){
    var player1 = document.getElementById("Player1_input").value;
    var player2 = document.getElementById("Player2_input").value;
    localStorage.setItem("player1",player1);
    localStorage.setItem("player2",player2);
    window.location = "game_page.html";
}