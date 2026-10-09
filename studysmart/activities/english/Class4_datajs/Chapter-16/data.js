export const chapter = "Chapter - 16: Caterpillar";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who wrote the poem “Caterpillar”?",
        "optionA": "Wordsworth",
        "optionB": "Christina Rossetti",
        "correctAnswer": "Christina Rossetti",
        "optionC": "Tagore"
      },
      {
        "question": "What kind of body does the caterpillar have?",
        "optionA": "Smooth",
        "optionB": "Hairy",
        "correctAnswer": "Hairy",
        "optionC": "Hard"
      },
      {
        "question": "What does the caterpillar eat?",
        "optionA": "Leaves",
        "correctAnswer": "Leaves",
        "optionB": "Fruits",
        "optionC": "Seeds"
      },
      {
        "question": "Where does the caterpillar go in the poem?",
        "optionA": "Sunny place",
        "optionB": "Shady leaf or stalk",
        "correctAnswer": "Shady leaf or stalk",
        "optionC": "Dark cave"
      },
      {
        "question": "What danger is mentioned for the caterpillar?",
        "optionA": "Dog",
        "optionB": "Cat",
        "optionC": "Toad",
        "correctAnswer": "Toad"
      },
      {
        "question": "What do birds of prey do in the poem?",
        "optionA": "Run",
        "optionB": "Hover",
        "correctAnswer": "Hover",
        "optionC": "Jump"
      },
      {
        "question": "What does the caterpillar become later?",
        "optionA": "Bee",
        "optionB": "Ant",
        "optionC": "Butterfly",
        "correctAnswer": "Butterfly"
      },
      {
        "question": "What kind of wings does a butterfly have?",
        "optionA": "Colourful",
        "correctAnswer": "Colourful",
        "optionB": "Black",
        "optionC": "Small"
      },
      {
        "question": "A butterfly is a type of ______.",
        "optionA": "Bird",
        "optionB": "Insect",
        "correctAnswer": "Insect",
        "optionC": "Animal"
      },
      {
        "question": "How are insects described in the chapter?",
        "optionA": "Boring",
        "optionB": "Useless",
        "optionC": "Interesting",
        "correctAnswer": "Interesting"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The caterpillar is brown and ______.",
        "optionA": "smooth",
        "optionB": "furry",
        "correctAnswer": "furry",
        "optionC": "shiny"
      },
      {
        "question": "The caterpillar is in a ______.",
        "optionA": "sleep",
        "optionB": "hurry",
        "correctAnswer": "hurry",
        "optionC": "game"
      },
      {
        "question": "Take your ______ walk.",
        "optionA": "slow",
        "optionB": "long",
        "optionC": "your",
        "correctAnswer": "your"
      },
      {
        "question": "It goes to the ______ leaf.",
        "optionA": "green",
        "optionB": "dry",
        "optionC": "shady",
        "correctAnswer": "shady"
      },
      {
        "question": "Which may be the ______ spot.",
        "optionA": "chosen",
        "correctAnswer": "chosen",
        "optionB": "big",
        "optionC": "small"
      },
      {
        "question": "No ______ spy you.",
        "optionA": "dog",
        "optionB": "toad",
        "correctAnswer": "toad",
        "optionC": "cat"
      },
      {
        "question": "______ bird of prey pass by you.",
        "optionA": "Flying",
        "optionB": "Sitting",
        "optionC": "Hovering",
        "correctAnswer": "Hovering"
      },
      {
        "question": "Spin and ______.",
        "optionA": "jump",
        "optionB": "die",
        "correctAnswer": "die",
        "optionC": "run"
      },
      {
        "question": "To live again a ______.",
        "optionA": "butterfly",
        "correctAnswer": "butterfly",
        "optionB": "bird",
        "optionC": "insect"
      },
      {
        "question": "A caterpillar eats plant ______.",
        "optionA": "leaves",
        "correctAnswer": "leaves",
        "optionB": "fruits",
        "optionC": "flowers"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "A caterpillar has a hairy body.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A caterpillar eats meat.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "A butterfly is an insect.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The caterpillar moves in a hurry.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A toad is a bird.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Hover means to hang in the air.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A caterpillar later becomes a butterfly.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Butterflies have colourful wings.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Insects are boring to watch.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "A caterpillar has no legs.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
