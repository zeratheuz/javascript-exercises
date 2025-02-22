const findTheOldest = function (people) {
  return people.reduce((oldestPerson, currentPerson) => {

    currentPerson.yearOfDeath ??= new Date().getFullYear()

    if (Object.keys(oldestPerson).length === 0) {
      (oldestPerson = currentPerson)
      
    } else {
      const actualYear = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth
      const currentYear = currentPerson.yearOfDeath - currentPerson.yearOfBirth

      if (actualYear < currentYear) { oldestPerson = currentPerson }
    }

    return oldestPerson
  }, {})
};

// Do not edit below this line
module.exports = findTheOldest;
