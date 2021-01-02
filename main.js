const adjectives = require('./adjectives.js');
const subjects = require('./subjects.js');
const actions = require('./actions.js');
const objects = require('./objects.js');
const buildGenerator = require('./generator.js');

let generator = buildGenerator(adjectives, subjects, actions, objects);
let message = generator.generateSentence(generator);

console.log(message);
