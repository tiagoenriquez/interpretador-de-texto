/**
 * 
 * @param {Questao} questao 
 * @returns {HTMLDivElement}
 */
function QuestaoContainer(questao) {
    const container = document.createElement("div");
    container.className = "questao";
    const pergunta = questao.getPergunta();
    const resposta = questao.getResposta();
    const perguntaParagraph = Paragraph(`<strong>Pergunta: </strong>${pergunta}`);
    const respostaParagraph = Paragraph(`<strong>Resposta: </strong>${resposta}`);
    container.appendChild(perguntaParagraph);
    container.appendChild(respostaParagraph);
    return container;
}