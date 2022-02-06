/**
 * @param string tag name
 * @param string class name
 * @param Object {text, source, data}
 * @returns Node
 */
let createBlock = (function (tag, selector, props) {
  let block = document.createElement(tag);
  block.classList.add(selector);
  if (props) {
    let {
      text,
      source,
      data,
    } = props;
    if (text) block.textContent = text;
    if (source) block.src = source;
    if (data) block.dataset[data[0]] = data[1];
  }
  return block
})

export {
  createBlock
}