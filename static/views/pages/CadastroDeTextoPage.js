function CadastroDeTextoPage() {
    const controller = new InterpretadorController();

    /**
     * @type {HTMLElement[]}
     */
    const elements = [
        Heading("Digite ou cole um texto"),
        TextArea("texto", 16, 64),
        Button("Submeter texto", controller.inserirTexto)
    ];

    const page = Page();

    elements.forEach((element) => {
        page.appendChild(element);
    });
}