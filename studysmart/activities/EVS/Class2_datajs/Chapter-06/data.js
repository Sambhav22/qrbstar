export const chapter = "Chapter - 6: Plant Kingdom";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which plant is commonly used in homes for cough remedies?",
        "optionA": "Tulsi",
        "optionB": "Rose",
        "optionC": "Mango",
        "correctAnswer": "Tulsi"
      },
      {
        "question": "Which plant fibre is used to make clothes?",
        "optionA": "Neem",
        "optionB": "Cotton",
        "optionC": "Banana",
        "correctAnswer": "Cotton"
      },
      {
        "question": "Which plant fibre is used to make bags and ropes?",
        "optionA": "Mango",
        "optionB": "Jute",
        "optionC": "Apple",
        "correctAnswer": "Jute"
      },
      {
        "question": "What do cows and buffaloes eat from plants?",
        "optionA": "Grass",
        "optionB": "Sand",
        "optionC": "Stones",
        "correctAnswer": "Grass"
      },
      {
        "question": "Which plant product is used to make mats from coconut?",
        "optionA": "Jute",
        "optionB": "Cotton",
        "optionC": "Coir",
        "correctAnswer": "Coir"
      },
      {
        "question": "What helps plants grow strong and healthy in the soil?",
        "optionA": "Iron",
        "optionB": "Plastic",
        "optionC": "Manure",
        "correctAnswer": "Manure"
      },
      {
        "question": "Which plant is used as medicine for wounds?",
        "optionA": "Banana",
        "optionB": "Turmeric",
        "optionC": "Apple",
        "correctAnswer": "Turmeric"
      },
      {
        "question": "What do plants give us to keep the air fresh?",
        "optionA": "Smoke",
        "optionB": "Oxygen",
        "optionC": "Dust",
        "correctAnswer": "Oxygen"
      },
      {
        "question": "What are thin threads from plants used to make cloth called?",
        "optionA": "Fibres",
        "optionB": "Metals",
        "optionC": "Stones",
        "correctAnswer": "Fibres"
      },
      {
        "question": "What are plants called because they give us fresh air?",
        "optionA": "Lungs of the Earth",
        "optionB": "Eyes of the Earth",
        "optionC": "Hands of the Earth",
        "correctAnswer": "Lungs of the Earth"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Plants give us ______ to eat.",
        "optionA": "iron",
        "optionB": "plastic",
        "optionC": "food",
        "correctAnswer": "food"
      },
      {
        "question": "Plants give us ______ to breathe.",
        "optionA": "oxygen",
        "optionB": "dust",
        "optionC": "smoke",
        "correctAnswer": "oxygen"
      },
      {
        "question": "Cotton fibre is used to make ______.",
        "optionA": "bricks",
        "optionB": "clothes",
        "optionC": "toys",
        "correctAnswer": "clothes"
      },
      {
        "question": "Jute fibre is used to make ______.",
        "optionA": "sweets",
        "optionB": "bags",
        "optionC": "shoes",
        "correctAnswer": "bags"
      },
      {
        "question": "Tulsi leaves are used as ______.",
        "optionA": "wood",
        "optionB": "cloth",
        "optionC": "medicine",
        "correctAnswer": "medicine"
      },
      {
        "question": "Grass is used as ______ for cows and goats.",
        "optionA": "fodder",
        "optionB": "metal",
        "optionC": "sand",
        "correctAnswer": "fodder"
      },
      {
        "question": "Dried leaves and plant waste can be turned into ______.",
        "optionA": "manure",
        "optionB": "plastic",
        "optionC": "glass",
        "correctAnswer": "manure"
      },
      {
        "question": "Coir fibre comes from the ______ plant.",
        "optionA": "mango",
        "optionB": "coconut",
        "optionC": "neem",
        "correctAnswer": "coconut"
      },
      {
        "question": "Plants help keep the air ______.",
        "optionA": "dirty",
        "optionB": "clean",
        "optionC": "smoky",
        "correctAnswer": "clean"
      },
      {
        "question": "More plants mean ______ air around us.",
        "optionA": "cleaner",
        "optionB": "darker",
        "optionC": "noisier",
        "correctAnswer": "cleaner"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Plants give us food, medicines and fresh air.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Cotton is a plant fibre used to make clothes.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Animals like cows and goats depend on human for food.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Tulsi leaves are used for healing and home remedies.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Plant waste can be used to make manure.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Jute fibre is used for making bags and ropes.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Plants make the air dirty.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Grass and husks are used as fodder for animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Plants are called the “Lungs of the Earth”.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Plants are not important for animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
