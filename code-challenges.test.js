// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

//const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
//const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
describe('arrayContaining', () => {
    const expected = ["blue", "green", "yellow", "pink"];
    it('matches even if received contains less elements in a different order', () => {
        expect(["purple", "blue", "green", "yellow", "pink"]).toEqual(expect.arrayContaining(expected));
    });
    it('does not match if received has "purple" in the array', () => {
        expect(["purple"]).not.toEqual(expect.arrayContaining(expected))
    });
});

//Output: ● arrayContaining › matches even if recieved contains less elements in a different order; expect(received).toEqual(expected) // deep equality
describe('arrayContaining', () => {
    const expected2 = ["indigo", "periwinkle", "ochre", "aquamarine", "saffron"];
    it('matches even if received contains less elements in a different order', () => {
        expect(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]).toEqual(expect.arrayContaining(expected2))
    });
    it('does not match if received has "chartreuse" in the array', () => {
        expect(["chartreuse"]).not.toEqual(expect.arrayContaining(expected2))
    });
});

// b) Create the function that makes the test pass.
//PsuedoCode
//A function using the .shift() method, which would remove the value at the zeroth index ("purple" and "chartreuse") followed up by .sort() to put the values in the array in a random. The syllabus states that there are advanced sorting methods. After doing some research, I found using a randomIndex variable utilizing Math.floor(Math.random() * the current array) after .shift() might possibly work. Since I defined a result in the test, I hope "shuffling" the remain array values will still make the test pass. We've worked with randomizing numbers/ values in the past in class so using Math.floor(Math.random()) in some capacity  will probably be needed. 
//Parameters:
    //Input: //const colors1 = ["purple", "blue", "green", "yellow", "pink"], //const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
//Output: Expected output = ["pink", "blue", "yellow", "green"]; Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

//I tried using the .shift() method but quickly realized that the original array would be affected so I was only getting "purple" as an output. Even when I .sort() the original array, I came back with "blue" as the output. So researching shuffling methods, random methods, I came across the Fisher Yates Method. I tested out the example function that W3 has. The issue I am having is trying to figure out how to get rid of the [0] color. I used .slice(0,1) in the console.log portion in hopes of getting back every color but purple together but I got back every color but purple, seperately. After using the .shift() again but declaring a new variable, newArr = colors1.shift() and put it above the Fisher Yates method, I was able to get purple to not be part of the output. 
    //I had to go back and rework my test once I knew my function worked. I didn't comprehend what the example provided was stating. But after refactoring the values in the arrays, the test passed!

const colors1 = ["purple", "blue", "green", "yellow", "pink"];
    newArr = colors1.shift()
    
    for (let i = colors1.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * i)
      let k = colors1[i]
      colors1[i] = colors1[j]
      colors1[j] = k
    }
    console.log(colors1)

const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"];
    newArr = colors2.shift()

for (let i = colors2.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * i)
  let k = colors2[i]
  colors2[i] = colors2[j]
  colors2[j] = k
}
console.log(colors2)

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

//const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
//const nums2 = [109, 5, 9, 67, 8, 24]
//Expected output: [5, 109]
describe('leastToGreatest', () => {
    const expectedNums = [-8, 90];
    it('takes an array of numbers and returns an array of the minimum and maximum numbers in that order', () => {
        expect([3, 56, 90, -8, 0, 23, 6]).toEqual(expect.leastToGreatest(expectedNums))
    });
    it('does not match if received has other values besides [-8, 90]', () => {
        expect([3, 56, 0, 23, 6]).not.toEqual(expect.leastToGreatest(expectedNums))
    });
});

// TypeError: expect.leastToGreatest is not a function

// b) Create the function that makes the test pass.

//PseudoCode:
//using the .sort() method to put the array from least to greatest value then .filter() to return those values in a seperate array. Or after sorting the values from least to greatest, have the function return the zero index and the last value possibly using .pop() and .shift()???

//Parameters: Input:const nums1 = [3, 56, 90, -8, 0, 23, 6], Expected output: [-8, 90]
//const nums2 = [109, 5, 9, 67, 8, 24], Expected output: [5, 109]

// function leastToGreatest(array) {
//             return nums1.sort(function(a, b){return a-b}).pop()
//         }  
//         console.log(leastToGreatest(nums1)) //90
//     function leastToGreatest(array) {
//             return nums1.sort(function(a, b){return a-b}).shift()
//         }
            
//         console.log(leastToGreatest(nums1)) // -8
//I could not figure out how to get these two results in the same function. I did try to make different variables and join the results that way but did not get very far. I was able to get the .sort() method down but it's just calling on the first and last values. I tried manipulating the return portion but was not sure if I had to include a for loop to access those indexes. Brining all the pieces together and writing it correctly is still a struggle for me. 

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// const testArray1 = [3, 7, 10, 5, 4, 3, 3]
// const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe('twoToOneArr', () => {
    const mergedArray = [3, 7, 10, 5, 4, 8, 2, 1];
    it('takes in two arrays as arguments and returns one array with no duplicate values', () => {
        expect([3, 7, 10, 5, 4, 3, 3], [7, 8, 2, 3, 1, 5, 4]).toEqual(expect.arrayContaining(mergedArray));
    }) 
    it('does not match if received has duplicate values in the array', () => {
        expect([3, 3, 3, 3, 7, 7, 5, 5]).not.toEqual(expect.arrayContaining(mergedArray))
    });
});
//Output: Expect takes at most one argument.

// b) Create the function that makes the test pass.
//PsuedoCode:
//The arrays need to be put into one array using the spread operator. Even thought there will be duplicate values, it's easier to consolidate both arrays into one at the start. The next step would be to filter through the single merged array and have values that don't repeat be returned in the new array. 
    //I wanted to use the spread operator because of 1. Trish's trick to remember it and 2. it seemed like it would be a better starting point and just simplify the function. I did have to research further on how to access values and have non-duplicate values being returned.  
//After figuring out where to put .filter() I looked to the resources to remind me of the .indexOf() method. 
//Parameters: const testArray1 = [3, 7, 10, 5, 4, 3, 3],const testArray2 = [7, 8, 2, 3, 1, 5, 4]
//Output: [3, 7, 10, 5, 4, 8, 2, 1]

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
const mergedTestArrs = [...testArray1, ...testArray2]
//console.log(mergedTestArrs)   
const noDups = mergedTestArrs.filter((value, index) => {
    return mergedTestArrs.indexOf(value) === index;
});
console.log(noDups)

//My function ended up working but it is my test that needs to be refactored. The tests were harder to write than the functions for this week's assessments. 😩 Also, for some reason, my tests would be running multiple times in the console.
