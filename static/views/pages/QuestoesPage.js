/**
 * 
 * @param {Interpretador} interpretador 
 */
function QuestoesPage(interpretador) {
    const questoes = interpretador.getQuestoes();
    const controller = new InterpretadorController();

    function fazerPergunta() {
        controller.fazerPergunta(interpretador);
    }

    function reverTexto() {
        controller.mostrarTexto(interpretador);
    }

    /**
     * @type {HTMLDivElement[]}
     */
    const questoesContainer = [];

    questoes.forEach((questao) => {
        const questaoContainer = QuestaoContainer(questao);
        questoesContainer.push(questaoContainer);
    });

    /**
     * @type {HTMLElement[]}
     */
    const elements = [
        Heading("Lista de Questões Feitas"),
        QuestoesContainer(questoesContainer),
        Buttons([
            Button("Fazer Outra Pergunta", fazerPergunta),
            Button("Rever texto", reverTexto),
            Button("Escolher Outro Texto", controller.cadastrarTexto)
        ])
    ];

    const page = Page();

    elements.forEach((element) => {
        page.appendChild(element);
    });
}