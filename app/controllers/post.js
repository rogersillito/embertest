/* global Ember */
export default Ember.Controller.extend({
    // intro: Ember.computed.alias('model.intro'),
    // body: Ember.computed.alias('model.body'),
    intro: "this is the intro",
    body: "this is the body",

    // initial value
    isExpanded: false, 

    actions: {
        expand: function() {
            this.set('isExpanded', true);
        },

        contract: function() {
            this.set('isExpanded', false);
        },

        sayHello: function(name) {
            alert("Hello! (controller) " + name);
            return true;
        }
    }
});
