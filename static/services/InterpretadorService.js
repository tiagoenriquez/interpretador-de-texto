class InterpretadorService {
    /**
     * 
     * @param {string} texto 
     * @param {string} pergunta 
     * @returns {Promise<InterpretadorResponse>}
     */
    responder = async (texto, pergunta) => {
        const request = new InterpretadorRequest(texto, pergunta);
        const options = new Options("POST", request);

        /**
         * @type {Promise<InterpretadorResponse>}
         */
        const response = await fetch(urlApi, options).then((response) => {
            return response.json();
        }).catch((error) => {
            console.log(error);
        });

        return response;
    }
}