export const chapter = "Chapter - 3: Animals and small creatures";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which of these is an invertebrate?",
        "optionA": "Frog",
        "optionB": "Dog",
        "optionC": "Snail",
        "correctAnswer": "Snail"
      },
      {
        "question": "What helps birds fly?",
        "optionA": "Legs",
        "optionB": "Wings",
        "correctAnswer": "Wings",
        "optionC": "Tails"
      },
      {
        "question": "Which animal uses gills to breathe?",
        "optionA": "Toad",
        "optionB": "Bird",
        "optionC": "Fish",
        "correctAnswer": "Fish"
      },
      {
        "question": "Which group includes animals with a backbone?",
        "optionA": "Invertebrates",
        "optionB": "Vertebrates",
        "correctAnswer": "Vertebrates",
        "optionC": "Insects"
      },
      {
        "question": "What helps reptiles protect their bodies?",
        "optionA": "Fur",
        "optionB": "Scales",
        "correctAnswer": "Scales",
        "optionC": "Feathers"
      },
      {
        "question": "What is the young stage of a frog called?",
        "optionA": "Egg",
        "optionB": "Caterpillar",
        "optionC": "Tadpole",
        "correctAnswer": "Tadpole"
      },
      {
        "question": "Which of the following animals is warm-blooded?",
        "optionA": "Snake",
        "optionB": "Cow",
        "correctAnswer": "Cow",
        "optionC": "Lizard"
      },
      {
        "question": "Which bird cannot fly?",
        "optionA": "Sparrow",
        "optionB": "Pigeon",
        "optionC": "Penguin",
        "correctAnswer": "Penguin"
      },
      {
        "question": "Which animal helps to carry loads?",
        "optionA": "Hen",
        "optionB": "Dog",
        "optionC": "Horse",
        "correctAnswer": "Horse"
      },
      {
        "question": "What kind of animal is a dolphin?",
        "optionA": "Fish",
        "optionB": "Mammal",
        "correctAnswer": "Mammal",
        "optionC": "Reptile"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "Animals that have bones are called __________.",
        "optionA": "Invertebrates",
        "optionB": "Reptiles",
        "optionC": "Vertebrates",
        "correctAnswer": "Vertebrates"
      },
      {
        "question": "A __________ begins its life as a tiny egg.",
        "optionA": "Frog",
        "optionB": "Butterfly",
        "correctAnswer": "Butterfly",
        "optionC": "Lizard"
      },
      {
        "question": "Frogs and toads are examples of __________.",
        "optionA": "Mammals",
        "optionB": "Amphibians",
        "correctAnswer": "Amphibians",
        "optionC": "Birds"
      },
      {
        "question": "Insects usually have __________ legs.",
        "optionA": "Four",
        "optionB": "Six",
        "correctAnswer": "Six",
        "optionC": "Eight"
      },
      {
        "question": "__________ give us honey.",
        "optionA": "Cows",
        "optionB": "Bees",
        "correctAnswer": "Bees",
        "optionC": "Horses"
      },
      {
        "question": "Birds have __________ and beaks.",
        "optionA": "Fur",
        "optionB": "Scales",
        "optionC": "Feathers",
        "correctAnswer": "Feathers"
      },
      {
        "question": "A frog’s life cycle starts with __________.",
        "optionA": "Pupa",
        "optionB": "Egg",
        "correctAnswer": "Egg",
        "optionC": "Larva"
      },
      {
        "question": "__________ are animals without bones.",
        "optionA": "Amphibians",
        "optionB": "Vertebrates",
        "optionC": "Invertebrates",
        "correctAnswer": "Invertebrates"
      },
      {
        "question": "Reptiles are __________ animals.",
        "optionA": "Warm-blooded",
        "optionB": "Cold-blooded",
        "correctAnswer": "Cold-blooded",
        "optionC": "Flying"
      },
      {
        "question": "Cows, humans, and elephants are __________.",
        "optionA": "Insects",
        "optionB": "Birds",
        "optionC": "Mammals",
        "correctAnswer": "Mammals"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "A caterpillar turns into a frog.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Mammals give birth to babies.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Fish have feathers on their body.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Amphibians can breathe through both lungs and skin.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "A butterfly lays eggs on leaves.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "Invertebrates are usually large animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Ostriches can fly.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Reptiles have moist, soft skin.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "A tadpole has no legs when it is born.",
        "optionA": "True",
        "correctAnswer": "True",
        "optionB": "False"
      },
      {
        "question": "All animals can live both on land and in water.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      }
    ]
  };
}

export var activityData;
