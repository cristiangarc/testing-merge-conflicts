function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
function addPersonAsFriend(firstPerson, personOne) {
    firstPerson.friends.push(personOne);
    return firstPerson;
}

module.exports = {
    createPerson,
    addPersonAsFriend,
};