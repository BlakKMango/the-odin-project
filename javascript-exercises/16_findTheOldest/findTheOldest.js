// const people = [
//       {
//         name: "Carly",
//         yearOfBirth: 1942,
//         yearOfDeath: 1970,
//       },
//       {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//       },
//       {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//       },
//     ]

const findTheOldest = function(people) {
  const thisYear = new Date().getFullYear();

  return people.reduce((oldest, person) => {
    const oldestDeathYear =
      "yearOfDeath" in oldest ? oldest.yearOfDeath : thisYear;

    const personDeathYear =
      "yearOfDeath" in person ? person.yearOfDeath : thisYear;

    const oldestAge = oldestDeathYear - oldest.yearOfBirth;
    const personAge = personDeathYear - person.yearOfBirth;

    return personAge > oldestAge ? person : oldest;
  });
};


// Do not edit below this line
module.exports = findTheOldest;