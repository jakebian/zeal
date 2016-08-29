import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import TreeVis from 'components/TreeVis/component'

export const createRoutes = (store) => ({
    path: '/',
    component: CoreLayout,
    indexRoute: {
      component: TreeVis
    },
})

export default createRoutes