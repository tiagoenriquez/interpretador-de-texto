/**
 * 
 * @param {string} mensagem 
 * @param {Interpretador} interpretador 
 */
function ErroPage(mensagem, interpretador) {
    const controller = new InterpretadorController();

    function fazerPergunta() {
        controller.fazerPergunta(interpretador);
    }

    function reverTexto() {
        controller.mostrarTexto(interpretador);
    }

    function mostrarQuestoes() {
        controller.mostrarQuestoes(interpretador);
    }

    /**
     * @type {HTMLElement[]}
     */
    const elements = [
        ErroComponent(mensagem),
        Buttons([
            Button("Fazer Pergunta", fazerPergunta),
            Button("Rever Texto", reverTexto),
            Button("Mostrar Questoes Feitas", mostrarQuestoes),
            Button("Escolher Outro Texto", controller.cadastrarTexto)
        ])
    ];

    const page = Page();

    elements.forEach((element) => {
        page.appendChild(element);
    });
}