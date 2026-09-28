export const chapter = "Chapter - 9: Plants Around Us";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which plant has a thick woody stem called a trunk?",
        "optionA": "Creeper",
        "optionB": "Herb",
        "optionC": "Tree",
        "correctAnswer": "Tree"
      },
      {
        "question": "Which plant is bushy and has many branches near the ground?",
        "optionA": "Shrub",
        "optionB": "Herb",
        "optionC": "Tree",
        "correctAnswer": "Shrub"
      },
      {
        "question": "Which plant has soft green stems and is usually small?",
        "optionA": "Herb",
        "optionB": "Shrub",
        "optionC": "Tree",
        "correctAnswer": "Herb"
      },
      {
        "question": "Which plant grows along the ground with weak stems?",
        "optionA": "Tree",
        "optionB": "Creeper",
        "optionC": "Shrub",
        "correctAnswer": "Creeper"
      },
      {
        "question": "Which plant grows upward by holding onto sticks or walls?",
        "optionA": "Herb",
        "optionB": "Climber",
        "optionC": "Tree",
        "correctAnswer": "Climber"
      },
      {
        "question": "Which plant is bigger than shrubs and herbs?",
        "optionA": "Herb",
        "optionB": "Creeper",
        "optionC": "Tree",
        "correctAnswer": "Tree"
      },
      {
        "question": "Which plant makes our surroundings cool by giving shade?",
        "optionA": "Creeper",
        "optionB": "Herb",
        "optionC": "Tree",
        "correctAnswer": "Tree"
      },
      {
        "question": "Which plant usually grows in parks and gardens like rose?",
        "optionA": "Shrub",
        "optionB": "Tree",
        "optionC": "Herb",
        "correctAnswer": "Shrub"
      },
      {
        "question": "Which plant type includes mint and coriander?",
        "optionA": "Herb",
        "optionB": "Shrub",
        "optionC": "Tree",
        "correctAnswer": "Herb"
      },
      {
        "question": "Which plant spreads on the ground and bears fruits like pumpkin?",
        "optionA": "Tree",
        "optionB": "Creeper",
        "optionC": "Shrub",
        "correctAnswer": "Creeper"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Trees have strong stems called ______.",
        "optionA": "trunks",
        "optionB": "leaves",
        "optionC": "flowers",
        "correctAnswer": "trunks"
      },
      {
        "question": "Herbs are ______ plants with soft stems.",
        "optionA": "big",
        "optionB": "tall",
        "optionC": "small",
        "correctAnswer": "small"
      },
      {
        "question": "Shrubs have many branches near the ______.",
        "optionA": "ground",
        "optionB": "sky",
        "optionC": "roof",
        "correctAnswer": "ground"
      },
      {
        "question": "Climbers grow upward with the help of ______.",
        "optionA": "soil",
        "optionB": "support",
        "optionC": "stones",
        "correctAnswer": "support"
      },
      {
        "question": "Creepers grow along the ______.",
        "optionA": "wall",
        "optionB": "ground",
        "optionC": "roof",
        "correctAnswer": "ground"
      },
      {
        "question": "Plants make the Earth ______ and beautiful.",
        "optionA": "dry",
        "optionB": "grey",
        "optionC": "green",
        "correctAnswer": "green"
      },
      {
        "question": "Mint is an example of a ______.",
        "optionA": "tree",
        "optionB": "shrub",
        "optionC": "herb",
        "correctAnswer": "herb"
      },
      {
        "question": "Rose is an example of a ______.",
        "optionA": "herb",
        "optionB": "shrub",
        "optionC": "tree",
        "correctAnswer": "shrub"
      },
      {
        "question": "Pumpkin grows on a ______.",
        "optionA": "shrub",
        "optionB": "creeper",
        "optionC": "tree",
        "correctAnswer": "creeper"
      },
      {
        "question": "Banyan is an example of a ______.",
        "optionA": "tree",
        "optionB": "shrub",
        "optionC": "herb",
        "correctAnswer": "tree"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Trees have thick woody stems called trunks.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Herbs are tall plants like trees.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Shrubs have many branches near the ground.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Creepers grow along the ground.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Climbers need support to grow upward.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Trees give us shade.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Mint is a shrub.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Pumpkin grows on a creeper.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Plants make the Earth green and beautiful.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Herbs have thick woody trunks.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
