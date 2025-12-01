// ======================================================
// 1. VETORES (ARRAYS) - Listas simples
// ======================================================
const nomes = ["Minha Mãe", "Meu Pai", "Meu Irmão"];
const momentos = ["Nossa Infância", "Almoços em Família", "Visitas a Santa Maria"];

// ======================================================
// 2. MATRIZ - Tabela de dados [Nome, Característica]
// ======================================================
const caracteristicas = [
    ["Mãe", "Carinhosa e Proativa"],  // Índice 0
    ["Pai", "Trabalhador e Dedicado"], // Índice 1
    ["Irmão", "Parceiro e Estudioso"]   // Índice 2
];

// Mostra a matriz no Console do navegador (F12)
console.log("--- Matriz da Família ---");
console.table(caracteristicas);

// ======================================================
// 3. OBJETO - Representando seu irmão
// ======================================================
const objetoIrmao = {
    nome: "Irmão",
    cidade: "Santa Maria",
    ocupacao: "Faculdade",
    relacao: "Nunca brigamos, crescemos juntos"
};

// ======================================================
// 4. WHILE - Loop simples (aparece no console)
// ======================================================
let contador = 1;
console.log("--- Fatos no Console ---");
while (contador <= 3) {
    console.log(`Fato ${contador}: Família é a base de tudo.`);
    contador++;
}

// ======================================================
// 5. DOM + FOR - Criar lista na tela automaticamente
// ======================================================
const listaUl = document.getElementById('lista-familiares');

// Limpa a lista antes de começar
listaUl.innerHTML = "";

for (let i = 0; i < nomes.length; i++) {
    // Cria o elemento <li>
    let itemLista = document.createElement('li');
    
    // Adiciona o texto
    itemLista.innerText = `❤️ ${nomes[i]}`;
    
    // Adiciona a classe CSS 'card' para ficar bonito
    itemLista.classList.add('card');

    // EVENTO: onmouseover (Passar o mouse)
    itemLista.addEventListener('mouseover', function() {
        itemLista.style.backgroundColor = "#dbeafe"; // Azulzinho claro
        itemLista.style.cursor = "pointer";
    });

    // EVENTO: onmouseout (Tirar o mouse)
    itemLista.addEventListener('mouseout', function() {
        itemLista.style.backgroundColor = "#f9f9f9"; // Volta ao normal
    });

    // Coloca o item dentro da lista UL no HTML
    listaUl.appendChild(itemLista);
}

// ======================================================
// 6. DOM - Exibir o Objeto (Seu irmão)
// ======================================================
const divDestaque = document.getElementById('card-destaque');

divDestaque.innerHTML = `
    <h3>Destaque: ${objetoIrmao.nome}</h3>
    <p><strong>Cidade Atual:</strong> ${objetoIrmao.cidade}</p>
    <p><strong>Foco:</strong> ${objetoIrmao.ocupacao}</p>
    <p><em>"${objetoIrmao.relacao}"</em></p>
`;

// ======================================================
// 7. SWITCH - Botão de Mensagens
// ======================================================
const btnMensagem = document.getElementById('btn-mensagem');

btnMensagem.addEventListener('click', function() {
    // Pega o número que o usuário digitou
    let inputValor = document.getElementById('input-escolha').value;
    let numero = parseInt(inputValor);
    let mensagem = "";

    switch (numero) {
        case 1:
            mensagem = "Mãe: Obrigado por ser tão carinhosa e fazer tudo por nós!";
            break;
        case 2:
            mensagem = "Pai: Admiro muito seu esforço e trabalho duro todos os dias.";
            break;
        case 3:
            mensagem = "Irmão: Boa sorte na faculdade em Santa Maria! Tamo junto.";
            break;
        default:
            mensagem = "Opção inválida! Escolha 1 (Mãe), 2 (Pai) ou 3 (Irmão).";
            break;
    }

    alert(mensagem);
});

// ======================================================
// 8. IF / ELSE - Botão Surpresa
// ======================================================
const btnSurpresa = document.getElementById('btn-surpresa');
const txtSurpresa = document.getElementById('texto-surpresa');

// Define o texto da surpresa
txtSurpresa.innerText = "Curiosidade: Mesmo morando longe para estudar, nossa união continua a mesma!";

btnSurpresa.onclick = function() {
    // Verifica se tem a classe 'oculto'
    if (txtSurpresa.classList.contains('oculto')) {
        // SE estiver oculto, remove a classe para mostrar
        txtSurpresa.classList.remove('oculto');
        btnSurpresa.innerText = "Esconder";
        btnSurpresa.style.backgroundColor = "#ff6b6b"; // Muda cor do botão
    } else {
        // SENÃO, adiciona a classe para esconder
        txtSurpresa.classList.add('oculto');
        btnSurpresa.innerText = "Ver Curiosidade";
        btnSurpresa.style.backgroundColor = ""; // Reseta cor
    }
};

// Pequeno ajuste no título via JS
document.querySelector('h1').innerText += " (Simulado)";
