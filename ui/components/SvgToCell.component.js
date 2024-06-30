export function SvgToCell(svgContent, className) {
  const element = document.createElement('div');
  element.innerHTML = svgContent;

  element.classList.add(className);

  return element
}