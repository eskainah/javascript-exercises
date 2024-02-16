const findTheOldest = function(pplDetail) {
    return pplDetail.reduce((firstPerson, secondPerson) => {
        const oldest = getAge(
            firstPerson.yearOfBirth, 
            firstPerson.yearOfDeath);
        const youngest = getAge(
            secondPerson.yearOfBirth, 
            secondPerson.yearOfDeath
        );
        return oldest < youngest ? secondPerson : firstPerson;
    });
  };
     
const getAge = function (birth, death) {
   if (!death) {
     death = new Date().getFullYear();
   }
   return death - birth;
 };

// Do not edit below this line
module.exports = findTheOldest;
