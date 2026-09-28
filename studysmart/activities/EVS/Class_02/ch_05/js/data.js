export const chapter = "Chapter - 5: Houses";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What do we call a safe place where people live?",
        "optionA": "Playground",
        "optionB": "Shelter",
        "optionC": "Market",
        "correctAnswer": "Shelter"
      },
      {
        "question": "Which type of house is very strong and long-lasting?",
        "optionA": "Pucca house",
        "optionB": "Kutcha house",
        "optionC": "Tent",
        "correctAnswer": "Pucca house"
      },
      {
        "question": "Which house can be carried from one place to another easily?",
        "optionA": "Bungalow",
        "optionB": "Flat",
        "optionC": "Tent",
        "correctAnswer": "Tent"
      },
      {
        "question": "Which house floats on water?",
        "optionA": "Caravan",
        "optionB": "Houseboat",
        "optionC": "Hut",
        "correctAnswer": "Houseboat"
      },
      {
        "question": "Which house can move from place to place?",
        "optionA": "Caravan",
        "optionB": "Apartment",
        "optionC": "Flat",
        "correctAnswer": "Caravan"
      },
      {
        "question": "Which type of house is mostly found in villages?",
        "optionA": "Apartment",
        "optionB": "Pucca house",
        "optionC": "Kutcha house",
        "correctAnswer": "Kutcha house"
      },
      {
        "question": "What do houses protect us from?",
        "optionA": "Rain, heat, wind, and cold",
        "optionB": "Toys",
        "optionC": "Books",
        "correctAnswer": "Rain, heat, wind, and cold"
      },
      {
        "question": "Which material is used to build pucca houses?",
        "optionA": "Bricks and cement",
        "optionB": "Leaves",
        "optionC": "Straw",
        "correctAnswer": "Bricks and cement"
      },
      {
        "question": "Which house is made of canvas cloth?",
        "optionA": "Flat",
        "optionB": "Tent",
        "optionC": "Bungalow",
        "correctAnswer": "Tent"
      },
      {
        "question": "Why should we keep our house clean?",
        "optionA": "To break things",
        "optionB": "To stay healthy",
        "optionC": "To waste time",
        "correctAnswer": "To stay healthy"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Pucca houses are made of bricks, cement, iron, and ______.",
        "optionA": "sand",
        "optionB": "leaves",
        "optionC": "concrete",
        "correctAnswer": "concrete"
      },
      {
        "question": "Kutcha houses are made from mud, bamboo, and ______.",
        "optionA": "straw",
        "optionB": "glass",
        "optionC": "steel",
        "correctAnswer": "straw"
      },
      {
        "question": "A ______ floats on water.",
        "optionA": "hut",
        "optionB": "houseboat",
        "optionC": "flat",
        "correctAnswer": "houseboat"
      },
      {
        "question": "A tent is made of ______ cloth.",
        "optionA": "silk",
        "optionB": "canvas",
        "optionC": "wool",
        "correctAnswer": "canvas"
      },
      {
        "question": "A caravan is a ______ house.",
        "optionA": "movable",
        "optionB": "broken",
        "optionC": "weak",
        "correctAnswer": "movable"
      },
      {
        "question": "A house keeps us safe from ______ and rain.",
        "optionA": "books",
        "optionB": "toys",
        "optionC": "sun",
        "correctAnswer": "sun"
      },
      {
        "question": "We should throw garbage in the ______.",
        "optionA": "ground",
        "optionB": "road",
        "optionC": "dustbin",
        "correctAnswer": "dustbin"
      },
      {
        "question": "We should ______ the floor every day.",
        "optionA": "break",
        "optionB": "sweep",
        "optionC": "hide",
        "correctAnswer": "sweep"
      },
      {
        "question": "We should keep windows open for fresh ______.",
        "optionA": "smoke",
        "optionB": "air",
        "optionC": "dust",
        "correctAnswer": "air"
      },
      {
        "question": "Clean houses keep us ______ and happy.",
        "optionA": "healthy",
        "optionB": "sleepy",
        "optionC": "tired",
        "correctAnswer": "healthy"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Houses protect us from rain, heat, and cold.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Pucca houses are made from mud and straw.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Tents are movable houses.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Houseboats float on water.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Kutcha houses are stronger than pucca houses.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Caravan is a moving house.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We should throw garbage on the ground.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Clean houses keep us healthy.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Windows should be kept open for fresh air and sunlight.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Houses are not important for families.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
