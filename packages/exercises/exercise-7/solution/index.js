let attendeeCount = 5;

/**
 * fix the error caused by the next line
 **/
attendeeCount = 10;

const person = {
    name: 'John',
    age: 21,
    hobbies: ['soccer', 'gardening'],
};

/**
 * log the name of the person to the console
 **/
console.log(person.name);

/**
 * add one year to the person's age
 **/
person.age = person.age + 1;

/**
 * add a new hobby to the person's hobbies and log them to the console
 **/
person.hobbies.push('gaming');

console.log(person.hobbies);

function multiply(a, b) {
    /**
     * make the function return the product of a multiplied by b
     **/
    return a * b;
}

/**
 * log the result of the multiply function to the console
 **/
console.log(multiply(2, 3));

const vegetables = [
    { name: 'Carrot', color: 'orange' },
    { name: 'Potato', color: 'brown' },
    { name: 'Celery', color: 'green' },
    { name: 'Lettuce', color: 'green' }
];

/**
 * log only the first item of the array
 **/
console.log(vegetables[0]);

/**
 * loop over the array of vegetables and log each vegetable's name and color
 **/
vegetables.forEach(function (vegetable) {
    console.log('a ' + vegetable.name + ' is ' + vegetable.color);
})
