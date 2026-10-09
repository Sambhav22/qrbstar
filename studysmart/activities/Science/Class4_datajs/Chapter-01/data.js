export const chapter = "Chapter - 1: Our Internal Organs";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which organ is the control centre of the body?",
        "optionA": "Stomach",
        "optionB": "Heart",
        "optionC": "Brain",
        "correctAnswer": "Brain"
      },
      {
        "question": "What does the heart do?",
        "optionA": "Stores energy",
        "optionB": "Pumps blood",
        "correctAnswer": "Pumps blood",
        "optionC": "Sends signals"
      },
      {
        "question": "Which organ brings oxygen into the body?",
        "optionA": "Liver",
        "optionB": "Lungs",
        "correctAnswer": "Lungs",
        "optionC": "Brain"
      },
      {
        "question": "Where is the stomach located?",
        "optionA": "In the chest",
        "optionB": "Below the ribs",
        "correctAnswer": "Below the ribs",
        "optionC": "Inside the brain"
      },
      {
        "question": "What is the main function of the liver?",
        "optionA": "Pumps blood",
        "optionB": "Stores energy",
        "correctAnswer": "Stores energy",
        "optionC": "Helps in breathing"
      },
      {
        "question": "Kidneys are shaped like:",
        "optionA": "Balls",
        "optionB": "Tubes",
        "optionC": "Beans",
        "correctAnswer": "Beans"
      },
      {
        "question": "What do intestines do?",
        "optionA": "Remove carbon dioxide",
        "optionB": "Absorb nutrients",
        "correctAnswer": "Absorb nutrients",
        "optionC": "Pump blood"
      },
      {
        "question": "What protects the stomach from its juices?",
        "optionA": "Blood",
        "optionB": "Skin",
        "optionC": "Lining",
        "correctAnswer": "Lining"
      },
      {
        "question": "What helps organs to stay healthy?",
        "optionA": "Junk food",
        "optionB": "Skipping meals",
        "optionC": "Drinking clean water",
        "correctAnswer": "Drinking clean water"
      },
      {
        "question": "Which of the following is a healthy habit for our organs?",
        "optionA": "Skipping meals",
        "optionB": "Sleeping less",
        "optionC": "Nutritious meals",
        "correctAnswer": "Nutritious meals"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The ______ is the control centre of the body.",
        "optionA": "heart",
        "optionB": "lungs",
        "optionC": "brain",
        "correctAnswer": "brain"
      },
      {
        "question": "The heart pumps ______ to all body parts.",
        "optionA": "air",
        "optionB": "food",
        "optionC": "blood",
        "correctAnswer": "blood"
      },
      {
        "question": "The lungs help us ______.",
        "optionA": "sleep",
        "optionB": "eat",
        "optionC": "breathe",
        "correctAnswer": "breathe"
      },
      {
        "question": "The stomach turns food into ______.",
        "optionA": "oxygen",
        "optionB": "blood",
        "optionC": "energy",
        "correctAnswer": "energy"
      },
      {
        "question": "The liver stores ______ and cleans blood.",
        "optionA": "oxygen",
        "optionB": "energy",
        "correctAnswer": "energy",
        "optionC": "food"
      },
      {
        "question": "______ filter waste from blood.",
        "optionA": "Lungs",
        "optionB": "Stomach",
        "optionC": "Kidneys",
        "correctAnswer": "Kidneys"
      },
      {
        "question": "The small intestine is very ______.",
        "optionA": "short",
        "optionB": "long",
        "correctAnswer": "long",
        "optionC": "round"
      },
      {
        "question": "The large intestine compacts ______.",
        "optionA": "blood",
        "optionB": "air",
        "optionC": "waste",
        "correctAnswer": "waste"
      },
      {
        "question": "Good ______ supports organ health.",
        "optionA": "sleep",
        "optionB": "hygiene",
        "correctAnswer": "hygiene",
        "optionC": "posture"
      },
      {
        "question": "Regular ______ keep us healthy.",
        "optionA": "games",
        "optionB": "stories",
        "optionC": "check-ups",
        "correctAnswer": "check-ups"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The brain sends signals to muscles.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The heart only works while we are awake.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The lungs remove carbon dioxide from the body.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The stomach breaks food with the help of juices.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The liver does not clean blood.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Kidneys control blood pressure.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The small intestine is very small.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Hygiene helps organs function well.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The brain stops working when we sleep.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Eating junk food keeps organs strong.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
