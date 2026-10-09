export const chapter = "Chapter - 6: Adaptation and Survival";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which animal uses echolocation to move in the dark?",
        "optionA": "Owl",
        "optionB": "Cat",
        "optionC": "Bat",
        "correctAnswer": "Bat"
      },
      {
        "question": "What helps a chameleon blend into its surroundings?",
        "optionA": "Speed",
        "optionB": "Camouflage",
        "correctAnswer": "Camouflage",
        "optionC": "Loud sound"
      },
      {
        "question": "Which body part helps fish to breathe underwater?",
        "optionA": "Lungs",
        "optionB": "Nose",
        "optionC": "Gills",
        "correctAnswer": "Gills"
      },
      {
        "question": "What sense do dogs use to identify people?",
        "optionA": "Taste",
        "optionB": "Sight",
        "optionC": "Smell",
        "correctAnswer": "Smell"
      },
      {
        "question": "Which animal tastes with its feet?",
        "optionA": "Butterfly",
        "correctAnswer": "Butterfly",
        "optionB": "Cat",
        "optionC": "Rabbit"
      },
      {
        "question": "What do camels store to survive in the desert?",
        "optionA": "Sand",
        "optionB": "Water",
        "correctAnswer": "Water",
        "optionC": "Food"
      },
      {
        "question": "Which animal can move its eyes in different directions?",
        "optionA": "Dog",
        "optionB": "Cat",
        "optionC": "Chameleon",
        "correctAnswer": "Chameleon"
      },
      {
        "question": "What helps grasshoppers to hear sounds?",
        "optionA": "Eyes",
        "optionB": "Antennae",
        "optionC": "Legs",
        "correctAnswer": "Legs"
      },
      {
        "question": "Which of the following animals is a herbivore?",
        "optionA": "Lion",
        "optionB": "Rabbit",
        "correctAnswer": "Rabbit",
        "optionC": "Tiger"
      },
      {
        "question": "What type of eater is a raccoon?",
        "optionA": "Herbivore",
        "optionB": "Carnivore",
        "optionC": "Omnivore",
        "correctAnswer": "Omnivore"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Cats can see well in ______ light.",
        "optionA": "bright",
        "optionB": "flashing",
        "optionC": "dim",
        "correctAnswer": "dim"
      },
      {
        "question": "Earthworms taste with their ______.",
        "optionA": "tongue",
        "optionB": "feet",
        "optionC": "skin",
        "correctAnswer": "skin"
      },
      {
        "question": "______ use echolocation to avoid obstacles in the dark.",
        "optionA": "Dogs",
        "optionB": "Cats",
        "optionC": "Bats",
        "correctAnswer": "Bats"
      },
      {
        "question": "______ helps animals hide from predators by matching their surroundings.",
        "optionA": "Sound",
        "optionB": "Camouflage",
        "correctAnswer": "Camouflage",
        "optionC": "Speed"
      },
      {
        "question": "Dogs have a strong sense of ______.",
        "optionA": "hearing",
        "optionB": "sight",
        "optionC": "smell",
        "correctAnswer": "smell"
      },
      {
        "question": "Penguins stay warm by ______ together.",
        "optionA": "walking",
        "optionB": "huddling",
        "correctAnswer": "huddling",
        "optionC": "swimming"
      },
      {
        "question": "Cockroaches can detect danger using ______.",
        "optionA": "heat sensors",
        "optionB": "air movement",
        "correctAnswer": "air movement",
        "optionC": "loud sounds"
      },
      {
        "question": "Chameleons use their ______ to look in two directions at once.",
        "optionA": "tails",
        "optionB": "eyes",
        "correctAnswer": "eyes",
        "optionC": "ears"
      },
      {
        "question": "Skunks use ______ as a form of chemical defense.",
        "optionA": "spray",
        "correctAnswer": "spray",
        "optionB": "sound",
        "optionC": "fire"
      },
      {
        "question": "Owls can see well at ______.",
        "optionA": "noon",
        "optionB": "night",
        "correctAnswer": "night",
        "optionC": "sunrise"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Bats use sound to find their way in the dark.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Chameleons have eyes that move together in the same direction.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Earthworms taste with their tongues.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Dogs can recognize people using their sense of smell.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A raccoon is a herbivore.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Camouflage helps animals to stand out from predators.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Butterflies have taste sensors on their feet.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Grasshoppers hear with their legs.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Fish use lungs to breathe in water.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Skunks defend themselves with a bad smell.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      }
    ]
  };
}

export var activityData;
