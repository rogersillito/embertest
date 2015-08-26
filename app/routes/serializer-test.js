import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var store = this.store;
        var p = store.findAll('org-unit');
        var setParent = function(ou) {
            var parentId = ou.get('parentObjectId');
            var parent = store.getById('org-unit', parentId);
            ou.set('parent', parent);
        };
        var setHierarchy = function(ous) {
            ous.forEach(function(ou) {
                // setParent(ou);
                var id = ou.get('id');
                var children = ous.filter(function (o) {
                    return o.get('parentObjectId') === parseInt(id);
                });
                ou.get('children').pushObjects(children);
            });
        };
        return p.then(function(result) {
            setHierarchy(result.content);
            var uni = result.filter(function(r) {
                return r.get('id') === "50000025";
            })[0];
            // output the name of the first child of the first child
            // console.log('Should be a unit name: ' + uni.get('children').objectAt(0).get('children').objectAt(0).get('name'));

            return uni;
        });
    }
});
