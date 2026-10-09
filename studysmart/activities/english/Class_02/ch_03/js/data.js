export const chapter = "Chapter - 3: Two Seeds";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "How many seeds did the farmer sow?",
        "optionA": "One",
        "optionB": "Two",
        "correctAnswer": "Two",
        "optionC": "Three"
      },
      {
        "question": "What did the farmer do every day to help the seeds?",
        "optionA": "Watered them",
        "correctAnswer": "Watered them",
        "optionB": "Ignored them",
        "optionC": "Removed them"
      },
      {
        "question": "Which seed wanted to grow quickly and touch the sky?",
        "optionA": "First seed",
        "correctAnswer": "First seed",
        "optionB": "Second seed",
        "optionC": "Both seeds"
      },
      {
        "question": "What helped the plant get water and food?",
        "optionA": "Leaves",
        "optionB": "Roots",
        "correctAnswer": "Roots",
        "optionC": "Flowers"
      },
      {
        "question": "What grew on the plant after some time?",
        "optionA": "Fruits",
        "optionB": "Seeds",
        "optionC": "Flowers",
        "correctAnswer": "Flowers"
      },
      {
        "question": "Who asked the second seed why it did not grow?",
        "optionA": "Farmer",
        "optionB": "Hen",
        "optionC": "Plant",
        "correctAnswer": "Plant"
      },
      {
        "question": "What did the second seed do when the plant spoke to it?",
        "optionA": "Helped",
        "optionB": "Ignored it at first",
        "correctAnswer": "Ignored it at first",
        "optionC": "Grew quickly"
      },
      {
        "question": "What was the second seed afraid of if it grew?",
        "optionA": "A bird eating it",
        "correctAnswer": "A bird eating it",
        "optionB": "Rain",
        "optionC": "Sunlight"
      },
      {
        "question": "Who came looking for food in the courtyard?",
        "optionA": "Dog",
        "optionB": "Hen and chicks",
        "correctAnswer": "Hen and chicks",
        "optionC": "Cat"
      },
      {
        "question": "What happened to the second seed in the end?",
        "optionA": "It grew into a plant",
        "optionB": "It was eaten",
        "correctAnswer": "It was eaten",
        "optionC": "It flew away"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "The farmer sowed the seeds at the edge of his ________.",
        "optionA": "courtyard",
        "correctAnswer": "courtyard",
        "optionB": "house",
        "optionC": "garden"
      },
      {
        "question": "The farmer added ________ to help the seeds grow.",
        "optionA": "sand",
        "optionB": "manure",
        "correctAnswer": "manure",
        "optionC": "stones"
      },
      {
        "question": "The first seed had a ________ attitude.",
        "optionA": "negative",
        "optionB": "positive",
        "correctAnswer": "positive",
        "optionC": "lazy"
      },
      {
        "question": "The second seed did not grow its ________.",
        "optionA": "leaves",
        "optionB": "flowers",
        "optionC": "roots",
        "correctAnswer": "roots"
      },
      {
        "question": "The plant’s roots went deep into the ________.",
        "optionA": "water",
        "optionB": "soil",
        "correctAnswer": "soil",
        "optionC": "air"
      },
      {
        "question": "The flowers looked beautiful in the ________.",
        "optionA": "rain",
        "optionB": "sunlight",
        "correctAnswer": "sunlight",
        "optionC": "night"
      },
      {
        "question": "The second seed was afraid to open its ________.",
        "optionA": "buds",
        "correctAnswer": "buds",
        "optionB": "roots",
        "optionC": "leaves"
      },
      {
        "question": "The plant offered to ________ the second seed.",
        "optionA": "ignore",
        "optionB": "help",
        "correctAnswer": "help",
        "optionC": "leave"
      },
      {
        "question": "The hen found the seed in the ________.",
        "optionA": "sky",
        "optionB": "tree",
        "optionC": "ground",
        "correctAnswer": "ground"
      },
      {
        "question": "The hen came with her ________.",
        "optionA": "chicks",
        "correctAnswer": "chicks",
        "optionB": "friends",
        "optionC": "birds"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "The farmer took care of the seeds by watering them.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The first seed had a negative attitude.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The second seed was afraid to grow.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The plant grew tall with strong roots.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The second seed grew into a healthy plant.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "The hen and her chicks came looking for food.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The plant had beautiful flowers.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The second seed was eaten in the end.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The plant asked the seed why it did not grow.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "The story teaches us to have a positive attitude.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
