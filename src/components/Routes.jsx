import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Developer from '../pages/Developer'
import Exchange from '../pages/Exchange'
import Analytics from '../pages/Analytics'
import Footer from '../pages/Footer'
import Settings from '../pages/Settings'
import Test from '../pages/Test'


const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard}/>
      <Route path='/devlepoer' component={Developer}/>
      <Route path='/Exchange' component={Exchange}/>
      <Route path='/Analytics' component={Analytics}/>
      <Route path='/Footer' component={Footer}/>
      <Route path='/Settings' component={Settings}/>
      <Route path='/Test' component={Test}/>

    </Switch>
  )
}

export default Routes