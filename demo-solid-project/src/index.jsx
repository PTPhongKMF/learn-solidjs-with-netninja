/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home';
import { Router, Route } from '@solidjs/router'
import About from './pages/About';
import Persistence from './pages/Persistence';

const root = document.getElementById('root')

render(() => (
  <Router root={App}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/persistence" component={Persistence} />
  </Router>
), root)
