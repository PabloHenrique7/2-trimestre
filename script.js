const caixaPrincipal = document.querySelector("caixa-principal");
const caixaPerguntas = document.querySelector("caixa-Perguntas");
const caixaAlternativas = document.querySelector("caixa-Alternativas");
const caixaResultado = document.querySelector("caixa-Resultado");
const textoResultado = document.querySelector("texto-resultado");

const perguntas = [
    {
        enunciado: "Pergunta 1" 
        alternativas: ["Alternativas 1" , "Alternativas 2"]
    }
    {
        enunciado: "Pergunta 2" 
        alternativas: ["Alternativas 1" , "Alternativas 2"]
    }
    {
        enunciado: "Pergunta 3" 
        alternativas: ["Alternativas 1" , "Alternativas 2"]
    }
    {
        enunciado: "Pergunta 4" 
        alternativas: ["Alternativas 1" , "Alternativas 2"]
    }
    {
        enunciado: "Pergunta 5" 
        alternativas: ["Alternativas 1" , "Alternativas 2"]
    }

];
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;

}

mostraPergunta()