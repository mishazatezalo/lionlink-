import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Profile from './pages/Profile';
import Chat from './pages/Chat';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/events" component={Events} />
            <Route path="/profile" component={Profile} />
            <Route path="/chat" component={Chat} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

