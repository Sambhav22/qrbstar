export const chapter = "Chapter - 1: Food We Eat";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What is one of the primary functions of food mentioned in the text?",
        optionA: "Providing entertainment",
        optionB: "Giving us energy",
        optionC: "Decorating our plates",
        correctAnswer: "Giving us energy",
      },
      {
        question:
          "How does food help us with our growth, according to the text?",
        optionA: "By providing knowledge",
        optionB: "By making us taller",
        optionC: "By aiding in physical development",
        correctAnswer: "By aiding in physical development",
      },
      {
        question: "What is one way in which food helps us stay strong?",
        optionA: "By making us heavy",
        optionB: "By building muscle",
        optionC: "By increasing our height",
        correctAnswer: "By building muscle",
      },
      {
        question:
          "How does food contribute to fighting illness, as mentioned in the text?",
        optionA: "By teaching us self-defense",
        optionB: "By improving our immunity",
        optionC: "By acting as medicine",
        correctAnswer: "By improving our immunity",
      },
      {
        question: "Where do we primarily get most of our food from?",
        optionA: "Rocks",
        optionB: "Air",
        optionC: "Plants",
        correctAnswer: "Plants",
      },
      {
        question:
          "What is mentioned as an important source of food from animals?",
        optionA: "Wool",
        optionB: "Milk",
        optionC: "Feathers",
        correctAnswer: "Milk",
      },
      {
        question: "What products are made from milk, according to the text?",
        optionA: "Shoes and belts",
        optionB: "Ghee, butter, and curd",
        optionC: "Cars and bicycles",
        correctAnswer: "Ghee, butter, and curd",
      },
      {
        question:
          "What do people who eat eggs and the flesh of other animals as food often refer to as?",
        optionA: "Vegetarians",
        optionB: "Carnivores",
        optionC: "Non-vegetarians",
        correctAnswer: "Non-vegetarians",
      },
      {
        question: "How many times a day do we eat according to the text?",
        optionA: "Four times",
        optionB: "Two times",
        optionC: "Three times",
        correctAnswer: "Three times",
      },
      {
        question: "When do we have lunch, according to the text?",
        optionA: "In the evening",
        optionB: "At midnight",
        optionC: "At noon",
        correctAnswer: "At noon",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question:
          "We all need food to stay alive. Apart from satisfying our hunger, food gives us energy to do different activities. It helps us to ________.",
        optionA: "learn",
        optionB: "grow",
        optionC: "sleep",
        correctAnswer: "grow",
      },
      {
        question:
          "Food works for us in many ways. It helps us to keep ________.",
        optionA: "sad",
        optionB: "strong",
        optionC: "tired",
        correctAnswer: "strong",
      },
      {
        question:
          "Food helps us to fight from illness. We get most of our food from ________.",
        optionA: "the ocean",
        optionB: "the sky",
        optionC: "plants",
        correctAnswer: "plants",
      },
      {
        question:
          "Milk is also an important part of our food. We get it from ________.",
        optionA: "plants",
        optionB: "animals",
        optionC: "the moon",
        correctAnswer: "animals",
      },
      {
        question: "Milk is used to make ghee, butter, curd, and ________.",
        optionA: "vegetables",
        optionB: "fruits",
        optionC: "other dairy products",
        correctAnswer: "other dairy products",
      },
      {
        question:
          "Some people also eat eggs and flesh of other animals as food. Such people are called ________.",
        optionA: "vegetarians",
        optionB: "carnivores",
        optionC: "non-vegetarians",
        correctAnswer: "non-vegetarians",
      },
      {
        question:
          "We eat three times in a day: Breakfast in the ________, Lunch at noon, and Dinner at night.",
        optionA: "evening",
        optionB: "morning",
        optionC: "afternoon",
        correctAnswer: "morning",
      },
      {
        question:
          "Food gives us energy to do different activities. It helps us to grow and keep ________.",
        optionA: "calm",
        optionB: "weak",
        optionC: "strong",
        correctAnswer: "strong",
      },
      {
        question: "We get most of our food from ________.",
        optionA: "the supermarket",
        optionB: "the internet",
        optionC: "plants",
        correctAnswer: "plants",
      },
      {
        question:
          "Some people also eat eggs and flesh of other animals as food. Such people are called ________.",
        optionA: "vegetarians",
        optionB: "omnivores",
        optionC: "non-vegetarians",
        correctAnswer: "non-vegetarians",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The Earth is flat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Birds can breathe underwater.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The sun rises in the west.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Pluto is considered a planet in our solar system.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Cats are reptiles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The capital of France is London.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The Moon is made of cheese.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Humans can survive without oxygen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Mount Everest is located in Africa.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Water boils at room temperature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
