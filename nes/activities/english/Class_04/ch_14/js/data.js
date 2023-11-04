export const chapter = "Chapter - 14: The Turnip ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Who were the two brothers mentioned in the story?",
        optionA: "Gautam and the king",
        optionB: "Gautam and Harsh",
        optionC: "Harsh and a poor farmer",
        correctAnswer: "Gautam and Harsh",
      },
      {
        question: "What did Gautam sow in his small piece of land?",
        optionA: "Turnips",
        optionB: "Wheat",
        optionC: "Rice",
        correctAnswer: "Turnips",
      },
      {
        question: "How did the people in the story describe Gautam's turnip?",
        optionA: "As a regular-sized turnip",
        optionB: "As a small, ordinary turnip",
        optionC: "As a massive, enormous turnip",
        correctAnswer: "As a massive, enormous turnip",
      },
      {
        question: "What did Gautam decide to do with the giant turnip?",
        optionA: "Sell it",
        optionB: "Eat it himself",
        optionC: "Present it to the king",
        correctAnswer: "Present it to the king",
      },
      {
        question: "Why did Gautam present the giant turnip to the king?",
        optionA: "To sell it to the king",
        optionB: "To get advice on what to do with it",
        optionC: "To receive a reward from the king",
        correctAnswer: "To receive a reward from the king",
      },
      {
        question: "How did the king react when he saw the giant turnip?",
        optionA: "He was not impressed",
        optionB: "He was surprised and delighted",
        optionC: "He was angry",
        correctAnswer: "He was surprised and delighted",
      },
      {
        question:
          "What did the king give Gautam in return for the giant turnip?",
        optionA: "A piece of land",
        optionB: "Precious stones",
        optionC: "Two Arabian horses",
        correctAnswer: "A piece of land",
      },
      {
        question: "What motivated Harsh to visit the king with gifts?",
        optionA: "To ask for advice",
        optionB: "To show off his wealth",
        optionC: "To compete with Gautam",
        correctAnswer: "To compete with Gautam",
      },
      {
        question: "What gifts did Harsh take to the king?",
        optionA: "A box of precious stones and silk",
        optionB: "A giant turnip",
        optionC: "A cart of vegetables",
        correctAnswer: "A box of precious stones and silk",
      },
      {
        question: "What did the king give Harsh as a unique gift?",
        optionA: "A large piece of land",
        optionB: "A turnip",
        optionC: "Precious jewelry",
        correctAnswer: "A turnip",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "Gautam sowed his small piece of land with ___________.",
        options: ["Wheat seeds", "Turnip seeds", "Rice seeds"],
        correctAnswer: "Turnip seeds",
      },
      {
        question: "The turnip that grew on Gautam's field became ___________.",
        options: [
          "A regular-sized turnip",
          "Larger than anyone had ever seen",
          "As small as other turnips",
        ],
        correctAnswer: "Larger than anyone had ever seen",
      },
      {
        question:
          "Gautam decided to present the enormous turnip to ___________.",
        options: ["The queen", "The king", "His brother, Harsh"],
        correctAnswer: "The king",
      },
      {
        question:
          "When the king saw the giant turnip, he was amazed and asked if Gautam was a ___________.",
        options: ["Magician", "Luck-child", "Rich farmer"],
        correctAnswer: "Luck-child",
      },
      {
        question:
          "As a reward for the giant turnip, the king bestowed on Gautam ___________.",
        options: [
          "A small piece of land",
          "Precious stones",
          "Much gold and a large piece of land",
        ],
        correctAnswer: "Much gold and a large piece of land",
      },
      {
        question:
          "Harsh set out to the king's palace with two Arabian horses, a box of precious stones, and ___________.",
        options: ["A giant turnip", "Rich silk", "A cart of vegetables"],
        correctAnswer: "Rich silk",
      },
      {
        question:
          "The king was pleased with Harsh's gifts and said that he had not received such precious gifts in recent times. He promised to give Harsh ___________.",
        options: [
          "A treasure chest",
          "More horses",
          "Something unique in return",
        ],
        correctAnswer: "Something unique in return",
      },
      {
        question: "To Harsh's surprise, the king gave him ___________.",
        options: [
          "A pile of gold",
          "A box of precious stones",
          "A unique turnip",
        ],
        correctAnswer: "A unique turnip",
      },
      {
        question:
          "Harsh was obliged to put his brother's unique turnip in a cart and have it taken to his ___________.",
        options: ["Friend's house", "Workshop", "Home"],
        correctAnswer: "Home",
      },
      {
        question:
          "The text suggests that Harsh's plan to outdo Gautam in presenting gifts to the king did not go as ___________.",
        options: ["Expected", "Intended", "Hoped"],
        correctAnswer: "Intended",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Gautam was a rich farmer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Gautam grew an enormous turnip in his field.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Harsh presented two Arabian horses and a box of precious stones to the king.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Gautam initially considered selling the giant turnip.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The king felt no compassion for Gautam when he presented the turnip.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Harsh was delighted when he heard the king's unique gift was a turnip.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The king gave Gautam a small piece of land as a reward.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Harsh had to put the unique turnip in a cart and take it to the palace.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Gautam and Harsh were equally rich by the end of the story.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The text suggests that Harsh's plan to outdo Gautam in presenting gifts to the king was successful.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
