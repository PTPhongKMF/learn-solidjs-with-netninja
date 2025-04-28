/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home';
import { Router, Route } from '@solidjs/router'
import About from './Pages/About';

const root = document.getElementById('root')

render(() => (
    <Router root={App}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
    </Router>
), root)
