export const chapter = "Chapter - 1: My Family";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What do families give us when life gets too hard?",
        "optionA": "Toys",
        "optionB": "Homework",
        "optionC": "Love and care",
        "correctAnswer": "Love and care"
      },
      {
        "question": "Who was making a fort with Arya in the living room?",
        "optionA": "Her friend",
        "optionB": "Her little brother Rohan",
        "optionC": "Her cousin",
        "correctAnswer": "Her little brother Rohan"
      },
      {
        "question": "What did Arya and Rohan use to make the fort?",
        "optionA": "Books",
        "optionB": "Cushions",
        "optionC": "Chairs",
        "correctAnswer": "Cushions"
      },
      {
        "question": "Who smiled and talked to Arya while she was making the fort?",
        "optionA": "Her grandmother",
        "optionB": "Her teacher",
        "optionC": "Her neighbour",
        "correctAnswer": "Her grandmother"
      },
      {
        "question": "What do siblings help each other with?",
        "optionA": "Homework",
        "optionB": "Sleeping",
        "optionC": "Watching TV",
        "correctAnswer": "Homework"
      },
      {
        "question": "What may dad do when mom cooks food?",
        "optionA": "Sleep",
        "optionB": "Set the table",
        "optionC": "Watch TV",
        "correctAnswer": "Set the table"
      },
      {
        "question": "What can children do after playtime to help the family?",
        "optionA": "Hide toys",
        "optionB": "Break toys",
        "optionC": "Clean up toys",
        "correctAnswer": "Clean up toys"
      },
      {
        "question": "What do grandparents share with the family?",
        "optionA": "Wisdom",
        "optionB": "Games",
        "optionC": "Clothes",
        "correctAnswer": "Wisdom"
      },
      {
        "question": "What do parents do for their children?",
        "optionA": "Ignore them",
        "optionB": "Care for them",
        "optionC": "Send them away",
        "correctAnswer": "Care for them"
      },
      {
        "question": "What should children listen to at home?",
        "optionA": "Television",
        "optionB": "Their elders",
        "optionC": "Strangers",
        "correctAnswer": "Their elders"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Family is like the ______ of a big tree.",
        "optionA": "leaves",
        "optionB": "roots",
        "optionC": "flowers",
        "correctAnswer": "roots"
      },
      {
        "question": "Arya and Rohan were making a ______ in the living room.",
        "optionA": "boat",
        "optionB": "fort",
        "optionC": "chair",
        "correctAnswer": "fort"
      },
      {
        "question": "A family wraps us in safety and ______.",
        "optionA": "anger",
        "optionB": "love",
        "optionC": "fear",
        "correctAnswer": "love"
      },
      {
        "question": "Families can be ______ or big.",
        "optionA": "small",
        "optionB": "weak",
        "optionC": "noisy",
        "correctAnswer": "small"
      },
      {
        "question": "Family members help each other in times of ______.",
        "optionA": "games",
        "optionB": "sleep",
        "optionC": "need",
        "correctAnswer": "need"
      },
      {
        "question": "Children should keep their room ______.",
        "optionA": "broken",
        "optionB": "messy",
        "optionC": "tidy",
        "correctAnswer": "tidy"
      },
      {
        "question": "Siblings ______ each other in a family.",
        "optionA": "support",
        "optionB": "ignore",
        "optionC": "forget",
        "correctAnswer": "support"
      },
      {
        "question": "Helping at home makes everyone ______.",
        "optionA": "sad",
        "optionB": "happier",
        "optionC": "angry",
        "correctAnswer": "happier"
      },
      {
        "question": "Grandparents tell ______ stories.",
        "optionA": "classroom",
        "optionB": "bedtime",
        "optionC": "travel",
        "correctAnswer": "bedtime"
      },
      {
        "question": "Children should help with ______ at home.",
        "optionA": "chores",
        "optionB": "fighting",
        "optionC": "sleeping",
        "correctAnswer": "chores"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Arya and Rohan were making a fort in the living room.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Families can only be big.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Family members help each other in times of need.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Grandparents guide the family.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Parents care for their children.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Children should listen to their elders.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Siblings support and care for each other.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Cleaning toys after playtime is a way to help the family.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Helping family members makes everyone happier.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Families do not teach us sharing and caring.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
