//teamSummary will print undefined 
/**
 * We can solve this problem typing bind(this) in the end of the function,
 * 
    teamSummary: function() {
        return this.members.map(function(member) {
            return `${member} is on team ${this.teamName}`
        }.bind(this));
    }
 *  or we create an variable
    teamSummary: function() {
        var self = this;
        return this.members.map(function(member) {
            return `${member} is on team ${self.teamName}`
        });
    }
 */
const team1 = {
    members: ['William', 'Jane'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map(function(member) {
            return `${member} is on team ${this.teamName}`
        });
    }
};
//console.log(team1.teamSummary())

//Arrow function solves this problem
const team2 = {
    members: ['William', 'Jane'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map((member) => {
            return `${member} is on team ${this.teamName}`
        });
    }
};
console.log(team2.teamSummary())

//Refactoring
const team3 = {
    members: ['William', 'Jane'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map(member => `${member} is on team ${this.teamName}`);
    }
};
console.log(team3.teamSummary())