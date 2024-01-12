function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
function addPersonAsFriend(firstPerson, friend) {
    firstPerson.friends.push(friend);
    return firstPerson;
}

module.exports = {
    createPerson,
    addPersonAsFriend,
};