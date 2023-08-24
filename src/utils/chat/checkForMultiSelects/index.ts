const checkForMultiSelects = () => {
  const multiSelects = document.querySelectorAll('[data-rs-chat-tags]');
  // Remove any multiselect answers.
  if (!!multiSelects && multiSelects.length > 0 && window && window.orbit && window.orbit.chatInstance) {
    const deselectButton = document.querySelector('[data-rs-chat-tags-deselect-button]') as HTMLButtonElement;
    deselectButton.click();
    multiSelects[0].remove();
    window.orbit?.chatInstance.multiSelectSubmitButton();
  }
};

export default checkForMultiSelects;
