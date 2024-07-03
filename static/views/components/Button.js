/**
 * 
 * @param {string} textContent 
 * @param {() => void} action 
 */
function Button(textContent, action) {
    const button = document.createElement("button");
    button.textContent = textContent;
    button.addEventListener("click", action);
    return button;
}