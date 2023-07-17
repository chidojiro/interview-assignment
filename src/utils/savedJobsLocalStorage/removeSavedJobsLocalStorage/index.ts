export const removeSavedJobsLocalStorage = () => {
  localStorage.removeItem('saved-jobs');
  const event = new Event('saved-jobs');
  window.dispatchEvent(event);
};

export default removeSavedJobsLocalStorage;
