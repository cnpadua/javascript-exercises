function getAge(person){
    if (person.yearOfDeath == undefined){
        let today = new Date();
        return today.getFullYear() - person.yearOfBirth;
    } else {
        return person.yearOfDeath - person.yearOfBirth;
    }
}

const findTheOldest = function(people) {
    people.sort((a,b)=> getAge(b) - getAge(a));
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
