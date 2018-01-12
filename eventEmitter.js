var events = require('events');
var util = require('util');//inherit from Node.js objects

var Person = function(name){
    this.name = name;
};

// we want Person to inherit from events
util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var people = [james, mary, ryu];

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + ' said: ' + msg);
    });
});

james.emit('speak', 'hey dude!');

// var myEmimtter = new events.EventEmitter();

// myEmimtter.on('someEvent', function(msg){
//     console.log(msg)
// });

// myEmimtter.emit('someEvent', 'The event was emitted');