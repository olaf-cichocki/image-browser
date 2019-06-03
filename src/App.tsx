import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainRoute from './routes/Main';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={MainRoute} />
      </div>
    </Router>
  );
};

export default App;
