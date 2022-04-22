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
    <BrowserRouter>
      <div className="App container">
        <AllProfiles></AllProfiles>
        <Switch>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
