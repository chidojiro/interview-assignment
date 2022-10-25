/**
 * Handle scroll inside div.
 *
 * @param  {HTMLBaseElement} el
 * @param  {HTMLBaseElement} list
 * @param  {string} keyPressed
 */
export default (el, list, keyPressed) => {
  let elementHeight = el.offsetHeight;
  let elementOffsetTop = el.offsetTop;
  let offsetTopFirstElement = list.children[0].offsetTop;

  if (keyPressed === "ArrowDown") {
    if (elementHeight + elementOffsetTop > list.offsetHeight + list.scrollTop) {
      list.scrollTop = elementHeight + elementOffsetTop - list.offsetHeight;
    }
  } else {
    if (
      elementOffsetTop - offsetTopFirstElement < list.scrollTop ||
      elementOffsetTop + elementHeight > list.scrollTop + list.offsetHeight
    ) {
      list.scrollTop = elementOffsetTop - offsetTopFirstElement;
    }
  }
};
