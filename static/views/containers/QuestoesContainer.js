/**
 * 
 * @param {QuestoesContainer[]} questoesContainer 
 * @returns {HTMLDivElement}
 */
function QuestoesContainer(questoesContainer) {
    const container = document.createElement("div");
    container.className = "questoes";

    questoesContainer.forEach((questaoContainer) => {
        container.appendChild(questaoContainer);
    });

    return container;
}