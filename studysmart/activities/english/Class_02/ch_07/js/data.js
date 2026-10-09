export const chapter = "Chapter - 7: The Perfect Size";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who did the baby elephant meet first in the forest?",
        "optionA": "Rabbit",
        "optionB": "Monkey",
        "correctAnswer": "Monkey",
        "optionC": "Frog"
      },
      {
        "question": "Why did the monkey refuse to be friends with the elephant?",
        "optionA": "The elephant was too big",
        "correctAnswer": "The elephant was too big",
        "optionB": "He was busy",
        "optionC": "He was angry"
      },
      {
        "question": "Who said that the elephant could not fit in his home?",
        "optionA": "Rabbit",
        "correctAnswer": "Rabbit",
        "optionB": "Frog",
        "optionC": "Deer"
      },
      {
        "question": "Who told the elephant about the tiger?",
        "optionA": "Monkey",
        "optionB": "Deer",
        "correctAnswer": "Deer",
        "optionC": "Rabbit"
      },
      {
        "question": "What were the animals doing when the elephant saw them the next day?",
        "optionA": "Playing",
        "optionB": "Sleeping",
        "optionC": "Running away in fear",
        "correctAnswer": "Running away in fear"
      },
      {
        "question": "What did the tiger say to the elephant?",
        "optionA": "I will fight you",
        "optionB": "Move away from my way",
        "correctAnswer": "Move away from my way",
        "optionC": "Come with me"
      },
      {
        "question": "What did the elephant use to lift the tiger?",
        "optionA": "Tail",
        "optionB": "Leg",
        "optionC": "Trunk",
        "correctAnswer": "Trunk"
      },
      {
        "question": "What did the elephant do after lifting the tiger?",
        "optionA": "Dropped him gently",
        "optionB": "Threw him away",
        "correctAnswer": "Threw him away",
        "optionC": "Left him"
      },
      {
        "question": "What promise did the tiger make?",
        "optionA": "Not to hunt animals",
        "correctAnswer": "Not to hunt animals",
        "optionB": "To stay in forest",
        "optionC": "To fight again"
      },
      {
        "question": "What did the animals think about the elephant at the end?",
        "optionA": "He was weak",
        "optionB": "He was the perfect size",
        "correctAnswer": "He was the perfect size",
        "optionC": "He was too big"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The baby elephant was ______ in the forest.",
        "optionA": "old",
        "optionB": "tired",
        "optionC": "new",
        "correctAnswer": "new"
      },
      {
        "question": "The monkey could swing on the ______.",
        "optionA": "ground",
        "optionB": "trees",
        "correctAnswer": "trees",
        "optionC": "water"
      },
      {
        "question": "The rabbit said, “You are too ______.”",
        "optionA": "small",
        "optionB": "big",
        "correctAnswer": "big",
        "optionC": "fast"
      },
      {
        "question": "The frog said the elephant cannot ______ like him.",
        "optionA": "jump",
        "correctAnswer": "jump",
        "optionB": "run",
        "optionC": "fly"
      },
      {
        "question": "The animals were running in ______.",
        "optionA": "joy",
        "optionB": "fear",
        "correctAnswer": "fear",
        "optionC": "fun"
      },
      {
        "question": "The deer said there is a ______ in the forest.",
        "optionA": "lion",
        "optionB": "dog",
        "optionC": "tiger",
        "correctAnswer": "tiger"
      },
      {
        "question": "The tiger said, “Move away from my ______.”",
        "optionA": "tree",
        "optionB": "way",
        "correctAnswer": "way",
        "optionC": "home"
      },
      {
        "question": "The elephant picked up the tiger with his ______.",
        "optionA": "ear",
        "optionB": "tail",
        "optionC": "trunk",
        "correctAnswer": "trunk"
      },
      {
        "question": "The elephant ______ the tiger away.",
        "optionA": "pushed",
        "optionB": "flung",
        "correctAnswer": "flung",
        "optionC": "pulled"
      },
      {
        "question": "The animals found the elephant to be of ______ size.",
        "optionA": "perfect",
        "correctAnswer": "perfect",
        "optionB": "wrong",
        "optionC": "small"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The baby elephant was looking for food.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The monkey agreed to be friends with the elephant.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The rabbit said the elephant was too big.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The frog said the elephant could jump like him.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The animals were afraid of the tiger.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The elephant was afraid of the tiger.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The elephant lifted the tiger with his trunk.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The tiger promised not to hunt animals.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The animals became friends with the elephant.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The elephant was not useful to the animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
