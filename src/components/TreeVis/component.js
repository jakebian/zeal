import React, { Component } from 'react'
import { connect } from 'react-redux'

import cytoscape from 'cytoscape';
import cydagre from 'cytoscape-dagre';
import dagre from 'dagre';
import { computeGraph } from 'components/TreeVis/util';

export class TreeVis extends Component {
    componentDidMount() {

        cydagre(cytoscape, dagre)

        let cyGraph = cytoscape({
            container: this.refs.treeContainer,
            elements: computeGraph(this.props.tree),
            layout: {
              name: 'dagre',
              rankDir: 'LR'
            },
            style: [
                {
                    selector: 'node',
                    style: {
                        'content': 'data(id)',
                        'text-opacity': 0.5,
                        'text-valign': 'bottom',
                        'text-halign': 'center',
                        'text-margin-y': 15,
                    }
                },
                {
                    selector: 'edge',
                    style: {
                        'width': 4,
                        'target-arrow-shape': 'triangle',
                        'curve-style': 'bezier'
                    }
                }
            ]
        });

    }
    render() {
        return (
            <div>
                <div ref='treeContainer' className='tree-container'></div>
            </div>
        )
    }
}

export default connect((state) => ({
    tree: state.tree
}), {})(TreeVis)
