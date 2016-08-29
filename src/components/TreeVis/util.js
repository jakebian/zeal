export function computeGraph(tree) {
    return getGraphNodes(tree).concat(getGraphLinks(tree))
}

function getGraphNodes(tree) {
    const numChildren = getNumChildren(tree);
    return [{
        data: {
            id: tree.id,
            data: tree.data,
            /**
             * TODO: at some point we'll have to sacrifice functional-ness
             * for performance here and only compute these values once.
             */
            numChildren: numChildren,
            completion: numChildren != 0 ? getNumCompletedChildren(tree) / numChildren : +!!tree.done
        }
    }].concat(
        tree.children ? tree.children.reduce(
            (nodes, child) => nodes.concat(getGraphNodes(child)), []
        ) :[]
    )
}

function getGraphLinks(tree) {

    return tree.children ?

        tree.children.reduce((links, child) => (
            links.concat(
                [{
                    data: {
                        id: tree.id + '-' + child.id,
                        source: tree.id,
                        target: child.id
                    }
                }].concat(getGraphLinks(child))
            )
        ), [])

        : []
}

function getNumChildren(tree) {
    return tree.children ?
        tree.children.reduce(
            (numChildren, child) => numChildren + 1 + getNumChildren(child), 0
        ) : 0
}

function getNumCompletedChildren(tree) {
    return tree.children ?
        tree.children.reduce(
            (numCompleted, child) => numCompleted + (
                tree.children && tree.children.length ?
                    getNumCompletedChildren(child) : +!!tree.done
            ) , 0
        ) : +!!tree.done
}