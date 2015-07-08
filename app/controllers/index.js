/* global Ember */


var Race = Ember.Object.extend({
    init: function() {
        console.log(this.get('raceName'));
    },
    kitRequired: function(kit) {
        return this.get('raceName') + ': Kit Required = entry fee, ' + kit + '. ';
    }
});

var FellRace = Race.extend({
    skillsExperience: null,
    kitRequired: function(kit) {
        return this._super(kit + ', compass, whistle');
    },
    skills: function(key, value, previous) {
        if (arguments.length > 1) {
            this.set('skillsExperience', value);
        }
        return 'Skills/Experience: ' + this.get('skillsExperience');
    }.property('skillsExperience')
});

Race.reopen({kitRequired: function(kit) { return this._super(kit) + ' (!)'; }})

var newburnRace = Race.create({
    raceName: 'newburnRace'
});

var saltwellFellRace = FellRace.create({
    raceName: 'saltwellFellRace',
    skillsExperience: 'PM, LK'
});
saltwellFellRace.set('skills', 'ER, NS, PM, LK');


export default Ember.Controller.extend({
    colour: newburnRace.kitRequired('trainers') + saltwellFellRace.kitRequired('fell shoes, full cover'),
    testing: saltwellFellRace.get('skills')
});
