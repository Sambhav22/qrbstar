export const chapter = "Chapter - 2: 'a' Sound";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "He has a can in his hand.",
        optionA: "A bat",
        optionB: "A ball",
        optionC: "A can",
        correctAnswer: "A can",
      },
      {
        question: "Take this ball with the bat.",
        optionA: "A bat",
        optionB: "Your hands",
        optionC: "A can",
        correctAnswer: "A bat",
      },
      {
        question: "The bag has many tags.",
        optionA: "Books",
        optionB: "Tags",
        optionC: "Apples",
        correctAnswer: "Tags",
      },
      {
        question: "Apples grow in farms.",
        optionA: "In the ocean",
        optionB: "In farms",
        optionC: "In the sky",
        correctAnswer: "In farms",
      },
      {
        question: "What kind of ball is it?",
        optionA: "A small ball",
        optionB: "A big ball",
        optionC: "A soccer ball",
        correctAnswer: "A big ball",
      },
      {
        question: 'Who said, "This is a big ball."',
        optionA: "Hans",
        optionB: "Kamna",
        optionC: "Both Hans and Kamna",
        correctAnswer: "Hans",
      },
      {
        question: "What did Kamna say about the ball?",
        optionA: '"This is a big ball."',
        optionB: '"This is a football."',
        optionC: '"We shall go to the park and play."',
        correctAnswer: '"This is a football."',
      },
      {
        question: "What did Hans suggest they do with the ball?",
        optionA: "Play at home",
        optionB: "Go to the park and play",
        optionC: "Keep it in the bag",
        correctAnswer: "Go to the park and play",
      },
      {
        question: "What did Kamna agree to do?",
        optionA: "Call their friends",
        optionB: "Play with the ball at home",
        optionC: "Go to the store",
        correctAnswer: "Call their friends",
      },
      {
        question: "Who initiated the idea of calling their friends?",
        optionA: "Hans",
        optionB: "Kamna",
        optionC: "Both Hans and Kamna",
        correctAnswer: "Hans",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "Apples ___ on trees.",
        optionA: "grows",
        optionB: "grow",
        optionC: "growing",
        correctAnswer: "grow",
      },
      {
        question: "We need to ___ our homework before dinner.",
        optionA: "do",
        optionB: "does",
        optionC: "did",
        correctAnswer: "do",
      },
      {
        question: "The cat ___ on the windowsill.",
        optionA: "sleeping",
        optionB: "sleeps",
        optionC: "sleep",
        correctAnswer: "sleeps",
      },
      {
        question: "She always ___ her keys in her purse.",
        optionA: "keeps",
        optionB: "keep",
        optionC: "kept",
        correctAnswer: "keeps",
      },
      {
        question: "I have a ___ for ice cream.",
        optionA: "craving",
        optionB: "craves",
        optionC: "crave",
        correctAnswer: "craving",
      },
      {
        question: "The sun ___ in the morning.",
        optionA: "rises",
        optionB: "risen",
        optionC: "rose",
        correctAnswer: "rises",
      },
      {
        question: "Please pass me the ___.",
        optionA: "salt",
        optionB: "salts",
        optionC: "salted",
        correctAnswer: "salt",
      },
      {
        question: "My mom ___ delicious cookies.",
        optionA: "bakes",
        optionB: "baked",
        optionC: "bake",
        correctAnswer: "bakes",
      },
      {
        question: "She ___ her bicycle to school every day.",
        optionA: "rides",
        optionB: "rode",
        optionC: "riding",
        correctAnswer: "rides",
      },
      {
        question: "The teacher ___ the students with a smile.",
        optionA: "greets",
        optionB: "greeted",
        optionC: "greeting",
        correctAnswer: "greets",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "This is the capital of France.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Elephants can fly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Water boils at 100 degrees Celsius at sea level.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The sun rises in the west.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Sharks are mammals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The Earth is flat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Penguins can fly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Oxygen is a noble gas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The Great Wall of China is visible from space.",
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
    ],
  };
}

export var activityData;
