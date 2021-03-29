function getAllPeople() {
  return fetch('/people.json').then(resp => resp.json());
};

function getPerson(id) {
  return getAllPeople().then(people => {
    return people.find(person => person.id === id);
  });
};

export default {
  getAllPeople: getAllPeople,
  getPerson: getPerson
};