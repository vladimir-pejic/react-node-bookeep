import React from 'react';
import { Route } from 'react-router-dom';
import HomeComponent from './components/pages/HomeComponent'
import LoginComponent from './components/pages/LoginComponent'

const App = () => <div>
    <Route path={'/'} exact component={HomeComponent} />
    <Route path={'/login'} exact component={LoginComponent} />
</div>;

export default App;
