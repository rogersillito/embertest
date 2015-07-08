/* global Ember, $ */
export default Ember.Route.extend({
    model: function(params) {
        // var url = 'https://apps.ncl.ac.uk/staffdetailservice/api/v1/nationalities/' + params.code;
        // return $.ajax(url);
        return {
            code: params.code,
            nationalOrigin: "countryish",
            country: "somewhere"
        };

    },
    serialize: function(nationality) {
        return { code: Ember.get(nationality, 'code') };
    }
});


