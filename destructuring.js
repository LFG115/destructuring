/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = age[0]
// let mary = age[1]
// let alex = age[2]
let [john, mary, alex] = ages;
//follow index from 0,1,2,3,4...
console.log(john, mary, alex);

// Destructuring objects
let jobs = {
    mike: 'designer',
    jill: 'developer',
    jack: 'accountant'
};

let {mike, jill, jack} = jobs;
console.log(mike, jill, jack);


// Destructuring subsets
let languages = ['English', 'French', 'Spanish', 'German', 'Japanese'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: 'English',
    secondLanguage: 'French',
    thirdLanguage: 'German',
    fourthLanguage: 'Japanese',
};

let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax

let fruits = ['apple', 'orange', 'banana', 'peach', 'cheery' ]
let [favorite, secondfavorite, ...others] = fruits;
console.log(favorite, secondfavorite);
console.log(others);

let favoriteFoods = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'vegi',
    chris: 'burger'
};

let {brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);