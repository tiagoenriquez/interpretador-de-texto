class InterpretadorController {
    cadastrarTexto = () => {
        CadastroDeTextoPage();
    }

    /**
     * 
     * @param {Interpretador} interpretador 
     */
    fazerPergunta = (interpretador) => {
        PerguntaPage(interpretador);
    }

    inserirTexto = () => {
        /**
         * @type {HTMLTextAreaElement}
         */
        const textoElement = document.getElementById("texto");

        const texto = textoElement.value;
        const interpretador = new Interpretador(texto);
        PerguntaPage(interpretador);
    }

    /**
     * 
     * @param {Interpretador} interpretador 
     */
    mostrarQuestoes = (interpretador) => {
        QuestoesPage(interpretador);
    }

    /**
     * 
     * @param {Interpretador} interpretador 
     */
    mostrarTexto = (interpretador) => {
        TextoPage(interpretador);
    }

    /**
     * 
     * @param {Interpretador} interpretador 
     * @returns {Promise<void>}
     */
    responder = async (interpretador) => {
        /**
         * @type {HTMLTextAreaElement}
         */
        const perguntaElement = document.getElementById("pergunta");

        const texto = interpretador.getTexto();
        const pergunta = perguntaElement.value;
        const service = new InterpretadorService();
        await service.responder(texto, pergunta).then((response) => {
            const resposta = response.resposta;
            const questao = new Questao(pergunta, resposta);
            interpretador.adicionarQuestao(questao);
            this.mostrarQuestoes(interpretador);
        }).catch((error) => {
            ErroPage("Não foi possível obter resposta.", interpretador);
        });
        
    }
}