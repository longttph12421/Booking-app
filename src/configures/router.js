import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../container/admin/DashBoard/Dashboard'
import Customers from '../container/admin/DashBoard/Customers'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            
        </Switch>
    )
}

export default Routes