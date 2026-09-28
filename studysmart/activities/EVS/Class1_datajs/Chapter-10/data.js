export const chapter = "Chapter - 10: Animals Around Us";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which animal is the biggest in the world?",
        "optionA": "Blue whale",
        "optionB": "Elephant",
        "optionC": "Horse",
        "correctAnswer": "Blue whale"
      },
      {
        "question": "Which small insect can carry food bigger than its body?",
        "optionA": "Bee",
        "optionB": "Ant",
        "optionC": "Butterfly",
        "correctAnswer": "Ant"
      },
      {
        "question": "Which animal is big and strong and lives in forests?",
        "optionA": "Elephant",
        "optionB": "Goat",
        "optionC": "Cat",
        "correctAnswer": "Elephant"
      },
      {
        "question": "Which animal is small and playful?",
        "optionA": "Horse",
        "optionB": "Buffalo",
        "optionC": "Rabbit",
        "correctAnswer": "Rabbit"
      },
      {
        "question": "Which animal gives us milk on farms?",
        "optionA": "Cow",
        "optionB": "Tiger",
        "optionC": "Deer",
        "correctAnswer": "Cow"
      },
      {
        "question": "Which bird can fly high in the sky?",
        "optionA": "Dog",
        "optionB": "Parrot",
        "optionC": "Goat",
        "correctAnswer": "Parrot"
      },
      {
        "question": "Which animal is kept at home for fun and friendship?",
        "optionA": "Lion",
        "optionB": "Dog",
        "optionC": "Elephant",
        "correctAnswer": "Dog"
      },
      {
        "question": "Which insect makes honey?",
        "optionA": "Butterfly",
        "optionB": "Ant",
        "optionC": "Bee",
        "correctAnswer": "Bee"
      },
      {
        "question": "Which bird builds a nest to lay eggs?",
        "optionA": "Sparrow",
        "optionB": "Rabbit",
        "optionC": "Cat",
        "correctAnswer": "Sparrow"
      },
      {
        "question": "Which animal lives in the jungle and is very strong?",
        "optionA": "Goat",
        "optionB": "Cow",
        "optionC": "Tiger",
        "correctAnswer": "Tiger"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The ______ whale is the biggest animal in the world.",
        "optionA": "grey",
        "optionB": "blue",
        "optionC": "white",
        "correctAnswer": "blue"
      },
      {
        "question": "Rabbits and mice are ______ animals.",
        "optionA": "big",
        "optionB": "huge",
        "optionC": "small",
        "correctAnswer": "small"
      },
      {
        "question": "Cows and buffaloes give us ______.",
        "optionA": "eggs",
        "optionB": "milk",
        "optionC": "honey",
        "correctAnswer": "milk"
      },
      {
        "question": "Birds lay ______.",
        "optionA": "eggs",
        "optionB": "seeds",
        "optionC": "milk",
        "correctAnswer": "eggs"
      },
      {
        "question": "Birds build ______ to keep their eggs safe.",
        "optionA": "nests",
        "optionB": "houses",
        "optionC": "caves",
        "correctAnswer": "nests"
      },
      {
        "question": "Bees and butterflies are ______.",
        "optionA": "fish",
        "optionB": "birds",
        "optionC": "insects",
        "correctAnswer": "insects"
      },
      {
        "question": "Ants can carry ______ bigger than themselves.",
        "optionA": "water",
        "optionB": "food",
        "optionC": "feathers",
        "correctAnswer": "food"
      },
      {
        "question": "Birds have ______ to fly.",
        "optionA": "wings",
        "optionB": "horns",
        "optionC": "paws",
        "correctAnswer": "wings"
      },
      {
        "question": "Birds have feathers and ______.",
        "optionA": "tails",
        "optionB": "horns",
        "optionC": "beaks",
        "correctAnswer": "beaks"
      },
      {
        "question": "Animals make our world ______.",
        "optionA": "dull",
        "optionB": "empty",
        "optionC": "colourful",
        "correctAnswer": "colourful"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The blue whale is the biggest animal in the world.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Rabbits are small animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Ants are very strong insects.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Birds have wings and feathers.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Bees are insects.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Elephants are small animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Birds build nests to keep their eggs.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Dogs are kept as pets at home.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Lions live in forests.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Animals should be treated with love and kindness.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
