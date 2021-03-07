import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import TestRoutes from 'FEAT/example/routes'

const Routes = props => (
    <BrowserRouter>
        <TestRoutes {...props} />
    </BrowserRouter>
)

export default Routes
