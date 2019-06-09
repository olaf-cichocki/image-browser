import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import MainRoute from './routes/main/Main';
import DetailRoute from './routes/Detail';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Home
                </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/details/:id" component={DetailRoute} />
          <Route path="/" exact component={MainRoute} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
