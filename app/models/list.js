import DS from 'ember-data';
export default DS.Model.extend({
    name : DS.attr(),
    dob : DS.attr(),
    address : DS.attr(),
    mobNumber : DS.attr()
})
