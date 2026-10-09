export const chapter = "Chapter - 6: The Sound Collector";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who came to the house in the morning?",
        "optionA": "A teacher",
        "optionB": "A stranger",
        "correctAnswer": "A stranger",
        "optionC": "A friend"
      },
      {
        "question": "What did the stranger use to collect the sounds?",
        "optionA": "A box",
        "optionB": "A bag",
        "correctAnswer": "A bag",
        "optionC": "A basket"
      },
      {
        "question": "What sound does the kettle make?",
        "optionA": "Whistling",
        "correctAnswer": "Whistling",
        "optionB": "Hissing",
        "optionC": "Drumming"
      },
      {
        "question": "What sound is made by the clock?",
        "optionA": "Buzzing",
        "optionB": "Ticking",
        "correctAnswer": "Ticking",
        "optionC": "Ringing"
      },
      {
        "question": "What sound is made when flakes are eaten?",
        "optionA": "Popping",
        "optionB": "Crunching",
        "correctAnswer": "Crunching",
        "optionC": "Drumming"
      },
      {
        "question": "What sound is made by the frying pan?",
        "optionA": "Hissing",
        "correctAnswer": "Hissing",
        "optionB": "Barking",
        "optionC": "Ticking"
      },
      {
        "question": "What sound is made by the drain?",
        "optionA": "Clicking",
        "optionB": "Ringing",
        "optionC": "Gurgling",
        "correctAnswer": "Gurgling"
      },
      {
        "question": "What sound is made by the curtain?",
        "optionA": "Swishing",
        "correctAnswer": "Swishing",
        "optionB": "Popping",
        "optionC": "Barking"
      },
      {
        "question": "What did the stranger leave behind?",
        "optionA": "Noise",
        "optionB": "Music",
        "optionC": "Silence",
        "correctAnswer": "Silence"
      },
      {
        "question": "How did life feel after the sounds disappeared?",
        "optionA": "Exciting",
        "optionB": "Different and silent",
        "correctAnswer": "Different and silent",
        "optionC": "Noisy"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The stranger came in the ______.",
        "optionA": "night",
        "optionB": "evening",
        "optionC": "morning",
        "correctAnswer": "morning"
      },
      {
        "question": "The stranger was dressed in ______ and grey clothes.",
        "optionA": "blue",
        "optionB": "black",
        "correctAnswer": "black",
        "optionC": "white"
      },
      {
        "question": "The kitten was ______ softly.",
        "optionA": "barking",
        "optionB": "purring",
        "correctAnswer": "purring",
        "optionC": "shouting"
      },
      {
        "question": "The toaster made a ______ sound.",
        "optionA": "popping",
        "correctAnswer": "popping",
        "optionB": "ticking",
        "optionC": "ringing"
      },
      {
        "question": "The rain was ______ on the windowpane.",
        "optionA": "drumming",
        "correctAnswer": "drumming",
        "optionB": "tapping",
        "optionC": "knocking"
      },
      {
        "question": "The chair was ______ when someone sat on it.",
        "optionA": "ringing",
        "optionB": "squeaking",
        "correctAnswer": "squeaking",
        "optionC": "popping"
      },
      {
        "question": "The stairs were ______ as someone walked.",
        "optionA": "jumping",
        "optionB": "ticking",
        "optionC": "creaking",
        "correctAnswer": "creaking"
      },
      {
        "question": "The curtain was ______ in the air.",
        "optionA": "flying",
        "optionB": "running",
        "optionC": "swishing",
        "correctAnswer": "swishing"
      },
      {
        "question": "The bathtub was ______ as it filled.",
        "optionA": "boiling",
        "optionB": "bubbling",
        "correctAnswer": "bubbling",
        "optionC": "cracking"
      },
      {
        "question": "The stranger left only ______ behind.",
        "optionA": "silence",
        "correctAnswer": "silence",
        "optionB": "sound",
        "optionC": "noise"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The stranger collected different sounds from the house.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poem describes loud music everywhere.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The kitten made a purring sound.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The toaster made a ticking sound.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The rain made a drumming sound on the windowpane.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The baby in the poem was crying.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The curtain made a swishing sound.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The stranger told his name before leaving.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "After the stranger left, everything became silent.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poem shows that sounds are not important.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
