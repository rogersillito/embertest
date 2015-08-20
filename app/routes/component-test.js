import Ember from 'ember';

var posts = [{
    title: "Rails is omakase",
    body: "There are lots of à la carte software environments in this world.",
    date: '1/9/2015'
}, {
    title: "Broken Promises",
    body: "James Coglan wrote a lengthy article about Promises in node.js.",
    date: '10/5/2011'
}];

export default Ember.Route.extend({
    model() {
        return posts;
    },
    actions: {
        editPost(item) {
            console.log('received edit request: ' + item.title);
        }
    }
});
