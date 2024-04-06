// Here is the information you have been given:
// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:const PI = 3.1415;const area = PI * radius * radius;
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.
// Using this information, your objectives are to:
// Predict the plant growth after a specific number of weeks.
// Implement control flow to make decisions on whether the plants 
//should be:  Pruned, to stop them from exceeding the capacity of 
//the garden.
// This condition should be met if the plant count after 
//the given number of weeks is greater than 80% of the maximum 
//capacity of the garden.
// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
// Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.

let numOfPlants = 20;
let week1 = numOfPlants;
let week2 = week1 * 2;
let week3 = week2 * 3;


const radius = 5;
const pi = 3.1415
const minSpace = (0.8 * 0.8);
const area = pi * radius * radius;
{console.log("The total area for the plants is "+area);

let week1SpaceOccupied = (numOfPlants * minSpace);
let week2SpaceOccupied = (week2 * minSpace);
let week3SpaceOccupied = (week3 * minSpace);
console.log("Week 1 space occupied with 20 plants ="+week1SpaceOccupied);
console.log("Week 2 number of plants = " +week2);
console.log("Week 2 space occupied with 40 plants " +week2SpaceOccupied);
console.log("Week 3 number of plants = "+week3);
console.log("Week 3 space occupied with 120 plants ")


}

