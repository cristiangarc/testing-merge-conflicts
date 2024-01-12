function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
function addPersonAsFriend(firstPerson, goodFriend) {
    firstPerson.friends.push(goodFriend);
    return firstPerson;
}

module.exports = {
    createPerson,
    addPersonAsFriend,
};