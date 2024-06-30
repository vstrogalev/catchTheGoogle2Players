import { createNode } from "../../utils/createNode.js";
import { SvgToCell } from "./SvgToCell.component.js";

export function ResultItem(id, svgContent, points) {
  // Player 1
  const element = createNode('div', 'result__item');

  //   title
  const title = createNode('span', 'result__itemTitle', id);

  //   svg
  const image = SvgToCell(svgContent, 'result__image')

  //   points
  const pointsElement  = createNode('span', 'result__points', points)

  element.append(title, image, pointsElement)

  return element;
}