/* import './App.css';
import{BrowserRouter, Route,Switch}from 'react-router-dom';
import LandingPage from'./components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import DogCreated from './components/DogCreated/DogCreated';
import Card from './components/Card/Card';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/home" component={Home}/>
        <Route path="/dog" component={DogCreated}/>
        <Route exact path="/home:id" component={Card}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App; */
import './App.css'; 
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import LandingPage from './components/LandingPage/LandingPage.jsx' 
import Home from './components/Home/Home'
import DogCreated from './components/DogCreated/DogCreated.jsx';
import Detail from './components/Card/Card.jsx';

function App() {
  return ( 
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component = {LandingPage}/>
          <Route path="/home" component = {Home}/> 
          <Route path ="/dog" component = {DogCreated}/>
          <Route exact path='/home:id' component={Detail}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
