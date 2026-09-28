export const chapter = "Chapter - 3: My Family";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who helps us learn new things in the family?",
        "options": {
          "A": "Father",
          "B": "Cousin",
          "C": "Friend"
        },
        "answer": "A"
      },
      {
        "question": "Who takes children for walks in the park?",
        "options": {
          "A": "Grandfather",
          "B": "Brother",
          "C": "Sister"
        },
        "answer": "A"
      },
      {
        "question": "Who makes tasty food and sweet treats?",
        "options": {
          "A": "Mother",
          "B": "Grandmother",
          "C": "Sister"
        },
        "answer": "B"
      },
      {
        "question": "Who plays games and dances with you?",
        "options": {
          "A": "Father",
          "B": "Sister",
          "C": "Grandfather"
        },
        "answer": "B"
      },
      {
        "question": "Who looks after everyone at home?",
        "options": {
          "A": "Cousin",
          "B": "Brother",
          "C": "Mother"
        },
        "answer": "C"
      },
      {
        "question": "Who is often our playmate at home?",
        "options": {
          "A": "Uncle",
          "B": "Father",
          "C": "Brother"
        },
        "answer": "C"
      },
      {
        "question": "Who tells stories of olden days?",
        "options": {
          "A": "Grandfather",
          "B": "Brother",
          "C": "Cousin"
        },
        "answer": "A"
      },
      {
        "question": "Who comforts children with warm hugs?",
        "options": {
          "A": "Grandmother",
          "B": "Friend",
          "C": "Teacher"
        },
        "answer": "A"
      },
      {
        "question": "Who works hard for the family?",
        "options": {
          "A": "Brother",
          "B": "Father",
          "C": "Cousin"
        },
        "answer": "B"
      },
      {
        "question": "Who sings songs and plays with you?",
        "options": {
          "A": "Father",
          "B": "Sister",
          "C": "Uncle"
        },
        "answer": "B"
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
        "options": {
          "A": "brother",
          "B": "father",
          "C": "cousin"
        },
        "answer": "B"
      },
      {
        "question": "A ______ cooks food and looks after everyone.",
        "options": {
          "A": "sister",
          "B": "mother",
          "C": "aunt"
        },
        "answer": "B"
      },
      {
        "question": "A ______ tells stories of olden days.",
        "options": {
          "A": "father",
          "B": "brother",
          "C": "grandfather"
        },
        "answer": "C"
      },
      {
        "question": "A ______ makes tasty food and sweet treats.",
        "options": {
          "A": "cousin",
          "B": "sister",
          "C": "grandmother"
        },
        "answer": "C"
      },
      {
        "question": "A ______ is often a friend and playmate.",
        "options": {
          "A": "brother",
          "B": "uncle",
          "C": "teacher"
        },
        "answer": "A"
      },
      {
        "question": "A ______ sings and dances with you.",
        "options": {
          "A": "father",
          "B": "sister",
          "C": "grandfather"
        },
        "answer": "B"
      },
      {
        "question": "A ______ teaches children new games.",
        "options": {
          "A": "cousin",
          "B": "grandfather",
          "C": "friend"
        },
        "answer": "B"
      },
      {
        "question": "A ______ comforts us with warm hugs.",
        "options": {
          "A": "grandmother",
          "B": "uncle",
          "C": "brother"
        },
        "answer": "A"
      },
      {
        "question": "A ______ helps us learn new things.",
        "options": {
          "A": "father",
          "B": "cousin",
          "C": "friend"
        },
        "answer": "A"
      },
      {
        "question": "A ______ cares for everyone at home.",
        "options": {
          "A": "cousin",
          "B": "sister",
          "C": "mother"
        },
        "answer": "C"
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
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "A mother cooks food and looks after the family.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Families share unhappy moments together.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "B"
      },
      {
        "question": "A grandfather tells stories of olden days.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "A grandmother makes worst food.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "B"
      },
      {
        "question": "A sister plays games, sings and dances.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "A father helps us learn new things.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Family members hate for each other.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "B"
      },
      {
        "question": "Grandparents give children warm hugs.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      },
      {
        "question": "Family members help each other.",
        "options": {
          "A": "True",
          "B": "False"
        },
        "answer": "A"
      }
    ]
  };
}

export var activityData;
