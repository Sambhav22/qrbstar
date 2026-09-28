export const chapter = "Chapter - 4: Clothes";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Why do we wear clothes?",
        "optionA": "To protect ourselves from sun, wind, rain and cold",
        "optionB": "To carry books",
        "optionC": "To cook food",
        "correctAnswer": "To protect ourselves from sun, wind, rain and cold"
      },
      {
        "question": "Which fibre is soft and fluffy and grows on plants?",
        "optionA": "Wool",
        "optionB": "Cotton",
        "optionC": "Silk",
        "correctAnswer": "Cotton"
      },
      {
        "question": "Which fibre comes from sheep?",
        "optionA": "Wool",
        "optionB": "Cotton",
        "optionC": "Silk",
        "correctAnswer": "Wool"
      },
      {
        "question": "Which fibre is shiny and smooth and made by silkworms?",
        "optionA": "Cotton",
        "optionB": "Wool",
        "optionC": "Silk",
        "correctAnswer": "Silk"
      },
      {
        "question": "Which clothes help us stay cool in summer?",
        "optionA": "Silk clothes",
        "optionB": "Woollen clothes",
        "optionC": "Cotton clothes",
        "correctAnswer": "Cotton clothes"
      },
      {
        "question": "Which clothes keep us warm in winter?",
        "optionA": "Woollen clothes",
        "optionB": "Cotton clothes",
        "optionC": "Silk clothes",
        "correctAnswer": "Woollen clothes"
      },
      {
        "question": "Which machine or tool is used to spin fibres into threads?",
        "optionA": "Stove",
        "optionB": "Spinning wheel or machine",
        "optionC": "Spoon",
        "correctAnswer": "Spinning wheel or machine"
      },
      {
        "question": "Which process joins threads together to make cloth?",
        "optionA": "Dyeing",
        "optionB": "Weaving",
        "optionC": "Printing",
        "correctAnswer": "Weaving"
      },
      {
        "question": "Which step makes cloth colourful?",
        "optionA": "Cutting",
        "optionB": "Spinning",
        "optionC": "Dyeing",
        "correctAnswer": "Dyeing"
      },
      {
        "question": "Which step adds designs like flowers or animals on cloth?",
        "optionA": "Printing",
        "optionB": "Washing",
        "optionC": "Folding",
        "correctAnswer": "Printing"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Cotton clothes keep us ______ in summer.",
        "optionA": "warm",
        "optionB": "cold",
        "optionC": "cool",
        "correctAnswer": "cool"
      },
      {
        "question": "Woollen clothes keep us ______ in winter.",
        "optionA": "cool",
        "optionB": "warm",
        "optionC": "wet",
        "correctAnswer": "warm"
      },
      {
        "question": "Silk clothes are worn on ______ occasions.",
        "optionA": "rainy",
        "optionB": "special",
        "optionC": "normal",
        "correctAnswer": "special"
      },
      {
        "question": "Fibres are twisted into ______ during spinning.",
        "optionA": "sticks",
        "optionB": "leaves",
        "optionC": "threads",
        "correctAnswer": "threads"
      },
      {
        "question": "Threads are woven together to make ______.",
        "optionA": "toys",
        "optionB": "cloth",
        "optionC": "fruits",
        "correctAnswer": "cloth"
      },
      {
        "question": "Weaving is done on a ______.",
        "optionA": "loom",
        "optionB": "table",
        "optionC": "plate",
        "correctAnswer": "loom"
      },
      {
        "question": "Adding colour to cloth is called ______.",
        "optionA": "washing",
        "optionB": "spinning",
        "optionC": "dyeing",
        "correctAnswer": "dyeing"
      },
      {
        "question": "Making designs on cloth is called ______.",
        "optionA": "printing",
        "optionB": "cutting",
        "optionC": "sweeping",
        "correctAnswer": "printing"
      },
      {
        "question": "Cotton grows as white balls on ______ plants.",
        "optionA": "cotton",
        "optionB": "mango",
        "optionC": "banana",
        "correctAnswer": "cotton"
      },
      {
        "question": "Silk is made by ______.",
        "optionA": "sheep",
        "optionB": "silkworms",
        "optionC": "cows",
        "correctAnswer": "silkworms"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Clothes keep us uncomfortable.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Cotton clothes soak up sweat.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Woollen clothes keep us warm in summer.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Silk is made by earthworms.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Spinning changes fibres into threads.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Weaving joins threads together to make cloth.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Dyeing adds colour to fabric.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Printing makes designs on cloth.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Cotton comes from animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We wear different clothes in different seasons.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
