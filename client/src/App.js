import './App.css';
import { 
  BrowserRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom'
import { useState } from 'react';
import OpeningPage from './components/OpeningPage';
import LoginForm from './components/LoginForm';
import CreateAccount from './components/CreateAccount';
import NavBar from './components/NavBar';
import AllProfiles from './components/AllProfiles';
import ProfileDetails from './components/ProfileDetails';
import ProfileUpdate from './components/ProfileUpdate';
import ProfilePreferences from './components/ProfilePreferences';
import ProfileSettings from './components/ProfileSettings';
import ProfilePremium from './components/ProfilePremium';

function App() {

  // const [formSubmitted, setFormSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="App container">
        <BrowserRouter>
          <NavBar/>
          <OpeningPage/>
          <Switch>
            <Route exact path = "/">

            </Route>
            <Route exact path = "/login">
              <LoginForm/>
            </Route>
            <Route exact path = "/create">
              <CreateAccount/>
            </Route>
            <Route exact path = "/dashboard">
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
            <Route exact path = "/profile/update">
              <ProfileUpdate/>
            </Route>
            <Route exact path = "/profile/preferences">
              <ProfilePreferences/>
            </Route>
            <Route exact path = "/profile/settings">
              <ProfileSettings/>
            </Route>
            <Route exact path = "/profile/premium">
              <ProfilePremium/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
