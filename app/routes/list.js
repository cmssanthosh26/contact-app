import Route from '@ember/routing/route';

export default class ListRoute extends Route {
    model(params) {
        return this.store.findRecord('list', params.id);
    }
}
