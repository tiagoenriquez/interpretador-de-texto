/**
 * 
 * @param {string} label 
 * @param {string} id 
 * @param {string} className 
 * @param {number} rows 
 * @param {number} columns 
 * @returns {HTMLDivElement}
 */
function PerguntasContainer(label, id, className, rows, columns) {
    const container = document.createElement("div");
    container.className = className;
    container.appendChild(Label(label, id));
    container.appendChild(TextArea(id, rows, columns));
    return container;
}