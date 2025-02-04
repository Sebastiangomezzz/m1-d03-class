---
rerequisite: ["JS Functions"]
---

# JS Function and Arrays Drills - Problem Solving

## Palindrome

Write a function `checkPalindrome` that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with **capital letters**.

```javascript
console.log(checkPalindrome("Radar"));
```

> => true

```javascript
console.log(checkPalindrome("Borscht"));
```

> => false

**Commit your work!**
Your commit message should read something like:
"palindrome completed"

## Sum Array

Write a function `sumArray` that takes an **array** as an argument.
The array should contain numbers. The function should return the sum of the numbers in the array.
Use a _for loop_ within the function to iterate over the array and sum the contents.
Use a variable such as

```javascript
let sum = 0;
```

that will **accumulate** value within the loop.
Expected result:

```javascript
console.log(sumArray([1, 2, 3, 4, 5, 6]));
=> 21
```

**Commit your work!**
Your commit message should read something like:
"sum array completed"

## Prime Numbers

A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, [go here](https://en.wikipedia.org/wiki/Prime_number).
To test whether a number is Prime, you only need to test as far as the **square root** of that number. This is advisable for optimization and testing large numbers.

### Step One

Write a function called `checkPrime` that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.

_Hint:_ Check every number up to the square root. To do this, try a _for loop_.

### Step Two

Write another function called `printPrimes` that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with `printPrimes(97)`, it will print all the Prime numbers up to and including 97.

This function can **call on** the previous `checkPrime` function.

</details>

**Commit your work!**
Your commit message should read something like: <br>
"prime numbers completed"

## BONUS: Rock Paper Scissors

Create the rock paper scissors game for the console! [Rock paper scissors](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors) is a game of chance where two players throw out one of the three options, rock, paper, or scissors. To determine who wins, use the following guidelines: rock beats scissors, scissors beats paper, paper beats rock.

1. Write a function called `randomMove` that returns a randomly chosen move (rock, paper, or scissors).
1. Then create a function called `rockPaperScissors` that runs one round of the game. It should accept two arguments, the computer's move and the user's move, and somehow compare the two to decide who the winner is and return who won.

```
let computersMove = randomMove();
=> rock

let usersMove = randomMove();
=> paper

rockPaperScissors(computersMove, usersMove);
=> computer chose rock
=> user chose paper
=> paper beats rock, user wins!
```

### Super bonuses for rock paper scissors

Want to upgrade your mini rock paper scissors game? Consider the following!

1. Try to make [rock, paper, scissors, lizard, spock](http://bigbangtheory.wikia.com/wiki/Rock_Paper_Scissors_Lizard_Spock)
1. Instead of hardcoding the user input, let the user actually enter a choice in node by using [process.argv](https://nodejs.org/docs/latest/api/process.html#process_process_argv)

&#x1F534; **Commit your work!**
Your commit message should read something like:
"rock paper scissors completed"

---

## Hungry for More?

<details><summary><strong>Digit Sum</strong></summary>

Write a function `sumDigits` that accepts a number and returns the sum of its digits.

```
console.log(sumDigits(42));
```

> => 6

**Commit your work!**
Your commit message should read something like: <br>
"hfm digit sum completed"

</details>

<details><summary><strong>Pythagoras</strong></summary>

Write a function `calculateSide` that takes two arguments: `sideA` and `sideB`, and returns the solution for sideC using the Pythagorean theorem.

_hint:_ discover the Pythagorean Theorem on a website called google.com  
_hint:_ checkout the [Math methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) in javascript

```
console.log(calculateSide(8, 6));
=> 10
```

&#x1F534; **Commit your work!**
Your commit message should read something like:
"hfm pythagoras completed"

</details>

<details><summary><strong>Triangles</strong></summary>

Write a loop that console logs a **right isosceles triangle** made of '#' that has the height and length of the argument.

> Ex: argument is 7

```
#
##
###
####
#####
######
#######
```

Write a loop that console logs an **upside down right isosceles triangle** made of '#' that has the height and length of the argument.

> Ex: argument is 6

```
######
#####
####
###
##
#
```

**Commit your work!**
Your commit message should read something like: <br>
"hfm triangles completed"

</details>

<details><summary><strong>"Second" Numbers</strong></summary>

Write a function `secondNumbers` that takes an **array** as an argument and returns the second highest and second lowest numbers. Make it so that it works even if the array is out of order.

```
console.log(secondNumbers([4,2,6,9,5]));
=> second highest: 6
=> second lowest: 4
```

**Commit your work!**
Your commit message should read something like:
"hfm second numbers completed"

</details>

<details><summary><strong>Unique String</strong></summary>

Write a function `uniqueString` that takes a string as an argument and returns the string with any duplicate letters taken out. Meaning, only the first instance of a letter should remain in the string, thus returning a full string of unique characters (e.g. icecream => iceram). Make it work for just a single string with no spaces or punctuation.

```
console.log(uniqueString("helloworld));
=> helowrd
```

**Commit your work!**
Your commit message should read something like:
"hfm unique string completed"

</details>

<details><summary><strong>Insert Dash</strong></summary>

Write a function `insertDash` that accepts a number as a parameter and returns a string with a dash inserted between any consecutive **odd numbers**. There should not be a dash at the end, it goes only between numbers.

```javascript
console.log(insertDash(454793));
```

> => 4547-9-3

**Commit your work!**
Your commit message should read something like: <br>
"hfm insert dash completed"

</details>
