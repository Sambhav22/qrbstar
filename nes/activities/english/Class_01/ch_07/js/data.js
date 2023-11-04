export const chapter = "Chapter - 7: The Prince's Toy";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What was the king having at the dinner table?",
        optionA: "Cake",
        optionB: "Pudding",
        optionC: "Soup",
        correctAnswer: "Soup",
      },
      {
        question: "Who was eating pudding at the dinner table?",
        optionA: "The king",
        optionB: "The prince",
        optionC: "The queen",
        correctAnswer: "The queen",
      },
      {
        question: "What did the king offer to the prince to eat?",
        optionA: "Cake",
        optionB: "Pudding",
        optionC: "Fruit",
        correctAnswer: "Cake",
      },
      {
        question: "How did the prince respond to the king's offer of food?",
        optionA: "He accepted the cake.",
        optionB: "He refused to eat anything.",
        optionC: "He asked for pudding.",
        correctAnswer: "He refused to eat anything.",
      },
      {
        question: "What did the queen offer to the prince?",
        optionA: "Cake",
        optionB: "Pudding",
        optionC: "Fruit",
        correctAnswer: "Fruit",
      },
      {
        question:
          "Why did the queen ask the prince why he wasn't eating anything?",
        optionA: "She wanted to know what he wanted to play with.",
        optionB: "She was curious about his appetite.",
        optionC: "She was concerned that he might be hungry.",
        correctAnswer: "She was concerned that he might be hungry.",
      },
      {
        question: "What did the prince want instead of food?",
        optionA: "A toy",
        optionB: "More pudding",
        optionC: "A cake",
        correctAnswer: "A toy",
      },
      {
        question:
          "What did the prince say when the king offered to get him any toy?",
        optionA: "I want a toy from the sky.",
        optionB: "I want a toy from the store.",
        optionC: "I don't want a toy.",
        correctAnswer: "I want a toy from the sky.",
      },
      {
        question: "Why did the king ask the prince which toy he wanted?",
        optionA: "To make the prince eat his food first.",
        optionB: "To surprise the prince with a special toy.",
        optionC: "To see if the prince would change his mind about food.",
        correctAnswer: "To make the prince eat his food first.",
      },
      {
        question: "Where did the prince point when he said, 'I want that'?",
        optionA: "At the cake",
        optionB: "At the fruit",
        optionC: "To the sky",
        correctAnswer: "To the sky",
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
          "The king was at his dinner table. He was having _______________.",
        optionA: "Cake",
        optionB: "Pudding",
        optionC: "Soup",
        correctAnswer: "Soup",
      },
      {
        question: "The queen was eating _______________ at the dinner table.",
        optionA: "Cake",
        optionB: "Pudding",
        optionC: "Fruit",
        correctAnswer: "Pudding",
      },
      {
        question: '"Have this _______________," said the king.',
        optionA: "Cake",
        optionB: "Pudding",
        optionC: "Toy",
        correctAnswer: "Cake",
      },
      {
        question:
          '"No, I don\'t want to," said the prince. \n"Why aren\'t you eating anything? You must be _____________." said the queen.',
        optionA: "Hungry",
        optionB: "Thirsty",
        optionC: "Tired",
        correctAnswer: "Hungry",
      },
      {
        question: '"I want the _______________," said the prince.',
        optionA: "Pudding",
        optionB: "Cake",
        optionC: "Toy",
        correctAnswer: "Toy",
      },
      {
        question:
          '"I shall get you any __________ you want, have your food first," said the king.',
        optionA: "Cake",
        optionB: "Pudding",
        optionC: "Toy",
        correctAnswer: "Toy",
      },
      {
        question:
          'The prince raised his finger to the sky and said, "I want _______________."',
        optionA: "Cake",
        optionB: "Fruit",
        optionC: "Something from the sky",
        correctAnswer: "Something from the sky",
      },
      {
        question:
          '"Take this ________. We have got this from very far," said the queen.',
        optionA: "Cake",
        optionB: "Pudding",
        optionC: "Fruit",
        correctAnswer: "Fruit",
      },
      {
        question: '"Have this __________," said the king.',
        optionA: "Cake",
        optionB: "Pudding",
        optionC: "Soup",
        correctAnswer: "Cake",
      },
      {
        question: '"I want the __________ first," said the prince.',
        optionA: "Pudding",
        optionB: "Cake",
        optionC: "Toy",
        correctAnswer: "Toy",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The king was having cake for dinner.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The prince refused to eat anything.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The queen offered fruit to the prince.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The prince wanted a toy instead of food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The king promised to get the prince any toy he wanted.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The prince asked for a cake from the sky.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The queen was eating cake at the dinner table.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The prince eventually agreed to eat something.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The king offered pudding to the prince.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The prince pointed to the sky to request a toy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
