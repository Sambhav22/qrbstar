export const chapter = "Chapter - 13: Human Activities and Our Resources";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which activity releases harmful gases into the air and causes air pollution?",
        "optionA": "Planting trees",
        "optionB": "Burning fuel in vehicles",
        "correctAnswer": "Burning fuel in vehicles",
        "optionC": "Collecting rainwater"
      },
      {
        "question": "What do we call substances that make air, water, or land dirty and unsafe?",
        "optionA": "Pollutants",
        "correctAnswer": "Pollutants",
        "optionB": "Resources",
        "optionC": "Cleaners"
      },
      {
        "question": "Which pollution is caused by dumping plastic and metal waste on the ground?",
        "optionA": "Water pollution",
        "optionB": "Land pollution",
        "correctAnswer": "Land pollution",
        "optionC": "Noise pollution"
      },
      {
        "question": "Which natural event can also add smoke and gases to the air?",
        "optionA": "Wildfire",
        "correctAnswer": "Wildfire",
        "optionB": "Earthquake",
        "optionC": "Flood"
      },
      {
        "question": "Which pollution mainly affects fish and other aquatic animals?",
        "optionA": "Air pollution",
        "optionB": "Water pollution",
        "correctAnswer": "Water pollution",
        "optionC": "Noise pollution"
      },
      {
        "question": "Which gas released by burning fossil fuels increases global warming?",
        "optionA": "Oxygen",
        "optionB": "Nitrogen",
        "optionC": "Carbon dioxide",
        "correctAnswer": "Carbon dioxide"
      },
      {
        "question": "Which human activity increases noise pollution on busy roads?",
        "optionA": "Tree plantation",
        "optionB": "Vehicle honking",
        "correctAnswer": "Vehicle honking",
        "optionC": "Water storage"
      },
      {
        "question": "What happens to cities when air pollution increases for a long time?",
        "optionA": "Formation of smog",
        "correctAnswer": "Formation of smog",
        "optionB": "Better visibility",
        "optionC": "Increase in rainfall"
      },
      {
        "question": "Which group of animals is directly affected when soil becomes polluted?",
        "optionA": "Birds",
        "optionB": "Insects and worms",
        "correctAnswer": "Insects and worms",
        "optionC": "Fish"
      },
      {
        "question": "Which action helps in reducing global warming?",
        "optionA": "Cutting forests",
        "optionB": "Planting more trees",
        "correctAnswer": "Planting more trees",
        "optionC": "Burning waste"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Pollution makes our environment dirty and __________.",
        "optionA": "useful",
        "optionB": "unsafe",
        "correctAnswer": "unsafe",
        "optionC": "colourful"
      },
      {
        "question": "Waste that remains in the environment for a long time is called __________ waste.",
        "optionA": "non-biodegradable",
        "correctAnswer": "non-biodegradable",
        "optionB": "biodegradable",
        "optionC": "natural"
      },
      {
        "question": "Oil spills mainly damage __________ life.",
        "optionA": "forest",
        "optionB": "marine",
        "correctAnswer": "marine",
        "optionC": "desert"
      },
      {
        "question": "Loud sounds for a long time can cause __________ pollution.",
        "optionA": "air",
        "optionB": "land",
        "optionC": "noise",
        "correctAnswer": "noise"
      },
      {
        "question": "Polluted water can spread __________ to people.",
        "optionA": "oxygen",
        "optionB": "diseases",
        "correctAnswer": "diseases",
        "optionC": "minerals"
      },
      {
        "question": "Cutting down trees increases __________ dioxide in the air.",
        "optionA": "oxygen",
        "optionB": "carbon",
        "correctAnswer": "carbon",
        "optionC": "nitrogen"
      },
      {
        "question": "Chemicals from waste can mix with __________ water under the ground.",
        "optionA": "rain",
        "optionB": "river",
        "optionC": "underground",
        "correctAnswer": "underground"
      },
      {
        "question": "Smoke from factories makes air unhealthy for __________.",
        "optionA": "breathing",
        "correctAnswer": "breathing",
        "optionB": "walking",
        "optionC": "writing"
      },
      {
        "question": "Global warming causes melting of __________ and ice caps.",
        "optionA": "rocks",
        "optionB": "glaciers",
        "correctAnswer": "glaciers",
        "optionC": "soil"
      },
      {
        "question": "Recycling waste helps in reducing __________.",
        "optionA": "pollution",
        "correctAnswer": "pollution",
        "optionB": "rainfall",
        "optionC": "temperature"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Air pollution can cause breathing problems in humans.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Polluted water is safe for fish and birds to live in.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Dumping garbage on land can reduce soil quality.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Noise pollution can disturb sleep and concentration.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Global warming is caused only by natural reasons.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Trees help clean the air by absorbing carbon dioxide.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Oil spills in oceans affect only water colour, not animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Long exposure to loud noise can damage hearing.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Land pollution can harm insects living in the soil.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Using bicycles instead of cars can help reduce pollution.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
