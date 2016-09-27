export default {
    id: 'hadamard',
    children: [
        {
            id: 'open-api',
            children: [
                {
                    id: 'Polish python endpoint for hadamard',
                    poms: 24,
                    done: true
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
                    ],
                    pom: 24,
                    done: true
                },
                {
                    id: 'pick a fucking name',
                    done: true
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
                    id: 'deployment on GCE',
                    done: true
                },
                {
                    id: 'hadamard-serving automation',
                    poms: 24
                },
                {
                    id: 'machine status display & visualization',
                    children: [
                        {
                            id: 'plan this out',
                            poms: 2
                        },
                        {
                            id: 'implementation',
                            poms: 24
                        }
                    ]
                }
            ]
        }
    ]
}
