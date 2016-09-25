const updateActionType = 'tree-update'

export function updateTree (tree) {
    return {
        type: updateActionType,
        tree: tree
    };
}

export function treeReducer (state = { isEmpty: true }, action) {
    switch (action.type) {
        case updateActionType:
            return action.tree || state
    }

    return state
}
