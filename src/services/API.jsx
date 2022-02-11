const getAll = () => JSON.parse(localStorage.getItem('APP'));

const setNewEntry = (newEvent) => {
  const App = getAll('APP') || [];
  App.push(newEvent);
  localStorage.setItem('APP', JSON.stringify(App));
};

export { setNewEntry, getAll };
