/**
 * 
 * @param {Interpretador} interpretador 
 */
function TextoPage(interpretador) {
    const controller = new InterpretadorController();

    function fazerPergunta() {
        controller.fazerPergunta(interpretador);
    }

    function mostrarQuestoes() {
        controller.mostrarQuestoes(interpretador);
    }

    /**
     * @type {HTMLElement[]}
     */
    const elements = [
        Heading("Texto"),
        TextoContainer(interpretador.getTexto()),
        Buttons([
            Button("Fazer Pergunta", fazerPergunta),
            Button("Mostrar Questoes Feitas", mostrarQuestoes),
            Button("Escolher Outro Texto", controller.cadastrarTexto)
        ])
    ];

    const page = Page();

    elements.forEach((element) => {
        page.appendChild(element);
    });
}