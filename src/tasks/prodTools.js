export default {
    id: 'producitivty tools',
    children: [
        {
            id: 'zeal',
            children: [
                {
                    id: 'pomo logs view'
                },
                {
                    id: 'filters',
                    children: [
                        {
                            id: 'general filters architecture',
                            poms: 2,
                            done: true,
                        },
                        {
                            id: 'by tags',
                            poms: 1
                        },
                        {
                            id: 'by distance from root',
                            poms: 1
                        },
                        {
                            id: 'only show complete'
                        },
                        {
                            id: 'show children of particular node',
                            done: true,
                        },
                        {
                            id: 'show leaves only',
                            done: true,
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
                            id: 'tagging display',
                            poms: 2
                        },
                        {
                            id: 'show num pomos',
                            poms: 1
                        },
                        {
                            id: 'selected node state',
                            poms: 1
                        },
                        {
                            id: 'simple node data display',
                            poms: 1
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
                    id: 'zeal chore',
                    children: [
                        {
                            id: 'release (once github support is implemented)'
                        }
                    ]
                }
            ]
        },
    ]
}



