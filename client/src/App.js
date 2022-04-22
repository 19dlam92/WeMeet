import './App.css';
import { 
  BrowserRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom'
import { useState } from 'react';
import AllProfiles from './components/AllProfiles';
import CreateAccount from './components/CreateAccount';

function App() {

  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
      <div className="App container">
        <BrowserRouter>
          <AllProfiles/>
          <CreateAccount formSubmitted = { formSubmitted} setFormSubmitted = { setFormSubmitted }/>
          <Switch>
            <Route exact path="">

            </Route>
          </Switch>
        </BrowserRouter>

      </div>
  );
}

export default App;
