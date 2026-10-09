export const chapter = "Chapter - 3: The King’s Portrait";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who attacked the king’s kingdom?",
        "optionA": "A friendly king",
        "optionB": "A neighbouring king",
        "correctAnswer": "A neighbouring king",
        "optionC": "A soldier"
      },
      {
        "question": "What did the king want the painters to make?",
        "optionA": "A beautiful portrait",
        "correctAnswer": "A beautiful portrait",
        "optionB": "A statue",
        "optionC": "A palace"
      },
      {
        "question": "Why did most painters refuse the king’s request?",
        "optionA": "They were busy",
        "optionB": "They did not like painting",
        "optionC": "They were afraid of punishment",
        "correctAnswer": "They were afraid of punishment"
      },
      {
        "question": "Who stayed back and accepted the task?",
        "optionA": "An old painter",
        "optionB": "A foreign painter",
        "optionC": "A young painter",
        "correctAnswer": "A young painter"
      },
      {
        "question": "What did the young painter bring to the court?",
        "optionA": "A drawing book",
        "optionB": "A mirror",
        "optionC": "A covered painting",
        "correctAnswer": "A covered painting"
      },
      {
        "question": "How did the king look at the painting?",
        "optionA": "Carelessly",
        "optionB": "Carefully",
        "correctAnswer": "Carefully",
        "optionC": "Quickly"
      },
      {
        "question": "What did the king say about the painter’s work?",
        "optionA": "It was clever",
        "correctAnswer": "It was clever",
        "optionB": "It was poor",
        "optionC": "It was incomplete"
      },
      {
        "question": "How was the king shown in the painting?",
        "optionA": "Sitting on a chair",
        "optionB": "On a horse aiming with a bow",
        "correctAnswer": "On a horse aiming with a bow",
        "optionC": "Standing in the hall"
      },
      {
        "question": "What did the courtiers do after seeing the painting?",
        "optionA": "Criticised it",
        "optionB": "Ignored it",
        "optionC": "Praised it",
        "correctAnswer": "Praised it"
      },
      {
        "question": "Where was the king’s portrait finally placed?",
        "optionA": "In the garden",
        "optionB": "In the bedroom",
        "optionC": "In the great hall",
        "correctAnswer": "In the great hall"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The king lost one eye and one ______ in the battle.",
        "optionA": "arm",
        "optionB": "leg",
        "correctAnswer": "leg",
        "optionC": "hand"
      },
      {
        "question": "The king looked after his ______ well.",
        "optionA": "people",
        "correctAnswer": "people",
        "optionB": "soldiers",
        "optionC": "army"
      },
      {
        "question": "The painters were ______ when they saw the king.",
        "optionA": "happy",
        "optionB": "confused",
        "correctAnswer": "confused",
        "optionC": "excited"
      },
      {
        "question": "The young painter worked for more than a ______.",
        "optionA": "month",
        "correctAnswer": "month",
        "optionB": "week",
        "optionC": "year"
      },
      {
        "question": "The king ______ the painting in the court.",
        "optionA": "hid",
        "optionB": "unveiled",
        "correctAnswer": "unveiled",
        "optionC": "sold"
      },
      {
        "question": "The king said the painter had applied his ______ well.",
        "optionA": "strength",
        "optionB": "mind",
        "correctAnswer": "mind",
        "optionC": "money"
      },
      {
        "question": "The painting did not show any ______ of the king.",
        "optionA": "beauty",
        "optionB": "colour",
        "optionC": "deficiency",
        "correctAnswer": "deficiency"
      },
      {
        "question": "The king was ______ to see the painting.",
        "optionA": "angry",
        "optionB": "sad",
        "optionC": "happy",
        "correctAnswer": "happy"
      },
      {
        "question": "The painter showed the king aiming with a ______.",
        "optionA": "sword",
        "optionB": "bow",
        "correctAnswer": "bow",
        "optionC": "stick"
      },
      {
        "question": "The king rewarded the painter with one hundred ______ coins.",
        "optionA": "silver",
        "optionB": "gold",
        "correctAnswer": "gold",
        "optionC": "bronze"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The king lost one eye and one leg in a battle.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The king was sure that his portrait would look good.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "All painters agreed to paint the king.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The young painter was confident about making a beautiful portrait.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The painter completed the work in one day.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The king examined the painting carefully.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The painting clearly showed the king’s deformity.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The courtiers praised the painting.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The king rewarded the painter.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The portrait was placed in the great hall.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
