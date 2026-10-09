export const chapter = "Chapter - 4: Birds";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which part of the bird helps it to balance in the air?",
        "optionA": "Beak",
        "optionB": "Tail",
        "correctAnswer": "Tail",
        "optionC": "Feet"
      },
      {
        "question": "What helps birds to flap their wings?",
        "optionA": "Sharp claws",
        "optionB": "Big eyes",
        "optionC": "Strong chest muscles",
        "correctAnswer": "Strong chest muscles"
      },
      {
        "question": "Which bird is known for running fast?",
        "optionA": "Parrot",
        "optionB": "Ostrich",
        "correctAnswer": "Ostrich",
        "optionC": "Penguin"
      },
      {
        "question": "Where do birds build their nests?",
        "optionA": "On stones",
        "optionB": "On water",
        "optionC": "On trees",
        "correctAnswer": "On trees"
      },
      {
        "question": "Birds that eat grains have:",
        "optionA": "Long legs",
        "optionB": "Soft claws",
        "optionC": "Strong beaks",
        "correctAnswer": "Strong beaks"
      },
      {
        "question": "Why do birds fly high in the sky?",
        "optionA": "To take rest",
        "optionB": "To escape danger",
        "correctAnswer": "To escape danger",
        "optionC": "To catch rain"
      },
      {
        "question": "A bird’s bones are:",
        "optionA": "Heavy",
        "optionB": "Soft",
        "optionC": "Light",
        "correctAnswer": "Light"
      },
      {
        "question": "What do birds use their feet for?",
        "optionA": "To eat food",
        "optionB": "To fly",
        "optionC": "To swim or walk",
        "correctAnswer": "To swim or walk"
      },
      {
        "question": "Which bird has a sharp and hooked beak?",
        "optionA": "Peacock",
        "optionB": "Eagle",
        "correctAnswer": "Eagle",
        "optionC": "Penguin"
      },
      {
        "question": "Birds fly long distances when:",
        "optionA": "They are sleepy",
        "optionB": "Seasons change",
        "correctAnswer": "Seasons change",
        "optionC": "It rains"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "______ are birds but they cannot fly.",
        "optionA": "Parrots",
        "optionB": "Penguins",
        "correctAnswer": "Penguins",
        "optionC": "Eagles"
      },
      {
        "question": "Birds that eat nectar have ______ beaks.",
        "optionA": "Thick",
        "optionB": "Short",
        "optionC": "Long and thin",
        "correctAnswer": "Long and thin"
      },
      {
        "question": "A ______ is a bird’s home.",
        "optionA": "Cage",
        "optionB": "Tree",
        "optionC": "Nest",
        "correctAnswer": "Nest"
      },
      {
        "question": "Birds flap their ______ to fly.",
        "optionA": "Feet",
        "optionB": "Wings",
        "correctAnswer": "Wings",
        "optionC": "Beaks"
      },
      {
        "question": "The ______ of a bird helps in changing its direction while flying.",
        "optionA": "Beak",
        "optionB": "Tail",
        "correctAnswer": "Tail",
        "optionC": "Eyes"
      },
      {
        "question": "Birds use their ______ to hold onto branches.",
        "optionA": "Feathers",
        "optionB": "Wings",
        "optionC": "Feet",
        "correctAnswer": "Feet"
      },
      {
        "question": "Each bird builds a different kind of ______.",
        "optionA": "Song",
        "optionB": "Nest",
        "correctAnswer": "Nest",
        "optionC": "Tree"
      },
      {
        "question": "Birds with colourful feathers include the ______.",
        "optionA": "Penguin",
        "optionB": "Peacock",
        "correctAnswer": "Peacock",
        "optionC": "Sparrow"
      },
      {
        "question": "Birds have ______ bones which make flying easier.",
        "optionA": "Strong",
        "optionB": "Heavy",
        "optionC": "Light",
        "correctAnswer": "Light"
      },
      {
        "question": "Birds with small wings or heavy bodies are ______ birds.",
        "optionA": "Flying",
        "optionB": "Water",
        "optionC": "Flightless",
        "correctAnswer": "Flightless"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "All birds fly in the sky.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Sparrows are large birds.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Birds use their tails while flying.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Beaks of birds are the same for all types of food.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Some birds climb instead of flying.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Eagles can swim but not fly.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Birds cannot be found in gardens.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Emus are flightless birds.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "All birds sing sweet songs.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Birds eat food using their beaks.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
