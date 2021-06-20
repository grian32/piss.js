/* Any elements that match the selector given have their background color changed to yellow and their text color to orange.
 * @param {string} selector The selector.
 */
function piss(selector) {
    for (let i of document.querySelectorAll(selector)) {
        i.style.backgroundColor = "yellow";
        i.style.color = "orange";
    }
}

export default piss;
