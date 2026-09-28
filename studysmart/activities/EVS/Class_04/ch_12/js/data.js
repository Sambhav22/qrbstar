export const chapter = "Chapter - 12: Houses Then and Now";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What is a house used for?",
        "optionA": "Playing games",
        "optionB": "Storing vehicles",
        "optionC": "Living with family",
        "correctAnswer": "Living with family"
      },
      {
        "question": "Which material was commonly used in old houses?",
        "optionA": "Plastic",
        "optionB": "Mud",
        "optionC": "Glass",
        "correctAnswer": "Mud"
      },
      {
        "question": "What did people use to build strong huts in forests?",
        "optionA": "Bamboo",
        "optionB": "Cement",
        "optionC": "Iron",
        "correctAnswer": "Bamboo"
      },
      {
        "question": "How were walls made in old houses?",
        "optionA": "Using machines",
        "optionB": "By piling mud or clay in layers",
        "optionC": "Using plastic sheets",
        "correctAnswer": "By piling mud or clay in layers"
      },
      {
        "question": "Which material helps to stick bricks together in modern houses?",
        "optionA": "Cement",
        "optionB": "Water",
        "optionC": "Sand",
        "correctAnswer": "Cement"
      },
      {
        "question": "What helps builders make tall buildings today?",
        "optionA": "Animals",
        "optionB": "Hands only",
        "optionC": "Machines and cranes",
        "correctAnswer": "Machines and cranes"
      },
      {
        "question": "Which type of house is found in snowy places?",
        "optionA": "Bungalow",
        "optionB": "Igloo",
        "optionC": "Apartment",
        "correctAnswer": "Igloo"
      },
      {
        "question": "What is used for windows in modern houses?",
        "optionA": "Mud",
        "optionB": "Glass",
        "optionC": "Leaves",
        "correctAnswer": "Glass"
      },
      {
        "question": "What is used to collect rainwater in green homes?",
        "optionA": "Tank",
        "optionB": "Plate",
        "optionC": "Box",
        "correctAnswer": "Tank"
      },
      {
        "question": "What keeps homes safe in modern times?",
        "optionA": "Toys",
        "optionB": "Curtains",
        "optionC": "Security systems",
        "correctAnswer": "Security systems"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "A house is a place where people ______.",
        "optionA": "play",
        "optionB": "live",
        "optionC": "jump",
        "correctAnswer": "live"
      },
      {
        "question": "Old houses were made using ______ and clay.",
        "optionA": "plastic",
        "optionB": "mud",
        "optionC": "glass",
        "correctAnswer": "mud"
      },
      {
        "question": "Families in the past lived in ______ or two rooms.",
        "optionA": "many",
        "optionB": "ten",
        "optionC": "one",
        "correctAnswer": "one"
      },
      {
        "question": "Houses in rainy areas are built on ______.",
        "optionA": "roads",
        "optionB": "sand",
        "optionC": "stilts",
        "correctAnswer": "stilts"
      },
      {
        "question": "Modern houses use ______ to make walls strong.",
        "optionA": "leaves",
        "optionB": "cement",
        "optionC": "straw",
        "correctAnswer": "cement"
      },
      {
        "question": "Solar panels use ______ to produce electricity.",
        "optionA": "wind",
        "optionB": "sunlight",
        "optionC": "water",
        "correctAnswer": "sunlight"
      },
      {
        "question": "Apartments are found in ______ buildings.",
        "optionA": "tall",
        "optionB": "short",
        "optionC": "small",
        "correctAnswer": "tall"
      },
      {
        "question": "Rainwater is collected in a ______.",
        "optionA": "tank",
        "optionB": "box",
        "optionC": "plate",
        "correctAnswer": "tank"
      },
      {
        "question": "Clean homes help remove ______.",
        "optionA": "toys",
        "optionB": "books",
        "optionC": "germs",
        "correctAnswer": "germs"
      },
      {
        "question": "Igloos are made from blocks of ______.",
        "optionA": "wood",
        "optionB": "ice",
        "optionC": "mud",
        "correctAnswer": "ice"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Old houses were built using bamboo and wood.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Mud walls keep houses cool in hot places.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Families in old houses lived far apart from each other.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Machines are used to build modern houses.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Houses on stilts protect people from floods.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Solar panels help save electricity.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Thatched roofs are made of plastic.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Clean homes help families stay healthy.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Igloos are found in hot desert areas.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Cement is used in modern construction.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
