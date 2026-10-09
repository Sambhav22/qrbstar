export const chapter = "Chapter - 18: The Goops";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What is a Goop?",
        "optionA": "A child with good manners",
        "optionB": "A child with bad manners",
        "correctAnswer": "A child with bad manners",
        "optionC": "A teacher"
      },
      {
        "question": "What did the Goop do to the poet?",
        "optionA": "Helped him",
        "optionB": "Pulled a chair from under him",
        "correctAnswer": "Pulled a chair from under him",
        "optionC": "Gave him food"
      },
      {
        "question": "How was the trick described in the poem?",
        "optionA": "Funny",
        "optionB": "Kind",
        "optionC": "Horrid",
        "correctAnswer": "Horrid"
      },
      {
        "question": "What do Goops lick while eating?",
        "optionA": "Fingers and knives",
        "correctAnswer": "Fingers and knives",
        "optionB": "Plates",
        "optionC": "Cups"
      },
      {
        "question": "What do Goops spill on the tablecloth?",
        "optionA": "Milk",
        "optionB": "Water",
        "optionC": "Broth",
        "correctAnswer": "Broth"
      },
      {
        "question": "How do Goops chew their food?",
        "optionA": "Quietly",
        "optionB": "Slowly",
        "optionC": "Loud and fast",
        "correctAnswer": "Loud and fast"
      },
      {
        "question": "What do Goops do while eating?",
        "optionA": "Talk while eating",
        "correctAnswer": "Talk while eating",
        "optionB": "Stay silent",
        "optionC": "Sleep"
      },
      {
        "question": "How does the poet feel about not being a Goop?",
        "optionA": "Sad",
        "optionB": "Glad",
        "correctAnswer": "Glad",
        "optionC": "Angry"
      },
      {
        "question": "What kind of lives do Goops lead?",
        "optionA": "Happy",
        "optionB": "Clean",
        "optionC": "Disgusting",
        "correctAnswer": "Disgusting"
      },
      {
        "question": "What lesson does the poem teach?",
        "optionA": "Games",
        "optionB": "Manners",
        "correctAnswer": "Manners",
        "optionC": "Travel"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The Goop did a very ______ trick.",
        "optionA": "kind",
        "optionB": "mean",
        "correctAnswer": "mean",
        "optionC": "helpful"
      },
      {
        "question": "The poet did not find the trick ______.",
        "optionA": "funny",
        "optionB": "interesting",
        "optionC": "funny at all",
        "correctAnswer": "funny at all"
      },
      {
        "question": "The Goop was sent to ______ as punishment.",
        "optionA": "school",
        "optionB": "market",
        "optionC": "bed",
        "correctAnswer": "bed"
      },
      {
        "question": "The poet felt ______ that he was not a Goop.",
        "optionA": "sad",
        "optionB": "glad",
        "correctAnswer": "glad",
        "optionC": "angry"
      },
      {
        "question": "The trick was a ______ thing to do.",
        "optionA": "horrid",
        "correctAnswer": "horrid",
        "optionB": "nice",
        "optionC": "simple"
      },
      {
        "question": "Goops behave in a ______ way.",
        "optionA": "bad",
        "correctAnswer": "bad",
        "optionB": "polite",
        "optionC": "helpful"
      },
      {
        "question": "The Goop pulled the chair from ______ the poet.",
        "optionA": "near",
        "optionB": "under",
        "correctAnswer": "under",
        "optionC": "above"
      },
      {
        "question": "The poem is about good ______.",
        "optionA": "games",
        "optionB": "manners",
        "correctAnswer": "manners",
        "optionC": "food"
      },
      {
        "question": "The Goop made the poet feel ______.",
        "optionA": "happy",
        "optionB": "excited",
        "optionC": "upset",
        "correctAnswer": "upset"
      },
      {
        "question": "Good children follow ______ rules.",
        "optionA": "table manners",
        "correctAnswer": "table manners",
        "optionB": "game",
        "optionC": "running"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Goops follow good table manners.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The poet saw a Goop doing a bad trick.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The Goop helped the poet sit properly.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Goops lick their fingers and knives.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Goops spill their broth on the tablecloth.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Goops eat quietly and slowly.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The Goop was punished for his action.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The poet is happy to be a Goop.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The trick done by the Goop was funny.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The poem teaches us to follow good manners.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
