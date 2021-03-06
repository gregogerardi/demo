import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { UIShell } from './components/UIShell';
import { Home } from './components/Home';
import { Artists } from './components/Artists';
import { Channels } from './components/Channels';
import { Genres } from './components/Genres';
import { Songs } from './components/Songs';
import { Recognitions } from './components/Recognitions';
import { CssBaseline } from '@material-ui/core';
import { Footer } from './components/Footer';
import { Writers } from './components/Writers';
import { Composers } from './components/Composers';
import { Lyricists } from './components/Lyricists';
import { Copyrights } from './components/Copyrights';

export const App: React.FC = () => {
  return (
    <div className='App'>
      <CssBaseline />
      <Router>
        <UIShell />
        <div style={{ padding: '2rem', paddingTop: '4rem' }}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/artists' component={Artists} />
            <Route path='/writers' component={Writers} />
            <Route path='/composers' component={Composers} />
            <Route path='/lyricists' component={Lyricists} />
            <Route path='/copyrights' component={Copyrights} />
            <Route path='/channels' component={Channels} />
            <Route path='/genres' component={Genres} />
            <Route path='/songs' component={Songs} />
            <Route path='/recognitions' component={Recognitions} />
            <Redirect to='/' />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};
