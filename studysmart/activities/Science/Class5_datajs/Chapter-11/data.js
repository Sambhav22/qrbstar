export const chapter = "Chapter - 11: Rocks and Minerals";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which rock is formed when magma cools slowly deep inside the Earth?",
        "optionA": "Basalt",
        "optionB": "Granite",
        "correctAnswer": "Granite",
        "optionC": "Slate"
      },
      {
        "question": "Which rock is very light and can float on water?",
        "optionA": "Limestone",
        "optionB": "Pumice",
        "correctAnswer": "Pumice",
        "optionC": "Sandstone"
      },
      {
        "question": "Which rock is used for making railway tracks and roads?",
        "optionA": "Basalt",
        "correctAnswer": "Basalt",
        "optionB": "Marble",
        "optionC": "Shale"
      },
      {
        "question": "Which rock is made from grains of sand?",
        "optionA": "Conglomerate",
        "optionB": "Sandstone",
        "correctAnswer": "Sandstone",
        "optionC": "Gneiss"
      },
      {
        "question": "Which rock is formed from limestone due to heat and pressure?",
        "optionA": "Marble",
        "correctAnswer": "Marble",
        "optionB": "Granite",
        "optionC": "Slate"
      },
      {
        "question": "Which rock has bands of glittering minerals?",
        "optionA": "Pumice",
        "optionB": "Shale",
        "optionC": "Gneiss",
        "correctAnswer": "Gneiss"
      },
      {
        "question": "Which rock splits easily into thin sheets?",
        "optionA": "Slate",
        "correctAnswer": "Slate",
        "optionB": "Basalt",
        "optionC": "Granite"
      },
      {
        "question": "Which rock is used in ancient buildings like the Red Fort?",
        "optionA": "Limestone",
        "optionB": "Sandstone",
        "correctAnswer": "Sandstone",
        "optionC": "Marble"
      },
      {
        "question": "Which rock is formed from shale?",
        "optionA": "Marble",
        "optionB": "Slate",
        "correctAnswer": "Slate",
        "optionC": "Granite"
      },
      {
        "question": "Which rock is rough and made of pebbles and stones?",
        "optionA": "Limestone",
        "optionB": "Sandstone",
        "optionC": "Conglomerate",
        "correctAnswer": "Conglomerate"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Granite is an __________ rock.",
        "optionA": "sedimentary",
        "optionB": "metamorphic",
        "optionC": "igneous",
        "correctAnswer": "igneous"
      },
      {
        "question": "Basalt forms when lava cools __________ on the Earth’s surface.",
        "optionA": "slowly",
        "optionB": "quickly",
        "correctAnswer": "quickly",
        "optionC": "underground"
      },
      {
        "question": "Pumice has many __________ holes.",
        "optionA": "water",
        "optionB": "air",
        "correctAnswer": "air",
        "optionC": "stone"
      },
      {
        "question": "Limestone contains a mineral called __________.",
        "optionA": "calcite",
        "correctAnswer": "calcite",
        "optionB": "mica",
        "optionC": "quartz"
      },
      {
        "question": "Shale is formed from fine particles of clay and __________.",
        "optionA": "sand",
        "optionB": "mud",
        "correctAnswer": "mud",
        "optionC": "gravel"
      },
      {
        "question": "Slate is commonly used to make __________.",
        "optionA": "bricks",
        "optionB": "blackboards",
        "correctAnswer": "blackboards",
        "optionC": "statues"
      },
      {
        "question": "Coal is formed from the remains of __________ plants.",
        "optionA": "sea",
        "optionB": "desert",
        "optionC": "ancient",
        "correctAnswer": "ancient"
      },
      {
        "question": "Petroleum is refined to produce petrol and __________.",
        "optionA": "cement",
        "optionB": "diesel",
        "correctAnswer": "diesel",
        "optionC": "chalk"
      },
      {
        "question": "Minerals can be __________ or non-metallic.",
        "optionA": "metallic",
        "correctAnswer": "metallic",
        "optionB": "fossil",
        "optionC": "liquid"
      },
      {
        "question": "Limestone is used in making cement and __________.",
        "optionA": "glass",
        "optionB": "chalk",
        "correctAnswer": "chalk",
        "optionC": "plastic"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Granite is a very hard rock.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Pumice sinks in water.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Shale is a soft rock.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Marble is used for statues and buildings.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Basalt is black or dark grey in colour.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Coal is a renewable resource.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Gneiss is formed from granite.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Limestone comes from shells of sea creatures.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Minerals are found inside rocks.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Petroleum should be conserved because it is non-renewable.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
