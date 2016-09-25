import treeFilters from './filters';

export function computeGraph(tree, filters) {

    const filteredTree = filters.reduce((resultTree, filter) => (
        treeFilters[filter.key] ? treeFilters[filter.key](resultTree, filter.val) : resultTree
    ), tree) || {};

    return getGraphNodes(filteredTree).concat(getGraphLinks(filteredTree))
}

function getGraphNodes(tree) {
    const totalPoms = getPoms(tree);
    const completedPoms = getcompletedPoms(tree);

    return [{
        data: {
            id: tree.id,
            data: tree.data,
            label: `${tree.id} ${
            tree.poms ? '(' + tree.poms + ')' : (
                tree.children && tree.children.length ? (
                    '(' + completedPoms + '/' + totalPoms + ')'
                ) : '(1)'
            )}`,
            /**
             * TODO: at some point we'll have to sacrifice functional-ness
             * for performance here and only compute these values once.
             */
            totalPoms: totalPoms,
            completedPoms: tree.children ? completedPoms / totalPoms : (+!!tree.done) * (tree.poms || 1)
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

function getPoms(tree) {
    return tree.children ?
        tree.children.reduce(
            (numPoms, child) => numPoms + getPoms(child), 0
        ) :  (tree.poms || 1)
}

function getcompletedPoms(tree) {
    return tree.children ? tree.children.reduce(
        (numCompleted, child) => numCompleted + getcompletedPoms(child), 0
    ) : (tree.done ? (tree.poms || 1) : 0)
}
