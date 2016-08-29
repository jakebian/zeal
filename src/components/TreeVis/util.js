export function computeGraph(tree) {
    return getGraphNodes(tree).concat(getGraphLinks(tree))
}

function getGraphNodes(tree) {
    return [{
        data: {
            id: tree.id,
            data: tree.data
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