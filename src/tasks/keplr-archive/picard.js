export default {
    id: 'picard',
    children: [
        {
            id: 'chore',
            children: [
                {
                    id: 'try to recover version from last month :/'
                },
                {
                    id: 'make compatible with functional keras model'
                }
            ]
        },
        {
            id: 'core',
            children: [
                {
                    id: 'Handle union of search spaces more robustly'
                },
                {
                    id: 'Better graph models generation',
                    children: [
                        {
                            id: '(Gluing) generator-based graph enumeration',
                            children: [
                                {
                                    id: 'skim over feynart source for inspirations/pitfall avoidence'
                                }
                            ]
                        },
                        {
                            id: 'Port sequential models spaces to graph model spaces'
                        }
                    ]
                }
            ]
        },
        {
            id: 'common-models',
            children: [
                {
                    id: 'mlps',
                    done: true
                },
                {
                    id: 'convnets',
                    done: true
                },
                {
                    id: 'resnets'
                }
            ]
        },
        {
            id: 'search visualization',
            children: [
                {
                    id: 'search-tree vis',
                    children: [
                        {
                            id: 'client application',
                            children: [
                                {
                                    id: 'set up client application (mimic zeal)'
                                },
                                {
                                    id: 'client reducers',
                                    children: [
                                        {
                                            id: 'tree'
                                        },
                                        {
                                            id: 'experiments: store hera output data into a map (connect to hera socket)'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'Build search graph',
                            children: [
                                {
                                    id: 'set up env with hera reducer state',
                                    children : [
                                        {
                                            id: 'listen to hera socket'
                                        }
                                    ]
                                },
                                {
                                    id: 'compute search graph',
                                    children: [
                                        {
                                            id: 'add edge when parameters overlap'
                                        },
                                        {
                                            id: 'handle union of search spaces'
                                        }
                                    ]
                                },
                                {
                                    id: 'draw search graph'
                                },
                                {
                                    id: 'link/embed hera view in nodes',
                                    children: [
                                        {
                                            id: 'quickly display model structure for each node (port hera)'
                                        },
                                        {
                                            id: 'link hera view with realtime timeseries'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'Search Space Configuration',
                            children: [
                                {
                                    id: 'hyperopt operators',
                                    children: [
                                        {
                                            id: '$choice'
                                        },
                                        {
                                            id: '$uniform'
                                        }
                                    ]
                                },
                                {
                                    id: 'picard operators',
                                    children: [
                                        {
                                            id: '@loop'
                                        },
                                        {
                                            id: '@merge/concat'
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
            ]
        },
        {
            id: 'search control',
            children: [
                {
                    id: 'picard server',
                    children: [
                        {
                            id: 'hera-independent socket connection',
                            chidlren: [
                                {
                                    id: 'search-start event'
                                },
                                {
                                    id: 'search-index and count event'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'interrupt-search',
                },
                {
                    id: 'search-hera-integration',
                    children: [
                        {
                            id: 'add heraspy'
                        },
                    ]
                }
            ]
        }
    ]
}
