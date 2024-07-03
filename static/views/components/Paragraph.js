/**
 * 
 * @param {string} textContent 
 * @returns {HTMLParagraphElement}
 */
function Paragraph(textContent) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = textContent;
    return paragraph;
}