import './App.css';
import { 
  BrowserRouter,
  Link,
  Switch,
  Router
} from 'react-router-dom'
import AllProfiles from './components/AllProfiles';

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <h1>WeMeet</h1>
        <AllProfiles></AllProfiles>
        <Switch>
          <Router exact path = "/">

          </Router>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
