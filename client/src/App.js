import './App.css';
import { 
  BrowserRouter,
  Link,
  Switch,
  Router
} from 'react-router-dom'
import AllProfiles from './components/AllProfiles';
import CreateAccount from './components/CreateAccount';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <AllProfiles></AllProfiles>
        <Switch>
          <Router exact path = "/create">
            <CreateAccount></CreateAccount>
          </Router>
          <Router exact path = "">

          </Router>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
