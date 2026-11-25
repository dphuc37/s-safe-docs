// Chuyển thẻ <img> viết tay trong markdown thành component ZoomImage (khung ảnh, chú thích, phóng to).
function walk(node) {
  if (
    (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') &&
    node.name === 'img'
  ) {
    node.name = 'ZoomImage';
  }
  if (node.children) node.children.forEach(walk);
}

module.exports = function remarkZoomImg() {
  return (tree) => walk(tree);
};
