import React, { Component } from 'react'
import { connect } from 'react-redux'

import cytoscape from 'cytoscape';
import cydagre from 'cytoscape-dagre';
import dagre from 'dagre';
import { computeGraph } from 'components/TreeVis/util';
import { updateTree } from 'modules/tree'
import { updateFilters } from'modules/filters'
import tasks from 'tasks'
import $ from 'jquery'

let currentTasks = Object.assign({}, tasks);

export class TreeVis extends Component {
    constructor(props) {
        super(props)
        this.cy = null;
    }

    componentDidMount() {
        cydagre(cytoscape, dagre);
        this.props.loadTree();
        this.draw();
        this.props.updateFiltersFromHash

        $(window).on('hashchange', this.props.updateFiltersFromHash);


    }
    render() {
        this.draw();
        return (
            <div ref='treeContainer' className='tree-container' />
        );
    }
    draw() {
        setTimeout(() => {
            const lastViewportState = {
                zoom: this.cy && this.cy.zoom(),
                pan: this.cy && this.cy.pan()
            };

            this.cy = cytoscape({
                container: this.refs.treeContainer,
                elements: computeGraph(this.props.tree, this.props.filters),
                layout: {
                  name: 'dagre',
                  rankDir: 'LR'
                },
                style: [
                    {
                        selector: 'node',
                        style: {
                            'content': 'data(label)',
                            'text-opacity': 0.5,
                            'text-valign': 'bottom',
                            'text-halign': 'center',
                            'text-margin-y': 15,
                            width: 'mapData(totalPoms, 0, 20, 20, 70)',
                            height: 'mapData(totalPoms, 0, 20, 20, 70)',
                            'background-color': 'mapData(completion, 0, 1, #6F7A8C, #72AD5C)',
                        }
                    },
                    {
                        selector: 'node:selected',
                        style: {
                            'background-color': 'mapData(completion, 0, 1, #4A515E, #568046)',
                        }
                    },

                    {
                        selector: 'edge',
                        style: {
                            'width': 1,
                            'curve-style': 'bezier'
                        }
                    },
                ]
            }).viewport(lastViewportState);
        }, 0)
    }
}

export default connect((state) => ({
    tree: state.tree,
    filters: state.filters
}), {
    loadTree: updateTree.bind(null, tasks),
    updateTree,
    updateFiltersFromHash: () => (
        updateFilters(parseFilters(window.location.hash.slice(1)))
    )
})(TreeVis)


function parseFilters(filterStr) {
    return filterStr && filterStr.split('#').map((filterSpec) => ({
        key: filterSpec.split('@')[0],
        val: filterSpec.split('@')[1]
    }))
}
