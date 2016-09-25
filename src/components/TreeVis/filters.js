export default {
    leavesOnly,
    subtree
}

function leavesOnly(tree, filterVal) {
    return {
        id: `leaves of ${tree.id}`,
        children: searchForAll(
            tree,
            (testTree) => !(testTree.children && testTree.children.length)
        )
    }
}

function subtree(tree, filterVal) {
    return searchForOne(tree, (testTree) => testTree.id === filterVal)
}

function searchForAll(tree, condition, result=[]) {
    return condition(tree) ? [
        ...result, tree
    ] : (
        tree.children ? tree.children.reduce(
            (childrenResult, child) => searchForAll(child, condition, childrenResult), result
        ) : result
    )
}

function searchForOne(tree, condition) {
    return tree && (
        condition(tree) ? tree : (
            tree.children ? tree.children.reduce((result, childTree) => (
                result || searchForOne(childTree, condition)
            ) , null) : null
        )
    )
}