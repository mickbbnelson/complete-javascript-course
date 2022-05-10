
// # 1
const country = 'USA';
const continent = 'North America';
let population = 329.5;


// console.log(country);
// console.log(continent);
// console.log(population);

// # 2

const isIsland = false;
let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// # 3

language = 'English';

population = 330;
// console.log(population);

// country = "Canada";
// console.log(country);

// # 4
let halfPopulation = population / 2;
// console.log(halfPopulation)

let populationIncrease = ++population
// console.log(populationIncrease)

let finlandPop = 6

const moreThanFinland = population >= finlandPop 
// console.log(moreThanFinland)

let averagePop = 33

const moreThanAverage = population >= averagePop
// console.log(moreThanAverage)

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`
// console.log(description)

const description2 = country + " is in " + continent + ", and its " + population + " million people speak " + language
// console.log(description2)

// Assignment 1

const mark1 = {weight: 78, height: 1.69}
const john1 = {weight: 92, height: 1.95}

const mark2 = {weight: 95, height: 1.88}
const john2 = {weight: 85, height: 1.76}

function BMIFinder(weight, height) {
    return weight / height ** 2
}

const mark1BMI = BMIFinder(mark1.weight, mark1.height)
const john1BMI = BMIFinder(john1.weight, john1.height)
const mark2BMI = BMIFinder(mark2.weight, mark2.height)
const john2BMI = BMIFinder(john2.weight, john2.height)

// function markHigherBMI(markBMI, johnBMI){
//     return markBMI > johnBMI ? true : false
// }

const higherBMI1 = mark1BMI > john1BMI
const higherBMI2 = mark2BMI > john2BMI

// console.log(higherBMI1)
// console.log(higherBMI2)

// Assignment 2

function WhoIsHigher(mark, john) {
    if (mark > john) {
        return `Marks BMI (${mark}) is higher than Johns (${john})`
    } else {
        return `Johns BMI (${john}) is higher than Marks (${mark})`
    }
}

// console.log(WhoIsHigher(mark1BMI, john1BMI));
// console.log(WhoIsHigher(mark2BMI, john2BMI));