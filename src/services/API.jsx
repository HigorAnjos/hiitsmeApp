const getAll = () => JSON.parse(localStorage.getItem('APP'));

const setNewEntry = (newEntry, category) => {
  const App = getAll('APP') || [];
  if (App.some((obj) => obj.category === category)) {
    App.forEach((obj) => {
      if (obj.category === category) {
        obj.data = [...obj.data, newEntry];
      }
    });
  } else {
    const obj = {
      category,
      data: [newEntry]
    }
    App.push(obj);
  }

  localStorage.setItem('APP', JSON.stringify(App));
};

export { setNewEntry, getAll };
