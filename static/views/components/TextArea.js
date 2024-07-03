/**
 * 
 * @param {string} id 
 * @param {number} rows 
 * @param {number} columns 
 * @returns {HTMLTextAreaElement}
 */
function TextArea(id, rows, columns) {
    const textArea = document.createElement("textarea");
    textArea.id = id;
    textArea.rows = rows;
    textArea.cols = columns;
    return textArea;
}