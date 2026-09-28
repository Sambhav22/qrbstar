export const chapter = "Chapter - 10: Maps and Paths";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What did Meena and Aarav use to reach their friend’s house?",
        "optionA": "A map",
        "optionB": "A phone",
        "optionC": "A bus",
        "correctAnswer": "A map"
      },
      {
        "question": "What helped the children know they were on the right path?",
        "optionA": "Their teacher",
        "optionB": "Landmarks like a water tank",
        "optionC": "A book",
        "correctAnswer": "Landmarks like a water tank"
      },
      {
        "question": "Why are maps useful?",
        "optionA": "For decoration",
        "optionB": "To find places and give directions",
        "optionC": "For playing",
        "correctAnswer": "To find places and give directions"
      },
      {
        "question": "Which type of map shows mountains, rivers, and forests?",
        "optionA": "Political map",
        "optionB": "Thematic map",
        "optionC": "Physical map",
        "correctAnswer": "Physical map"
      },
      {
        "question": "What do maps use to represent things like roads and buildings?",
        "optionA": "Stories",
        "optionB": "Songs",
        "optionC": "Symbols",
        "correctAnswer": "Symbols"
      },
      {
        "question": "What does a thematic map show?",
        "optionA": "Many topics",
        "optionB": "One specific topic",
        "optionC": "No information",
        "correctAnswer": "One specific topic"
      },
      {
        "question": "What helps us understand symbols on a map easily?",
        "optionA": "Legend",
        "optionB": "Scale",
        "optionC": "Compass",
        "correctAnswer": "Legend"
      },
      {
        "question": "What helps us plan trips and find shortest routes?",
        "optionA": "Scale on a map",
        "optionB": "Directions",
        "optionC": "Landmarks",
        "correctAnswer": "Scale on a map"
      },
      {
        "question": "Which direction is usually shown at the top of a map?",
        "optionA": "South",
        "optionB": "North",
        "optionC": "West",
        "correctAnswer": "North"
      },
      {
        "question": "What is used in forests or mountains to find direction?",
        "optionA": "Ruler",
        "optionB": "Compass",
        "optionC": "Pencil",
        "correctAnswer": "Compass"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "A map is a ______ showing places.",
        "optionA": "story",
        "optionB": "drawing",
        "optionC": "picture book",
        "correctAnswer": "drawing"
      },
      {
        "question": "A ______ map shows countries, states, and cities.",
        "optionA": "political",
        "optionB": "physical",
        "optionC": "thematic",
        "correctAnswer": "political"
      },
      {
        "question": "A ______ explains the meaning of symbols on a map.",
        "optionA": "scale",
        "optionB": "compass",
        "optionC": "legend",
        "correctAnswer": "legend"
      },
      {
        "question": "The needle of a compass points to the ______ direction.",
        "optionA": "south",
        "optionB": "north",
        "optionC": "east",
        "correctAnswer": "north"
      },
      {
        "question": "Maps are ______ than the real world.",
        "optionA": "bigger",
        "optionB": "smaller",
        "optionC": "equal",
        "correctAnswer": "smaller"
      },
      {
        "question": "A ______ map shows natural features like mountains and rivers.",
        "optionA": "physical",
        "optionB": "political",
        "optionC": "thematic",
        "correctAnswer": "physical"
      },
      {
        "question": "A ______ helps us measure distance on a map.",
        "optionA": "symbol",
        "optionB": "scale",
        "optionC": "landmark",
        "correctAnswer": "scale"
      },
      {
        "question": "______ are things that are easy to notice when we travel.",
        "optionA": "Symbols",
        "optionB": "Colours",
        "optionC": "Landmarks",
        "correctAnswer": "Landmarks"
      },
      {
        "question": "Maps use ______ to help us find places.",
        "optionA": "directions",
        "optionB": "stories",
        "optionC": "pictures",
        "correctAnswer": "directions"
      },
      {
        "question": "A thematic map shows ______ topic.",
        "optionA": "many",
        "optionB": "one",
        "optionC": "no",
        "correctAnswer": "one"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Maps help us find places and understand the world.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "A legend is used to decorate a map.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Landmarks help people find their way.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "A compass needle always points to the North.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Physical maps show natural features like mountains and rivers.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Maps are larger than real places.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Directions help us follow maps correctly.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Symbols make maps difficult to understand.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Scale helps us know the distance between places.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Thematic maps show information about one topic.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
