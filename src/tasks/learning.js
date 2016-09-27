export default {
    id: 'learning',
    children: [

        {
            id: 'Kick off learning planning',
            poms: 4,
            done: true
        },
        {
            id: 'Contact geometry & symplectic geometry',
            children: [
                {
                    id: 'Review symplectic manifolds',
                    poms: 24
                },
                {
                    id: 'Contact manifolds: Defn and examples',
                    poms: 24
                },
                {
                    id: 'Natural Riemann structures',
                    poms: 12
                },
                {
                    id: 'Riemann structure on Unit Tangent Bundle',
                    poms: 24
                }
            ]
        },

        {
            id: 'More Algebraic Geometry',
            children: [
                {
                    id: 'Algebraic geometry',
                    children: [
                        {
                            id: 'Sheaves review [Vakil 2]',
                            poms: 24
                        },
                        {
                            id: 'Divisors and line bundles',
                            poms: 24
                        },
                        {
                            id: 'Blowups',
                            poms: 24
                        },
                        {
                            id: 'Hodge theory on Kahler manifolds',
                            poms: 24
                        },
                        {
                            id: 'Schemes',
                            children: [
                                {
                                    id: 'Vakil 3',
                                    poms: 24
                                },

                                {
                                    id: 'Vakil 4',
                                    poms: 24
                                }

                            ]
                        },

                    ]
                },
                {
                    id: 'Derived Categories',
                    children: [
                        {
                            id: 'Triangulated categories (Huybrechts 1)',
                            poms: 24
                        },
                        {
                            id: 'Derived categories definitions (Huybrechts 2)',
                            poms: 24
                        },
                        {
                            id: 'Derived categories of coherent sheaves (Huybrechts 3)',
                            poms: 24
                        }
                    ]
                }
            ]
        },


        {
            id: 'Persistence & Topological data analysis',
            children: [
                {
                    id: `Read Gunther's review`,
                    poms: 24
                }
            ]
        }
    ]
}
