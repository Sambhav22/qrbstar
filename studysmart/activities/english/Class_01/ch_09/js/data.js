export const chapter = "Chapter - 9: The Boy Who Cried Wolf";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Why did the boy shout “Wolf! Wolf!”?",
        "optionA": "He saw a wolf",
        "optionB": "He wanted fun",
        "correctAnswer": "He wanted fun",
        "optionC": "He was scared"
      },
      {
        "question": "Where were the villagers when the boy shouted?",
        "optionA": "In the market",
        "optionB": "In the field",
        "correctAnswer": "In the field",
        "optionC": "At home"
      },
      {
        "question": "What did the villagers do when they heard the boy?",
        "optionA": "Ignored him",
        "optionB": "Slept",
        "optionC": "Came running",
        "correctAnswer": "Came running"
      },
      {
        "question": "What did the villagers find when they reached the boy?",
        "optionA": "A wolf",
        "optionB": "Nothing",
        "correctAnswer": "Nothing",
        "optionC": "A tiger"
      },
      {
        "question": "What did the boy say after playing the prank?",
        "optionA": "I saw a wolf",
        "optionB": "I am sorry",
        "optionC": "I played a prank on you",
        "correctAnswer": "I played a prank on you"
      },
      {
        "question": "What did the villagers do after the second prank?",
        "optionA": "Laughed",
        "optionB": "Warned him",
        "correctAnswer": "Warned him",
        "optionC": "Played with him"
      },
      {
        "question": "What happened on the third day?",
        "optionA": "A wolf came really",
        "correctAnswer": "A wolf came really",
        "optionB": "Nothing happened",
        "optionC": "Villagers stayed home"
      },
      {
        "question": "What did the wolf do?",
        "optionA": "Took a sheep",
        "correctAnswer": "Took a sheep",
        "optionB": "Barked",
        "optionC": "Ran away"
      },
      {
        "question": "What did the boy do when the wolf came?",
        "optionA": "Slept",
        "optionB": "Cried for help",
        "correctAnswer": "Cried for help",
        "optionC": "Ran home"
      },
      {
        "question": "What did the villagers do when the boy called for help the last time?",
        "optionA": "Came running",
        "optionB": "Did not come",
        "correctAnswer": "Did not come",
        "optionC": "Sent help"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The boy went to graze sheep after ______.",
        "optionA": "lunch",
        "optionB": "dinner",
        "optionC": "school",
        "correctAnswer": "school"
      },
      {
        "question": "The boy went to the ______ to graze sheep.",
        "optionA": "forest",
        "optionB": "meadow",
        "correctAnswer": "meadow",
        "optionC": "road"
      },
      {
        "question": "The boy had nothing to do and felt ______.",
        "optionA": "happy",
        "optionB": "bored",
        "correctAnswer": "bored",
        "optionC": "excited"
      },
      {
        "question": "The villagers came ______ when they heard the boy.",
        "optionA": "running",
        "correctAnswer": "running",
        "optionB": "slowly",
        "optionC": "quietly"
      },
      {
        "question": "The boy played a ______ on the villagers.",
        "optionA": "game",
        "optionB": "prank",
        "correctAnswer": "prank",
        "optionC": "song"
      },
      {
        "question": "The villagers were not ______ with him.",
        "optionA": "happy",
        "optionB": "angry",
        "optionC": "unhappy",
        "correctAnswer": "unhappy"
      },
      {
        "question": "The wolf took a sheep in its ______.",
        "optionA": "hand",
        "optionB": "mouth",
        "correctAnswer": "mouth",
        "optionC": "leg"
      },
      {
        "question": "The boy returned home with one sheep ______.",
        "optionA": "less",
        "correctAnswer": "less",
        "optionB": "more",
        "optionC": "bigger"
      },
      {
        "question": "The boy was ______ badly.",
        "optionA": "laughing",
        "optionB": "weeping",
        "correctAnswer": "weeping",
        "optionC": "shouting"
      },
      {
        "question": "Nobody trusts a ______.",
        "optionA": "friend",
        "optionB": "liar",
        "correctAnswer": "liar",
        "optionC": "child"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The boy went to the meadow to graze sheep.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The boy had a lot of work to do.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The villagers saw a wolf when they came first time.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The boy told the truth the first time.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The villagers warned the boy.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The boy repeated the prank the next day.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The wolf came only in the boy’s joke.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The villagers helped the boy when the wolf came.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The boy lost one sheep.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "People trust a liar easily.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
