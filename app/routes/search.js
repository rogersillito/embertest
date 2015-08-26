import Ember from 'ember';

export default Ember.Route.extend({

    afterModel: function(model) {
        console.log('search route afterModel(): query = ' + model.query);
        return model;
    },
});
