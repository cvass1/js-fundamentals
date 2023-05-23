const person = {
    name: 'Maxine',
    age: 32,
    address: {
      city: 'London',
      postcode: 'E1 123'
    },
    hobbies: ['writing', 'tennis', 'cooking']
  };


console.log(person.address.city)
console.log(person['address']['city'])
console.log(person.hobbies[1])

const cohort = {
    name: 'May 2022',
    id: 1234,
    students: ['caroline', 'phil', 'pip']
}

const cohortDetails = (cohort) => {
    msg = `${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`
    console.log(msg)
}

cohortDetails(cohort)



const names = ['Anna', 'Li', 'Charlie', 'Mary', 'Jo'];

const isShorterThanThree = (name) => {
  if (name.length < 3) {
    return true;
  } else {
    return false;
  }
}

const namesShorterThanThreeLetters = names.filter(isShorterThanThree);

console.log(namesShorterThanThreeLetters)


const getUppercased = (name) => {
  return name.toUpperCase();
}

const uppercasedNames = names.map(getUppercased);

console.log(uppercasedNames)


const checkLength = (string) => {
    if (string.length <= 10) {
        return true;
    } else {
        return false;
    };
};

const filterLongNumbers = (array) => {
    return array.filter(checkLength);

}

const numbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd'
  ];
  
  console.log(filterLongNumbers(numbers));
  
  console.log(filterLongNumbers(['4763687363', '7867867862'])); 
  
  console.log(filterLongNumbers([]))


const message = (name) => {
    return `Hi ${name}! 50% off our best candies for you today!`
}

const generateMessages = (nameList) => {
    return nameList.map(message)
}
const names2 = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

console.log(generateMessages(names2))


const messageWithDiscount = (customer) => {
    return `Hi ${customer.name}! ${customer.discount}% off our best candies for you today!`
}

const generateMessagesWithDiscount = (customerList) => {
    return customerList.map(messageWithDiscount)

}
const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];


console.log(generateMessagesWithDiscount(namesAndDiscounts))
