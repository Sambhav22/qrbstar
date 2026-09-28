export const chapter = "Chapter - 1: My Family";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who guide and protect the children in a family?",
        "optionA": "Cousins",
        "optionB": "Parents",
        "optionC": "Friends",
        "correctAnswer": "Parents"
      },
      {
        "question": "Who often share stories and wisdom with children in a family?",
        "optionA": "Teachers",
        "optionB": "Grandparents",
        "optionC": "Neighbours",
        "correctAnswer": "Grandparents"
      },
      {
        "question": "Which relative is the sister of our father or mother?",
        "optionA": "Aunt",
        "optionB": "Cousin",
        "optionC": "Sister",
        "correctAnswer": "Aunt"
      },
      {
        "question": "What activity helps family members feel more connected?",
        "optionA": "Sleeping alone",
        "optionB": "Laughing together",
        "optionC": "Ignoring each other",
        "correctAnswer": "Laughing together"
      },
      {
        "question": "What type of family includes grandparents, parents, uncles, aunts, and cousins living together?",
        "optionA": "Joint family",
        "optionB": "Nuclear family",
        "optionC": "Small family",
        "correctAnswer": "Joint family"
      },
      {
        "question": "Which feature may be passed from parents to children?",
        "optionA": "Curly hair",
        "optionB": "Shoes",
        "optionC": "School bag",
        "correctAnswer": "Curly hair"
      },
      {
        "question": "Who are the children of our uncles and aunts?",
        "optionA": "Friends",
        "optionB": "Brothers",
        "optionC": "Cousins",
        "correctAnswer": "Cousins"
      },
      {
        "question": "Which family member is a boy child of the parents?",
        "optionA": "Uncle",
        "optionB": "Cousin",
        "optionC": "Brother",
        "correctAnswer": "Brother"
      },
      {
        "question": "What do families celebrate together during special occasions?",
        "optionA": "Festivals and birthdays",
        "optionB": "Homework",
        "optionC": "School tests",
        "correctAnswer": "Festivals and birthdays"
      },
      {
        "question": "What makes family life happy and loving?",
        "optionA": "Fighting",
        "optionB": "Caring and sharing",
        "optionC": "Ignoring each other",
        "correctAnswer": "Caring and sharing"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Parents ______ and protect their children.",
        "optionA": "guide",
        "optionB": "ignore",
        "optionC": "scold",
        "correctAnswer": "guide"
      },
      {
        "question": "Grandparents often tell ______ to children.",
        "optionA": "jokes only",
        "optionB": "stories",
        "optionC": "homework",
        "correctAnswer": "stories"
      },
      {
        "question": "Twins are two children born at the ______ time.",
        "optionA": "later",
        "optionB": "different",
        "optionC": "same",
        "correctAnswer": "same"
      },
      {
        "question": "Families may share similar ______ like singing or cooking.",
        "optionA": "habits",
        "optionB": "clothes",
        "optionC": "toys",
        "correctAnswer": "habits"
      },
      {
        "question": "Features passed from parents to children are called ______ features.",
        "optionA": "funny",
        "optionB": "hereditary",
        "optionC": "colourful",
        "correctAnswer": "hereditary"
      },
      {
        "question": "Family members may have the same eyes or ______ as their relatives.",
        "optionA": "bag",
        "optionB": "shoes",
        "optionC": "smile",
        "correctAnswer": "smile"
      },
      {
        "question": "Family members help each other with ______ and homework.",
        "optionA": "noise",
        "optionB": "chores",
        "optionC": "fights",
        "correctAnswer": "chores"
      },
      {
        "question": "Festivals and holidays bring families ______.",
        "optionA": "apart",
        "optionB": "together",
        "optionC": "outside",
        "correctAnswer": "together"
      },
      {
        "question": "Grandparents may share stories about their ______ childhood.",
        "optionA": "parents’",
        "optionB": "teachers’",
        "optionC": "neighbours’",
        "correctAnswer": "parents’"
      },
      {
        "question": "Spending time with family makes every day ______.",
        "optionA": "joyful",
        "optionB": "boring",
        "optionC": "silent",
        "correctAnswer": "joyful"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Families can be small, big, or have only one parent.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Grandparents teach traditions to children.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Twins are children born to the same parents at the same time.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Family members never celebrate together.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Hereditary features come from parents or grandparents.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Families may share hobbies and talents.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Parents do not help their children.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Family members can have similar looks.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Laughing together helps families feel connected.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Family members help each other when someone is sad or happy.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
