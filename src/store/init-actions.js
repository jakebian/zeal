import { updateTree } from 'modules/tree'

export default (dispatch) => dispatch(updateTree({
    id: 'shit',
    data: {},
    children: [
        {
            id: 'shit-child',
            data: {},
            children: []
        },
        {
            id: 'shit-child2',
            data: {},
            children: [
                {
                    id: 'shit-grandchild',
                    data: {}
                },
                {
                    id: 'shit-grandchild-2',
                    data: {}
                }
            ]
        }
    ]
}))
