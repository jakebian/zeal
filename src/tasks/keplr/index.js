import hera from './hera'
import hadamard from './hadamard'
import picard from './picard'
import noether from './noether'
import hodge from './hodge'

export default {
    id: 'keplr',
    data: {},
    children: [
        hera,
        hadamard,
        picard,
        noether,
        hodge
    ]
}
