// defining functionns
function verificarChute(chute){
	let num = 10; 

	if (chute == num) {
		return true;
	}
}

function showLove(){
	alert('Eu amo js');
}

function askCity(){
	let city = prompt('Em que cidade você mora? ');
	alert(`Eu estive em ${city} recentemente`);
}

// how to query html tags and change its text
let title = document.querySelector('h1');
title.innerHTML = "Jogo Secreto";

let paragraph = document.querySelector('p');
paragraph.innerHTML = "Escolha um número entre 0 e 10";
