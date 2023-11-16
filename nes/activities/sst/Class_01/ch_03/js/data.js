export const chapter = "Chapter - 3: Houses to Live In";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What is the primary purpose of a house according to the text?",
        optionA: "To entertain guests",
        optionB: "To protect from harsh weather conditions",
        optionC: "To store belongings",
        correctAnswer: "B) To protect from harsh weather conditions",
      },
      {
        question: "Which materials are mentioned for making a 'kuchcha house'?",
        optionA: "Bricks, iron, and cement",
        optionB: "Mud, straw, bamboo, and plank",
        optionC: "Wood, glass, and steel",
        correctAnswer: "B) Mud, straw, bamboo, and plank",
      },
      {
        question:
          "What is the term used for houses made of bricks, iron, and cement in the text?",
        optionA: "Kuchcha houses",
        optionB: "Straw houses",
        optionC: "Pucca houses",
        correctAnswer: "C) Pucca houses",
      },
      {
        question: "How many rooms can a house have, according to the text?",
        optionA: "Only one room",
        optionB: "Several rooms",
        optionC: "Two rooms",
        correctAnswer: "B) Several rooms",
      },
      {
        question: "What is the purpose of a kitchen in a house?",
        optionA: "Receiving guests",
        optionB: "Sleeping",
        optionC: "Cooking food",
        correctAnswer: "C) Cooking food",
      },
      {
        question: "Which room is used for receiving guests in a house?",
        optionA: "Bathroom",
        optionB: "Bedroom",
        optionC: "Drawing room",
        correctAnswer: "C) Drawing room",
      },
      {
        question: "What is the purpose of a staircase mentioned in the text?",
        optionA: "Reaching the roof",
        optionB: "Cooking food",
        optionC: "Taking a bath",
        correctAnswer: "A) Reaching the roof",
      },
      {
        question: "Where does a family spend most of its time in a house?",
        optionA: "Bathroom",
        optionB: "Kitchen",
        optionC: "Living area",
        correctAnswer: "C) Living area",
      },
      {
        question: "What does a house protect us from, according to the text?",
        optionA: "Stray animals",
        optionB: "Hot summers",
        optionC: "Cooking food",
        correctAnswer: "A) Stray animals",
      },
      {
        question:
          "What type of houses are made of mud, straw, bamboo, and plank?",
        optionA: "Pucca houses",
        optionB: "Kuchcha houses",
        optionC: "Brick houses",
        correctAnswer: "B) Kuchcha houses",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "A house ____________ us from harsh weather conditions.",
        optionA: "protects",
        optionB: "entertains",
        optionC: "builds",
        correctAnswer: "protects",
      },
      {
        question:
          "A house may be made of mud, straw, bamboo, ____________, etc. Such a house is called a kuchcha house.",
        optionA: "steel",
        optionB: "plank",
        optionC: "glass",
        correctAnswer: "plank",
      },
      {
        question:
          "Most of the houses are made of bricks, iron, and ____________. Such houses are called pucca houses.",
        optionA: "wood",
        optionB: "cement",
        optionC: "plastic",
        correctAnswer: "cement",
      },
      {
        question:
          "A house can be small or big. It may have only one room or ____________ rooms.",
        optionA: "two",
        optionB: "several",
        optionC: "no",
        correctAnswer: "several",
      },
      {
        question:
          "A house has different places for different purposes: A kitchen to ____________ food.",
        optionA: "cook",
        optionB: "eat",
        optionC: "sleep",
        correctAnswer: "cook",
      },
      {
        question: "A drawing room to receive ____________.",
        optionA: "guests",
        optionB: "food",
        optionC: "animals",
        correctAnswer: "guests",
      },
      {
        question: "A staircase to reach the ____________.",
        optionA: "kitchen",
        optionB: "roof",
        optionC: "bedroom",
        correctAnswer: "roof",
      },
      {
        question: "A bedroom to ____________.",
        optionA: "cook",
        optionB: "sleep",
        optionC: "watch TV",
        correctAnswer: "sleep",
      },
      {
        question: "A bathroom to take ____________.",
        optionA: "cook",
        optionB: "sleep",
        optionC: "bath",
        correctAnswer: "bath",
      },
      {
        question:
          "A living area where the family spends most of its ____________.",
        optionA: "money",
        optionB: "time",
        optionC: "food",
        correctAnswer: "time",
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
        correctAnswer: "B) False",
      },
      {
        question: "Water boils at 100 degrees Celsius at sea level.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "A) True",
      },
      {
        question: "The Sun orbits the Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "B) False",
      },
      {
        question: "Oxygen is a noble gas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "B) False",
      },
      {
        question: "The capital of France is Paris.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "A) True",
      },
      {
        question: "Humans have gills for breathing underwater.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "B) False",
      },
      {
        question: "Birds are mammals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "B) False",
      },
      {
        question: "The moon has its own source of light.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "B) False",
      },
      {
        question:
          "Water is composed of two hydrogen atoms and one oxygen atom.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "A) True",
      },
      {
        question: "The Great Wall of China is visible from space.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "B) False",
      },
    ],
  };
}

export var activityData;
