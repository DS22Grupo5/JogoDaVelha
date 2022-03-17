var jogador_escolhe = 0;
var vez_jogador1 = '';
var vez_jogador2 = '';
function quadrado(){
	
	if (jogador_escolhe == 0){
		vez_jogador1 = 'quadrado';
		jogador_escolhe = 1

	}
	else{
		vez_jogador2 = 'quadrado';
		jogador_escolhe = 0;
		SelecionarJogador()
		
	}
	console.log(vez_jogador1, ', ', vez_jogador2)
}
function circulo_preenchido(){
	
	if (jogador_escolhe == 0){
		vez_jogador1 = 'circulo_preenchido';
		jogador_escolhe = 1


	}
	else{
		vez_jogador2 = 'circulo_preenchido';
		jogador_escolhe = 0;
		SelecionarJogador()
	
	}
	console.log(vez_jogador1, ', ', vez_jogador2)
}
function circulo(){
	
	if (jogador_escolhe == 0){
		vez_jogador1 = 'O';
		jogador_escolhe = 1

	}
	else{
		vez_jogador2 = 'O';
		jogador_escolhe = 0;
		SelecionarJogador()
		
	}
	console.log(vez_jogador1, ', ', vez_jogador2)	
}
function funcaox(){
	
	if (jogador_escolhe == 0){
		vez_jogador1 = 'X';
		jogador_escolhe = 1

	}
	else{
		vez_jogador2 = 'X';
		jogador_escolhe = 0;
		SelecionarJogador()
	
	}
	console.log(vez_jogador1, ', ', vez_jogador2)
}

function estrela(){

	if (jogador_escolhe == 0){
		vez_jogador1 = 'estrela';
		jogador_escolhe = 1
	}
	else{
		vez_jogador2 = 'estrela';
		jogador_escolhe = 0;
		SelecionarJogador()

	}
	console.log(vez_jogador1, ', ', vez_jogador2)

} 