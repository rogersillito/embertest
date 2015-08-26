import DS from 'ember-data';

export default DS.Model.extend({
    firstName: DS.attr(),
    lastName: DS.attr(),
    birthday: DS.attr('date', { defaultValue: function() { return new Date(1977,9,1); }}),

    fullName: Ember.computed('firstName', 'lastName', function() {
        return this.get('firstName') + ' ' + this.get('lastName');
    })
});
