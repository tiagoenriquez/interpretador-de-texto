/**
 * 
 * @param {string} textContent 
 * @returns {HTMLHeadingElement}
 */
function ErroComponent(textContent) {
    const component = document.createElement("h1");
    component.className = "erro";
    component.textContent = textContent;
    return component;
}