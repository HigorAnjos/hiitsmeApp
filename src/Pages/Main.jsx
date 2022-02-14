import React from 'react';
import Asidecards from '../Components/Asidecards';
import CardView from '../Components/Mainview/CardView';
import { getAll } from '../services/API';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      storageApp: [],
    }
  }

  componentDidMount() {
    this.setState({
      storageApp: getAll(),
    });
  }


  render() {
    return (
      <div id="main">
        <Asidecards { ...this.state } />
        <CardView />
      </div>
    );
  }
}

export default Main;