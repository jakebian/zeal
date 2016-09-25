export default {
    leaves,
    subtree,
    done,
    todo,
    unestimated
}

function unestimated(tree, filterVal) {
    return leavesFilter(
        'unestimated',
        tree,
        (testTree) => !(testTree.children && testTree.children.length) && !testTree.poms
    )
}

function todo(tree, filterVal) {
    return leavesFilter(
        'unfinished',
        tree,
        (testTree) => !(testTree.children && testTree.children.length) && !testTree.done
    )
}


function done(tree, filterVal) {
    return leavesFilter(
        'completed',
        tree,
        (testTree) => !(testTree.children && testTree.children.length) && testTree.done
    )
}

function leaves(tree, filterVal) {
    return leavesFilter(
        'all',
        tree,
        (testTree) => !(testTree.children && testTree.children.length)
    )
}

function subtree(tree, filterVal) {
    return searchForOne(tree, (testTree) => testTree.id === filterVal)
}

/**
 * Private utils
 */

function leavesFilter(propName, tree, filter) {
    return {
        id: `${propName} leaves of ${tree.id}`,
        children: searchForAll(
            tree,
            filter
        )
    }
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