const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-10-05T00:00:00");
const tempoObjetivo2 = new Date("2024-11-05T00:00:00");
const tempoObjetivo3 = new Date("2025-02-05T00:00:00");
const tempoObjetivo4 = new Date("2024-12-05T00:00:00");

function calculaTempo(tempoObjetivo){
let tempoAtual = new Date();
let tempoFinal = tempoObjetivo - tempoAtual;
let segundos = Math.floor(tempoFinal/1000);
let minutos = Math.floor(segundos/60);
let horas = Math.floor(minutos/60); //função que faz a contagem do tempo a cada seg. rivadas comecaCronometro(); //chamada da função que inicia o cronômetro/60);
let dias = Math.floor(horas/24);
segundos %=60;
minutos%=60;
horas%=24;

if(tempoFinal>0){ 
    return dias + "dias" + horas+ "horas" + minutos + "minutos" + segundos + "segundos";
}else{
    return "prazo encerrado";
}

}

function atualizaCronometro(){
    //laço de reetição para interagir com todos os objetivos
    for (let i =0;1 <contadores.length; i++){
        contadores[i].textContent=calculaTempo(tempos[i]);
    }
}
function comecacronometro(){
     atualizaCronometro(); //chamada da função criada anteriormente dentro desta função 
     setInterval (atualizaCronometro, 1000); //função que faz a contagem do tempo a cada seg. 
}
     comecaCronometro(); //chamada da função que inicia o cronômetro
