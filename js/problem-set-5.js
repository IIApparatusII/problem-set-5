/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 1 CODE HERE
/*height = prompt("Please Enter an Integer Height Between 1 and 23.");
  while (height < 1 || height > 23 || height % 1 != 0) {
    height = prompt("Please Enter a VALID Integer Height Between 1 and 23.");
  }
height = parseInt(height);

let i = 1;
  let add = `#`;
  let spaces = height - 2;
  let lines = "<code>";
  while (i <= height){
    let blank = ``;
    for(let b = 0; b <=spaces; b++){
      blank += "&nbsp;";
    }

    spaces--;
    add+=`#`;
    lines = lines + blank + add +"</br>";
    i++;
  }
  lines = lines + "</code>"
  console.log(lines);
  document.getElementById("mario-easy-output").innerHTML = lines;


/*var div=document.getElementById("mario-easy-output");
div.innerHTML=(`${lines}`);*/
/*  for(let i=1; i != height; i++){
    space = space + "&nbsp"
    lines = base + add + "</br>";
    base = space + base;
  } */


  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 2 CODE HERE
  /*height = prompt("Please Enter an Integer Height Between 1 and 23.");
    while (height < 1 || height > 23 || height % 1 != 0) {
      height = prompt("Please Enter a VALID Integer Height Between 1 and 23.");
    }
  height = parseInt(height);

  let i = 1;
    let add = `#`;
    let spaces = height - 2;
    let bigSpace = "&nbsp" + "&nbsp";
    let lines = "<code>";
    while (i <= height){
      let blank = ``;
      for(let b = 0; b <=spaces; b++){
        blank += "&nbsp;";
      }

      spaces--;
      add+=`#`;
      lines = lines + blank + add + bigSpace + add + "</br>";
      i++;
    }
    lines = lines + "</code>"
    console.log(lines);
    document.getElementById("mario-hard-output").innerHTML = lines;
  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 3 CODE HERE
 /*card = prompt('Please enter your card number.');
  while (cardlength == 16 || card.length == 15 || card.length == 13) && card % 1 != 0){
    card = prompt('Please enter a VALID card number.');
  }*/
  /*card = prompt("Please enter your Credit Card number.");
  var p=document.getElementById("credit-output");
  let sum = 0;
  for (let a = 0; a < card.length; a = a + 1) {
    if (a%2 == card.length%2) {
      if (card[a] >= 5) {
        sum += Number(card[a]) * 2 - 9;
      } else {
        sum += Number(card[a]) * 2;
      }
    } else {
      sum += Number(card[a]);
    }
  }
  sum% = 10;
  if (sum != 0) {
    p.innerHTML='<img src="images/invalid.png"/>';
  } else if(card.length == 15 && card[0] == 3 && (card[1] == 4 || card[1] == 7)) {
    p.innerHTML='<img src="images/amex.png"/>';
  } else if(card.length == 16 && card[0] == 5 && 0 < card[1] < 6) {
    p.innerHTML='<img src="images/mastercard.png"/>';
  } else if((card.length == 13 || card.length == 16) && card[0] == 4) {
    p.innerHTML='<img src="images/visa.png"/>';
  } else {
    p.innerHTML='<img src="images/invalid.png"/>';
  }
  card = Number(card);*/
  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  // WRITE YOUR EXERCISE 4 CODE HERE
  let randomNumber = Math.floor(Math.random() * 1001) + 1;
  let numberGuesses = 0;
  let guess
  while (guess != randomNumber){
    guess = prompt('Guess the random integer from 1 - 1000.');
    while (guess < 1 || guess > 1000 || guess % 1 != 0) {
      guess = prompt('Guess the random INTEGER from 1 - 1000.');
    }
    if (guess < randomNumber){
      alert('Your guess was too low!');
    }
    if (guess > randomNumber){
      alert('Your gues was too high!');
    }
    numberGuesses = numberGuesses + 1;
  }

  var div=document.getElementById('guess-output');
  div.innerHTML=(`You Guessed The Correct Number, ${randomNumber}!</br>It took you ${numberGuesses} attmepts.`);
  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY
  windspeed=prompt(`Please enter a nonnegative integer windspeed (mph)`);
    while (windspeed < 0 || windspeed % 1 != 0){
      windspeed=prompt(`Please enter a nonnegative integer windspeed (mph)`);
    }
    windspeed = parseInt(windspeed);
  let mph = windspeed;
    if (mph >= 157){
      mph = `Category 5 Hurricane.`;
    }
    if (mph >= 130 && mph <= 156){
      mph = `Category 4 Hurricane.`;
    }
    if (mph >= 111 && mph <= 129){
      mph = `Category 3 Hurricane.`;
    }
    if (mph >= 96 && mph <= 110){
      mph = `Category 2 Hurricane.`;
    }
    if (mph >= 74 && mph <= 95){
      mph = `Category 1 Hurricane.`;
    }
    if (mph >= 39 && mph <= 94){
      mph = `Tropical Storm.`;
    }
    if (mph <= 38){
      mph = `The skies are calm...`;
    }
  var div=document.getElementById('hurricane-output');
  div.innerHTML=(`${mph}`);
  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY

}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY
let score1;
score1 = prompt('Please enter a score between 0.0 and 10.0.');
  while(score1 < 0 || score1 > 10){
    score1 = prompt('Please enter a score between 0.0 and 10.0.');
  }
  score1 = parseInt(score1);
let score2;
score2 = prompt('Please enter a second score between 0.0 and 10.0.');
  while(score2 < 0 || score2 > 10){
    score2 = prompt('Please enter a second score between 0.0 and 10.0.');
  }
    score2 = parseInt(score2);
let score3;
score3 = prompt('Please enter a third score between 0.0 and 10.0.');
  while(score3 < 0 || score3 > 10){
    score3 = prompt('Please enter a third score between 0.0 and 10.0.');
  }
    score3 = parseInt(score3);
let score4;
score4 = prompt('Please enter a fourth score between 0.0 and 10.0.');
  while(score4 < 0 || score4 > 10){
    score4 = prompt('Please enter a fourth score between 0.0 and 10.0.');
  }
    score4 = parseInt(score4);
let score5;
score5 = prompt('Please enter a fifth score between 0.0 and 10.0.');
  while(score5 < 0 || score5 > 10){
    score5 = prompt('Please enter a fifth score between 0.0 and 10.0.');
  }
    score5 = parseInt(score5);
let score6;
score6 = prompt('Please enter a sixth score between 0.0 and 10.0.');
  while(score6 < 0 || score6 > 10){
    score6 = prompt('Please enter a sixth score between 0.0 and 10.0.');
  }
    score6 = parseInt(score6);
scores.push(score1);
scores.push(score2);
scores.push(score3);
scores.push(score4);
scores.push(score5);
scores.push(score6);

let average
let min = Math.min(score1, score2, score3, score4, score5, score6);
let max = Math.max(score1, score2, score3, score4, score5, score6);
average = score1 + score2 + score3 + score4 + score5 + score6;
average = (average - min - max) / 4;
average = average.toFixed(2);
var div=document.getElementById('gymnastics-output');
div.innerHTML=(`Discarded: ${min}, ${max}</br>Score: ${average}`);
  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */
let addTest;
tests = -1;
for(testTotal = 1; addTest != -1; testTotal = testTotal + addTest){
  addTest = prompt(`Input a number TEST grade from 0.0 to 100.0. When completed type "-1".`);
    for(addTest = addTest; addTest < 0 && addTest != -1 || addTest > 100; addTest = addTest){
      addTest = prompt(`PLEASE input a VALID number TEST grade from 0 to 100. When completed type "-1".`);
    }
  addTest = parseInt(addTest);
  tests = tests + 1;
}
let testAverage = testTotal / tests;
testAverage = testAverage.toFixed(2);

let addQuiz;
quizzes = -1;
for(quizTotal = 1; addQuiz != -1; quizTotal = quizTotal + addQuiz){
  addQuiz = prompt(`Input a number QUIZ grade from 0.0 to 100.0. When completed type "-1".`);
    for(addQuiz = addQuiz; addQuiz < 0 && addQuiz != -1 || addQuiz > 100; addQuiz = addQuiz){
      addQuiz = prompt(`PLEASE input a VALID number QUIZ grade from 0 to 100. When completed type "-1".`);
    }
  addQuiz = parseInt(addQuiz);
  quizzes = quizzes + 1;
}
let quizAverage = quizTotal / quizzes;
quizAverage = quizAverage.toFixed(2);

let addHW;
homeworks = -1;
for(homeworkTotal = 1; addHW != -1; homeworkTotal = homeworkTotal + addHW){
  addHW = prompt(`Input a number HOMEWORK grade from 0.0 to 100.0. When completed type "-1".`);
    for(addHW = addHW; addHW < 0 && addHW != -1 || addHW > 100; addHW = addHW){
      addHW = prompt(`PLEASE input a VALID number HOMEWORK grade from 0 to 100. When completed type "-1".`);
    }
  addHW = parseInt(addHW);
  homeworks = homeworks + 1;
}
let homeworkAverage = homeworkTotal / homeworks;
homeworkAverage = homeworkAverage.toFixed(2);

let grade = (testAverage * 0.6) + (quizAverage * 0.3) + (homeworkAverage * 0.1);
grade = grade.toFixed(2);

var div=document.getElementById('report-card-output');
div.innerHTML=(`Tests: ${testAverage}</br>Quizzes: ${quizAverage}</br>Homework: ${homeworkAverage}</br>Grade: ${grade}`);
  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
