import keplr from 'tasks/keplr';
import prodTools from 'tasks/prodTools';
import research from 'tasks/research';
import learning from 'tasks/learning';

export default {
    id: 'root',
    children: [
        keplr,
        learning,
        research,
        prodTools,
    ]
}
