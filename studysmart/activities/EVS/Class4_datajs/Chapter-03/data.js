export const chapter = "Chapter - 3: A Walk with Nature";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What do nature trails help us notice?",
        "optionA": "Colours, shapes and sounds",
        "optionB": "Only animals",
        "optionC": "Only trees",
        "correctAnswer": "Colours, shapes and sounds"
      },
      {
        "question": "Where do land animals like lions and tigers live?",
        "optionA": "In water",
        "optionB": "On the ground",
        "optionC": "In the sky",
        "correctAnswer": "On the ground"
      },
      {
        "question": "Which animal can live both on land and in water?",
        "optionA": "Frog",
        "optionB": "Eagle",
        "optionC": "Lion",
        "correctAnswer": "Frog"
      },
      {
        "question": "What can we learn by looking at animal footprints?",
        "optionA": "Their colour",
        "optionB": "Their size",
        "optionC": "Which animal passed by",
        "correctAnswer": "Which animal passed by"
      },
      {
        "question": "What helps birds catch food or hold branches?",
        "optionA": "Wings",
        "optionB": "Claws",
        "optionC": "Feathers",
        "correctAnswer": "Claws"
      },
      {
        "question": "Which animal has fins and gills?",
        "optionA": "Frog",
        "optionB": "Fish",
        "optionC": "Turtle",
        "correctAnswer": "Fish"
      },
      {
        "question": "What do ants do on a nature trail?",
        "optionA": "Fly",
        "optionB": "Carry food",
        "optionC": "Sleep",
        "correctAnswer": "Carry food"
      },
      {
        "question": "Which insect has colourful wings and loves flowers?",
        "optionA": "Spider",
        "optionB": "Beetle",
        "optionC": "Butterfly",
        "correctAnswer": "Butterfly"
      },
      {
        "question": "Which leaf is long and thin?",
        "optionA": "Coconut leaf",
        "optionB": "Lotus leaf",
        "optionC": "Guava leaf",
        "correctAnswer": "Coconut leaf"
      },
      {
        "question": "What is the wide and flat part of the leaf called?",
        "optionA": "Margin",
        "optionB": "Blade (lamina)",
        "optionC": "Tip",
        "correctAnswer": "Blade (lamina)"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Nature trails are special walks in forests or ______.",
        "optionA": "houses",
        "optionB": "parks",
        "optionC": "roads",
        "correctAnswer": "parks"
      },
      {
        "question": "Birds use their ______ to eat food.",
        "optionA": "wings",
        "optionB": "beaks",
        "optionC": "tails",
        "correctAnswer": "beaks"
      },
      {
        "question": "Some animals hide in ______.",
        "optionA": "bushes",
        "optionB": "sky",
        "optionC": "water",
        "correctAnswer": "bushes"
      },
      {
        "question": "Fish use ______ to swim.",
        "optionA": "legs",
        "optionB": "wings",
        "optionC": "fins",
        "correctAnswer": "fins"
      },
      {
        "question": "Frogs can live on land and in ______.",
        "optionA": "air",
        "optionB": "water",
        "optionC": "trees",
        "correctAnswer": "water"
      },
      {
        "question": "Insects help ______ the forest.",
        "optionA": "clean",
        "optionB": "burn",
        "optionC": "destroy",
        "correctAnswer": "clean"
      },
      {
        "question": "Leaves come in different ______ and sizes.",
        "optionA": "colours",
        "optionB": "shapes",
        "optionC": "sounds",
        "correctAnswer": "shapes"
      },
      {
        "question": "The thick line in the middle of the leaf is called the ______.",
        "optionA": "vein",
        "optionB": "margin",
        "optionC": "midrib",
        "correctAnswer": "midrib"
      },
      {
        "question": "The pointed end of a leaf is called the ______.",
        "optionA": "tip",
        "optionB": "base",
        "optionC": "stem",
        "correctAnswer": "tip"
      },
      {
        "question": "The petiole joins the leaf to the ______.",
        "optionA": "root",
        "optionB": "stem",
        "optionC": "flower",
        "correctAnswer": "stem"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Nature trails help us learn about our environment.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "All animals live only on land.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Some birds fly in groups.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Footprints help us know which animals live nearby.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Fish can breathe underwater using gills.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Turtles can only live in water.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Ants carry food in lines.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Leaves can be rough, smooth, or prickly.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Mint leaves smell strong and spicy.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The margin is the outer edge of a leaf.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
