class Options {
    /**
     * @typedef OptionHeader
     * @property {string} "Content-Type"
     */

    /**
     * @type {string}
     */
    method

    /**
     * @type {OptionHeader}
     */
    headers;

    /**
     * @type {string}
     */
    body

    /**
     * 
     * @param {string} method 
     * @param {Object} dados 
     */
    constructor(method, dados) {
        this.method = method;
        this.headers = {"Content-type": "application/json"};
        this.body = JSON.stringify(dados);
    }
}