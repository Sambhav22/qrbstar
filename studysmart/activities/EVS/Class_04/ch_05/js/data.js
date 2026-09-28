export const chapter = "Chapter - 5: Shelters for Animals";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which animals live in open places?",
        "optionA": "Elephants",
        "optionB": "Fish",
        "optionC": "Snakes",
        "correctAnswer": "Elephants"
      },
      {
        "question": "Which animals live both on land and in water?",
        "optionA": "Amphibians",
        "optionB": "Birds",
        "optionC": "Mammals",
        "correctAnswer": "Amphibians"
      },
      {
        "question": "Where do bats rest during the day?",
        "optionA": "Trees",
        "optionB": "Caves or tree hollows",
        "optionC": "Water",
        "correctAnswer": "Caves or tree hollows"
      },
      {
        "question": "Which material is used by animals to build their homes?",
        "optionA": "Plastic",
        "optionB": "Metal",
        "optionC": "Twigs and leaves",
        "correctAnswer": "Twigs and leaves"
      },
      {
        "question": "Which animals use coral reefs as shelter?",
        "optionA": "Fish",
        "optionB": "Tigers",
        "optionC": "Elephants",
        "correctAnswer": "Fish"
      },
      {
        "question": "Which shelter remains cool in summer and warm in winter?",
        "optionA": "Nest",
        "optionB": "Cave",
        "optionC": "Tree",
        "correctAnswer": "Cave"
      },
      {
        "question": "Which animal carries its own shelter?",
        "optionA": "Snail",
        "optionB": "Monkey",
        "optionC": "Bird",
        "correctAnswer": "Snail"
      },
      {
        "question": "Which animals rely on their keen senses in open places?",
        "optionA": "Snakes",
        "optionB": "Fish",
        "optionC": "Deer",
        "correctAnswer": "Deer"
      },
      {
        "question": "Which animals live high up in trees?",
        "optionA": "Arboreal animals",
        "optionB": "Aquatic animals",
        "optionC": "Desert animals",
        "correctAnswer": "Arboreal animals"
      },
      {
        "question": "Which animals rest during the day in dark shelters?",
        "optionA": "Diurnal animals",
        "optionB": "Nocturnal animals",
        "optionC": "Aquatic animals",
        "correctAnswer": "Nocturnal animals"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Animals live in different ______.",
        "optionA": "habitats",
        "optionB": "cities",
        "optionC": "houses",
        "correctAnswer": "habitats"
      },
      {
        "question": "Caves remain ______ in summer.",
        "optionA": "hot",
        "optionB": "cool",
        "optionC": "dry",
        "correctAnswer": "cool"
      },
      {
        "question": "Snakes dig ______ to live underground.",
        "optionA": "caves",
        "optionB": "nests",
        "optionC": "burrows",
        "correctAnswer": "burrows"
      },
      {
        "question": "Fish use ______ to hide from predators.",
        "optionA": "coral reefs",
        "optionB": "trees",
        "optionC": "burrows",
        "correctAnswer": "coral reefs"
      },
      {
        "question": "Birds build nests using ______.",
        "optionA": "twigs and leaves",
        "optionB": "stones",
        "optionC": "plastic",
        "correctAnswer": "twigs and leaves"
      },
      {
        "question": "Amphibians need ______ shelters to live on land and water.",
        "optionA": "hard",
        "optionB": "dry",
        "optionC": "flexible",
        "correctAnswer": "flexible"
      },
      {
        "question": "Shelters help animals stay ______ from danger.",
        "optionA": "slow",
        "optionB": "safe",
        "optionC": "weak",
        "correctAnswer": "safe"
      },
      {
        "question": "Nocturnal animals are active at ______.",
        "optionA": "day",
        "optionB": "night",
        "optionC": "noon",
        "correctAnswer": "night"
      },
      {
        "question": "Diurnal animals rest at ______.",
        "optionA": "night",
        "optionB": "morning",
        "optionC": "afternoon",
        "correctAnswer": "night"
      },
      {
        "question": "Animals build shelters to protect their ______.",
        "optionA": "young ones",
        "optionB": "wings",
        "optionC": "tails",
        "correctAnswer": "young ones"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Animals build shelters to protect themselves from danger.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Monkeys and squirrels live in water.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Fish use underwater plants and rocks as shelter.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Snails carry their shelters with them.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Amphibians live only on land.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Caves help animals stay safe from harsh weather.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Birds build nests for raising their young ones.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Nocturnal animals are active during the day.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Arboreal animals live on the ground.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Shelters help animals survive in their environment.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
