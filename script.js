const questions = [
        "Qual foi seu maior aprendizado este ano?",
            "O que mais te desafiou nas aulas?",
                "Qual foi o momento mais divertido com seus colegas?",
                    "Se pudesse mudar algo no ano, o que seria?",
                        "Qual professor ou matéria te marcou mais este ano?",
                            "Que habilidade ou conhecimento novo você desenvolveu?",
                                "Qual foi o projeto ou atividade de que mais gostou?",
                                    "Se tivesse que descrever este ano em uma palavra, qual seria?",
                                        "Como você contribuiu para ajudar um colega?",
                                            "Qual meta você deseja alcançar no próximo ano?",
                                                "O que você mais gostou de aprender?",
                                                    "Como você lidou com os desafios deste ano?",
                                                        "Qual foi sua maior conquista este ano?",
                                                            "Quem te inspirou ao longo do ano?",
                                                                "Qual foi o momento mais marcante na escola?",
                                                                    "Se pudesse reviver um dia deste ano, qual seria?",
                                                                        "O que te deixou mais orgulhoso(a) este ano?",
                                                                            "Com quem você mais gostou de trabalhar em grupo?",
                                                                                "Qual conselho daria a si mesmo(a) no início do ano?",
                                                                                    "Que hábito você gostaria de melhorar no próximo ano?",
                                                                                        "O que aprendeu sobre si mesmo(a) este ano?",
                                                                                            "Qual foi sua atividade extracurricular favorita?",
                                                                                                "Como você se sentiu ao alcançar uma meta?",
                                                                                                    "Se pudesse agradecer alguém, quem seria e por quê?",
                                                                                                        "Que impacto você acha que causou nos outros este ano?",
                                                                                                            "Qual foi o maior desafio que superou?",
                                                                                                                "O que aprendeu sobre trabalho em equipe?",
                                                                                                                    "Como planeja aplicar o que aprendeu no próximo ano?",
                                                                                                                        "Qual foi o momento mais engraçado do ano?",
                                                                                                                            "O que gostaria de fazer de forma diferente no próximo ano?"
];

const grid = document.getElementById("grid");
const questionBox = document.getElementById("questionBox");
const questionText = document.getElementById("questionText");

// Gerar os botões das cartas
questions.forEach((question, index) => {
        const card = document.createElement("button");
            card.className = "card";
                card.textContent = index + 1;
                    card.onclick = () => showQuestion(index);
                        grid.appendChild(card);
});

// Mostrar a pergunta correspondente
function showQuestion(index) {
        questionText.textContent = questions[index];
            grid.style.display = "none";
                questionBox.style.display = "block";
}

// Voltar ao painel de seleção
function goBack() {
        questionBox.style.display = "none";
            grid.style.display = "grid";
}

}
}
})
]