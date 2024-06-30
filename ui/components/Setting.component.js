import { createNode } from "../../utils/createNode.js";

export function Setting(title, id, data, handler, selected) {
  const form = createNode('form', 'settings__item');
  const label = createNode('label', 'setting__titleElement', title);
  label.setAttribute('for', id);
  form.append(label);

  const selectWrapper = createNode('div', 'setting__settingElement');
  const select = createNode('select', 'select');
  select.addEventListener('change', handler);

  data.options.forEach(el => {
    const option = createNode('option', 'setting__settingElement', el.value);
    if (el.value === selected) {
      option.setAttribute('selected', true);
    }
    select.append(option);
  })

  selectWrapper.append(select);
  form.append(selectWrapper);

  return form;
}