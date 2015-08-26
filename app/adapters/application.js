// import ApplicationAdapter from './application';
import DS from 'ember-data';

var x = 2;
// export default ApplicationAdapter.extend({
export default DS.RESTAdapter.extend({
    namespace: 'api/v' + x
});
