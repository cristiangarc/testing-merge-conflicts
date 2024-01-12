function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(personA, personC) {
    personA.friends.push(personC);
    return personA;
  }

module.exports = {
    createPerson,
    addPersonAsFriend,
};