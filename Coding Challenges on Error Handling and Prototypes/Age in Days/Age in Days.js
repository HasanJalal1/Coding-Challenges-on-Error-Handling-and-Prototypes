function ageInDays(person) {
    const fullName = `${person.firstName} ${person.lastName}`;
    const ageInDays = person.age * 365;

    return function() {
        console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    };
}

// Example usage
const person = { firstName: 'Mithun', lastName: 'S', age: 20 };
const logAgeInDays = ageInDays(person);

// Later in the code, you can call the returned function to log the message
logAgeInDays(); // "The person's full name is John Doe and their age in days is 10950."
