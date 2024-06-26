/**
 * @param {string} tag it's tag, that will be created
 * @param {string} [className] it's class that will be added
 * @param {string} [content] text content
 * @param {string} [src] src for img tag
 * @param {string} [alt] alt for img tag
 * @returns {HTMLElement} node it's html element with necessary tag and class
 */
export function createNode(tag, className, content, src, alt) {
  const node = document.createElement(tag);
  className && node.classList.add(...className.split(' '));

  if (content || content === '0' || content === 0) {
    node.textContent = content;
  }
  if (src) {
    node.src = src;
  }
  if (tag === "img" && alt) {
    node.alt = alt;
  }
  return node;
}