/**
 * 
 * @param {string} textContent 
 * @param {string} id 
 * @returns {HTMLLabelElement}
 */
function Label(textContent, id) {
    const label = document.createElement("label");
    label.textContent = textContent;
    label.htmlFor = id;
    return label;
}