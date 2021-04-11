import { Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import './App.css';

const App = () => (
  <>
    <Route exact path="/" component={HomeView} />
  </>
);
export default App;
