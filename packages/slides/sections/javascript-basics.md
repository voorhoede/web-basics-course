---
layout: center
---

# Javascript Basics 

---

# Javascript / Javascript

- Used to make web pages interactive
- Can be used to validate forms, create animations and much more
- Not only used in a browser
  - Running a web server with Node.js
  - Building a desktop application with Electron
  - Going to space ;)

<img src="/images/js-space.png" style="height:200px" />

---

# Javascript Basics / Syntax

```javascript
const name = 'John Doe';
const characteristics = ['smart', 'kind', 'funny'];
const meta = {
  age: 30,
  height: 180,
  weight: 80
};

function greet(name, characteristics, meta) {
    console.log(`Hello ${name}, you are ${characteristics.join(', ')}`);
    console.log(`You are ${meta.age} years old, ${meta.height}cm tall and weigh ${meta.weight}kg`);
}

greet(name, characteristics, meta);
```

---

# Javascript Basics / Variables

- Store information
- Declared with the `const` or `let` keyword
- `let` can be reassigned, `const` cannot

```javascript
const name = 'John Doe';
let age = 30;

age = 31;

// will cause an error (Uncaught TypeError: Assignment to constant variable.)
name = 'Jane Doe';
```

<!--
  - Explain variables
  - const vs let
  - const cannot be reassigned
  - let can be reassigned
  - var is the old way of declaring variables
  - var can be reassigned
  - var is function scoped, let and const are block scoped, but not going to bore you with that
  - Mention error when trying to reassign const
-->

---

# Javascript Basics / Data types

- `string` - a sequence of characters
- `number` - a number
- `boolean` - a logical entity that can have two values: true or false
- `null` - a special keyword denoting a null value
- `undefined` - a top-level property whose value is undefined
- `object` - a collection of data (key/value pairs)
- `array` - a type of object used to store lists of data 

<!--
  - Does anybody not recognize one of these?
-->

---

# Javascript Basics / Objects

- Special variable, that can hold more than one value at a time
- Each value has a name, called a key
- Each key has a value

```javascript
const person = {
  name: 'John Doe',
  age: 30,
  dimensions: {
    height: 180,
    weight: 80
  }
};

console.log(person.name);
// John Doe

console.log(person.dimensions.height);
// 180
```

<!--
  - Explain objects
  - Mention nesting
  - Mention dot notation
-->

---

# Javascript Basics / Functions

- A block of code designed to perform a particular task
- Reusable

```javascript
function greet(name, age) {
  return `Hello ${name}, you are ${age} years old`;
}

greet('John', 30);
```

```javascript
// Object destructuring in function parameters
function greet({ name, age }) {
  return `Hello ${name}, you are ${age} years old`;
}

greet({ name: 'John', age: 30 });
```
```javascript
// Arrow functions are a shorter way to write functions 
const greet = ({ name, age }) => `Hello ${name}, you are ${age} years old`;

greet({ name: 'John', age: 30 });
```

<!--
  - Functions
  - Parameters
  - Return
  - Arrow functions
  - Object destructuring
-->

---

# Javascript Basics / Arrays

- Special variable, that can hold more than one value at a time
- Each value has an index, starting at 0
- Has special methods to add, remove and manipulate values

```javascript
const names = ['John', 'Jane', 'Jack'];

// add to end
names.push('Jill');

// remove last
names.pop()

// add to start
names.unshift('Jill');
```

---

# Javascript Basics / Array methods

- `forEach` - executes a provided function once for each array element
- `map` - creates a new array with the results of calling a provided function on every element in the calling array
- `filter` - creates a new array with all elements that pass the test implemented by the provided function
- `reduce` - executes a reducer function (that you provide) on each element of the array, resulting in a single output value
    
```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => console.log(number));
// logs each number to the console

const doubled = numbers.map(number => number * 2);
// [2, 4, 6, 8, 10]

const even = numbers.filter(number => number % 2 === 0);
// [2, 4]
```

---

# Javascript Basics / Conditionals

- Used to perform different actions based on different conditions

```javascript
const age = 30;

if (age > 18) {
  console.log('You may have a beer');
} else {
  console.log('You may not have a beer');
}
```

<!-- operators -->

---

# Javascript Basics / Loops

- Used to repeat a block of code

```javascript
const names = ['John', 'Jane', 'Jack'];

// for loop
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// for of loop
for (const name of names) {
  console.log(name);
}

// forEach loop
names.forEach(name => console.log(name));
```

---
layout: center
---

# 🏋️ Exercise 7 🏋️

- Follow the instructions in the exercise file

---

# Javascript Basics / Events

- Actions that occur when a user or element performs an action
- Examples: click, submit, keypress, load, resize, scroll

```html
<button id="submit-button">Click me</button>
```

```javascript
const button = document.querySelector('#submit-button');

button.addEventListener('click', () => {
  console.log('Button clicked');
});
```

---

# Javascript Basics / DOM manipulation

<CodepenEmbed slug-hash="xxyZrxb" user="sjoerdb" height="400" />

---
layout: center
---

# 🏋️ Exercise 8 🏋️

- use `document.querySelector` to get the elements with `joke-button` and `joke` as id attribute
- When the button is clicked, use the getRandomJoke function to get a random joke
- Replace the textContent of the joke element with the random joke

---

# Javascript Basics / Inline vs external scripts

- Inline scripts are placed in the HTML file
- External scripts are placed in a separate file

```html
<script>
  console.log('Hello world');
</script>
```

```html
<script src="/script.js"></script>
```

---
layout: center
---

# 🏋️ Exercise 9 🏋️

- In index.html: add a script tag to the bottom of the body with the mapbox script
- In index.js: Initialize the mapbox map

---

# Javascript Basics / Async

<CodepenEmbed slug-hash="xxyxLMG" user="sjoerdb" height="400" />

---

# Javascript Basics / Data Fetching

- Fetching data from an API
- Using the `fetch` API

```javascript
try {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.log(users);
} catch (error) {
  console.error(error);
}
```

```javascript
const response = await fetch('https://jsonplaceholder.typicode.com/users');
  .then(response => response.json())
  .then(users => console.log(users))
  .catch(error => console.error(error));
```

---
layout: center
---

# 🏋️ Exercise 10 🏋️

- Get the location button element from the DOM and store it in a variable
- Create a function that handles the click event on the location button. Inside the function:
  - change the textContent of the location button to "Loading..."
  - call the zoomToCurrentLocation function
  - change the textContent of the location button back to "Current location"
  - if an error occurs, alert the user with a message
  - change the textContent of the location button back to "Current location"
  - Remember: we're dealing with asynchronous code here
- Add a click event listener to the location button that calls the function you created in step 2

---
layout: center
---

# 🏋️ Exercise 11 🏋️

1. Add an click listener on the map (hint: https://docs.mapbox.com/mapbox-gl-js/example/popup-on-click/)
2. fetch weather data for the coordinates (use the fetchWeatherForLocation function)
3. display the weather data in the popup (hint: https://docs.mapbox.com/mapbox-gl-js/api/markers/#popup#sethtml)
4. Bonus: add error handling for when data fetching fails (using try/catch)

---

# Javascript Basics / Libraries & Frameworks

- jQuery
- Angular
- React
- Vue
- Svelte
