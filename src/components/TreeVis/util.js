export function computeGraph(tree) {
    return getGraphNodes(tree).concat(getGraphLinks(tree))
}

function getGraphNodes(tree) {
    return [{
        data: {
            id: tree.id,
            data: tree.data,
            /**
             * TODO: at some point we'll have to sacrifice functional-ness
             * for performance here and only compute these values once.
             */
            numChildren: getNumChildren(tree)
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
