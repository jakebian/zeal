import prodTools from 'tasks/prodTools';
import research from 'tasks/research';
import learning from 'tasks/learning';

export default {
    id: 'root',
    children: [
        learning,
        research,
        prodTools,
    ]
}
