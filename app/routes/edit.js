import Route from '@ember/routing/route';

export default Route.extend ({
    templateName : 'create',
    model(params) {
        return this.store.findRecord('list', params.id);
    },
});
