export const chapter = "Chapter - 2: Animal World";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which animal breathes through gills to stay alive underwater?",
        "optionA": "Frog",
        "optionB": "Fish",
        "correctAnswer": "Fish",
        "optionC": "Snake"
      },
      {
        "question": "Which body covering helps birds to fly and stay warm?",
        "optionA": "Fur",
        "optionB": "Feathers",
        "correctAnswer": "Feathers",
        "optionC": "Scales"
      },
      {
        "question": "Which animal has a hard shell for protection?",
        "optionA": "Tortoise",
        "correctAnswer": "Tortoise",
        "optionB": "Dog",
        "optionC": "Cow"
      },
      {
        "question": "Which animal eats both plants and animals?",
        "optionA": "Cow",
        "optionB": "Lion",
        "optionC": "Bear",
        "correctAnswer": "Bear"
      },
      {
        "question": "Which animal uses a sticky tongue to catch insects?",
        "optionA": "Frog",
        "correctAnswer": "Frog",
        "optionB": "Fish",
        "optionC": "Bird"
      },
      {
        "question": "Which animal swims using fins?",
        "optionA": "Fish",
        "correctAnswer": "Fish",
        "optionB": "Snake",
        "optionC": "Ostrich"
      },
      {
        "question": "Which insect uses strong back legs to hop?",
        "optionA": "Ant",
        "optionB": "Grasshopper",
        "correctAnswer": "Grasshopper",
        "optionC": "Butterfly"
      },
      {
        "question": "Which animal moves by slithering on the ground?",
        "optionA": "Frog",
        "optionB": "Snake",
        "correctAnswer": "Snake",
        "optionC": "Dog"
      },
      {
        "question": "Which bird cannot fly but can run fast?",
        "optionA": "Sparrow",
        "optionB": "Pigeon",
        "optionC": "Ostrich",
        "correctAnswer": "Ostrich"
      },
      {
        "question": "Which animal travels long distances to survive changing seasons?",
        "optionA": "Domestic animal",
        "optionB": "Migrating animal",
        "correctAnswer": "Migrating animal",
        "optionC": "Pet animal"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Fish breathe through ________.",
        "optionA": "gills",
        "correctAnswer": "gills",
        "optionB": "lungs",
        "optionC": "skin"
      },
      {
        "question": "Birds have ________ covering their bodies.",
        "optionA": "fur",
        "optionB": "feathers",
        "correctAnswer": "feathers",
        "optionC": "scales"
      },
      {
        "question": "Frogs have ________ feet that help them swim.",
        "optionA": "padded",
        "optionB": "webbed",
        "correctAnswer": "webbed",
        "optionC": "clawed"
      },
      {
        "question": "Insects breathe through tiny holes called ________.",
        "optionA": "gills",
        "optionB": "lungs",
        "optionC": "spiracles",
        "correctAnswer": "spiracles"
      },
      {
        "question": "Butterflies drink nectar using a ________.",
        "optionA": "beak",
        "optionB": "proboscis",
        "correctAnswer": "proboscis",
        "optionC": "tongue"
      },
      {
        "question": "Sheep stay warm because they have ________ on their bodies.",
        "optionA": "fur / wool",
        "correctAnswer": "fur / wool",
        "optionB": "scales",
        "optionC": "feathers"
      },
      {
        "question": "Fish move in water using their ________.",
        "optionA": "wings",
        "optionB": "fins",
        "correctAnswer": "fins",
        "optionC": "legs"
      },
      {
        "question": "Rodents use their sharp teeth for ________.",
        "optionA": "tearing",
        "optionB": "gnawing",
        "correctAnswer": "gnawing",
        "optionC": "sucking"
      },
      {
        "question": "Penguins swim using their strong ________.",
        "optionA": "legs",
        "optionB": "wings",
        "optionC": "flippers",
        "correctAnswer": "flippers"
      },
      {
        "question": "Frogs can breathe in water through their ________.",
        "optionA": "lungs",
        "optionB": "moist skin",
        "correctAnswer": "moist skin",
        "optionC": "nose"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Fish have scales on their bodies.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Insects breathe through lungs.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Frogs can breathe through lungs and skin.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Penguins use flippers to swim in water.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Birds use fins to fly.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Tortoises have soft body coverings.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Grasshoppers use their back legs to hop.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Rodents’ teeth stop growing after some time.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Migration helps animals survive changing climates.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Snakes move using wave-like body movements.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
