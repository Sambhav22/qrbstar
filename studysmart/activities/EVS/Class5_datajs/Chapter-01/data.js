export const chapter = "Chapter - 1: Water—Our Lifeline";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Where can water be found on Earth?",
        "optionA": "Only in rivers",
        "optionB": "Only in oceans",
        "optionC": "In many places like ground, clouds, and living things",
        "correctAnswer": "In many places like ground, clouds, and living things"
      },
      {
        "question": "What do streams join together to form?",
        "optionA": "Lakes",
        "optionB": "Rivers",
        "optionC": "Ponds",
        "correctAnswer": "Rivers"
      },
      {
        "question": "Which form of water is steam?",
        "optionA": "Solid",
        "optionB": "Liquid",
        "optionC": "Gas",
        "correctAnswer": "Gas"
      },
      {
        "question": "Which animal can live both on land and in water?",
        "optionA": "Fish",
        "optionB": "Frog",
        "optionC": "Bird",
        "correctAnswer": "Frog"
      },
      {
        "question": "Which place helps rainwater to soak into the ground?",
        "optionA": "Concrete roads",
        "optionB": "Buildings",
        "optionC": "Parks and gardens",
        "correctAnswer": "Parks and gardens"
      },
      {
        "question": "What happens to ice when it is kept outside?",
        "optionA": "It becomes vapour",
        "optionB": "It melts into water",
        "optionC": "It disappears",
        "correctAnswer": "It melts into water"
      },
      {
        "question": "Which of the following animals does NOT live in water?",
        "optionA": "Turtle",
        "optionB": "Dragonfly",
        "optionC": "Cow",
        "correctAnswer": "Cow"
      },
      {
        "question": "Where do most rivers begin?",
        "optionA": "Deserts",
        "optionB": "Mountains",
        "optionC": "Oceans",
        "correctAnswer": "Mountains"
      },
      {
        "question": "What causes water to change into vapour?",
        "optionA": "Cold",
        "optionB": "Heat",
        "optionC": "Wind",
        "correctAnswer": "Heat"
      },
      {
        "question": "Which plant floats on the surface of water?",
        "optionA": "Lotus",
        "optionB": "Reeds",
        "optionC": "Grass",
        "correctAnswer": "Lotus"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Water that sinks into the ground is called ______.",
        "optionA": "groundwater",
        "optionB": "surface water",
        "optionC": "rainwater",
        "correctAnswer": "groundwater"
      },
      {
        "question": "Water changes into vapour due to ______.",
        "optionA": "cooling",
        "optionB": "heating",
        "optionC": "freezing",
        "correctAnswer": "heating"
      },
      {
        "question": "Clouds are formed by the process of ______.",
        "optionA": "melting",
        "optionB": "evaporation",
        "optionC": "condensation",
        "correctAnswer": "condensation"
      },
      {
        "question": "Rivers, lakes, and ponds are examples of ______.",
        "optionA": "groundwater",
        "optionB": "surface water",
        "optionC": "vapour",
        "correctAnswer": "surface water"
      },
      {
        "question": "Ice is the ______ form of water.",
        "optionA": "liquid",
        "optionB": "gas",
        "optionC": "solid",
        "correctAnswer": "solid"
      },
      {
        "question": "Water taken out using wells is called ______.",
        "optionA": "sea water",
        "optionB": "groundwater",
        "optionC": "rainwater",
        "correctAnswer": "groundwater"
      },
      {
        "question": "Fish move in water using their ______.",
        "optionA": "fins",
        "optionB": "legs",
        "optionC": "wings",
        "correctAnswer": "fins"
      },
      {
        "question": "The continuous movement of water is called the ______.",
        "optionA": "water cycle",
        "optionB": "water flow",
        "optionC": "water system",
        "correctAnswer": "water cycle"
      },
      {
        "question": "Rivers flow through valleys and ______.",
        "optionA": "deserts",
        "optionB": "towns",
        "optionC": "clouds",
        "correctAnswer": "towns"
      },
      {
        "question": "Water vapour cools down to become ______ again.",
        "optionA": "solid",
        "optionB": "liquid",
        "optionC": "gas",
        "correctAnswer": "liquid"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Water is found inside fruits and vegetables.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Only a small amount of water on Earth is fresh.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Ice is the gas form of water.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Fish use gills to breathe underwater.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Groundwater is stored under soil and rocks.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Rivers give water to farms and people.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Water vapour rises when heated.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "All animals in water have legs like land animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Some plants float on water while others grow underwater.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Water cycle stops after rain falls.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
