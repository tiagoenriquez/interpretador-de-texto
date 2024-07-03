class Interpretador {
    /**
     * @type {string}
     * @private
     */
    texto;

    /**
     * @type {Questao[]}
     */
    questoes;

    /**
     * 
     * @param {string} texto 
     */
    constructor(texto) {
        this.texto = texto;
        this.questoes = [];
    }

    getTexto = () => {
        return this.texto;
    }

    /**
     * 
     * @param {Questao} questao 
     */
    adicionarQuestao = (questao) => {
        this.questoes.push(questao);
    }

    /**
     * @returns {Questao[]}
     */
    getQuestoes = () => {
        return this.questoes.reverse();
    }
}