export default async function decorate(block) {
  const elements = block.children;
  console.log(elements)
  let html = '';
  elements.array.forEach((element) => {
    html += element;
  });
  block.insertAdjacentHTML('beforeend', html);
}
