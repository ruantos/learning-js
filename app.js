// defining functions
function getRandomNum(){
	return parseInt(Math.random() * 10 + 1);
}

function verificarChute(){
	let num = getRandomNum(); 
	let chute = document.querySelector('input').value;


	if (chute == num) {
		return true;
	}
	return false;
}

function showResult(){
	if (verificarChute() === true) {
		alert('Você acertou!');
	}
	else{
		alert('Você errou!');
	}	
}

function showLove(){
	alert('Eu amo js');
}

// f-strings on js
function askCity(){
	let city = prompt('Em que cidade você mora? ');
	alert(`Eu estive em ${city} recentemente`);
}

// how to query html tags and change its text
let title = document.querySelector('h1');
title.innerHTML = "Jogo Secreto";

let paragraph = document.querySelector('p');
paragraph.innerHTML = "Escolha um número entre 0 e 10";

