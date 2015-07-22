/* global Ember */
export default Ember.Handlebars.makeBoundHelper( function(title, url) {
  return new Ember.Handlebars.SafeString('<a href="' + url + '">' + title + '</a>');
});
