import React from 'react';

class New extends React.Component {
  constructor() {
    super();

    this.state = {   
      categories: ['Option 1', 'Option 2', 'Option 3'],
      done: '',
      reaction: '',
      choice: '',
      selectedCategory: '',
      fildAddCategory: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    console.log("name: ",name, "Value: ", value);
    this.setState({
      [name]: value
    })
  }

  buttonCLickSalve = (event) => {
    event.preventDefault();
    console.log('Botao')
    // Guardar dados na api
  }

  newCategory = (event) => {
    event.preventDefault();
    console.log("ADD Categoria na api")
  }

  render() {
    const { done, reaction, choice, categories, fildAddCategory } = this.state;
    return (
      <div>
        <h1>New Input</h1>
        <form>
          <select name="selectedCategory" onChange={ this.handleChange }>
            {
              categories.map((op, i) => 
                <option
                  key={ i }
                  value={ op }
                >
                  { op }
                </option>
              )
            }
          </select>

          <label htmlFor="done">
            Como foi?
            <textarea
              id="done"
              name="done"
              value={ done }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="reaction">
            Como reagiu?
            <textarea
            name="reaction"
            id="reaction"
            value={ reaction }
            onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="choice">
            Como poderia ter sido Melhor?
            <textarea
            name="choice"
            id="choice"
            value={ choice }
            onChange={ this.handleChange }
            />
          </label>

          <button
          type="submit"
          onClick={ this.buttonCLickSalve }
          >
            Salvar
          </button>
        </form >
        
        <br />
        <h2>Adicionar nova categoria</h2>
        <form>
          <label htmlFor="category">
            <input
              id="category"
              type="text"
              name="fildAddCategory"
              value={ fildAddCategory }
              onChange={ this.handleChange }
            />
          </label>
          <button
          type="submit"
          onClick={ this.newCategory }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default New;