import './App.css';
import { 
  BrowserRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom'
import { useState } from 'react';
import NavBar from './components/NavBar';
import AllProfiles from './components/AllProfiles';
import CreateAccount from './components/CreateAccount';

function App() {

  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
      <div className="App container">
        <BrowserRouter>
          <NavBar/>
          <AllProfiles/>
          <CreateAccount formSubmitted = { formSubmitted} setFormSubmitted = { setFormSubmitted }/>
          <Switch>
            <Route exact path="/">

            </Route>
            <Route exact path="/create">

            </Route>
            <Route exact path="/profile">

            </Route>
          </Switch>
        </BrowserRouter>

      </div>
  );
}

export default App;
