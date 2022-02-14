import React from 'react';
import Asidecards from '../Components/Asidecards';
import CardView from '../Components/Mainview/CardView';
import { getAll } from '../services/API';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      storageApp: [],
      fildDone: '',
      fildReaction: '',
      fildChoice: '',
    }
  }

  componentDidMount() {
    this.setState({
      storageApp: getAll(),
    });
  }

  render() {
    const { fildDone, fildReaction, fildChoice } = this.props;
    return (
      <div id="main">
        <Asidecards { ...this.state } />
        <CardView
          done={ fildDone }
          reaction={ fildReaction }
          choice={ fildChoice }
        />
      </div>
    );
  }
}

export default Main;
