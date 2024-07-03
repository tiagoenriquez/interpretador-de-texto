/**
 * @returns {HTMLDivElement}
 */
function EsperaComponent() {
    const component = document.createElement("div");
    component.className = "espera";
    component.textContent = "Aguardando resposta";
    return component;
}