const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let variable = "";
rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  // TODO: Log the answer in a database
  // console.log(`Thank you for your valuable feedback: ${answer}`),
  variable += "  " + answer;
  rl.question(`What do you listen to while doing that?  `, (answer) => {
    // TODO: Log the answer in a database
    variable += " loves listening to " + answer;
    // console.log(`Thank you for your valuable feedback: ${variable}`)
    rl.question("What's an activity you like doing?", (answer) => {
      // TODO: Log the answer in a database
      variable += " while " + answer;
      // console.log(`Thank you for your valuable feedback: ${variable}`)

      rl.question(
        "What's your favourite thing to eat for that meal? ",
        (answer) => {
          // TODO: Log the answer in a database
          variable += ", devouring " + answer;
          // console.log(`Thank you for your valuable feedback: ${variable}`)
          rl.question(
            "Which meal is your favourite (eg: dinner, brunch, etc.) ",
            (answer) => {
              // TODO: Log the answer in a database
              variable += " for " + answer;
              // console.log(`Thank you for your valuable feedback: ${variable}`)

              rl.question(
                "Which sport is your absolute favourite? ",
                (answer) => {
                  // TODO: Log the answer in a database
                  variable += ", prefers " + answer;
                  // console.log(`Thank you for your valuable feedback: ${variable}`)
                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at! ",
                    (answer) => {
                      // TODO: Log the answer in a database
                      variable +=
                        " over any other sport, and is amazing at " + answer;
                      console.log(
                        `Thank you for your valuable feedback: ${variable}`
                      );
                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
