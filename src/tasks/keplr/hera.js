export default {
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
                            poms: 5
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
}
