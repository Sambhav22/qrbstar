export const chapter = "Chapter - 7: The Burglar Alarm";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Why did the author wake up at night?",
        "optionA": "Because of noise",
        "optionB": "Because of smoke",
        "correctAnswer": "Because of smoke",
        "optionC": "Because of light"
      },
      {
        "question": "What did the burglar carry in his basket?",
        "optionA": "Tinware",
        "correctAnswer": "Tinware",
        "optionB": "Jewellery",
        "optionC": "Money"
      },
      {
        "question": "Where did the burglar enter the house from?",
        "optionA": "Main door",
        "optionB": "Roof",
        "optionC": "Second-story window",
        "correctAnswer": "Second-story window"
      },
      {
        "question": "What did the burglar say when he saw the author?",
        "optionA": "He threatened him",
        "optionB": "He apologized",
        "correctAnswer": "He apologized",
        "optionC": "He ran away"
      },
      {
        "question": "What mistake did the burglar make in the dark?",
        "optionA": "Took gold",
        "optionB": "Took copper",
        "optionC": "Mistook tinware for silver",
        "correctAnswer": "Mistook tinware for silver"
      },
      {
        "question": "What was placed above the author’s bed?",
        "optionA": "Gong",
        "correctAnswer": "Gong",
        "optionB": "Alarm switch",
        "optionC": "Clock"
      },
      {
        "question": "What did the author use when he went upstairs?",
        "optionA": "Torch",
        "optionB": "Candle",
        "correctAnswer": "Candle",
        "optionC": "Lamp"
      },
      {
        "question": "Why did the burglars choose the author’s house?",
        "optionA": "To hide from police",
        "correctAnswer": "To hide from police",
        "optionB": "To steal money",
        "optionC": "To rest"
      },
      {
        "question": "What did the expert keep doing again and again?",
        "optionA": "Repairing the alarm and charging money",
        "correctAnswer": "Repairing the alarm and charging money",
        "optionB": "Replacing furniture",
        "optionC": "Calling police"
      },
      {
        "question": "What did the author finally replace the alarm with?",
        "optionA": "Guard",
        "optionB": "CCTV",
        "optionC": "Dog",
        "correctAnswer": "Dog"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The author lit a ______ when he went to check the house.",
        "optionA": "lamp",
        "optionB": "candle",
        "correctAnswer": "candle",
        "optionC": "torch"
      },
      {
        "question": "The burglar entered in a ______ manner.",
        "optionA": "open",
        "optionB": "loud",
        "optionC": "furtive",
        "correctAnswer": "furtive"
      },
      {
        "question": "The burglar felt ______ when caught.",
        "optionA": "proud",
        "optionB": "ashamed",
        "correctAnswer": "ashamed",
        "optionC": "happy"
      },
      {
        "question": "The alarm system had many ______ showing rooms.",
        "optionA": "wires",
        "optionB": "tags",
        "correctAnswer": "tags",
        "optionC": "bells"
      },
      {
        "question": "The gong made a very ______ sound.",
        "optionA": "harsh",
        "correctAnswer": "harsh",
        "optionB": "soft",
        "optionC": "silent"
      },
      {
        "question": "The burglars stayed in the house to hide from the ______.",
        "optionA": "neighbours",
        "optionB": "police",
        "correctAnswer": "police",
        "optionC": "servants"
      },
      {
        "question": "The author showed a ______ attitude by not hitting the burglar.",
        "optionA": "calm",
        "correctAnswer": "calm",
        "optionB": "violent",
        "optionC": "careless"
      },
      {
        "question": "The expert charged ______ dollars many times.",
        "optionA": "hundred",
        "optionB": "three hundred",
        "correctAnswer": "three hundred",
        "optionC": "fifty"
      },
      {
        "question": "The alarm gave many ______ alarms.",
        "optionA": "correct",
        "optionB": "useful",
        "optionC": "false",
        "correctAnswer": "false"
      },
      {
        "question": "The house was found completely ______ after burglary.",
        "optionA": "empty",
        "correctAnswer": "empty",
        "optionB": "full",
        "optionC": "broken"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The burglar rang the alarm before entering the house.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The author spoke politely to the burglar.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The alarm system worked perfectly from the beginning.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The cook caused the alarm to ring every morning.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The burglars avoided the author’s house.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The expert always solved the problem permanently.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The author and coachman accidentally fired at each other.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The alarm gave many false signals.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The burglars finally stole the alarm system itself.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The author was satisfied with the burglar alarm.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
