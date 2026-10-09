export const chapter = "Chapter - 2: The Intelligent Crow";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Why did the fox speak sweetly to the crow?",
        "optionA": "To make a friend",
        "optionB": "To get the loaf",
        "correctAnswer": "To get the loaf",
        "optionC": "To play"
      },
      {
        "question": "What did the crow know about himself?",
        "optionA": "He could not sing well",
        "correctAnswer": "He could not sing well",
        "optionB": "He sang well",
        "optionC": "He could dance"
      },
      {
        "question": "What did the crow do before speaking to the fox?",
        "optionA": "Flew away",
        "optionB": "Kept the loaf on the branch",
        "correctAnswer": "Kept the loaf on the branch",
        "optionC": "Ate the loaf"
      },
      {
        "question": "What did the crow say to the fox?",
        "optionA": "I will fly",
        "optionB": "I will go away",
        "optionC": "I will sing a sweet song",
        "correctAnswer": "I will sing a sweet song"
      },
      {
        "question": "What did the crow do after speaking?",
        "optionA": "Slept",
        "optionB": "Cawed loudly",
        "correctAnswer": "Cawed loudly",
        "optionC": "Flew away"
      },
      {
        "question": "Why was the crow called intelligent?",
        "optionA": "He did not fall into the trap",
        "correctAnswer": "He did not fall into the trap",
        "optionB": "He sang well",
        "optionC": "He gave the loaf"
      },
      {
        "question": "What kind of words did the fox use?",
        "optionA": "Angry",
        "optionB": "Sweet",
        "correctAnswer": "Sweet",
        "optionC": "Loud"
      },
      {
        "question": "What did the fox think when she saw the crow?",
        "optionA": "To rest",
        "optionB": "To fly",
        "optionC": "To get the loaf",
        "correctAnswer": "To get the loaf"
      },
      {
        "question": "What happened to the fox’s plan?",
        "optionA": "It worked",
        "optionB": "It changed",
        "optionC": "It failed",
        "correctAnswer": "It failed"
      },
      {
        "question": "What did the fox realise at the end?",
        "optionA": "She got food",
        "optionB": "She could not trick the crow",
        "correctAnswer": "She could not trick the crow",
        "optionC": "She was happy"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The fox wanted to get the ______.",
        "optionA": "water",
        "optionB": "loaf",
        "correctAnswer": "loaf",
        "optionC": "fruit"
      },
      {
        "question": "The crow knew his voice was ______.",
        "optionA": "harsh",
        "correctAnswer": "harsh",
        "optionB": "sweet",
        "optionC": "soft"
      },
      {
        "question": "The fox spoke in a ______ voice.",
        "optionA": "rude",
        "optionB": "sweet",
        "correctAnswer": "sweet",
        "optionC": "slow"
      },
      {
        "question": "The crow was very ______.",
        "optionA": "foolish",
        "optionB": "weak",
        "optionC": "intelligent",
        "correctAnswer": "intelligent"
      },
      {
        "question": "The crow kept the loaf on the ______.",
        "optionA": "ground",
        "optionB": "branch",
        "correctAnswer": "branch",
        "optionC": "leaf"
      },
      {
        "question": "The crow started to ______ loudly.",
        "optionA": "caw",
        "correctAnswer": "caw",
        "optionB": "sing",
        "optionC": "talk"
      },
      {
        "question": "The fox’s idea was a ______.",
        "optionA": "game",
        "optionB": "trap",
        "correctAnswer": "trap",
        "optionC": "story"
      },
      {
        "question": "The fox could not get the ______.",
        "optionA": "tree",
        "optionB": "branch",
        "optionC": "loaf",
        "correctAnswer": "loaf"
      },
      {
        "question": "The fox’s plan did not ______.",
        "optionA": "work",
        "correctAnswer": "work",
        "optionB": "run",
        "optionC": "fly"
      },
      {
        "question": "The crow did not fall into the ______.",
        "optionA": "net",
        "optionB": "hole",
        "optionC": "trap",
        "correctAnswer": "trap"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The crow understood the fox’s trick.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The fox used kind words to fool the crow.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The crow dropped the loaf while making sound.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The crow was careful before speaking.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The crow saved the loaf from the fox.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The fox became successful in her plan.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The crow made a loud cawing sound.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The fox went away without the loaf.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The crow believed the fox’s words.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The crow acted wisely.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
