export const chapter = "Chapter - 11: Twinkle, Twinkle, Little Star";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What shines in the sky at night?",
        "optionA": "Sun",
        "optionB": "Star",
        "correctAnswer": "Star",
        "optionC": "Cloud"
      },
      {
        "question": "What is the star compared to in the poem?",
        "optionA": "A flower",
        "optionB": "A diamond",
        "correctAnswer": "A diamond",
        "optionC": "A bird"
      },
      {
        "question": "When does the star twinkle?",
        "optionA": "During the day",
        "optionB": "In the afternoon",
        "optionC": "At night",
        "correctAnswer": "At night"
      },
      {
        "question": "Who thanks the star for its light?",
        "optionA": "A traveller",
        "correctAnswer": "A traveller",
        "optionB": "A teacher",
        "optionC": "A farmer"
      },
      {
        "question": "What does the star help the traveller do?",
        "optionA": "Sleep",
        "optionB": "Eat",
        "optionC": "See the way",
        "correctAnswer": "See the way"
      },
      {
        "question": "Where is the star placed?",
        "optionA": "In the river",
        "optionB": "In the sky",
        "correctAnswer": "In the sky",
        "optionC": "On the ground"
      },
      {
        "question": "What disappears before the star shines brightly?",
        "optionA": "Moon",
        "optionB": "Sun",
        "correctAnswer": "Sun",
        "optionC": "Cloud"
      },
      {
        "question": "What kind of spark does the star have?",
        "optionA": "Tiny",
        "correctAnswer": "Tiny",
        "optionB": "Big",
        "optionC": "Heavy"
      },
      {
        "question": "What does the poet wonder about?",
        "optionA": "The moon",
        "optionB": "The star",
        "correctAnswer": "The star",
        "optionC": "The river"
      },
      {
        "question": "How long does the star twinkle?",
        "optionA": "All night",
        "correctAnswer": "All night",
        "optionB": "All day",
        "optionC": "Only evening"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The star shines in the ______ sky.",
        "optionA": "dark blue",
        "correctAnswer": "dark blue",
        "optionB": "blue",
        "optionC": "green"
      },
      {
        "question": "The traveller walks in the ______.",
        "optionA": "dark",
        "correctAnswer": "dark",
        "optionB": "light",
        "optionC": "rain"
      },
      {
        "question": "The star gives ______ to others.",
        "optionA": "food",
        "optionB": "light",
        "correctAnswer": "light",
        "optionC": "water"
      },
      {
        "question": "The spark of the star is very ______.",
        "optionA": "big",
        "optionB": "loud",
        "optionC": "tiny",
        "correctAnswer": "tiny"
      },
      {
        "question": "The star appears when the ______ is gone.",
        "optionA": "moon",
        "optionB": "cloud",
        "optionC": "sun",
        "correctAnswer": "sun"
      },
      {
        "question": "The star helps people to ______.",
        "optionA": "jump",
        "optionB": "see",
        "correctAnswer": "see",
        "optionC": "sleep"
      },
      {
        "question": "The sky looks ______ at night.",
        "optionA": "bright",
        "optionB": "dark",
        "correctAnswer": "dark",
        "optionC": "white"
      },
      {
        "question": "The poet looks at the ______.",
        "optionA": "star",
        "correctAnswer": "star",
        "optionB": "tree",
        "optionC": "house"
      },
      {
        "question": "The star is very ______.",
        "optionA": "bright",
        "correctAnswer": "bright",
        "optionB": "dull",
        "optionC": "weak"
      },
      {
        "question": "The traveller says ______ to the star.",
        "optionA": "sorry",
        "optionB": "goodbye",
        "optionC": "thanks",
        "correctAnswer": "thanks"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The star shines during the daytime.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The star is compared to a diamond.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The traveller walks in the dark.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The sun shines at night.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The star helps the traveller.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The sky is dark at night.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The star gives no light.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The poet knows exactly what the star is.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The star twinkles all night.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The traveller does not need the star.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
