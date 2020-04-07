const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = {
  1: "What's your name? Nicknames are also acceptable :) ",
  2: "What's an activity you like doing? ",
  3: "What do you listen to while doing that? ",
  4: "Which meal is your favourite ( eg: dinner, brunch, etc.) ",
  5: "What's your favourite thing to eat for that meal? ",
  6: "Which sport is your absolute favourite? ",
  7: "What is your superpower? In a few words, tell us what you are amazing at! "
};

const answers = {};

const buildProfile = (answers) => {
  const name = answers['1'];
  const listenTo = answers['3'];
  const activity = answers['2'].toLowerCase();
  const favMeal = answers['4'].toLowerCase();
  const favFood = answers['5'];
  const favSport = answers['6'];
  const superPower = answers['7'];

  return `${name} loves listening to ${listenTo} while ${activity}, devouring ${favFood} for ${favMeal}, prefers ${favSport} over any other sport, and is amazing at ${superPower}.`
};

let count = 1;

const askQuestion = () => {
  if (count > Object.keys(questions).length) {
    rl.close()
    console.log(buildProfile(answers));
  } else {
    rl.question(questions[count], (answer) => {
      answers[count] = answer;
      count++;
      askQuestion();
    });
  }
};

askQuestion();

/* @ _ @
rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  answers['q1'] = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    answers['q2'] = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      answers['q3'] = answer;
      rl.question("Which meal is your favourite ( eg: dinner, brunch, etc.) ", (answer) => {
        answers['q4'] = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          answers['q5'] = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            answers['q6'] = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              answers['q7'] = answer;
              rl.close();
              console.log(answers);
            });
          });
        });
      });
    });
  });
});
 */

