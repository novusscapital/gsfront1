const perguntas = [
  {
    pergunta: "O que você deve fazer ao perceber o nível da água subindo rapidamente durante uma chuva forte?",
    opcoes: [
      "a) Esperar a chuva passar dentro do carro",
      "b) Buscar imediatamente um local elevado e seguro",
      "c) Tentar atravessar a área alagada com cuidado"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a melhor atitude ao se deparar com uma rua alagada?",
    opcoes: [
      "a) Tentar atravessar rapidamente",
      "b) Jogar areia para absorver a água",
      "c) Evitar a rua e buscar caminhos alternativos"
    ],
    correta: 2
  },
  {
    pergunta: "Ao receber um alerta de enchente, o que você deve fazer?",
    opcoes: [
      "a) Ignorar o alerta se a chuva parecer fraca",
      "b) Se preparar para evacuar ou subir para locais seguros",
      "c) Verificar se a vizinhança já está saindo"
    ],
    correta: 1
  }
];

let indiceAtual = 0;
let acertos = 0;

const perguntaEl = document.getElementById("pergunta");
const respostaEl = document.getElementById("container-resposta");
const botaoProximo = document.getElementById("proximo");
const mensagemEl = document.getElementById("message");
const containerPerguntas = document.getElementById("container-perguntas");
const containerResultado = document.getElementById("container-resultado");
const resultadoTexto = document.getElementById("resultadoTexto");

function mostrarPergunta() {
  const atual = perguntas[indiceAtual];
  perguntaEl.innerText = atual.pergunta;
  respostaEl.innerHTML = "";
  mensagemEl.innerText = "";

  atual.opcoes.forEach((opcao, i) => {
    const div = document.createElement("div");
    div.classList.add("option-container");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "resposta";
    input.value = i;
    input.id = `opcao-${i}`;

    const label = document.createElement("label");
    label.htmlFor = `opcao-${i}`;
    label.innerText = opcao;

    div.appendChild(input);
    div.appendChild(label);
    respostaEl.appendChild(div);
  });
}

botaoProximo.addEventListener("click", () => {
  const selecionada = document.querySelector('input[name="resposta"]:checked');

  if (!selecionada) {
    mensagemEl.innerText = "Por favor, selecione uma opção.";
    return;
  }

  if (parseInt(selecionada.value) === perguntas[indiceAtual].correta) {
    acertos++;
  }

  indiceAtual++;

  if (indiceAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
});

function mostrarResultado() {
  containerPerguntas.classList.add("hidden");
  containerResultado.classList.remove("hidden");
  resultadoTexto.innerText = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
}

function reiniciarQuiz() {
  indiceAtual = 0;
  acertos = 0;
  containerResultado.classList.add("hidden");
  containerPerguntas.classList.remove("hidden");
  mostrarPergunta();
}

document.addEventListener("DOMContentLoaded", mostrarPergunta);