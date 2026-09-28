export const chapter = "Chapter - 6: Shelter";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "What does a house give us?",
        "optionA": "Food",
        "optionB": "Toys",
        "optionC": "Shelter",
        "correctAnswer": "Shelter"
      },
      {
        "question": "Which house is made from natural materials like mud and straw?",
        "optionA": "Kutcha house",
        "optionB": "Pucca house",
        "optionC": "Brick house",
        "correctAnswer": "Kutcha house"
      },
      {
        "question": "Which house is stronger and lasts for many years?",
        "optionA": "Hut",
        "optionB": "Pucca house",
        "optionC": "Tent",
        "correctAnswer": "Pucca house"
      },
      {
        "question": "Which room in the house is used for sleeping?",
        "optionA": "Kitchen",
        "optionB": "Bedroom",
        "optionC": "Bathroom",
        "correctAnswer": "Bedroom"
      },
      {
        "question": "Which room is used for bathing?",
        "optionA": "Bathroom",
        "optionB": "Bedroom",
        "optionC": "Kitchen",
        "correctAnswer": "Bathroom"
      },
      {
        "question": "Which material is used to build pucca houses?",
        "optionA": "Straw",
        "optionB": "Leaves",
        "optionC": "Bricks and cement",
        "correctAnswer": "Bricks and cement"
      },
      {
        "question": "What should we do to keep our house neat?",
        "optionA": "Break things",
        "optionB": "Clean it regularly",
        "optionC": "Throw waste on the floor",
        "correctAnswer": "Clean it regularly"
      },
      {
        "question": "Where should we throw waste in the house?",
        "optionA": "On the floor",
        "optionB": "In the dustbin",
        "optionC": "Outside the door",
        "correctAnswer": "In the dustbin"
      },
      {
        "question": "Which house is usually found in villages?",
        "optionA": "Kutcha house",
        "optionB": "Apartment",
        "optionC": "Flat",
        "correctAnswer": "Kutcha house"
      },
      {
        "question": "What should we close to keep dust and insects out?",
        "optionA": "Books",
        "optionB": "Doors and windows",
        "optionC": "Bags",
        "correctAnswer": "Doors and windows"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "A house protects us from ______.",
        "optionA": "toys",
        "optionB": "pencils",
        "optionC": "rain and sun",
        "correctAnswer": "rain and sun"
      },
      {
        "question": "Kutcha houses are made of ______ and straw.",
        "optionA": "mud",
        "optionB": "iron",
        "optionC": "glass",
        "correctAnswer": "mud"
      },
      {
        "question": "Pucca houses are made with ______ and cement.",
        "optionA": "paper",
        "optionB": "bricks",
        "optionC": "leaves",
        "correctAnswer": "bricks"
      },
      {
        "question": "We cook food in the ______.",
        "optionA": "kitchen",
        "optionB": "bedroom",
        "optionC": "bathroom",
        "correctAnswer": "kitchen"
      },
      {
        "question": "We sleep in the ______.",
        "optionA": "bedroom",
        "optionB": "kitchen",
        "optionC": "living room",
        "correctAnswer": "bedroom"
      },
      {
        "question": "We take a bath in the ______.",
        "optionA": "bedroom",
        "optionB": "kitchen",
        "optionC": "bathroom",
        "correctAnswer": "bathroom"
      },
      {
        "question": "Kutcha houses are mostly found in ______.",
        "optionA": "forests",
        "optionB": "rivers",
        "optionC": "villages",
        "correctAnswer": "villages"
      },
      {
        "question": "Pucca houses are mostly found in ______.",
        "optionA": "deserts",
        "optionB": "towns and cities",
        "optionC": "mountains",
        "correctAnswer": "towns and cities"
      },
      {
        "question": "We should throw waste in the ______.",
        "optionA": "dustbin",
        "optionB": "garden",
        "optionC": "road",
        "correctAnswer": "dustbin"
      },
      {
        "question": "A clean house keeps us ______.",
        "optionA": "healthy",
        "optionB": "tired",
        "optionC": "sleepy",
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
        "question": "A house protects us from rain and sun.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Kutcha houses are made from mud and straw.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Pucca houses are weak houses.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "A bedroom is used for sleeping.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "A bathroom is used for bathing.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "kutcha houses last longer than Pucca houses.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "We should keep our house clean.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We should throw waste on the floor.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Houses protect us from cold weather.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "A dustbin is used to collect useful things.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
