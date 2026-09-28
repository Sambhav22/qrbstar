export const chapter = "Chapter - 3: My Family";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who helps us learn new things in the family?",
        "optionA": "Father",
        "optionB": "Cousin",
        "optionC": "Friend",
        "correctAnswer": "Father"
      },
      {
        "question": "Who takes children for walks in the park?",
        "optionA": "Grandfather",
        "optionB": "Brother",
        "optionC": "Sister",
        "correctAnswer": "Grandfather"
      },
      {
        "question": "Who makes tasty food and sweet treats?",
        "optionA": "Mother",
        "optionB": "Grandmother",
        "optionC": "Sister",
        "correctAnswer": "Grandmother"
      },
      {
        "question": "Who plays games and dances with you?",
        "optionA": "Father",
        "optionB": "Sister",
        "optionC": "Grandfather",
        "correctAnswer": "Sister"
      },
      {
        "question": "Who looks after everyone at home?",
        "optionA": "Cousin",
        "optionB": "Brother",
        "optionC": "Mother",
        "correctAnswer": "Mother"
      },
      {
        "question": "Who is often our playmate at home?",
        "optionA": "Uncle",
        "optionB": "Father",
        "optionC": "Brother",
        "correctAnswer": "Brother"
      },
      {
        "question": "Who tells stories of olden days?",
        "optionA": "Grandfather",
        "optionB": "Brother",
        "optionC": "Cousin",
        "correctAnswer": "Grandfather"
      },
      {
        "question": "Who comforts children with warm hugs?",
        "optionA": "Grandmother",
        "optionB": "Friend",
        "optionC": "Teacher",
        "correctAnswer": "Grandmother"
      },
      {
        "question": "Who works hard for the family?",
        "optionA": "Brother",
        "optionB": "Father",
        "optionC": "Cousin",
        "correctAnswer": "Father"
      },
      {
        "question": "Who sings songs and plays with you?",
        "optionA": "Father",
        "optionB": "Sister",
        "optionC": "Uncle",
        "correctAnswer": "Sister"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "A ______ works hard for the family.",
        "optionA": "brother",
        "optionB": "father",
        "optionC": "cousin",
        "correctAnswer": "father"
      },
      {
        "question": "A ______ cooks food and looks after everyone.",
        "optionA": "sister",
        "optionB": "mother",
        "optionC": "aunt",
        "correctAnswer": "mother"
      },
      {
        "question": "A ______ tells stories of olden days.",
        "optionA": "father",
        "optionB": "brother",
        "optionC": "grandfather",
        "correctAnswer": "grandfather"
      },
      {
        "question": "A ______ makes tasty food and sweet treats.",
        "optionA": "cousin",
        "optionB": "sister",
        "optionC": "grandmother",
        "correctAnswer": "grandmother"
      },
      {
        "question": "A ______ is often a friend and playmate.",
        "optionA": "brother",
        "optionB": "uncle",
        "optionC": "teacher",
        "correctAnswer": "brother"
      },
      {
        "question": "A ______ sings and dances with you.",
        "optionA": "father",
        "optionB": "sister",
        "optionC": "grandfather",
        "correctAnswer": "sister"
      },
      {
        "question": "A ______ teaches children new games.",
        "optionA": "cousin",
        "optionB": "grandfather",
        "optionC": "friend",
        "correctAnswer": "grandfather"
      },
      {
        "question": "A ______ comforts us with warm hugs.",
        "optionA": "grandmother",
        "optionB": "uncle",
        "optionC": "brother",
        "correctAnswer": "grandmother"
      },
      {
        "question": "A ______ helps us learn new things.",
        "optionA": "father",
        "optionB": "cousin",
        "optionC": "friend",
        "correctAnswer": "father"
      },
      {
        "question": "A ______ cares for everyone at home.",
        "optionA": "cousin",
        "optionB": "sister",
        "optionC": "mother",
        "correctAnswer": "mother"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "A brother is often a friend and playmate.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "A mother cooks food and looks after the family.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Families share unhappy moments together.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "A grandfather tells stories of olden days.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "A grandmother makes worst food.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "A sister plays games, sings and dances.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "A father helps us learn new things.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Family members hate for each other.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Grandparents give children warm hugs.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Family members help each other.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
