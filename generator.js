let buildGenerator = (adjectives, subjects, actions, objects) => {
  return {
    _adjectives: adjectives,
    _objects: objects,
    _actions: actions,
    _subjects: subjects,
    get adjectives() {
      return this._adjectives;
    },
    set adjectives(adjectives) {
      this._adjectives = adjectives;
    },
    get subjects() {
      return this._subjects;
    },
    set subjects(subjects) {
      this._subjects = subjects;
    },
    get actions() {
      return this._actions;
    },
    set actions(actions) {
      this._actions = actions;
    },
    get objects() {
      return this._objects;
    },
    set objects(objects) {
      this._objects = objects;
    },
    getRandomComponent(array) {
      return array[Math.floor(Math.random() * array.length)];
    },
    generateSentence() {
      let adjective = this.getRandomComponent(this.adjectives);
      let subject = this.getRandomComponent(this.subjects);
      let action = this.getRandomComponent(this.actions);
      let object = this.getRandomComponent(this.objects);
    
      adjective = adjective.charAt(0).toUpperCase() + adjective.slice(1);
      return `${adjective} ${subject} ${action} ${object}.`;
    }

  };
}

module.exports = buildGenerator;