/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do numero secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'escolha um numero entre 1 e 10';*/
let listaDeNumerosSorteador = [];
let numeroLimite = 10;
let tentativas= 1;
let numeroSecreto = numeroAleatorio();
function exibirTextoNaTela(tag, texto){
    let exibirTexto = document.querySelector(tag);
    exibirTexto.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function exibirMensagemIncial(){
exibirTextoNaTela('h1', 'jogo do numero secreto');
exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');
}
exibirMensagemIncial();
function verificarChute() {
    let pluralSingular = tentativas >1 ? 'tentativas!' : 'tentativa!';
    let mensagemTentativa = `parabens! Voce descobriu o numero secreto com ${tentativas} ${pluralSingular}`;
    let chute = document.querySelector('input').value;
    while(chute != numeroSecreto){
        tentativas++;
        limparCampo();

        
       return chute > numeroSecreto ? exibirTextoNaTela('h1', `O numero secreto é menor que ${chute}`) : exibirTextoNaTela('h1', `O numero secreto é maior que ${chute}`)
        

    }
    exibirTextoNaTela('h1', `Acertou! O numero secreto é ${numeroSecreto}`), exibirTextoNaTela('p',  mensagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled');
}   

function numeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 );
   let quantidadeDeElementosNaLista = listaDeNumerosSorteador.length;
   
   if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteador = [];

   }
   if(listaDeNumerosSorteador.includes(numeroEscolhido)){
    return numeroAleatorio();//se ele ja possue o numero aleatorio, vai gerar outro numero retornando o inicio da função.
   }
   else{
    listaDeNumerosSorteador.push(numeroEscolhido);//vai adicionar o numero gerado no array pra nao ser gerado novamente
    console.log(listaDeNumerosSorteador);
    return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}