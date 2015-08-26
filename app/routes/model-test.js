import Ember from 'ember';

var rog, bob;

export default Ember.Route.extend({
    init: function() {
        var store = this.store;
        var p = store.findAll('person').catch(function(e) {console.log(e);});
        rog = store.createRecord('person', {firstName: 'rog', lastName: 'sillito'});
        bob = store.createRecord('person', {firstName: 'bob', lastName: 'smith', birthday: new Date(1945,3,12)});
        console.log(bob.get('id'));
        console.log(rog.get('id'));
        rog.save().then(function(x) { console.log('done: ' + x);}, function(x) { console.log('rejected: ' + x);});
        this._super.apply(this, arguments);
    }
});
