export const chapter = "Chapter - 16: The Little Magic";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What did Manu hit the squirrel with?",
        "optionA": "Stick",
        "optionB": "Stone",
        "correctAnswer": "Stone",
        "optionC": "Ball"
      },
      {
        "question": "Where was the dog sleeping?",
        "optionA": "Kerb",
        "correctAnswer": "Kerb",
        "optionB": "Garden",
        "optionC": "Room"
      },
      {
        "question": "What did Manu do to the boy running to the market?",
        "optionA": "Helped him",
        "optionB": "Tripped him",
        "correctAnswer": "Tripped him",
        "optionC": "Called him"
      },
      {
        "question": "What did Malti show Manu?",
        "optionA": "A game",
        "optionB": "A story",
        "optionC": "A magic",
        "correctAnswer": "A magic"
      },
      {
        "question": "What did Malti use to dig the ground?",
        "optionA": "Spoon",
        "optionB": "Knife",
        "optionC": "Hoe",
        "correctAnswer": "Hoe"
      },
      {
        "question": "What did Manu bring to water the seeds?",
        "optionA": "Bucket",
        "optionB": "Mug",
        "correctAnswer": "Mug",
        "optionC": "Glass"
      },
      {
        "question": "What grew from the seeds after a few days?",
        "optionA": "Small plants",
        "correctAnswer": "Small plants",
        "optionB": "Trees",
        "optionC": "Fruits"
      },
      {
        "question": "Who destroyed the plants?",
        "optionA": "Monkeys",
        "correctAnswer": "Monkeys",
        "optionB": "Dogs",
        "optionC": "Birds"
      },
      {
        "question": "What did Manu do when he saw the destroyed plants?",
        "optionA": "Laughed",
        "optionB": "Sobbed",
        "correctAnswer": "Sobbed",
        "optionC": "Slept"
      },
      {
        "question": "What did Manu become at the end of the story?",
        "optionA": "Naughty boy",
        "optionB": "Angry boy",
        "optionC": "Good boy",
        "correctAnswer": "Good boy"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Manu went out after ______ on Sunday.",
        "optionA": "breakfast",
        "correctAnswer": "breakfast",
        "optionB": "lunch",
        "optionC": "dinner"
      },
      {
        "question": "The squirrel hid in the ______.",
        "optionA": "water",
        "optionB": "leaves",
        "correctAnswer": "leaves",
        "optionC": "house"
      },
      {
        "question": "The dog ran away ______ in pain.",
        "optionA": "laughing",
        "optionB": "jumping",
        "optionC": "bellowing",
        "correctAnswer": "bellowing"
      },
      {
        "question": "Malti asked Manu to ______ seeds in the holes.",
        "optionA": "throw",
        "optionB": "scatter",
        "correctAnswer": "scatter",
        "optionC": "hide"
      },
      {
        "question": "Manu ______ water on the seeds.",
        "optionA": "sprinkled",
        "correctAnswer": "sprinkled",
        "optionB": "drank",
        "optionC": "wasted"
      },
      {
        "question": "In a few days, ______ plants grew.",
        "optionA": "small",
        "correctAnswer": "small",
        "optionB": "big",
        "optionC": "dry"
      },
      {
        "question": "Manu took ______ of the plants.",
        "optionA": "rest",
        "optionB": "care",
        "correctAnswer": "care",
        "optionC": "leave"
      },
      {
        "question": "Manu saw the plants were ______.",
        "optionA": "safe",
        "optionB": "growing",
        "optionC": "destroyed",
        "correctAnswer": "destroyed"
      },
      {
        "question": "The flowerpots were ______.",
        "optionA": "cleaned",
        "optionB": "broken",
        "correctAnswer": "broken",
        "optionC": "painted"
      },
      {
        "question": "Manu promised not to ______ others again.",
        "optionA": "help",
        "optionB": "teach",
        "optionC": "trouble",
        "correctAnswer": "trouble"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Manu was a naughty boy.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Manu helped the squirrel kindly.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Manu kicked a sleeping dog.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Manu’s mother had an idea to teach him.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Manu planted seeds in the courtyard.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Manu did not care for the plants.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The plants grew after a few days.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The monkeys destroyed the plants.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Manu felt happy when plants were destroyed.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Manu learned to be kind to others.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
