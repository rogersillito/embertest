/* global Ember */
export default Ember.Controller.extend({
    appName: 'My First Example',
    colour: 'red',
    search: '',
    actions: {
        query() {
            var query = this.get('search');
            console.log('quering... search=' + query);
            this.transitionToRoute('search', { query: query });
        }
    }
});
