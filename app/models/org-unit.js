import DS from 'ember-data';

export default DS.Model.extend({
    objectId: DS.attr('number'),
    parentObjectId: DS.attr('number'),
    dateCurrency: DS.attr('number'),
    shortCode: DS.attr('string'),
    name: DS.attr('string'),
    parent: DS.belongsTo('org-unit', { inverse: 'children' }),
    children: DS.hasMany('org-unit', { inverse: 'parent' }),
    hasChildren: Ember.computed('children', function() {
        return this.get('children').length > 0;
    })
});
