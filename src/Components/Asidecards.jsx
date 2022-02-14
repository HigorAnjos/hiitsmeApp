import React from 'react';
import Card from './card/card';

class Asidecards extends React.Component {
  makeAllCards = () => {
    const { storageApp } = this.props;
    const acc = [];
    storageApp.forEach(element => {
      element.data.forEach((e) => {
        acc.push(
          <Card
            key={ e.id }
            category={ element.category }
            done={ e.done }
            reaction={ e.reaction }
            choice={ e.choice }
            date={ e.date }
          />
        );
      });
    });
    return acc;
  }
  
  render() {
    return(
      <div id="aside">
        { this.makeAllCards() }
      </div>
    );
  }
}

export default Asidecards;