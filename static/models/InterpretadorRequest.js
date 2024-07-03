class InterpretadorRequest {
    /**
     * @type {string}
     */
    texto;

    /**
     * @type {string}
     */
    pergunta;

    /**
     * 
     * @param {string} texto 
     * @param {string} pergunta 
     */
    constructor(texto, pergunta) {
        this.texto = texto;
        this.pergunta = pergunta;
    }
}