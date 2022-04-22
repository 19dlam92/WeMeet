import './App.css';
import { 
  BrowserRouter,
  Link,
  Switch,
  Router
} from 'react-router-dom'
import { useState } from 'react';
import AllProfiles from './components/AllProfiles';
import CreateAccount from './components/CreateAccount';

function App() {

  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
        <AllProfiles/>
        <Switch>
          <Router exact path = "/create">
            <CreateAccount formSubmitted = { formSubmitted } setFormSubmitted = { setFormSubmitted }/>
          </Router>
          <Router exact path = "">

          </Router>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
