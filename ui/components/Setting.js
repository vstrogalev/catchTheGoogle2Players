import { createNode } from "../../utils/createNode.js";

export function Setting(title, data) {
  const element = createNode('div', 'setting');

  const titleElement = createNode('div', 'setting__titleElement', title);
  const settingElement = createNode('div', 'setting__settingElement', data);
  element.append(titleElement, settingElement);

  return element;
}