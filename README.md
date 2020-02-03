# Callbacks, Promises and Instructors food preferences

In this lab, we will get first get ourselves into of callback hell and then out again. And live to tell the story twice.

## The lab

### The task

In the repository, there is a `data` folder that contains some data about some instructors at School Of Applied Technology. It might or might not be made-up data...

Sadly, Marcus created this database and he is a very old school database designer so he created a file for each piece of information.

We want you to write a function that takes the id of an instructor and then return a list of the nearby restaurants for that instructor's postal code, but only the type of restaurant that the instructor likes.

### The data

The data are stored in the following text-files:

* `instructors.txt` - the id and name of the instructor
* `addresses.txt` - the address and postal code for each instructor id
* `favoriteRestaurantType.txt` - the favorite type of restaurant for each instructor id
* `postalAdressForPostalCode.txt` - the postal address for the postal code
* `restaurantsInArea.txt` - a list of restaurants and their type in a certain postal address

The files are comma-separated (CSV) with a single header row. There are npm packages to read them, but for this exercise we want you to use Nodes built-in `fs` and the `readFile`-method.

### The help

We have created a little `labUtils.js`-file with a few useful helper functions.

* `fileDataToArray(data)` - turns the `data` from `fs.readFile` into an array of the rows, where each row is an array of values
* `printRestoList` - prints a recommendation of restaurants to an instructor, close to where he lives.

Print the result using the `labUtils.printRestoList` function. This function takes the following parameters:

* `instructorName` - the name of the instructor
* `typeOfRestaurant` - the type of restaurant that the instructor likes
* `postalAddress` - the address where the restaurants are, and the instructor also lives
* `restos` - an array of restaurants that the instructor would love to go to, because they are close and to his taste

## Exercise 1 - drag me to callback ...

> Solve the problem in the lab using callbacks.

In the olden days ... we had to use callbacks to solve this problem, and so will you.

The `index-cb.js`-file contains some starter code for you to get your winding road down to the deepest dungeons started...

You can test run it with `npm run callbacks`, with an optional other `{instructorId}` like this `npm run callbacks 2` to display Adams favorite restaurants

## Exercise 2 - Promise you will get me out of here

> Solve the problem using your own promises

Now we are going to make this mess beautiful, by writing our promises to make a nice `then`-able chain of calls.

This means that we will need to make our own promise-version out of the `fs.readFile()` function that you have come to know and love.

Writing your own promises from a callback is not hard, and I have even written a [blog post that tells](https://appliedtechnology.github.io/protips/makingPromises) you how to do that.

## Exercise 3 - You do the work, promisify

> Solve the problem using util.promisify

Even though it is not hard to solve this by writing your own promises, it is still cumbersome to do so. Hence there's a built-in function to create a promise, called `util.promisify()`.

Solve the problem again, but this time using `util.promisify()`

There's another file `index-promisify.js` to get you started, that you can run with `npm run promisify`

## Exercise 4 - Async, ... (a)wait for it, ...hronously with await

> Now it's time to use `async/await` to solve the problem.

*NB* This task should not be started until you have gone through async/await

You can reuse the code from the `promisfy`-version of the solution as a starting point.

Notice and discuss:

* What is better in the code?
* What is worse?
* Any performance benefits? Which? Why?
* How is it to read the different versions?

## Exercise 5 - test it

If you get to this point and still have time over, try to write tests for each of the versions.

Expose a function from your modules and then write one test of the happy path and one for the failing case (a file that doesn't exist for example).

Notice and discuss:

* Which is easier to test?
* Why?
