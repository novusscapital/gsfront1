document.addEventListener('DOMContentLoaded', () => {
  const pergunta = document.getElementById('pergunta');
  const resposta = document.getElementById('container-resposta');
  const proximaPergunta = document.getElementById("proximo");
  const mensagem = document.getElementById('message');
  const containerPerguntas = document.getElementById('container-perguntas');
  const containerResultado = document.getElementById('container-resultado');
  const listaResultado = document.getElementById('lista-resultado');
  const reiniciarBotao = document.getElementById('inicio-btn');

  const letras = ['a)', 'b)', 'c)'];

  const questoes = [
    {
      pergunta: 'O que você deve fazer ao perceber o nível da água subindo rapidamente durante uma chuva forte?',
      opcoes: [
        'Esperar a chuva passar dentro do carro',
        'Buscar imediatamente um local elevado e seguro',
        'Tentar atravessar a área alagada com cuidado'
      ],
      correta: 'Buscar imediatamente um local elevado e seguro'
    },
    {
      pergunta: 'Qual atitude é mais segura ao encontrar uma rua coberta por água?',
      opcoes: [
        'Dirigir devagar tentando atravessar',
        'Evitar a travessia e buscar rota alternativa',
        'Esperar alguém atravessar para ver se é seguro'
      ],
      correta: 'Evitar a travessia e buscar rota alternativa'
    },
    {
      pergunta: 'Durante uma enchente, por que não se deve entrar em contato com a água?',
      opcoes: [
        'Pode conter esgoto, produtos tóxicos ou corrente elétrica',
        'É apenas desconfortável e fria',
        'Pode causar mal cheiro nas roupas'
      ],
      correta: 'Pode conter esgoto, produtos tóxicos ou corrente elétrica'
    },
    {
      pergunta: 'Qual é a ação correta ao receber um alerta de evacuação da Defesa Civil?',
      opcoes: [
        'Ignorar e esperar mais informações',
        'Sair imediatamente com os itens essenciais',
        'Subir no telhado e aguardar resgate'
      ],
      correta: 'Sair imediatamente com os itens essenciais'
    },
    {
      pergunta: 'Em caso de enchente dentro de casa, o que deve ser feito com a energia elétrica?',
      opcoes: [
        'Manter ligada para iluminar o ambiente',
        'Desligar o disjuntor geral imediatamente',
        'Tocar nos fios para ver se estão molhados'
      ],
      correta: 'Desligar o disjuntor geral imediatamente'
    },
    {
      pergunta: 'Qual é o sinal de que a enchente pode se tornar uma correnteza perigosa?',
      opcoes: [
        'Água parada sem movimento',
        'Nível da água subindo e objetos sendo arrastados',
        'Presença de lama no fundo da rua'
      ],
      correta: 'Nível da água subindo e objetos sendo arrastados'
    },
    {
      pergunta: 'Ao encontrar uma pessoa ilhada pela enchente, qual deve ser sua ação?',
      opcoes: [
        'Tentar alcançá-la nadando',
        'Ligar para os bombeiros e acionar resgate',
        'Pedir que ela atravesse com cuidado'
      ],
      correta: 'Ligar para os bombeiros e acionar resgate'
    },
    {
      pergunta: 'Após uma enchente, qual cuidado é essencial antes de voltar para casa?',
      opcoes: [
        'Lavar o chão com sabão',
        'Verificar a estrutura e riscos elétricos',
        'Secar os móveis molhados'
      ],
      correta: 'Verificar a estrutura e riscos elétricos'
    },
    {
      pergunta: 'Por que é importante ter um kit de emergência preparado?',
      opcoes: [
        'Para viagens longas',
        'Para acampar durante as chuvas',
        'Para garantir segurança em casos de desastres'
      ],
      correta: 'Para garantir segurança em casos de desastres'
    },
    {
      pergunta: 'O que NÃO se deve fazer durante uma enchente?',
      opcoes: [
        'Monitorar alertas oficiais e evacuar se necessário',
        'Tentar atravessar a pé áreas alagadas',
        'Desligar energia e gás da residência'
      ],
      correta: 'Tentar atravessar a pé áreas alagadas'
    }
  ];

  let perguntas = 0;
  let acertos = 0;
  const respostas = [];

  containerResultado.classList.add('hidden');
  reiniciarBotao.classList.add('hidden');
  containerPerguntas.classList.remove('hidden');
  listaResultado.innerHTML = '';

  function mostrarPergunta() {
    if (perguntas < questoes.length) {
      const atual = questoes[perguntas];
      pergunta.textContent = atual.pergunta;
      resposta.innerHTML = '';

      atual.opcoes.forEach((opcao, index) => {
        const id = `opcao-${Math.random()}`;
        
        const optionContainer = document.createElement('div');
        optionContainer.className = 'option-container';
        
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "opcao";
        input.value = opcao;
        input.id = id;
        
        const label = document.createElement("label");
        label.htmlFor = id;
        label.textContent = `${letras[index]} ${opcao}`;
        
        optionContainer.appendChild(input);
        optionContainer.appendChild(label);
        
        resposta.appendChild(optionContainer);
      });

      mensagem.textContent = '';
    } else {
      mostrarResultado();
    }
  }

  function mostrarResultado() {
    containerPerguntas.classList.add('hidden');
    containerResultado.classList.remove('hidden');
    reiniciarBotao.classList.remove('hidden');
    listaResultado.innerHTML = '';

    questoes.forEach((q, index) => {
      const correta = q.correta === respostas[index] ? '✅' : '❌';
      const listaItem = document.createElement('li');
      listaItem.innerHTML = `<strong>${q.pergunta}</strong><br>Resposta: <span>${respostas[index]}</span> ${correta}<br>Correta: ${q.correta}`;
      listaResultado.appendChild(listaItem);
    });

    const mensagemFinal = document.createElement('p');
    mensagemFinal.innerHTML = acertos >= 5
      ? `<strong>Parabéns! Você acertou ${acertos} de ${questoes.length} perguntas.</strong><br>Sua preparação é essencial diante do risco de transbordamentos e enchentes. Continue atento aos alertas e seja referência de segurança para sua comunidade.`
      : `<strong>Você acertou ${acertos} de ${questoes.length} perguntas.</strong><br>Em situações de enchente por transbordamento de rios, cada decisão pode salvar vidas. Reforce seu conhecimento agora — enquanto é tempo — e esteja pronto para agir com segurança.`;

    listaResultado.appendChild(mensagemFinal);
  }

  function nextQuestao() {
    const selecionado = document.querySelector('input[name="opcao"]:checked');
    if (!selecionado) {
      mensagem.textContent = "Por favor, selecione uma opção.";
      return;
    }

    const respostaUsuario = selecionado.value;
    respostas.push(respostaUsuario);
    if (respostaUsuario === questoes[perguntas].correta) {
      acertos++;
    }
    perguntas++;
    mostrarPergunta();
  }

  function reiniciarQuiz() {
    perguntas = 0;
    acertos = 0;
    respostas.length = 0;
    containerResultado.classList.add('hidden');
    reiniciarBotao.classList.add('hidden');
    containerPerguntas.classList.remove('hidden');
    listaResultado.innerHTML = '';
    mostrarPergunta();
  }

  proximaPergunta.addEventListener('click', nextQuestao);
  reiniciarBotao.addEventListener('click', reiniciarQuiz);

  mostrarPergunta();
});