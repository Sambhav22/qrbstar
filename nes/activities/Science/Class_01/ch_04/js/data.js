export const chapter = "Chapter - 4: THE WORLD OF ANIMALS ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What are animals that people keep at their farms for their usefulness called?",
          optionA: "Wild Animals",
          optionB: "Domestic Animals",
          optionC: "Pet Animals",
          correctAnswer: "Domestic Animals",
        },
        {
          question: "Which of the following is a domestic animal?",
          optionA: "Lion",
          optionB: "Buffalo",
          optionC: "Parrot",
          correctAnswer: "Buffalo",
        },
        {
          question:
            "What kind of animals do people keep at their homes for affection and pleasure?",
          optionA: "Wild Animals",
          optionB: "Domestic Animals",
          optionC: "Birds",
          correctAnswer: "Domestic Animals",
        },
        {
          question:
            "Which category do animals like lion, tiger, and deer belong to?",
          optionA: "Domestic Animals",
          optionB: "Pet Animals",
          optionC: "Wild Animals",
          correctAnswer: "Wild Animals",
        },
        {
          question: "What distinguishes birds from other animals?",
          optionA: "Having four legs",
          optionB: "Having wings and feathers",
          optionC: "Living in water",
          correctAnswer: "Having wings and feathers",
        },
        {
          question:
            "What is the common characteristic of insects mentioned in the text?",
          optionA: "Having eight legs",
          optionB: "Having six legs",
          optionC: "Having wings and feathers",
          correctAnswer: "Having six legs",
        },
        {
          question: "Which of the following is a pet animal?",
          optionA: "Zebra",
          optionB: "Horse",
          optionC: "Dog",
          correctAnswer: "Dog",
        },
        {
          question:
            "In which category do animals like parrot, pigeon, and peacock belong to?",
          optionA: "Insects",
          optionB: "Birds",
          optionC: "Wild Animals",
          correctAnswer: "Birds",
        },
        {
          question:
            "What is the primary characteristic of birds mentioned in the text?",
          optionA: "Having six legs",
          optionB: "Having a beak instead of a mouth",
          optionC: "Living in water",
          correctAnswer: "Having a beak instead of a mouth",
        },
        {
          question: "Which of the following is an insect?",
          optionA: "Sparrow",
          optionB: "Butterfly",
          optionC: "Goat",
          correctAnswer: "Butterfly",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question:
            "People keep some animals at their farms for their usefulness. Such animals are called __________ animals.",
          optionA: "Wild",
          optionB: "Domestic",
          optionC: "Pet",
          correctAnswer: "Domestic",
        },
        {
          question:
            "Some animals live in the forest. They are called __________ animals. We can see wild animals in a __________.",
          optionA: "Domestic, farm",
          optionB: "Pet, zoo",
          optionC: "Wild, desert",
          correctAnswer: "Pet, zoo",
        },
        {
          question:
            "Birds are the animals that have wings and feathers. They have a __________ instead of a mouth.",
          optionA: "Trunk",
          optionB: "Beak",
          optionC: "Snout",
          correctAnswer: "Beak",
        },
        {
          question:
            "Insects are very small animals. They have __________ legs.",
          optionA: "Four",
          optionB: "Six",
          optionC: "Eight",
          correctAnswer: "Six",
        },
        {
          question:
            "Some animals which people keep at their homes for affection and pleasure are called __________ animals.",
          optionA: "Wild",
          optionB: "Domestic",
          optionC: "Exotic",
          correctAnswer: "Domestic",
        },
        {
          question:
            "Animals like lion, tiger, and deer belong to the category of __________ animals.",
          optionA: "Domestic",
          optionB: "Pet",
          optionC: "Wild",
          correctAnswer: "Wild",
        },
        {
          question:
            "Animals that have wings and feathers and can fly are called __________.",
          optionA: "Fish",
          optionB: "Insects",
          optionC: "Birds",
          correctAnswer: "Birds",
        },
        {
          question: "Insects are very small animals with __________ legs.",
          optionA: "Four",
          optionB: "Six",
          optionC: "Eight",
          correctAnswer: "Six",
        },
        {
          question:
            "Animals such as parrot, pigeon, and peacock belong to the category of __________.",
          optionA: "Reptiles",
          optionB: "Mammals",
          optionC: "Birds",
          correctAnswer: "Birds",
        },
        {
          question: "Which of the following is an insect?",
          optionA: "Sparrow",
          optionB: "Butterfly",
          optionC: "Goat",
          correctAnswer: "Butterfly",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question:
            "All animals need a shelter to stay and protect themselves and their babies.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "A rabbit digs a nest for its shelter.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Lions, tigers, bears, and foxes commonly live in burrows.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Snakes and owls live in trees.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Monkeys, lemurs, and koalas live in burrows.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Elephants, giraffes, zebras, deer, etc. live in caves.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Kennels are commonly used as shelters for cats.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "A stable is a shelter typically used for monkeys.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "People who keep different animals with them make different shelters for these animals, such as a shed for dogs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Birds are the only animals that need shelters.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
