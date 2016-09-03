export default {
    id: 'root',
    children: [
        {
            id: 'Keplr',
            data: {},
            children: [
                {
                    id: 'product',
                    data: {},
                    children: [
                        {
                            id: 'hera',
                            children: [
                                {
                                    id: 'architecture-visualization',
                                    done: true
                                },
                                {
                                    id: 'outputs-vis',
                                    children: [
                                        {
                                            id: 'heraspy-save-weights',
                                            children: [
                                                {
                                                    id: 'using-mongodb',
                                                },
                                                {
                                                    id: 'using-hdf',
                                                    done: true
                                                }
                                            ]
                                        },
                                        {
                                            id: 'heraspy read weights',
                                            children: [
                                                {
                                                    id: 'using mongodb',
                                                },
                                                {
                                                    id: 'using h5py',
                                                    children: [
                                                        {
                                                            id: 'python class',
                                                            children: [
                                                                {
                                                                    id: 'read docs'
                                                                },
                                                                {
                                                                    id: 'implement'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            id: 'call read script from server'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            id: 'picard support',
                                            children: [
                                                {
                                                    id: 'event namespaces'
                                                },
                                                {
                                                    id: `lite option: don't send timeseries data`
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'hadamard',
                            children: [{
                                id: 'new-architecture',
                                children: [
                                    {
                                        id: 'tf-serving',
                                        done: true
                                    },
                                    {
                                        id: 'kubernetes',
                                        done: true
                                    },
                                    {
                                        id: 'deployment on aws'
                                    },
                                    {
                                        id: 'machine status display & visualization',
                                        children: [
                                            {
                                                id: 'plan this out'
                                            }
                                        ]
                                    }
                                ]
                            }]
                        },
                        {
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
                        },
                        {
                            id: 'noether',
                            children: [
                                {
                                    id: 'New search interface',
                                    children: [
                                        {
                                            id: 'loading screen'
                                        },
                                        {
                                            id: 'picard-client views'
                                        }
                                    ]
                                },
                                {
                                    id: 'Hera integration',
                                    children: [
                                        {
                                            id: 'open hera dashboard in new route?'
                                        },
                                        {
                                            id: 'migrate hera reducers'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'customers',
                    children: [
                        {
                            id: 'get ava to fill this shit out'
                        }
                    ]
                }
            ]
        },

        {
            id: 'zeal',
            children: [
                {
                    id: 'filters',
                    children: [
                        {
                            id: 'by distance from root'
                        },
                        {
                            id: 'only show complete'
                        },
                        {
                            id: 'show children of particular node',
                        },
                        {
                            id: 'show leaves only'
                        },
                        {
                            id: 'text matching'
                        },
                    ]
                },
                {
                    id: 'data display & fields',
                    children: [
                        {
                            id: 'simple node text data display'
                        },
                        {
                            id: 'planned date & num pomodoros field for leaves'
                        },
                        {
                            id: 'total times',
                            children: [
                                {
                                    id: 'compute'
                                },
                                {
                                    id: 'display'
                                }
                            ]
                        },
                        {
                            id: 'node status markings',
                            children: [
                                {
                                    id: 'mark nodes as doing, done, today'
                                },
                                {
                                    id: 'add filters for these'
                                }
                            ]
                        },
                        {
                            id: 'node dependency graph',
                            children: [
                                {
                                    id: 'add dependency field'
                                },
                                {
                                    id: 'build dependency tree'
                                },
                                {
                                    id: 'overlay dependency tree drawing'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'Hosting & Serving',
                    children: [
                        {
                            id: 'parse github flavored markdown'
                        },
                        {
                            id: 'encode filters in query string'
                        },
                        {
                            id: 'graph-redraw without flashing?'
                        },
                        {
                            id: 'webpack with remote socket server?'
                        }
                    ]
                },
                {
                    id: 'chore',
                    children: [
                        {
                            id: 'release (once github support is implemented)'
                        }
                    ]
                }
            ]
        },

        {
            id: 'Neural Nets as Derived Categories'
        },

        {
            id: 'Tensor Netorks as 0+1 TQFT'
        }
    ]
}