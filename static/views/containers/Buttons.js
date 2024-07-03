/**
 * 
 * @param {HTMLButtonElement[]} buttons 
 * @returns {HTMLDivElement}
 */
function Buttons(buttons) {
    const container = document.createElement("div");
    container.className = "buttons";

    buttons.forEach((button) => {
        container.appendChild(button);
    });

    return container;
}