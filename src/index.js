import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import Tabs from './state/Tabs';

// ReactDOM.render(<Bomb />, document.getElementById('root'));
// ReactDOM.render(<HelloWorld />, document.getElementById('root'));
// ReactDOM.render(<RouletteGun />, document.getElementById('root'));
ReactDOM.render(<Tabs />, document.getElementById('root'));