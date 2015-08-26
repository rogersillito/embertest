import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    namespace: 'staffdetailservice/api/v1',
    host: 'https://apps.ncl.ac.uk'//,
    // defaultSerializer: 'JSONSerializer'
});
