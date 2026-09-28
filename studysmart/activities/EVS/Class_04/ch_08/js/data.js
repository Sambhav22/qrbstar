export const chapter = "Chapter - 8: Healthy Habits for a Happy Life";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Where do grains like rice and wheat grow?",
        "optionA": "In factories",
        "optionB": "On farms",
        "optionC": "In shops",
        "correctAnswer": "On farms"
      },
      {
        "question": "What do farmers do after crops are ready?",
        "optionA": "Paint them",
        "optionB": "Harvest them",
        "optionC": "Throw them away",
        "correctAnswer": "Harvest them"
      },
      {
        "question": "What is done to grains before sending them to markets?",
        "optionA": "They are broken",
        "optionB": "They are eaten",
        "optionC": "They are cleaned and dried",
        "correctAnswer": "They are cleaned and dried"
      },
      {
        "question": "What should we do to enjoy our food more?",
        "optionA": "Watch TV",
        "optionB": "Eat quickly",
        "optionC": "Pay attention while eating",
        "correctAnswer": "Pay attention while eating"
      },
      {
        "question": "What does mindful eating help us understand?",
        "optionA": "When we are hungry and full",
        "optionB": "When to play",
        "optionC": "When to sleep",
        "correctAnswer": "When we are hungry and full"
      },
      {
        "question": "What should we do with extra food?",
        "optionA": "Waste it",
        "optionB": "Share it with others",
        "optionC": "Hide it",
        "correctAnswer": "Share it with others"
      },
      {
        "question": "Which of these helps build teamwork?",
        "optionA": "Playing with friends",
        "optionB": "Sleeping",
        "optionC": "Watching TV",
        "correctAnswer": "Playing with friends"
      },
      {
        "question": "Why do we need rest?",
        "optionA": "To feel tired",
        "optionB": "To grow and stay healthy",
        "optionC": "To avoid food",
        "correctAnswer": "To grow and stay healthy"
      },
      {
        "question": "What is the first thing to do if someone touches you in a wrong way?",
        "optionA": "Stay quiet",
        "optionB": "Say “No” loudly",
        "optionC": "Ignore it",
        "correctAnswer": "Say “No” loudly"
      },
      {
        "question": "What does a balanced routine include?",
        "optionA": "Only play",
        "optionB": "Only study",
        "optionC": "Study, play, food, and rest",
        "correctAnswer": "Study, play, food, and rest"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Farmers __________ seeds in the fields.",
        "optionA": "eat",
        "optionB": "sow",
        "optionC": "wash",
        "correctAnswer": "sow"
      },
      {
        "question": "Grains are packed in __________ after cleaning.",
        "optionA": "bags",
        "optionB": "sacks",
        "optionC": "boxes",
        "correctAnswer": "sacks"
      },
      {
        "question": "Eating slowly helps our body __________ food better.",
        "optionA": "digest",
        "optionB": "throw",
        "optionC": "waste",
        "correctAnswer": "digest"
      },
      {
        "question": "We should __________ food with others.",
        "optionA": "waste",
        "optionB": "hide",
        "optionC": "share",
        "correctAnswer": "share"
      },
      {
        "question": "Leftover food can be used for the __________ meal.",
        "optionA": "next",
        "optionB": "last",
        "optionC": "first",
        "correctAnswer": "next"
      },
      {
        "question": "Physical activities make our __________ strong.",
        "optionA": "books",
        "optionB": "body",
        "optionC": "clothes",
        "correctAnswer": "body"
      },
      {
        "question": "Children should sleep __________ at night.",
        "optionA": "late",
        "optionB": "early",
        "optionC": "anytime",
        "correctAnswer": "early"
      },
      {
        "question": "A daily routine helps us stay __________.",
        "optionA": "unhealthy",
        "optionB": "lazy",
        "optionC": "balanced",
        "correctAnswer": "balanced"
      },
      {
        "question": "Safe touch makes us feel __________.",
        "optionA": "comfortable",
        "optionB": "scared",
        "optionC": "angry",
        "correctAnswer": "comfortable"
      },
      {
        "question": "We should talk to a __________ adult if we feel scared.",
        "optionA": "unknown",
        "optionB": "trusted",
        "optionC": "strange",
        "correctAnswer": "trusted"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Grains need sun and water to grow.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Farmers do not take care of crops.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Eating while watching TV is mindful eating.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We should take only as much food as we can eat.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Physical activity helps us feel fresh.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Rest is not important for children.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Safe touch makes us feel happy and comfortable.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We should ignore unsafe touch.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "A routine means doing things in a regular order.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We should keep secrets that make us feel upset.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
