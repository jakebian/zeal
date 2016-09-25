import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { treeReducer as tree} from 'modules/tree'
import { filtersReducer as filters} from 'modules/filters'

export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        // Add sync reducers here
        router,
        tree,
        filters,
        ...asyncReducers
    })
}

export const injectReducer = (store, { key, reducer }) => {
    store.asyncReducers[key] = reducer
    store.replaceReducer(makeRootReducer(store.asyncReducers))
    runInitActions()
}

export default makeRootReducer
