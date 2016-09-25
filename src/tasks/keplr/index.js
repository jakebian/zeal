import hera from './hera'
import hadamard from './hadamard'
import picard from './picard'
import noether from './noether'

export default {
    id: 'Keplr',
    data: {},
    children: [
        {
            id: 'product',
            data: {},
            children: [
                hera,
                hadamard,
                picard,
                noether,
                {
                    id: 'Hodge',
                    children: [
                        {
                            id: 'plan out hodge'
                        }
                    ]
                }
            ]
        },
    ]
}
