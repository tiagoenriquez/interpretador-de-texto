/**
 * 
 * @param {string} texto 
 * @returns {HTMLDivElement}
 */
function TextoContainer(texto) {
    const container = document.createElement("div");
    container.className = "texto";
    const paragraphs = texto.split('\n');

    paragraphs.forEach((paragraph) => {
        const paragraphElement = Paragraph(paragraph)
        container.appendChild(paragraphElement);
    });

    return container;
}