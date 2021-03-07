import React, { useEffect, useState } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { parseQueryParam } from 'COMMON/utils/urlUtil'

const PublicRoute = (props) => {
    const [isRenderComponent, setIsRenderComponent] = useState(false)
    const routerHistory = useHistory()
    const {
        component: Component, path, exact, strict, sensitive, onEnter, location: curLocation, ...rest
    } = props
    useEffect(() => {
        setIsRenderComponent(false)
        // 处理onEnter
        if (typeof onEnter === 'function') {
            onEnter(curLocation, routerHistory.replace, () => {
                setIsRenderComponent(true)
            })
        } else {
            setIsRenderComponent(true)
        }
    }, [curLocation])

    return (
        <Route
            {...{
                path,
                exact,
                strict,
                sensitive,
            }}
            render={({
                match, history, location, ...restProps
            }) => isRenderComponent && (
                <Component
                    {...rest}
                    params={match.params}
                    router={history}
                    location={location}
                    query={parseQueryParam(location.search)}
                    match={match}
                    {...restProps}
                />
            )}
        />
    )
}

export default PublicRoute
