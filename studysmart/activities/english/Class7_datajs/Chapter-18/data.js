export const chapter = "Chapter - 18: Smart Phone - Dumb User";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Who is the speaker of the poem?",
        "optionA": "A scientist",
        "optionB": "A teacher",
        "optionC": "A smartphone user",
        "correctAnswer": "A smartphone user"
      },
      {
        "question": "What does the speaker say about his phone?",
        "optionA": "It is broken",
        "optionB": "It is smart",
        "correctAnswer": "It is smart",
        "optionC": "It is slow"
      },
      {
        "question": "What feature helps the speaker know global time?",
        "optionA": "Clock showing different countries",
        "correctAnswer": "Clock showing different countries",
        "optionB": "Alarm",
        "optionC": "Calendar"
      },
      {
        "question": "What does the speaker use to take pictures?",
        "optionA": "Tablet",
        "optionB": "Camera in smartphone",
        "correctAnswer": "Camera in smartphone",
        "optionC": "Laptop"
      },
      {
        "question": "What happens when the speaker touches the screen?",
        "optionA": "It switches off",
        "optionB": "It breaks",
        "optionC": "His finger slips",
        "correctAnswer": "His finger slips"
      },
      {
        "question": "What kind of food does the phone help to locate?",
        "optionA": "Chinese food",
        "correctAnswer": "Chinese food",
        "optionB": "Italian",
        "optionC": "Indian"
      },
      {
        "question": "What is the speaker trying to take using the phone?",
        "optionA": "Selfie",
        "correctAnswer": "Selfie",
        "optionB": "Notes",
        "optionC": "Video call"
      },
      {
        "question": "What does the word “gizmos” refer to?",
        "optionA": "Toys",
        "optionB": "Gadgets",
        "correctAnswer": "Gadgets",
        "optionC": "Books"
      },
      {
        "question": "What does the speaker compare himself with?",
        "optionA": "Smart person",
        "optionB": "Expert",
        "optionC": "Dumb user",
        "correctAnswer": "Dumb user"
      },
      {
        "question": "What problem does the speaker face at the end?",
        "optionA": "Battery issue",
        "optionB": "Cannot make a simple phone call",
        "correctAnswer": "Cannot make a simple phone call",
        "optionC": "Cannot charge phone"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The speaker’s phone can check his ______.",
        "optionA": "weight",
        "optionB": "height",
        "optionC": "blood pressure",
        "correctAnswer": "blood pressure"
      },
      {
        "question": "The phone can show weather and ______.",
        "optionA": "internet",
        "correctAnswer": "internet",
        "optionB": "clothes",
        "optionC": "toys"
      },
      {
        "question": "The speaker can track the ______ of birds.",
        "optionA": "speed",
        "optionB": "migration",
        "correctAnswer": "migration",
        "optionC": "colour"
      },
      {
        "question": "The phone helps him find food using a ______.",
        "optionA": "map",
        "correctAnswer": "map",
        "optionB": "book",
        "optionC": "guide"
      },
      {
        "question": "The speaker takes a ______ using the phone.",
        "optionA": "painting",
        "optionB": "selfie",
        "correctAnswer": "selfie",
        "optionC": "sketch"
      },
      {
        "question": "The phone has many useful ______.",
        "optionA": "limits",
        "optionB": "features",
        "correctAnswer": "features",
        "optionC": "problems"
      },
      {
        "question": "The speaker feels ______ while using the phone.",
        "optionA": "confident",
        "optionB": "relaxed",
        "optionC": "confused",
        "correctAnswer": "confused"
      },
      {
        "question": "The word “aperture” means an ______.",
        "optionA": "opening",
        "correctAnswer": "opening",
        "optionB": "sound",
        "optionC": "colour"
      },
      {
        "question": "The phone includes a ______ to guide direction.",
        "optionA": "compass",
        "correctAnswer": "compass",
        "optionB": "pen",
        "optionC": "watch"
      },
      {
        "question": "The speaker calls the gadgets ______.",
        "optionA": "books",
        "optionB": "papers",
        "optionC": "gizmos",
        "correctAnswer": "gizmos"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The smartphone has many advanced features.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The speaker easily understands how to use the phone.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The phone can help track birds.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The speaker never uses the camera.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The phone helps in navigation.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The speaker finds the phone very simple to use.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The poem shows both usefulness and confusion of technology.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The phone cannot show time of other countries.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The speaker enjoys every feature without any problem.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The speaker struggles to make a phone call.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
