export const chapter = "Chapter - 7: A Nice Cup of Tea";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What does tea from an urn taste like?",
        "optionA": "Tasteless",
        "correctAnswer": "Tasteless",
        "optionB": "Fresh",
        "optionC": "Sweet"
      },
      {
        "question": "What does army tea taste of?",
        "optionA": "Milk and sugar",
        "optionB": "Grease and whitewash",
        "correctAnswer": "Grease and whitewash",
        "optionC": "Lemon"
      },
      {
        "question": "What kind of tea does the author prefer?",
        "optionA": "China tea",
        "optionB": "Indian tea",
        "correctAnswer": "Indian tea",
        "optionC": "Herbal tea"
      },
      {
        "question": "What should be used to make tea?",
        "optionA": "Cup",
        "optionB": "Glass",
        "optionC": "Teapot",
        "correctAnswer": "Teapot"
      },
      {
        "question": "What should be the condition of water while pouring into tea?",
        "optionA": "Warm",
        "optionB": "Boiling",
        "correctAnswer": "Boiling",
        "optionC": "Cold"
      },
      {
        "question": "What should be done after making tea?",
        "optionA": "Stir or shake it",
        "correctAnswer": "Stir or shake it",
        "optionB": "Leave it untouched",
        "optionC": "Throw it away"
      },
      {
        "question": "What type of cup is recommended by the author?",
        "optionA": "Flat cup",
        "optionB": "Plastic cup",
        "optionC": "Cylindrical cup",
        "correctAnswer": "Cylindrical cup"
      },
      {
        "question": "What happens if milk is too creamy?",
        "optionA": "Improves taste",
        "optionB": "Gives a sickly taste",
        "correctAnswer": "Gives a sickly taste",
        "optionC": "Makes tea cold"
      },
      {
        "question": "What should be poured first into the cup?",
        "optionA": "Milk",
        "optionB": "Tea",
        "correctAnswer": "Tea",
        "optionC": "Sugar"
      },
      {
        "question": "What is tea meant to be according to the author?",
        "optionA": "Bitter",
        "correctAnswer": "Bitter",
        "optionB": "Sweet",
        "optionC": "Sour"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Tea should be made in a ______.",
        "optionA": "pan",
        "optionB": "teapot",
        "correctAnswer": "teapot",
        "optionC": "bottle"
      },
      {
        "question": "Tea leaves must be allowed to ______ properly.",
        "optionA": "dry",
        "optionB": "infuse",
        "correctAnswer": "infuse",
        "optionC": "burn"
      },
      {
        "question": "The teapot should be ______ before use.",
        "optionA": "cooled",
        "optionB": "broken",
        "optionC": "warmed",
        "correctAnswer": "warmed"
      },
      {
        "question": "Tea should be ______ in strength.",
        "optionA": "weak",
        "optionB": "strong",
        "correctAnswer": "strong",
        "optionC": "thin"
      },
      {
        "question": "The water should be ______ at the time of pouring.",
        "optionA": "cold",
        "optionB": "boiling",
        "correctAnswer": "boiling",
        "optionC": "still"
      },
      {
        "question": "Tea leaves should be left to ______ after shaking.",
        "optionA": "settle",
        "correctAnswer": "settle",
        "optionB": "float",
        "optionC": "disappear"
      },
      {
        "question": "Milk should not be too ______.",
        "optionA": "creamy",
        "correctAnswer": "creamy",
        "optionB": "thin",
        "optionC": "cold"
      },
      {
        "question": "Tea is one of the ______ of civilization.",
        "optionA": "parts",
        "optionB": "rules",
        "optionC": "mainstays",
        "correctAnswer": "mainstays"
      },
      {
        "question": "Tea should be poured into the ______ first.",
        "optionA": "kettle",
        "optionB": "cup",
        "correctAnswer": "cup",
        "optionC": "pot"
      },
      {
        "question": "Tea without sugar tastes ______.",
        "optionA": "sweet",
        "optionB": "bitter",
        "correctAnswer": "bitter",
        "optionC": "salty"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Tea made in a cauldron tastes good.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "China tea gives strong stimulation.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Tea should be made in small quantities.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Tea leaves should be trapped in bags for better taste.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The teapot should be warmed before making tea.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Boiling water is necessary for making tea.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Flat cups are better than cylindrical cups.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Tea should be stirred or shaken after making.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Sugar improves the real flavour of tea.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Tea-making has many detailed rules.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
