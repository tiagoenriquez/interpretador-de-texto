/**
 * 
 * @param {Interpretador} interpretador 
 */
function PerguntaPage(interpretador) {
    const controller = new InterpretadorController();

    /**
     * @type {HTMLElement[]}
     */
    let elements = [];

    function addElements() {
        elements.forEach((element) => {
            page.appendChild(element);
        });
    }

    function responder() {
        const esperaComponent = EsperaComponent();
        elements.unshift(esperaComponent);
        addElements();
        controller.responder(interpretador);
    }

    function mostrarTexto() {
        controller.mostrarTexto(interpretador);
    }

    function mostrarQuestoes() {
        controller.mostrarQuestoes(interpretador);
    }

    elements = [
        Heading("Digite uma Pergunta"),
        TextArea("pergunta", 2, 64),
        Buttons([
            Button("Obter Resposta", responder),
            Button("Rever Texto", mostrarTexto),
            Button("Mostrar Questoes Feitas", mostrarQuestoes),
            Button("Escolher Outro Texto", controller.cadastrarTexto)
        ])
    ];

    const page = Page();

    addElements();
}