export const chapter = "Chapter - 3: Our Animal friends";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    "activity": "Tick the correct option:",
    "questions": [
      {
        "question": "Which of the following animals is found in forests?",
        "optionA": "Cow",
        "optionB": "Monkey",
        "optionC": "Dog",
        "correctAnswer": "Monkey"
      },
      {
        "question": "Which animal uses fins to swim?",
        "optionA": "Parrot",
        "optionB": "Fish",
        "optionC": "Horse",
        "correctAnswer": "Fish"
      },
      {
        "question": "Which of these is a domestic animal?",
        "optionA": "Elephant",
        "optionB": "Lion",
        "optionC": "Goat",
        "correctAnswer": "Goat"
      },
      {
        "question": "What do birds have instead of teeth?",
        "optionA": "Tongue",
        "optionB": "Claws",
        "optionC": "Beak",
        "correctAnswer": "Beak"
      },
      {
        "question": "Which animal gives us wool?",
        "optionA": "Sheep",
        "optionB": "Dog",
        "optionC": "Cow",
        "correctAnswer": "Sheep"
      },
      {
        "question": "Where do wild animals live?",
        "optionA": "Houses",
        "optionB": "Forests",
        "optionC": "Zoos",
        "correctAnswer": "Forests"
      },
      {
        "question": "Which animal guards our home?",
        "optionA": "Ox",
        "optionB": "Dog",
        "optionC": "Hen",
        "correctAnswer": "Dog"
      },
      {
        "question": "What helps birds fly?",
        "optionA": "Legs",
        "optionB": "Fins",
        "optionC": "Wings",
        "correctAnswer": "Wings"
      },
      {
        "question": "Which of these is a water animal?",
        "optionA": "Whale",
        "optionB": "Hen",
        "optionC": "Cat",
        "correctAnswer": "Whale"
      },
      {
        "question": "Why should we protect animals?",
        "optionA": "To keep them as pets",
        "optionB": "Because they are dangerous",
        "optionC": "Because they are important for our world",
        "correctAnswer": "Because they are important for our world"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    "activity": "Fill in the blank with correct option:",
    "questions": [
      {
        "question": "___ are animals that live on farms.",
        "optionA": "Wild animals",
        "optionB": "Water animals",
        "optionC": "Domestic animals",
        "correctAnswer": "Domestic animals"
      },
      {
        "question": "Animals are found in forests, deserts, mountains, and ___.",
        "optionA": "Cities",
        "optionB": "Oceans",
        "optionC": "Gardens",
        "correctAnswer": "Oceans"
      },
      {
        "question": "Birds lay ___.",
        "optionA": "Babies",
        "optionB": "Eggs",
        "optionC": "Stones",
        "correctAnswer": "Eggs"
      },
      {
        "question": "Fish have special body parts like ___ to swim.",
        "optionA": "Beaks",
        "optionB": "Wings",
        "optionC": "Fins",
        "correctAnswer": "Fins"
      },
      {
        "question": "Mother birds bring ___ for their babies.",
        "optionA": "Water",
        "optionB": "Food",
        "optionC": "Sticks",
        "correctAnswer": "Food"
      },
      {
        "question": "___ help farmers to plough fields.",
        "optionA": "Oxen",
        "optionB": "Sheep",
        "optionC": "Monkeys",
        "correctAnswer": "Oxen"
      },
      {
        "question": "Cutting forests can destroy animals' ___.",
        "optionA": "Food",
        "optionB": "Nests",
        "optionC": "Home",
        "correctAnswer": "Home"
      },
      {
        "question": "Animals that live in water need ___ water to survive.",
        "optionA": "Salty",
        "optionB": "Muddy",
        "optionC": "Clean",
        "correctAnswer": "Clean"
      },
      {
        "question": "Cows and buffaloes give us ___.",
        "optionA": "Eggs",
        "optionB": "Milk",
        "optionC": "Wool",
        "correctAnswer": "Milk"
      },
      {
        "question": "We should be ___ to animals.",
        "optionA": "Kind",
        "optionB": "Rude",
        "optionC": "careless",
        "correctAnswer": "Kind"
      }
    ]
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    "activity": "Write 'True' for True and 'False' for False statements:",
    "questions": [
      {
        "question": "Lions and tigers are domestic animals.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Birds have feathers and wings.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Dogs are wild animals that live in jungles.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Crabs and whales live in water.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "All animals live in water.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Cows and goats can give us milk.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "Birds use their teeth to eat food.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Animals do not need food and shelter.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "False"
      },
      {
        "question": "Oxen help farmers in the fields.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      },
      {
        "question": "We should protect animals and their homes.",
        "optionA": "True",
        "optionB": "False",
        "correctAnswer": "True"
      }
    ]
  };
}

export var activityData;
