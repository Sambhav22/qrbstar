export const chapter = "Chapter - 10: Animals Around Us";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which animal is the biggest in the world?",
        "options": {
          "A": "Blue whale",
          "B": "Elephant",
          "C": "Horse"
        },
        "answer": "A"
      },
      {
        "question": "Which small insect can carry food bigger than its body?",
        "options": {
          "A": "Bee",
          "B": "Ant",
          "C": "Butterfly"
        },
        "answer": "B"
      },
      {
        "question": "Which animal is big and strong and lives in forests?",
        "options": {
          "A": "Elephant",
          "B": "Goat",
          "C": "Cat"
        },
        "answer": "A"
      },
      {
        "question": "Which animal is small and playful?",
        "options": {
          "A": "Horse",
          "B": "Buffalo",
          "C": "Rabbit"
        },
        "answer": "C"
      },
      {
        "question": "Which animal gives us milk on farms?",
        "options": {
          "A": "Cow",
          "B": "Tiger",
          "C": "Deer"
        },
        "answer": "A"
      },
      {
        "question": "Which bird can fly high in the sky?",
        "options": {
          "A": "Dog",
          "B": "Parrot",
          "C": "Goat"
        },
        "answer": "B"
      },
      {
        "question": "Which animal is kept at home for fun and friendship?",
        "options": {
          "A": "Lion",
          "B": "Dog",
          "C": "Elephant"
        },
        "answer": "B"
      },
      {
        "question": "Which insect makes honey?",
        "options": {
          "A": "Butterfly",
          "B": "Ant",
          "C": "Bee"
        },
        "answer": "C"
      },
      {
        "question": "Which bird builds a nest to lay eggs?",
        "options": {
          "A": "Sparrow",
          "B": "Rabbit",
          "C": "Cat"
        },
        "answer": "A"
      },
      {
        "question": "Which animal lives in the jungle and is very strong?",
        "options": {
          "A": "Goat",
          "B": "Cow",
          "C": "Tiger"
        },
        "answer": "C"
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
        "options": {
          "A": "grey",
          "B": "blue",
          "C": "white"
        },
        "answer": "B"
      },
      {
        "question": "Rabbits and mice are ______ animals.",
        "options": {
          "A": "big",
          "B": "huge",
          "C": "small"
        },
        "answer": "C"
      },
      {
        "question": "Cows and buffaloes give us ______.",
        "options": {
          "A": "eggs",
          "B": "milk",
          "C": "honey"
        },
        "answer": "B"
      },
      {
        "question": "Birds lay ______.",
        "options": {
          "A": "eggs",
          "B": "seeds",
          "C": "milk"
        },
        "answer": "A"
      },
      {
        "question": "Birds build ______ to keep their eggs safe.",
        "options": {
          "A": "nests",
          "B": "houses",
          "C": "caves"
        },
        "answer": "A"
      },
      {
        "question": "Bees and butterflies are ______.",
        "options": {
          "A": "fish",
          "B": "birds",
          "C": "insects"
        },
        "answer": "C"
      },
      {
        "question": "Ants can carry ______ bigger than themselves.",
        "options": {
          "A": "water",
          "B": "food",
          "C": "feathers"
        },
        "answer": "B"
      },
      {
        "question": "Birds have ______ to fly.",
        "options": {
          "A": "wings",
          "B": "horns",
          "C": "paws"
        },
        "answer": "A"
      },
      {
        "question": "Birds have feathers and ______.",
        "options": {
          "A": "tails",
          "B": "horns",
          "C": "beaks"
        },
        "answer": "C"
      },
      {
        "question": "Animals make our world ______.",
        "options": {
          "A": "dull",
          "B": "empty",
          "C": "colourful"
        },
        "answer": "C"
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
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Rabbits are small animals.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Ants are very strong insects.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Birds have wings and feathers.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Bees are insects.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Elephants are small animals.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "B"
      },
      {
        "question": "Birds build nests to keep their eggs.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Dogs are kept as pets at home.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Lions live in forests.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Animals should be treated with love and kindness.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      }
    ]
  };
}

export var activityData;
