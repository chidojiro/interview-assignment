/**
 * Handle scroll inside div.
 *
 * @param  {HTMLElement} el
 * @param  {HTMLUListElement} ul
 * @param  {string} keyPressed
 */
export default (el: HTMLElement, ul: HTMLUListElement, keyPressed: string) => {
  if (!ul.children[0]) {
    return;
  }
  const elementHeight = el.offsetHeight;
  const elementOffsetTop = el.offsetTop;
  const list = ul;
  const offsetTopFirstElement = (list.children[0] as HTMLLIElement).offsetTop;

  if (keyPressed === 'ArrowDown') {
    if (elementHeight + elementOffsetTop > list.offsetHeight + list.scrollTop) {
      list.scrollTop = elementHeight + elementOffsetTop - list.offsetHeight;
    }
  } else if (
    elementOffsetTop - offsetTopFirstElement < list.scrollTop
    || elementOffsetTop + elementHeight > list.scrollTop + list.offsetHeight
  ) {
    list.scrollTop = elementOffsetTop - offsetTopFirstElement;
  }
};
