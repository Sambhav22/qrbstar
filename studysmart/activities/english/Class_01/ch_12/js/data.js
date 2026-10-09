export const chapter = "Chapter - 12: The Sour Grapes";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What was the fox looking for?",
        "optionA": "Water",
        "optionB": "Food",
        "correctAnswer": "Food",
        "optionC": "Shelter"
      },
      {
        "question": "What did the fox see on the wall?",
        "optionA": "Apples",
        "optionB": "Grapes",
        "correctAnswer": "Grapes",
        "optionC": "Mangoes"
      },
      {
        "question": "What colour were the grapes?",
        "optionA": "Yellow",
        "optionB": "Green",
        "optionC": "Purple",
        "correctAnswer": "Purple"
      },
      {
        "question": "What did the fox think about the grapes at first?",
        "optionA": "Hard to get",
        "optionB": "Easy to get",
        "correctAnswer": "Easy to get",
        "optionC": "Not tasty"
      },
      {
        "question": "What did the fox do to get the grapes?",
        "optionA": "Jumped",
        "correctAnswer": "Jumped",
        "optionB": "Climbed",
        "optionC": "Ran"
      },
      {
        "question": "What happened when the fox jumped?",
        "optionA": "He fell",
        "optionB": "He could not reach the grapes",
        "correctAnswer": "He could not reach the grapes",
        "optionC": "He got the grapes"
      },
      {
        "question": "How many times did the fox try?",
        "optionA": "One time",
        "optionB": "No time",
        "optionC": "Many times",
        "correctAnswer": "Many times"
      },
      {
        "question": "What did the fox do after many tries?",
        "optionA": "Slept",
        "optionB": "Called someone",
        "optionC": "Gave up",
        "correctAnswer": "Gave up"
      },
      {
        "question": "What did the fox say at last?",
        "optionA": "Grapes are sweet",
        "optionB": "Grapes are sour",
        "correctAnswer": "Grapes are sour",
        "optionC": "Grapes are small"
      },
      {
        "question": "Where did the fox go finally?",
        "optionA": "Away",
        "correctAnswer": "Away",
        "optionB": "Home",
        "optionC": "Garden"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The fox was ______.",
        "optionA": "hungry",
        "correctAnswer": "hungry",
        "optionB": "tired",
        "optionC": "happy"
      },
      {
        "question": "The fox went here and there to look for ______.",
        "optionA": "toys",
        "optionB": "food",
        "correctAnswer": "food",
        "optionC": "water"
      },
      {
        "question": "The grapes were ______ and juicy.",
        "optionA": "purple",
        "correctAnswer": "purple",
        "optionB": "dry",
        "optionC": "small"
      },
      {
        "question": "The grapes were on a farmer’s ______.",
        "optionA": "tree",
        "optionB": "roof",
        "optionC": "wall",
        "correctAnswer": "wall"
      },
      {
        "question": "The fox jumped ______ to get the grapes.",
        "optionA": "down",
        "optionB": "up",
        "correctAnswer": "up",
        "optionC": "slowly"
      },
      {
        "question": "He jumped ______ but still could not get the grapes.",
        "optionA": "higher",
        "correctAnswer": "higher",
        "optionB": "lower",
        "optionC": "slowly"
      },
      {
        "question": "He tried ______ times.",
        "optionA": "many",
        "correctAnswer": "many",
        "optionB": "few",
        "optionC": "one"
      },
      {
        "question": "At last, the fox ______ up.",
        "optionA": "stood",
        "optionB": "picked",
        "optionC": "gave",
        "correctAnswer": "gave"
      },
      {
        "question": "The fox went ______ after trying.",
        "optionA": "inside",
        "optionB": "back",
        "optionC": "away",
        "correctAnswer": "away"
      },
      {
        "question": "The grapes must have been ______.",
        "optionA": "sweet",
        "optionB": "sour",
        "correctAnswer": "sour",
        "optionC": "bitter"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The fox was hungry.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The fox saw grapes on a wall.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The grapes were dry.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The fox thought it was easy to get the grapes.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The fox reached the grapes easily.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The fox jumped many times.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The fox got the grapes at last.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The fox gave up and went away.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The fox said the grapes were sour.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The fox found food in the end.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
