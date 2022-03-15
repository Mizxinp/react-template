import React, { Suspense } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root'
import { Switch, BrowserRouter } from 'react-router-dom'
import withLoadable from 'COMMON/hocs/withLoadable'
import Route from 'COMMON/router/PublicRoute'

const TestPage = withLoadable(() => import('FEAT/example/TestPage'))
const TestPage2 = withLoadable(() => import('FEAT/example/TestPage2'))

const Routes = (props) => (
    <BrowserRouter>
        <Suspense fallback={null}>
            <Switch>
                <Route exact path={['/test', '/']} component={TestPage} {...props} />
                <Route exact path="/test/2" component={TestPage2} {...props} />
            </Switch>
        </Suspense>
    </BrowserRouter>
)

export default hot(Routes)
