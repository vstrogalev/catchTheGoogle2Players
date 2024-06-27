import { createNode } from "../../utils/createNode.js"

export function Button(text, handleClick) {
  const button = createNode('button', 'button', text);
  button.addEventListener('click', handleClick);

  return button
}