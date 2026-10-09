export const chapter = "Chapter - 14: April Fool";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who helped the jackal in planning the trick?",
        "optionA": "Monkey",
        "optionB": "Elephant",
        "optionC": "Turtle",
        "correctAnswer": "Turtle"
      },
      {
        "question": "What announcement was made in the jungle?",
        "optionA": "A hunting contest",
        "optionB": "A race",
        "optionC": "A music and dance competition",
        "correctAnswer": "A music and dance competition"
      },
      {
        "question": "How long did the animals get to practise?",
        "optionA": "One week",
        "optionB": "Two weeks",
        "correctAnswer": "Two weeks",
        "optionC": "One month"
      },
      {
        "question": "Where was the stage built?",
        "optionA": "Near the river",
        "optionB": "Near the lion’s den",
        "correctAnswer": "Near the lion’s den",
        "optionC": "Near the trees"
      },
      {
        "question": "What was placed on the stage for performers?",
        "optionA": "Mikes",
        "correctAnswer": "Mikes",
        "optionB": "Beds",
        "optionC": "Food"
      },
      {
        "question": "Who went inside the stage to check what was happening?",
        "optionA": "Tiger and fox",
        "optionB": "Deer and rabbit",
        "optionC": "Donkey and monkey",
        "correctAnswer": "Donkey and monkey"
      },
      {
        "question": "What did the animals see inside the stage?",
        "optionA": "April Fool sign",
        "correctAnswer": "April Fool sign",
        "optionB": "Gifts",
        "optionC": "Food"
      },
      {
        "question": "How did the animals feel after seeing the sign?",
        "optionA": "Happy",
        "optionB": "Shocked and disappointed",
        "correctAnswer": "Shocked and disappointed",
        "optionC": "Excited"
      },
      {
        "question": "Who came on the stage and spoke to the animals?",
        "optionA": "Elephant",
        "correctAnswer": "Elephant",
        "optionB": "Lion",
        "optionC": "Bear"
      },
      {
        "question": "What did the animals do in the end?",
        "optionA": "Went home",
        "optionB": "Held the contest anyway",
        "correctAnswer": "Held the contest anyway",
        "optionC": "Started fighting"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The jackal had a ______ in his mind.",
        "optionA": "game",
        "optionB": "trick",
        "correctAnswer": "trick",
        "optionC": "song"
      },
      {
        "question": "The announcement was made to the beat of a ______.",
        "optionA": "bell",
        "optionB": "drum",
        "correctAnswer": "drum",
        "optionC": "whistle"
      },
      {
        "question": "The animals practised with great ______.",
        "optionA": "enthusiasm",
        "correctAnswer": "enthusiasm",
        "optionB": "fear",
        "optionC": "anger"
      },
      {
        "question": "The forest air was filled with waves of ______.",
        "optionA": "silence",
        "optionB": "music",
        "correctAnswer": "music",
        "optionC": "dust"
      },
      {
        "question": "The stage was covered with colourful ______.",
        "optionA": "walls",
        "optionB": "leaves",
        "optionC": "curtains",
        "correctAnswer": "curtains"
      },
      {
        "question": "The audience had ______ to sit on.",
        "optionA": "mats",
        "optionB": "chairs",
        "correctAnswer": "chairs",
        "optionC": "stones"
      },
      {
        "question": "The participants waited for the curtain to ______.",
        "optionA": "rise",
        "correctAnswer": "rise",
        "optionB": "fall",
        "optionC": "move"
      },
      {
        "question": "The stage had several ______ for performers.",
        "optionA": "mikes",
        "correctAnswer": "mikes",
        "optionB": "boxes",
        "optionC": "boards"
      },
      {
        "question": "The billboard showed ______.",
        "optionA": "Welcome",
        "optionB": "April Fool",
        "correctAnswer": "April Fool",
        "optionC": "Prize"
      },
      {
        "question": "The elephant suggested holding the ______ anyway.",
        "optionA": "meeting",
        "optionB": "game",
        "optionC": "contest",
        "correctAnswer": "contest"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The jackal wanted to trick all the animals.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The animals ignored the announcement.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The animals practised day and night.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The stage was built far from the lion’s den.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Managers were present at the event.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The donkey and monkey checked the stage.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The billboard said “Welcome”.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The animals felt happy after seeing the sign.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The elephant encouraged the animals to perform.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The animals refused to continue the event.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
