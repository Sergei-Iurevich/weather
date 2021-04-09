export function drawList(elem, items) {
  const element = elem;
  const list = items.map((item) => `<li><a href="#">${item}</a></li>`).join("");
  element.innerHTML = `<ol>${list}</ol>`;
}
