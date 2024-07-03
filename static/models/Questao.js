class Questao {
    /**
     * @type {string}
     * @private
     */
    pergunta;

    /**
     * @type {string}
     * @private
     */
    resposta;

    /**
     * 
     * @param {string} pergunta 
     * @param {string} resposta 
     */
    constructor(pergunta, resposta) {
        this.pergunta = pergunta;
        this.resposta = resposta;
    }

    /**
     * 
     * @returns {string}
     */
    getPergunta = () => {
        return this.pergunta;
    }

    /**
     * 
     * @returns {string}
     */
    getResposta = () => {
        return this.resposta;
    }
}