//Elementos DOM
const casas = document.getElementsByTagName('input')// pega todos os inputs do HTML e define na variável casas
const b_reiniciar = document.getElementById('reiniciar') //pega o botão de reiniciar(elemento=button) por meio do ID dado no html 
const label_jogador = document.getElementById('jogador') //pegar o label do jogador(elemento=span) que usaremos para mostrar qual jogador tem a vez
//label_jogador é o X ou a O
const res = document.getElementById('res') //pega o resultado do jogo(empate ou ganho de X ou O), está invisível inicialmente pelo css

//Definindo variáveis de estado do jogo
var jogador = '_' //Define o jogador atual (_ = jogador indefinido; X = jogador X, O = jogador O) 
var vencedor = '_' //Define se há um vencedor ou não (_ = indefinido; X = jogador X, O = jogador O) 
var numero_de_jogadas = 0 //serve para descobrirmos se houve ou não empate (número de jogadas=9, tem empate)
var existe_vencedor = false//serve para verificar se houve ou não vencedor, impedindo que haja mais de um ganhador em uma partida

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
		vez_jogador1 = 'cafe';
		jogador_escolhe = 1
	}
	else{
		vez_jogador2 = 'cafe';
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

function SelecionarJogador() { //Além de escolher quem inicia o jogo( no caso é a "O"), possibilita que troque a vez do jogador, mostrando no  canto inferior da tela
	
	z = document.getElementById('seleciona_icones')
	console.log(z.style.display)
	if(z.style.display == 'block'){
		console.log('funcionou')
		z.style.display = 'none';
	}
	try{
	if (jogador == '_') { // Ao 
		jogador = vez_jogador1 //define o jogador O como atual
		console.log("jogador: ", vez_jogador1)
		document.getElementById('jogador').innerHTML = vez_jogador1 //exibe na página qual é o jogador atual
		label_jogador.style.color = '#ffffff' //deixa o texto na cor branca

	} else if (jogador == vez_jogador1) {
		jogador = vez_jogador2
		label_jogador.innerHTML = jogador//exibe na página qual é o jogador atual
		label_jogador.style.color = '#ffffff'//deixa o texto na cor branca
	
		
	}

	else {
		jogador = vez_jogador1 //define o jogador O como atual
		label_jogador.innerHTML = vez_jogador1 //exibe na página qual é o jogador atual
		label_jogador.style.color = '#ffffff' //deixa o texto na cor branca
	}
	}
	catch(err){
		console.log('problema');
	}
}

//Element.addEventListener() registra quando um elemento sofre um evento, podendo colocar o tipo de evento e chamando uma função específica para cada um.
// casas[0].addEventListener('click', casa_0)
// casas[1].addEventListener('click', casa_1)
// casas[2].addEventListener('click', casa_2)
// casas[3].addEventListener('click', casa_3)
// casas[4].addEventListener('click', casa_4)
// casas[5].addEventListener('click', casa_5)
// casas[6].addEventListener('click', casa_6)
// casas[7].addEventListener('click', casa_7)
// casas[8].addEventListener('click', casa_8)

function casa_0() { // Quando clicar em um input, será atribuído O ou X por essa function

	if (vez_jogador1 != 'estrela' && vez_jogador1 != 'cafe' && vez_jogador1 != 'quadrado' && vez_jogador1 != 'X' && vez_jogador1 != 'O'){
		console.log("elemento não selecionado")
	}
	else{
	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[0].value == '_') && (vencedor != vez_jogador1) && (vencedor != vez_jogador2) && existe_vencedor == false) {
		console.log('casa 1 acessada: ', jogador)
		casas[0].value = jogador //preenche a casa com X ou O
		casas[0].style.color = '#000000' //torna o valor da casa visível
		console.log(casas[0].value)
		const music=new Audio('som/acerto.mp3');
		music.play();
		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}

	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		setTimeout(function(){
			alert(`Empate!`)
			
		}, 500)
		console.log('Empate')
		numero_de_jogadas = 0
	}
	}

}

function casa_1() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if (vez_jogador1 != 'estrela' && vez_jogador1 != 'cafe' && vez_jogador1 != 'quadrado' && vez_jogador1 != 'X' && vez_jogador1 != 'O'){
		console.log("elemento não selecionado")
	}
	else{
	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[1].value == '_') && (vencedor != vez_jogador1) && (vencedor != vez_jogador2) && existe_vencedor == false) {
		console.log('casa 1 acessada: ', jogador)
		casas[1].value = jogador //preenche a casa com X ou O
		casas[1].style.color = '#000000' //torna o valor da casa visível
		console.log(casas[0].value)
		const music=new Audio('som/acerto.mp3');
		music.play();
		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}

	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		setTimeout(function(){
			alert(`Empate!`)
			
		}, 500)
		console.log('Empate')
		numero_de_jogadas = 0
	}
	}


}

function casa_2() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if (vez_jogador1 != 'estrela' && vez_jogador1 != 'cafe' && vez_jogador1 != 'quadrado' && vez_jogador1 != 'X' && vez_jogador1 != 'O'){
		console.log("elemento não selecionado")
	}
	else{
	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[2].value == '_') && (vencedor != vez_jogador1) && (vencedor != vez_jogador2) && existe_vencedor == false) {
		console.log('casa 1 acessada: ', jogador)
		casas[2].value = jogador //preenche a casa com X ou O
		casas[2].style.color = '#000000' //torna o valor da casa visível
		console.log(casas[0].value)
		const music=new Audio('som/acerto.mp3');
		music.play();
		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}

	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		setTimeout(function(){
			alert(`Empate!`)
			
		}, 500)
		console.log('Empate')
		numero_de_jogadas = 0
	}
	}

}
function casa_3() { // Quando clicar em um input, será atribuído O ou X por essa function


	if (vez_jogador1 != 'estrela' && vez_jogador1 != 'cafe' && vez_jogador1 != 'quadrado' && vez_jogador1 != 'X' && vez_jogador1 != 'O'){
		console.log("elemento não selecionado")
	}
	else{
	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[3].value == '_') && (vencedor != vez_jogador1) && (vencedor != vez_jogador2) && existe_vencedor == false) {
		console.log('casa 1 acessada: ', jogador)
		casas[3].value = jogador //preenche a casa com X ou O
		casas[3].style.color = '#000000' //torna o valor da casa visível
		console.log(casas[0].value)
		const music=new Audio('som/acerto.mp3');
		music.play();
		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}

	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		setTimeout(function(){
			alert(`Empate!`)
			
		}, 500)
		console.log('Empate')
		numero_de_jogadas = 0
	}
	}


}

function casa_4() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if (vez_jogador1 != 'estrela' && vez_jogador1 != 'cafe' && vez_jogador1 != 'quadrado' && vez_jogador1 != 'X' && vez_jogador1 != 'O'){
		console.log("elemento não selecionado")
	}
	else{
	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[4].value == '_') && (vencedor != vez_jogador1) && (vencedor != vez_jogador2) && existe_vencedor == false) {
		console.log('casa 1 acessada: ', jogador)
		casas[4].value = jogador //preenche a casa com X ou O
		casas[4].style.color = '#000000' //torna o valor da casa visível
		console.log(casas[0].value)
		const music=new Audio('som/acerto.mp3');
		music.play();
		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}

	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		setTimeout(function(){
			alert(`Empate!`)
			
		}, 500)
		console.log('Empate')
		numero_de_jogadas = 0
	}
	}

}

function casa_5() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if (vez_jogador1 != 'estrela' && vez_jogador1 != 'cafe' && vez_jogador1 != 'quadrado' && vez_jogador1 != 'X' && vez_jogador1 != 'O'){
		console.log("elemento não selecionado")
	}
	else{
	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[5].value == '_') && (vencedor != vez_jogador1) && (vencedor != vez_jogador2) && existe_vencedor == false) {
		console.log('casa 1 acessada: ', jogador)
		casas[5].value = jogador //preenche a casa com X ou O
		casas[5].style.color = '#000000' //torna o valor da casa visível
		console.log(casas[0].value)
		const music=new Audio('som/acerto.mp3');
		music.play();
		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}

	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		setTimeout(function(){
			alert(`Empate!`)
			
		}, 500)
		console.log('Empate')
		numero_de_jogadas = 0
	}
	}


}

function casa_6() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if (vez_jogador1 != 'estrela' && vez_jogador1 != 'cafe' && vez_jogador1 != 'quadrado' && vez_jogador1 != 'X' && vez_jogador1 != 'O'){
		console.log("elemento não selecionado")
	}
	else{
	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[6].value == '_') && (vencedor != vez_jogador1) && (vencedor != vez_jogador2) && existe_vencedor == false) {
		console.log('casa 1 acessada: ', jogador)
		casas[6].value = jogador //preenche a casa com X ou O
		casas[6].style.color = '#000000' //torna o valor da casa visível
		console.log(casas[0].value)
		const music=new Audio('som/acerto.mp3');
		music.play();
		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}

	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		setTimeout(function(){
			alert(`Empate!`)
			
		}, 500)
		console.log('Empate')
		numero_de_jogadas = 0
	}
	}

}

function casa_7() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if (vez_jogador1 != 'estrela' && vez_jogador1 != 'cafe' && vez_jogador1 != 'quadrado' && vez_jogador1 != 'X' && vez_jogador1 != 'O'){
		console.log("elemento não selecionado")
	}
	else{
	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[7].value == '_') && (vencedor != vez_jogador1) && (vencedor != vez_jogador2) && existe_vencedor == false) {
		console.log('casa 1 acessada: ', jogador)
		casas[7].value = jogador //preenche a casa com X ou O
		casas[7].style.color = '#000000' //torna o valor da casa visível
		console.log(casas[0].value)
		const music=new Audio('som/acerto.mp3');
		music.play();
		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}

	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		setTimeout(function(){
			alert(`Empate!`)
			
		}, 500)
		console.log('Empate')
		numero_de_jogadas = 0
	}
	}


}

function casa_8() { // Quando clicar em um input, será atribuído O ou X por essa function


	//se a casa estiver vazia e ninguém tiver vencido a partida
	if (vez_jogador1 != 'estrela' && vez_jogador1 != 'cafe' && vez_jogador1 != 'quadrado' && vez_jogador1 != 'X' && vez_jogador1 != 'O'){
		console.log("elemento não selecionado")
	}
	else{
	//se a casa estiver vazia e ninguém tiver vencido a partida
	if ((casas[8].value == '_') && (vencedor != vez_jogador1) && (vencedor != vez_jogador2) && existe_vencedor == false) {
		console.log('casa 1 acessada: ', jogador)
		casas[8].value = jogador //preenche a casa com X ou O
		casas[8].style.color = '#000000' //torna o valor da casa visível
		console.log(casas[0].value)
		const music=new Audio('som/acerto.mp3');
		music.play();
		SelecionarJogador() //função que troca a vez do jogador, a ser definida depois
		verificador_vitoria(vencedor) //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
		//se o vencedor existe, imprime
	}

	if (numero_de_jogadas == 9 && vencedor == '_') {
		res.style.color = '#ffffff'
		res.innerHTML = `Empate!`
		setTimeout(function(){
			alert(`Empate!`)
			
		}, 500)
		console.log('Empate')
		numero_de_jogadas = 0
	}
	}


}

//Define a resposta ao evento de clique no botão Reiniciar
// b_reiniciar.addEventListener('click', reiniciar_partida)

function reiniciar_partida() {
	res.style.color = 'transparent'
	existe_vencedor = false
	numero_de_jogadas = 0

	for (var i = 0; i < 9; i++) {
		casas[i].value = '_' //Limpa todas as casas
		casas[i].style.color = 'transparent' //Torna o valor _ invisível
		casas[i].style.backgroundColor = '#ffffff' //Torna o fundo branco
	}

	vencedor = '_' //Reseta o vencedor
}


//Verifica se uma condição de vitória foi atingida e colore a linha da vitória
function verificador_vitoria() {
	if ((casas[0].value == casas[1].value) && (casas[1].value == casas[2].value) && casas[0].value != '_' && existe_vencedor == false) {
		casas[0].style.backgroundColor = '#add8e6'
		casas[1].style.backgroundColor = '#add8e6'
		casas[2].style.backgroundColor = '#add8e6'
		res.style.color = '#ffffff'
		setTimeout(function(){
			alert(`${casas[0].value} venceu`)
			
		}, 500)
		res.innerHTML = `${casas[0].value} venceu`
		console.log(`${casas[0].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		return casas[0].value



	} else if ((casas[3].value == casas[4].value) && (casas[4].value == casas[5].value) && casas[3].value != '_' && existe_vencedor == false) {
		casas[3].style.backgroundColor = '#add8e6'
		casas[4].style.backgroundColor = '#add8e6'
		casas[5].style.backgroundColor = '#add8e6'
		res.style.color = '#ffffff'
		setTimeout(function(){
			alert(`${casas[3].value} venceu`)
			
		}, 500)
		res.innerHTML = `${casas[3].value} venceu`
		console.log(`${casas[3].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		return casas[3].value

	} else if ((casas[6].value == casas[7].value) && (casas[7].value == casas[8].value) && casas[6].value != '_' && existe_vencedor == false) {
		casas[6].style.backgroundColor = '#add8e6'
		casas[7].style.backgroundColor = '#add8e6'
		casas[8].style.backgroundColor = '#add8e6'
		res.style.color = '#ffffff'
		setTimeout(function(){
			alert(`${casas[6].value} venceu`)
			
		}, 500)
		res.innerHTML = `${casas[6].value} venceu`
		console.log(`${casas[6].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		return casas[6].value

	} else if ((casas[0].value == casas[3].value) && (casas[3].value == casas[6].value) && casas[0].value != '_' && existe_vencedor == false) {
		casas[0].style.backgroundColor = '#add8e6'
		casas[3].style.backgroundColor = '#add8e6'
		casas[6].style.backgroundColor = '#add8e6'
		res.style.color = '#ffffff'
		setTimeout(function(){
			alert(`${casas[0].value} venceu`)
			
		}, 500)
		res.innerHTML = `${casas[0].value} venceu`
		console.log(`${casas[0].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		return casas[0].value

	} else if ((casas[1].value == casas[4].value) && (casas[4].value == casas[7].value) && casas[1].value != '_' && existe_vencedor == false) {
		casas[1].style.backgroundColor = '#add8e6'
		casas[4].style.backgroundColor = '#add8e6'
		casas[7].style.backgroundColor = '#add8e6'
		res.style.color = '#ffffff'
		setTimeout(function(){
			alert(`${casas[1].value} venceu`)
			
		}, 500)
		res.innerHTML = `${casas[1].value} venceu`
		console.log(`${casas[1].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		return casas[1].value

	} else if ((casas[2].value == casas[5].value) && (casas[5].value == casas[8].value) && casas[2].value != '_' && existe_vencedor == false) {
		casas[2].style.backgroundColor = '#add8e6'
		casas[5].style.backgroundColor = '#add8e6'
		casas[8].style.backgroundColor = '#add8e6'
		res.style.color = '#ffffff'
		setTimeout(function(){
			alert(`${casas[2].value} venceu`)
			
		}, 500)
		res.innerHTML = `${casas[2].value} venceu`
		console.log(`${casas[2].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0


		return casas[2].value
	} else if ((casas[0].value == casas[4].value) && (casas[4].value == casas[8].value) && casas[0].value != '_' && existe_vencedor == false) {
		casas[0].style.backgroundColor = '#add8e6'
		casas[4].style.backgroundColor = '#add8e6'
		casas[8].style.backgroundColor = '#add8e6'
		res.style.color = '#ffffff'
		setTimeout(function(){
			alert(`${casas[0].value} venceu`)
			
		}, 500)
		res.innerHTML = `${casas[0].value} venceu`
		console.log(`${casas[0].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		return casas[0].value

	} else if ((casas[2].value == casas[4].value) && (casas[4].value == casas[6].value) && casas[2].value != '_' && existe_vencedor == false) {
		casas[2].style.backgroundColor = '#add8e6'
		casas[4].style.backgroundColor = '#add8e6'
		casas[6].style.backgroundColor = '#add8e6'
		res.style.color = '#ffffff';
		setTimeout(function(){
			alert(`${casas[2].value} venceu`)
			
		}, 500)
		res.innerHTML = `${casas[2].value} venceu`
		console.log(`${casas[2].value} venceu`)
		existe_vencedor = true
		numero_de_jogadas = 0
		return casas[2].value
	}

	else {//se não houve vencedor

		numero_de_jogadas++
		return '_'
	}

}
function novopopup(){
	x = document.getElementById('seleciona_icones');
	console.log(typeof(x.style.display))
	if (x.style.display == 'none'){
		console.log(x.style.display)
		x.style.display = 'block'
	}
	
}


