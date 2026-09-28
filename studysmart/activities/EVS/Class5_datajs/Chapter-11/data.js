export const chapter = "Chapter - 11: Nature’s Rhythms";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What happens when the Earth faces the Sun?",
        "optionA": "Night occurs",
        "optionB": "Day occurs",
        "optionC": "Rain falls",
        "correctAnswer": "Day occurs"
      },
      {
        "question": "Which bird is heard before it rains?",
        "optionA": "Sparrow",
        "optionB": "Koel",
        "optionC": "Peacock",
        "correctAnswer": "Koel"
      },
      {
        "question": "What do butterflies do in the morning?",
        "optionA": "Visit flowers",
        "optionB": "Hide in shade",
        "optionC": "Sleep",
        "correctAnswer": "Visit flowers"
      },
      {
        "question": "What happens to shadows during the day?",
        "optionA": "Stay the same",
        "optionB": "Change size",
        "optionC": "Disappear completely",
        "correctAnswer": "Change size"
      },
      {
        "question": "Which season has the longest days?",
        "optionA": "Winter",
        "optionB": "Autumn",
        "optionC": "Summer",
        "correctAnswer": "Summer"
      },
      {
        "question": "What do people wear in winter to keep warm?",
        "optionA": "Cotton clothes",
        "optionB": "Woollen clothes",
        "optionC": "Raincoats",
        "correctAnswer": "Woollen clothes"
      },
      {
        "question": "What fills rivers and lakes during rainy season?",
        "optionA": "Wind",
        "optionB": "Rainwater",
        "optionC": "Sunlight",
        "correctAnswer": "Rainwater"
      },
      {
        "question": "Which season is called the “season of flowers”?",
        "optionA": "Spring",
        "optionB": "Autumn",
        "optionC": "Winter",
        "correctAnswer": "Spring"
      },
      {
        "question": "What do farmers do during harvest time?",
        "optionA": "Collect crops",
        "optionB": "Cook food",
        "optionC": "Build houses",
        "correctAnswer": "Collect crops"
      },
      {
        "question": "What happens to leaves in autumn?",
        "optionA": "They grow bigger",
        "optionB": "They fall off",
        "optionC": "They turn blue",
        "correctAnswer": "They fall off"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The Sun rises in the ______.",
        "optionA": "evening",
        "optionB": "night",
        "optionC": "morning",
        "correctAnswer": "morning"
      },
      {
        "question": "The Earth moves like a ______.",
        "optionA": "cube",
        "optionB": "spinning top",
        "optionC": "triangle",
        "correctAnswer": "spinning top"
      },
      {
        "question": "Flowers usually open in the ______.",
        "optionA": "morning",
        "optionB": "midnight",
        "optionC": "afternoon",
        "correctAnswer": "morning"
      },
      {
        "question": "Birds become ______ as the day gets warmer.",
        "optionA": "louder",
        "optionB": "faster",
        "optionC": "quieter",
        "correctAnswer": "quieter"
      },
      {
        "question": "Summer is the ______ season of the year.",
        "optionA": "coldest",
        "optionB": "hottest",
        "optionC": "wettest",
        "correctAnswer": "hottest"
      },
      {
        "question": "In winter, people wear ______ clothes.",
        "optionA": "woollen",
        "optionB": "cotton",
        "optionC": "silk",
        "correctAnswer": "woollen"
      },
      {
        "question": "The sky is covered with dark ______ in rainy season.",
        "optionA": "stars",
        "optionB": "clouds",
        "optionC": "smoke",
        "correctAnswer": "clouds"
      },
      {
        "question": "Trees shed their ______ in autumn.",
        "optionA": "flowers",
        "optionB": "fruits",
        "optionC": "leaves",
        "correctAnswer": "leaves"
      },
      {
        "question": "A ______ helps us see Earth and its places.",
        "optionA": "map",
        "optionB": "globe",
        "optionC": "chart",
        "correctAnswer": "globe"
      },
      {
        "question": "Rainy season comes after ______ season.",
        "optionA": "winter",
        "optionB": "summer",
        "optionC": "spring",
        "correctAnswer": "summer"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The Earth rotates on its axis.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Shadows do not change during the day.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Butterflies hide in shade later in the day.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Winter has longer days than nights.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Rain brings cool and fresh weather.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "A globe shows oceans and land.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Spring comes before winter.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Some birds travel during different seasons.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "The sky turns orange and pink in the evening.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Festivals are not connected to seasons.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
