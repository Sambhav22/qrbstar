export const chapter = "Chapter - 2: Journey of a River";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Where do some rivers begin?",
        "optionA": "Springs",
        "optionB": "Buildings",
        "optionC": "Roads",
        "correctAnswer": "Springs"
      },
      {
        "question": "What helps a river become wider and stronger?",
        "optionA": "Dams",
        "optionB": "Forests",
        "optionC": "Tributaries",
        "correctAnswer": "Tributaries"
      },
      {
        "question": "Which type of river flows only during rainy months?",
        "optionA": "Perennial",
        "optionB": "Seasonal",
        "optionC": "Sacred",
        "correctAnswer": "Seasonal"
      },
      {
        "question": "Why do many people live near rivers?",
        "optionA": "For water needs",
        "optionB": "For games",
        "optionC": "For roads",
        "correctAnswer": "For water needs"
      },
      {
        "question": "What do rivers help to carry using boats?",
        "optionA": "Fire",
        "optionB": "Goods",
        "optionC": "Air",
        "correctAnswer": "Goods"
      },
      {
        "question": "Why are some rivers considered sacred?",
        "optionA": "They are big",
        "optionB": "People pray and celebrate festivals near them",
        "optionC": "They are deep",
        "correctAnswer": "People pray and celebrate festivals near them"
      },
      {
        "question": "What is formed behind a dam?",
        "optionA": "Desert",
        "optionB": "Forest",
        "optionC": "Reservoir",
        "correctAnswer": "Reservoir"
      },
      {
        "question": "What can dirty river water cause?",
        "optionA": "Health problems",
        "optionB": "Strong animals",
        "optionC": "More trees",
        "correctAnswer": "Health problems"
      },
      {
        "question": "What happens when too much rain falls?",
        "optionA": "Drought",
        "optionB": "Flood",
        "optionC": "Pollution",
        "correctAnswer": "Flood"
      },
      {
        "question": "Why should rivers be protected?",
        "optionA": "To waste water",
        "optionB": "To build roads",
        "optionC": "To support life",
        "correctAnswer": "To support life"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Rivers begin with a small ______ of water.",
        "optionA": "rock",
        "optionB": "flow",
        "optionC": "plant",
        "correctAnswer": "flow"
      },
      {
        "question": "A river flows through hills and ______.",
        "optionA": "roads",
        "optionB": "forests",
        "optionC": "deserts",
        "correctAnswer": "forests"
      },
      {
        "question": "People use river water for cooking, drinking and ______.",
        "optionA": "flying",
        "optionB": "running",
        "optionC": "cleaning",
        "correctAnswer": "cleaning"
      },
      {
        "question": "Farmers use river water for ______.",
        "optionA": "irrigation",
        "optionB": "sleeping",
        "optionC": "jumping",
        "correctAnswer": "irrigation"
      },
      {
        "question": "A dam helps to ______ water.",
        "optionA": "store",
        "optionB": "waste",
        "optionC": "burn",
        "correctAnswer": "store"
      },
      {
        "question": "Pollution happens when people throw ______ into rivers.",
        "optionA": "flowers",
        "optionB": "air",
        "optionC": "rubbish",
        "correctAnswer": "rubbish"
      },
      {
        "question": "Too many chemicals can cause ______ to grow quickly.",
        "optionA": "algae",
        "optionB": "trees",
        "optionC": "rocks",
        "correctAnswer": "algae"
      },
      {
        "question": "During a flood, water ______ homes and fields.",
        "optionA": "floods",
        "optionB": "dries",
        "optionC": "cools",
        "correctAnswer": "floods"
      },
      {
        "question": "During drought, there is ______ rain.",
        "optionA": "heavy",
        "optionB": "very little",
        "optionC": "plenty",
        "correctAnswer": "very little"
      },
      {
        "question": "We should use ______ products to keep rivers clean.",
        "optionA": "harmful",
        "optionB": "eco-friendly",
        "optionC": "dirty",
        "correctAnswer": "eco-friendly"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Rivers can begin as small streams.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Tributaries make rivers weaker.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Rivers help farmers grow crops.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Dams can store water for later use.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Throwing waste into rivers is safe.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Pollution can harm plants and animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Floods happen when rivers overflow.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Drought means too much water.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Rivers are not important for people.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Clean rivers help support life.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
