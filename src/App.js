import './App.css';
import './Components/Home'
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import BlogPost from './Components/BlogPost';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/story1" component={BlogPost} />
      
          </Switch>
        </Router>
    </div>
  );
}

export default App;
