import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import loadable from '@loadable/component';

const Header = loadable(() => import('./components/Header'));
const Footer = loadable(() => import('./components/Footer'));
const Home = loadable(() => import('./pages/Home'));
const News = loadable(() => import('./pages/News'));

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>App</title>
        </Helmet>
        <Route path="/" render={() => <Header />} />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/news" render={() => <News />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
