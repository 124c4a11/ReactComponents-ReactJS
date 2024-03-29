import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import './index.scss';

import App from './App';

import ButtonSandbox from './components/Button/Sandbox';
import ButtonGroupSandbox from './components/ButtonGroup/Sandbox';
import IconSandbox from './components/Icon/Sandbox';
import ImageSandbox from './components/Image/Sandbox';
import ChipSandbox from './components/Chip/Sandbox';
import BadgeSandbox from './components/Badge/Sandbox';
import ListGroupSandbox from './components/ListGroup/Sandbox';
import InputSandbox from './components/Input/Sandbox';
import TabsSandbox from './components/Tabs/Sandbox';
import TooltipSandbox from './components/Tooltip/Sandbox';
import ModalSandbox from './components/Modal/Sandbox';


ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={ ButtonSandbox }/>
        <Route exact path="/button_group" component={ ButtonGroupSandbox }/>
        <Route exact path="/icon" component={ IconSandbox }/>
        <Route exact path="/image" component={ ImageSandbox }/>
        <Route exact path="/chip" component={ ChipSandbox }/>
        <Route exact path="/badge" component={ BadgeSandbox }/>
        <Route exact path="/list_group" component={ ListGroupSandbox }/>
        <Route exact path="/input" component={ InputSandbox }/>
        <Route exact path="/tabs" component={ TabsSandbox }/>
        <Route exact path="/tooltip" component={ TooltipSandbox }/>
        <Route exact path="/modal" component={ ModalSandbox }/>
      </Switch>
    </App>
  </BrowserRouter>
, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
