import React from 'react';
import Asidecards from '../Components/Asidecards';
import CardView from '../Components/Mainview/CardView';

class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <Asidecards />
        <CardView />
      </div>
    );
  }
}

export default Main;