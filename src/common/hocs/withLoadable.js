import Loadable from 'react-loadable'
import { Loading } from 'elephant-ui'

function withLoadable(loader) {
    return Loadable({
        loader,
        loading: Loading,
    })
}

export default withLoadable
