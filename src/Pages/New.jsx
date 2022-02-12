import React from 'react';
import { setNewEntry } from '../services/API';

class New extends React.Component {
  constructor() {
    super();

    this.state = {   
      categories: ['estudos'],
      done: '',
      reaction: '',
      choice: '',
      selectedCategory: 'estudos',
      fildAddCategory: '',
      inputValidate: true,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    console.log("name: ",name, "Value: ", value);
    this.setState({
      [name]: value
    }, () => { this.newInputValidate() })
  }

  buttonCLickSalve = (event) => {
    event.preventDefault();
    const { selectedCategory, done, reaction, choice } = this.state;
    const newEntry = {
      done,
      reaction,
      choice,
      date: new Date(),
    }
    setNewEntry(newEntry, selectedCategory);
  }

  newCategory = (event) => {
    event.preventDefault();
    const { fildAddCategory } = this.state;
    this.setState((prev) => ({
      categories: [...prev.categories, fildAddCategory]
    }));
  }

  newInputValidate = () => {
    const { done, reaction, choice } = this.state;
    if (done.length >= 3 && reaction.length >= 3 && choice.length >= 3 ) {
      this.setState({
        inputValidate: false,
      });
    }else {
      this.setState({
        inputValidate: true,
      });
    }
  }

  render() {
    const { done,
      reaction,
      choice,
      categories,
      fildAddCategory,
      inputValidate } = this.state;

    return (
      <div>
        <h1>New Input</h1>
        <form>
          <select name="selectedCategory"
            onChange={ this.handleChange }
          >
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
          disabled={ inputValidate }
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