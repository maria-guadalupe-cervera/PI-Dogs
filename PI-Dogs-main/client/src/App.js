import './App.css'; 
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import LandingPage from './components/LandingPage/LandingPage.jsx' 
import Home from './components/Home/Home'
import DogCreated from './components/DogCreated/DogCreated.jsx';
import Detail from './components/Detail/Detail.jsx';

function App() {
  return ( 
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component = {LandingPage} key='landing'/> 
          <Route path="/home" component = {Home} key='home'/> 
          <Route path ="/dog" component = {DogCreated} key='dogC'/>
          <Route exact path='/home:id' component={Detail} key='detail'></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
