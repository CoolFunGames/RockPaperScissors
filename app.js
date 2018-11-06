var yes_btn = document.getElementById("ready");
var yes_ask = document.getElementById("ready_text");
var player_begin = document.getElementById("player_begin");
var p1_r = document.getElementById("p1_r");
var p1_p = document.getElementById("p1_p");
var p1_s = document.getElementById("p1_s");
var p2_r = document.getElementById("p2_r");
var p2_p = document.getElementById("p2_p");
var p2_s = document.getElementById("p2_s");
var againBtn = document.getElementById("playAgainBtn");
var restart = document.getElementById("playAgainNew");
var p1_choice;
var p2_choicw;
var p1_name;
var p2_name;
function yesBtnClicked() {
	yes_btn.hidden = true;
	yes_ask.hidden = true;
	var p1 = prompt("Please Enter Player ONE's Name:");
	var p2 = prompt("Please Enter Player TWO's Name:");
	if (p1 === p2) {
		alert("Please adjust the players name and try again");
	}
	else if (p1 === "") {
		alert("Please adjust the players name and try again");
	}
	else if (p2 === "") {
		alert("Please adjust the players name and try again");
	}
	else {
		p1_name = p1;
		p2_name = p2;
		player_begin.innerHTML = p1 + ", please choose rock, paper, or scissors:";
		p1_r.hidden = false;
		p1_p.hidden = false;
		p1_s.hidden = false;
	
	}
	
}
/*
Letting you know
1 = rock
2 = paper
3 = scissors

*/

function playAgain() {
	yes_btn.hidden = true;
	yes_ask.hidden = true;
	player_begin.innerHTML = p1_name + ", please choose rock, paper, or scissors:";
	p1_r.hidden = false;
	p1_p.hidden = false;
	p1_s.hidden = false;
	againBtn.hidden = true;
	restart.hidden = true;
}

function p11(result) {
	p1_choice = result;
	player_begin.innerHTML = p2_name + ", please choose rock, paper, or scissors";
	p1_r.hidden = true;
	p1_p.hidden = true;
	p1_s.hidden = true;
	p2_r.hidden = false;
	p2_p.hidden = false;
	p2_s.hidden = false;
	
	
}
function p22(resulte) {
	var result_1 = p1_choice;
	p1_r.hidden = true;
	p1_p.hidden = true;
	p1_s.hidden = true;
	p2_r.hidden = true;
	p2_p.hidden = true;
	p2_s.hidden = true;
	
	/*If Statemets:*/
	if (result_1 === resulte) {
		player_begin.innerHTML = "It's a TIE";
	
		againBtn.hidden = false;
		restart.hidden = false;
	} else if (result_1 === 1 && resulte === 2) {
		player_begin.innerHTML = p2_name + " WON!";
	
		againBtn.hidden = false;
		restart.hidden = false;
	} else if (result_1 === 2 && resulte === 1) {
		player_begin.innerHTML = p1_name + " WON!";
	
		againBtn.hidden = false;
		restart.hidden = false;
	} else if (result_1 === 2 && resulte === 3) {
		player_begin.innerHTML = p2_name + " WON!";
	
		againBtn.hidden = false;
		restart.hidden = false;
	} else if (result_1 === 3 && resulte === 2) {
		player_begin.innerHTML = p1_name + " WON!";
		
		againBtn.hidden = false;
		restart.hidden = false;
	} else if (result_1 === 1 && resulte === 3) {
		player_begin.innerHTML = p1_name + " WON!";
		
	againBtn.hidden = false;
		restart.hidden = false;
	} else if (result_1 === 3 && resulte === 1) {
		player_begin.innerHTML = p2_name + " WON!";
		againBtn.hidden = false;
		restart.hidden = false;
	}
	
}

