import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'p',
    // classNames: ['three'],
    classNameBindings: ['isOne:one:not-one', 'isTwo::not-two', 'colour'],
    isOne: true,
    isTwo: false,
    colour: 'pink',
    attributeBindings: ['tabindex', 'style'],
    tabindex: 123,
    style: 'color: red',
    item: null,
    isEditing: false,
    actions: {
        edit() {
            this.toggleProperty('isEditing');
        },
        saveEdit() {
            var item = this.get('item');
            this.toggleProperty('isEditing');
            console.log('go and save: ' + item.title);
            this.sendAction('action', item);
        }
    }
});
