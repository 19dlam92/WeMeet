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
import ProfileDetails from './components/ProfileDetails';

function App() {

  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
      <div className="App container">
        <BrowserRouter>
          <NavBar/>
          <AllProfiles/>
          <Switch>
            <Route exact path = "">

            </Route>
            <Route exact path = "/create">
              <CreateAccount formSubmitted = { formSubmitted} setFormSubmitted = { setFormSubmitted }/>
            </Route>
            <Route exact path = "/profile/details/:id">
              <ProfileDetails/>
            </Route>
            <Route exact path = "/profile/settings">

            </Route>
          </Switch>
        </BrowserRouter>

      </div>
  );
}

export default App;
