//Declare an empty array;
const emptyArray = Array();
//Declare an array with more than 5 number of elements
const food = ['Chicken', 'Pasta', 'Salmon', 'Chips', 'Rice', 'Mushrooms', 'Sushi', 'Grapes'];
//Find the length of your array
console.log(food.length);
//Get the first item, the middle item and the last item of the array
const firstMeal = food[0];
console.log(firstMeal);

const middleMeal = food[Math.floor(food.length / 2)];
console.log(middleMeal);

const lastMeal = food[food.length - 1];
console.log(lastMeal);

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
    'Facebook',
    'Twitter',
    'Grapes',
    'Rice',
    'Chairs',
    'Table',
    'Spain',
    'Italy',
];
console.log(mixedDataTypes.length);

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'OBM',
    'Oracle',
    'Amazon',
];

//Print the array using console.log()
console.log(itCompanies);

//Print the number of companies in the array
console.log(itCompanies.length);

//Print the first company, middle and last company
const firstCompany = itCompanies[0];
console.log(firstCompany);

const middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
console.log(middleCompany)

const lastCompany = itCompanies[itCompanies.length - 1];
console.log(lastCompany);

//Print out each company
const eachCompany = itCompanies.forEach(element => console.log(element));


//Change each company name to uppercase one by one and print them out
itCompanies.forEach(element => {
    emptyArray.push(element.toUpperCase());
});
console.log(emptyArray);


//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
function fullSentence() {
    let space = ' '
    let endText = 'are big IT Companies'
    let completeSentence = itCompanies + space + endText
    return completeSentence
    }
console.log(fullSentence())

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let companyChecker = true
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.') 
}
//Filter out companies which have more than one 'o' without the filter method
//Sort the array using sort() method
//Reverse the array using reverse() method
//Slice out the first 3 companies from the array
//Slice out the last 3 companies from the array
//Slice out the middle IT company or companies from the array
//Remove the first IT company from the array
//Remove the middle IT company or companies from the array
//Remove the last IT company from the array
//Remove all IT companies