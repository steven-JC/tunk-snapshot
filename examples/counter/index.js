import 'babel-polyfill';
import React from 'react'
import { render } from 'react-dom'

import tunk from "tunk";
import actionMiddleware from "tunk-action-middleware";

import cache from "./tunk-snapshot";

tunk.addMiddleware([actionMiddleware]);

import App from './components/Counter.jsx';


render(<App />, document.getElementById('root'))



