import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Analytics from '../pages/Analytics'
import Footer from '../pages/Footer'
import Settings from '../pages/Settings'
import Test from '../pages/Test'
import Login from './login'
import Home  from '../pages/Home'


function Routes() {

  return (
    
    <Switch>
      <Route component={Login} path="/" exact />
      <Route path='/home' component={Home}/>
      <Route path='/analytics'  component={Analytics}/>
      <Route path='/footer'  component={Footer}/>
      <Route path='/settings'  component={Settings}/>
      <Route path='/test'  component={Test}/>
      
    </Switch>
  )
}

export default Routes