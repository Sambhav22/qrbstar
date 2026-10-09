export const chapter = "Chapter - 13: Annual Sports Meet";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who won the hurdle race in the sports meet?",
        "optionA": "Tiger",
        "optionB": "Beer",
        "correctAnswer": "Beer",
        "optionC": "Fox"
      },
      {
        "question": "Who won the hide-n-seek event?",
        "optionA": "Rabbit",
        "optionB": "Dog",
        "optionC": "Squirrel",
        "correctAnswer": "Squirrel"
      },
      {
        "question": "What colour bike did the monkey have?",
        "optionA": "Blue",
        "optionB": "White",
        "optionC": "Red",
        "correctAnswer": "Red"
      },
      {
        "question": "Which animal had a heavy bike?",
        "optionA": "Monkey",
        "optionB": "Donkey",
        "correctAnswer": "Donkey",
        "optionC": "Fox"
      },
      {
        "question": "Which animal had a white hairy bike?",
        "optionA": "Dog",
        "optionB": "Fox",
        "correctAnswer": "Fox",
        "optionC": "Tiger"
      },
      {
        "question": "Who said that he could win even without a bike?",
        "optionA": "Dog",
        "correctAnswer": "Dog",
        "optionB": "Monkey",
        "optionC": "Elephant"
      },
      {
        "question": "Who was the referee of the race?",
        "optionA": "Shera",
        "optionB": "Oont",
        "correctAnswer": "Oont",
        "optionC": "Tiger"
      },
      {
        "question": "What did Shera do to show agreement?",
        "optionA": "Nodded his head",
        "correctAnswer": "Nodded his head",
        "optionB": "Clapped",
        "optionC": "Shouted"
      },
      {
        "question": "Who was leading the race in the beginning?",
        "optionA": "Dog",
        "optionB": "Beer",
        "correctAnswer": "Beer",
        "optionC": "Fox"
      },
      {
        "question": "Who won the motorcycle race?",
        "optionA": "Monkey",
        "optionB": "Fox",
        "correctAnswer": "Fox",
        "optionC": "Dog"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The animals were holding an ______ sports meet.",
        "optionA": "school",
        "optionB": "annual",
        "correctAnswer": "annual",
        "optionC": "small"
      },
      {
        "question": "The winners were given gold, silver and ______ medals.",
        "optionA": "bronze",
        "correctAnswer": "bronze",
        "optionB": "iron",
        "optionC": "copper"
      },
      {
        "question": "The sports meet was held in a ______.",
        "optionA": "city",
        "optionB": "forest",
        "correctAnswer": "forest",
        "optionC": "village"
      },
      {
        "question": "The tiger won ______ gold medals.",
        "optionA": "one",
        "optionB": "three",
        "optionC": "two",
        "correctAnswer": "two"
      },
      {
        "question": "The dog wore a ______.",
        "optionA": "cap",
        "optionB": "helmet",
        "correctAnswer": "helmet",
        "optionC": "jacket"
      },
      {
        "question": "The monkey forgot to bring his ______.",
        "optionA": "shoes",
        "optionB": "helmet",
        "correctAnswer": "helmet",
        "optionC": "gloves"
      },
      {
        "question": "The race started with the sound of a ______.",
        "optionA": "whistle",
        "correctAnswer": "whistle",
        "optionB": "bell",
        "optionC": "drum"
      },
      {
        "question": "The monkey hurt his ______ when he fell.",
        "optionA": "leg",
        "optionB": "head",
        "correctAnswer": "head",
        "optionC": "hand"
      },
      {
        "question": "The dog stood at the ______ line.",
        "optionA": "finish",
        "optionB": "start",
        "correctAnswer": "start",
        "optionC": "middle"
      },
      {
        "question": "The sports meet came to an ______.",
        "optionA": "stop",
        "optionB": "break",
        "optionC": "end",
        "correctAnswer": "end"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The sports meet lasted for four days.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The rabbit won the tree-climbing event.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The elephant won the stone-throwing event.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The dog had a motorcycle.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The monkey wore a helmet during the race.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The fox won the motorcycle race.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The dog came second in the race.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The monkey fell because he lost control of his bike.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "It is safe to ride a bike without a helmet.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Shera encouraged all animals to participate.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
