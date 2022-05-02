import './App.css';
import { 
  BrowserRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom'
import { useState } from 'react';
import OpeningPage from './components/OpeningPage';
import NavBar from './components/NavBar';
import AllProfiles from './components/AllProfiles';
import CreateAccount from './components/CreateAccount';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';

function App() {

  // const [formSubmitted, setFormSubmitted] = useState(false);

  return (
      <div className="App container">
        <BrowserRouter>
          <Switch>
            <OpeningPage/>
            <Route exact path = "/dashboard">
              <NavBar/>
              <AllProfiles/>
            </Route>
            <Route exact path = "/discover">

            </Route>
            <Route exact path = "/questions">

            </Route>
            <Route exact path = "/likes">

            </Route>
            <Route exact path = "/messages">

            </Route>
            <Route exact path = "/profile/details/:id">
              <ProfileDetails/>

            </Route>
            <Route exact path = "/login">

            </Route>
            <Route exact path = "/create">
              <CreateAccount />
            </Route>
            <Route exact path = "/profile/settings">
              <ProfileSettings/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
