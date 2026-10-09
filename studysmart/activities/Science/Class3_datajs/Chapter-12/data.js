export const chapter = "Chapter - 12: Light, Sound and Force";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What helps us see things around us?",
        "optionA": "Sound",
        "optionB": "Force",
        "optionC": "Light",
        "correctAnswer": "Light"
      },
      {
        "question": "Which object is a luminous object?",
        "optionA": "Book",
        "optionB": "Candle",
        "correctAnswer": "Candle",
        "optionC": "Wall"
      },
      {
        "question": "What do we call objects that do not give light?",
        "optionA": "Transparent",
        "optionB": "Non-luminous",
        "correctAnswer": "Non-luminous",
        "optionC": "Luminous"
      },
      {
        "question": "Clean glass is an example of a:",
        "optionA": "Translucent object",
        "optionB": "Transparent object",
        "correctAnswer": "Transparent object",
        "optionC": "Opaque object"
      },
      {
        "question": "Which object is translucent?",
        "optionA": "Oil paper",
        "correctAnswer": "Oil paper",
        "optionB": "Metal box",
        "optionC": "Book"
      },
      {
        "question": "What forms a shadow?",
        "optionA": "Light falling on a wall",
        "optionB": "Opaque object blocking light",
        "correctAnswer": "Opaque object blocking light",
        "optionC": "Transparent object"
      },
      {
        "question": "Sound is created by:",
        "optionA": "Force",
        "optionB": "Light",
        "optionC": "Vibrations",
        "correctAnswer": "Vibrations"
      },
      {
        "question": "Which of these cannot travel without air?",
        "optionA": "Light",
        "optionB": "Sound",
        "correctAnswer": "Sound",
        "optionC": "Force"
      },
      {
        "question": "A pull or push is called:",
        "optionA": "Light",
        "optionB": "Sound",
        "optionC": "Force",
        "correctAnswer": "Force"
      },
      {
        "question": "In tug of war, what is being shown?",
        "optionA": "Sound",
        "optionB": "Light",
        "optionC": "Direction of force",
        "correctAnswer": "Direction of force"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "We cannot see anything without ______.",
        "optionA": "Sound",
        "optionB": "Light",
        "correctAnswer": "Light",
        "optionC": "Air"
      },
      {
        "question": "______ objects give their own light.",
        "optionA": "Non-luminous",
        "optionB": "Luminous",
        "correctAnswer": "Luminous",
        "optionC": "Opaque"
      },
      {
        "question": "Sound is made when something ______.",
        "optionA": "Shines",
        "optionB": "Vibrates",
        "correctAnswer": "Vibrates",
        "optionC": "Melts"
      },
      {
        "question": "Transparent objects allow ______ the light to pass.",
        "optionA": "Some",
        "optionB": "All",
        "correctAnswer": "All",
        "optionC": "No"
      },
      {
        "question": "Shadows are formed when ______ objects block light.",
        "optionA": "Transparent",
        "optionB": "Opaque",
        "correctAnswer": "Opaque",
        "optionC": "Luminous"
      },
      {
        "question": "Vibrations create ______.",
        "optionA": "Light",
        "optionB": "Sound",
        "correctAnswer": "Sound",
        "optionC": "Shadows"
      },
      {
        "question": "Sound waves travel in ______.",
        "optionA": "Water",
        "optionB": "Waves",
        "correctAnswer": "Waves",
        "optionC": "Blocks"
      },
      {
        "question": "A book is a ______ object.",
        "optionA": "Transparent",
        "optionB": "Non-luminous",
        "correctAnswer": "Non-luminous",
        "optionC": "Translucent"
      },
      {
        "question": "When you push or pull something, you apply ______.",
        "optionA": "Sound",
        "optionB": "Force",
        "correctAnswer": "Force",
        "optionC": "Air"
      },
      {
        "question": "Frosted glass is a ______ object.",
        "optionA": "Transparent",
        "optionB": "Opaque",
        "optionC": "Translucent",
        "correctAnswer": "Translucent"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The sun is a luminous object.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Sound cannot travel in space.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Shadows can be blue or green in colour.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Vibrations help create sound.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Transparent objects block all light.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "A wall is a translucent object.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Non-luminous objects are visible only when light falls on them.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Force can only be used to move things forward.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Oil paper allows some light to pass through.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A rubber band vibrates when plucked.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
