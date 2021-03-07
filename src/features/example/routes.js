/* eslint 'max-len': ['off'] */
import React from 'react'
import { Switch } from 'react-router-dom'
import withLoadable from 'COMMON/hocs/withLoadable'
import Route from 'COMMON/router/PublicRoute'

const TestPage = withLoadable(() => import('FEAT/example/TestPage'))
const TestPage2 = withLoadable(() => import('FEAT/example/TestPage2'))

const Routes = props => (
    <Switch>
        <Route exact path={['/test', '/']} component={TestPage} {...props} />
        <Route exact path="/test/2" component={TestPage2} {...props} />
    </Switch>
)

export default Routes
