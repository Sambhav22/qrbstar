export const chapter = "Chapter - 5: Value of Little Things";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who was always smiling in the story?",
        "optionA": "U",
        "optionB": "D",
        "correctAnswer": "D",
        "optionC": "Both"
      },
      {
        "question": "Why did U feel surprised about D?",
        "optionA": "Because D cried a lot",
        "optionB": "Because D was always happy",
        "correctAnswer": "Because D was always happy",
        "optionC": "Because D was quiet"
      },
      {
        "question": "What did U plan to do to change D’s mood?",
        "optionA": "Make him sad",
        "correctAnswer": "Make him sad",
        "optionB": "Make him laugh",
        "optionC": "Ignore him"
      },
      {
        "question": "Where did U take D first?",
        "optionA": "To a park",
        "optionB": "To a saddest play",
        "correctAnswer": "To a saddest play",
        "optionC": "To a market"
      },
      {
        "question": "What happened while watching the play?",
        "optionA": "They laughed",
        "optionB": "They slept",
        "optionC": "They cried",
        "correctAnswer": "They cried"
      },
      {
        "question": "What did U give D after the play?",
        "optionA": "Chocolate",
        "optionB": "Juice",
        "optionC": "Ice cream",
        "correctAnswer": "Ice cream"
      },
      {
        "question": "What happened when D ate ice cream quickly?",
        "optionA": "He became happy",
        "optionB": "He got a headache",
        "correctAnswer": "He got a headache",
        "optionC": "He fell asleep"
      },
      {
        "question": "Which game did U and D play together?",
        "optionA": "Tennis",
        "correctAnswer": "Tennis",
        "optionB": "Cricket",
        "optionC": "Football"
      },
      {
        "question": "Who won the tennis game?",
        "optionA": "D",
        "optionB": "U",
        "correctAnswer": "U",
        "optionC": "Both"
      },
      {
        "question": "What did D say about his day?",
        "optionA": "It was wonderful",
        "correctAnswer": "It was wonderful",
        "optionB": "It was boring",
        "optionC": "It was sad"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "D was always ______.",
        "optionA": "smiling",
        "correctAnswer": "smiling",
        "optionB": "sad",
        "optionC": "angry"
      },
      {
        "question": "U always ______ why D was happy.",
        "optionA": "knew",
        "optionB": "wondered",
        "correctAnswer": "wondered",
        "optionC": "forgot"
      },
      {
        "question": "U took D to a ______ play.",
        "optionA": "funny",
        "optionB": "happy",
        "optionC": "sad",
        "correctAnswer": "sad"
      },
      {
        "question": "They both ______ while watching the play.",
        "optionA": "cried",
        "correctAnswer": "cried",
        "optionB": "laughed",
        "optionC": "danced"
      },
      {
        "question": "Eating ice cream quickly gave D a ______.",
        "optionA": "smile",
        "optionB": "headache",
        "correctAnswer": "headache",
        "optionC": "gift"
      },
      {
        "question": "After some time, D started ______ again.",
        "optionA": "crying",
        "optionB": "smiling",
        "correctAnswer": "smiling",
        "optionC": "shouting"
      },
      {
        "question": "U had never lost a ______ game.",
        "optionA": "cricket",
        "optionB": "football",
        "optionC": "tennis",
        "correctAnswer": "tennis"
      },
      {
        "question": "D enjoyed spending time with his ______.",
        "optionA": "teacher",
        "optionB": "friend",
        "correctAnswer": "friend",
        "optionC": "brother"
      },
      {
        "question": "The day was ______ for D.",
        "optionA": "bad",
        "optionB": "boring",
        "optionC": "wonderful",
        "correctAnswer": "wonderful"
      },
      {
        "question": "In the end, U learned to be ______.",
        "optionA": "sad",
        "optionB": "happy",
        "correctAnswer": "happy",
        "optionC": "angry"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "D was always unhappy.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "U wanted to stop D from smiling.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "They watched a happy play.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "D remained sad after the play.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Ice cream made D feel uncomfortable for some time.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "U lost the tennis game.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "D became upset after losing the game.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "D enjoyed all the activities with U.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "U realized he also had reasons to be happy.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The story teaches us to enjoy little things in life.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
