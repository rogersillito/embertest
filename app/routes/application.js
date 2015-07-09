export default Ember.Route.extend({
    setupController: function(controller) {
        // `controller` is the instance of ApplicationController
        controller.set('title', "Hello world!");
    },

    actions: {
        sayHello: function(name, surname) {
            alert("Hello! " + name + " " + surname);
        }
    }
});
