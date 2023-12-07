export const removeSavedJobsLocalStorage = () => {
  localStorage.removeItem('saved-jobs');
  const event = new Event('saved-jobs');
  window.top?.dispatchEvent(event);
};

export default removeSavedJobsLocalStorage;
