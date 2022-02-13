import React from 'react';
import './card.css'

class Card extends React.Component {
  render() {
    const { category="default", done="default", reaction="default", choice="default", date="default" } = this.props;
    return (
      <div id="card">
        <div id="category"> { category } </div>
        <p id="done"> { `${done.substr(0, 60)}...` } </p>
        <p id="reaction"> { `${reaction.substr(0, 60)}...` } </p>
        <p id="choice"> { `${choice.substr(0, 60)}...` } </p>
        <footer id="card-footer">{ date }</footer>
      </div>
    );
  }
}

export default Card;