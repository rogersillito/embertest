/* global Ember */
export default Ember.Route.extend({
    // setupController: function(controller) {
    //     // `controller` is the instance of ApplicationController
    //     controller.set('title', "Here are some results...");
    // },
    model: function() {
        return [
            {
                name: 'Skiddaw Race',
                distance: '9.5 miles',
                type: 'Fell',
                date: '06/07/2015'
            },
            {
                name: 'Newburn River Run',
                distance: '6.5 miles',
                type: 'Road',
                date: '26/06/2015'
            }
    ];
    }
});


