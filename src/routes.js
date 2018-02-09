import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ShelfAPage from './ShelfAPage';
import ShelfBPage from './ShelfBPage';
import ShelfCPage from './ShelfCPage';
import ShelfDPage from './ShelfDPage';
import ShelfAbin1 from './components/Bins/ShelfAbin1';
import ShelfAbin2 from './components/Bins/ShelfAbin2';
import ShelfAbin3 from './components/Bins/ShelfAbin3';
import ShelfAbin4 from './components/Bins/ShelfAbin4';
import ShelfBbin1 from './components/BBins/ShelfBbin1';
import ShelfBbin2 from './components/BBins/ShelfBbin2';
import ShelfBbin3 from './components/BBins/ShelfBbin3';
import ShelfBbin4 from './components/BBins/ShelfBbin4';
import ShelfCbin1 from './components/CBins/ShelfCbin1';
import ShelfCbin2 from './components/CBins/ShelfCbin2';
import ShelfCbin3 from './components/CBins/ShelfCbin3';
import ShelfCbin4 from './components/CBins/ShelfCbin4';
import ShelfDbin1 from './components/DBins/ShelfDbin1';
import ShelfDbin2 from './components/DBins/ShelfDbin2';
import ShelfDbin3 from './components/DBins/ShelfDbin3';
import ShelfDbin4 from './components/DBins/ShelfDbin4';



export default (
  <Switch>
    <Route component={ Home } exact path="/" />
    <Route component={ ShelfAPage } path="/ShelfAPage" />
        <Route component={ ShelfAbin1 } path="/ShelfAbin1" />
        <Route component={ ShelfAbin2 } path="/ShelfAbin2" />
        <Route component={ ShelfAbin3 } path="/ShelfAbin3" />
        <Route component={ ShelfAbin4 } path="/ShelfAbin4" />
    <Route component={ ShelfBPage } path="/ShelfBPage" />
        <Route component={ ShelfBbin1 } path="/ShelfBbin1" />
        <Route component={ ShelfBbin2 } path="/ShelfBbin2" />
        <Route component={ ShelfBbin3 } path="/ShelfBbin3" />
        <Route component={ ShelfBbin4 } path="/ShelfBbin4" />
    <Route component={ ShelfCPage } path="/ShelfCPage" />
        <Route component={ ShelfCbin1 } path="/ShelfCbin1" />
        <Route component={ ShelfCbin2 } path="/ShelfCbin2" />
        <Route component={ ShelfCbin3 } path="/ShelfCbin3" />
        <Route component={ ShelfCbin4 } path="/ShelfCbin4" />
    <Route component={ ShelfDPage } path="/ShelfDPage" />
        <Route component={ ShelfDbin1 } path="/ShelfDbin1" />
        <Route component={ ShelfDbin2 } path="/ShelfDbin2" />
        <Route component={ ShelfDbin3 } path="/ShelfDbin3" />
        <Route component={ ShelfDbin4 } path="/ShelfDbin4" />
    
  </Switch>
)