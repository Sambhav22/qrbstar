export const chapter = "Chapter - 2: Just Wait For The Sun";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What should you do when everything feels dark and lonely?",
        "optionA": "Cry loudly",
        "optionB": "Run away",
        "optionC": "Wait for the sun",
        "correctAnswer": "Wait for the sun"
      },
      {
        "question": "What does the poet say about the storm?",
        "optionA": "It stays forever",
        "optionB": "It always passes",
        "correctAnswer": "It always passes",
        "optionC": "It becomes stronger"
      },
      {
        "question": "What follows after the rain stops?",
        "optionA": "Darkness",
        "optionB": "Good weather",
        "correctAnswer": "Good weather",
        "optionC": "Silence"
      },
      {
        "question": "Who can warm up your soul like sunshine?",
        "optionA": "People who love you",
        "correctAnswer": "People who love you",
        "optionB": "Strangers",
        "optionC": "Enemies"
      },
      {
        "question": "What does the poet say about your condition when you feel alone?",
        "optionA": "You are always alone",
        "optionB": "You should avoid people",
        "optionC": "You are never alone",
        "correctAnswer": "You are never alone"
      },
      {
        "question": "What do dark clouds do according to the poem?",
        "optionA": "Stay forever",
        "optionB": "Always pass",
        "correctAnswer": "Always pass",
        "optionC": "Bring happiness"
      },
      {
        "question": "What does the poet ask you to wait for?",
        "optionA": "Rain",
        "optionB": "Wind",
        "optionC": "Sun",
        "correctAnswer": "Sun"
      },
      {
        "question": "What feeling is described when you cannot find friends?",
        "optionA": "Loneliness",
        "correctAnswer": "Loneliness",
        "optionB": "Joy",
        "optionC": "Excitement"
      },
      {
        "question": "What does the poet promise at the end?",
        "optionA": "Problems will increase",
        "optionB": "Better times will come",
        "correctAnswer": "Better times will come",
        "optionC": "Life will stop"
      },
      {
        "question": "What kind of days are still to come?",
        "optionA": "Bright and warm",
        "correctAnswer": "Bright and warm",
        "optionB": "Dark and cold",
        "optionC": "Sad and lonely"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "When everything’s darkness, you feel so ______",
        "optionA": "happy",
        "optionB": "alone",
        "correctAnswer": "alone",
        "optionC": "excited"
      },
      {
        "question": "When it feels all is ______",
        "optionA": "lost",
        "correctAnswer": "lost",
        "optionB": "clear",
        "optionC": "easy"
      },
      {
        "question": "You just want to ______ when things go wrong",
        "optionA": "run",
        "correctAnswer": "run",
        "optionB": "dance",
        "optionC": "sleep"
      },
      {
        "question": "Sometimes you want to ______ but cannot find the sound",
        "optionA": "laugh",
        "optionB": "scream",
        "correctAnswer": "scream",
        "optionC": "sing"
      },
      {
        "question": "You feel like you’re ______",
        "optionA": "winning",
        "optionB": "growing",
        "optionC": "done",
        "correctAnswer": "done"
      },
      {
        "question": "The storm always ______",
        "optionA": "stays",
        "optionB": "passes",
        "correctAnswer": "passes",
        "optionC": "grows"
      },
      {
        "question": "The rain gives way to ______ weather",
        "optionA": "bad",
        "optionB": "cloudy",
        "optionC": "good",
        "correctAnswer": "good"
      },
      {
        "question": "The sunshine will ______",
        "optionA": "disappear",
        "optionB": "come",
        "correctAnswer": "come",
        "optionC": "stop"
      },
      {
        "question": "People who love you can ______ your soul",
        "optionA": "warm up",
        "correctAnswer": "warm up",
        "optionB": "hurt",
        "optionC": "ignore"
      },
      {
        "question": "Dark clouds always ______",
        "optionA": "remain",
        "optionB": "pass",
        "correctAnswer": "pass",
        "optionC": "fall"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The poem says that rain can last forever.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The poet says you are never alone.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The storm always passes.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "People who love you can support you emotionally.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poem gives a message of hope.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Dark clouds stay forever.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The sunshine will come after difficult times.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poem encourages giving up.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The future days are described as bright and warm.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poet says you should lose hope in hard times.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
