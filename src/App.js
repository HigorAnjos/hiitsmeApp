import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main';
import New from './Pages/New';
import Createcategory from './Pages/createcategory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/createcategory" render={ (props) => (<Createcategory { ...props } />) } />
          <Route path="/new" render={ (props) => (<New { ...props } />) } />
          <Route exact path="/" render={ (props) => (<Main { ...props } />) } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
