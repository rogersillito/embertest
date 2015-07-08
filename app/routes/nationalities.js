/* global Ember, $ */
export default Ember.Route.extend({
    // setupController: function(controller) {
    //     // `controller` is the instance of ApplicationController
    //     controller.set('title', "Here are some results...");
    // },
    model: function() {
        var url = '/staffdetailservice/api/v1/nationalities';
        return $.ajax(url);

        // return [ {
        //     code: "OB",
        //     nationalOrigin: "countryish",
        //     country: "somewhere"
        // } ];
    }
});


