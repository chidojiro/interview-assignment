const checkForMultiSelects = () => {
  const multiSelects = document.querySelectorAll('[data-rs-chat-tags]');
  // Remove any multiselect answers.
  if (!!multiSelects && multiSelects.length > 0) {
    const deselectButton = document.querySelector('[data-rs-chat-tags-deselect-button]') as HTMLButtonElement;
    deselectButton.click();
    multiSelects[0].remove();
  }
};

export default checkForMultiSelects;
