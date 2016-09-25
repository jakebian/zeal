export default {
    id: 'hadamard',
    children: [
        {
            id: 'open-api',
            children: [
                {
                    id: 'Polish python endpoint for hadamard'
                },
                {
                    id: 'Load models from fchollet'
                },
                {
                    id: 'Deploy kubernetes on GCE',
                    children: [
                        {
                            id: 'fix gpu support'
                        },
                    ]
                },
                {
                    id: 'pick a fucking name'
                }
            ]
        },

        {
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
        }
    ]
}
