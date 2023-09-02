export const chapter = "Chapter - 1: Super Senses";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "In the poem, what is the speaker wishing upon?",
        optionA: "The sun",
        optionB: "The moon",
        optionC: "The stars",
        correctAnswer: "The stars",
      },
      {
        question: "How does the poem begin?",
        optionA: "Moonlight, moonlight",
        optionB: "Star light, star bright",
        optionC: "Sunshine, sunshine",
        correctAnswer: "Star light, star bright",
      },
      {
        question: "According to the poem, when does the speaker make a wish?",
        optionA: "In the morning",
        optionB: "During the day",
        optionC: "At night",
        correctAnswer: "At night",
      },
      {
        question: "What does the speaker wish for in the poem?",
        optionA: "To see the moon",
        optionB: "To have a bright star",
        optionC: "To have their wish granted",
        correctAnswer: "To have their wish granted",
      },
      {
        question: "Who does the speaker ask God to bless in the poem?",
        optionA: "Only themselves",
        optionB: "The moon and themselves",
        optionC: "The stars and themselves",
        correctAnswer: "The moon and themselves",
      },
      {
        question: "What is the first line of the second stanza of the poem?",
        optionA: "I see the moon,",
        optionB: "I wish upon a star,",
        optionC: "The sun is setting,",
        correctAnswer: "I see the moon,",
      },
      {
        question: "According to the poem, what does the moon do?",
        optionA: "It makes wishes come true",
        optionB: "It blesses the speaker",
        optionC: "It sees the speaker",
        correctAnswer: "It sees the speaker",
      },
      {
        question: "What time of day is mentioned in the poem?",
        optionA: "Morning",
        optionB: "Noon",
        optionC: "Night",
        correctAnswer: "Night",
      },
      {
        question: "How many wishes does the speaker make in the poem?",
        optionA: "One wish",
        optionB: "Two wishes",
        optionC: "Three wishes",
        correctAnswer: "Two wishes",
      },
      {
        question: "What is the central theme of this poem?",
        optionA: "The beauty of the moon",
        optionB: "Making wishes upon stars",
        optionC: "Blessings and wishes",
        correctAnswer: "Blessings and wishes",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "The ___________ is the largest planet in our solar system.",
        optionA: "Earth",
        optionB: "Mars",
        optionC: "Jupiter",
        correctAnswer: "Jupiter",
      },
      {
        question:
          "The process of photosynthesis converts carbon dioxide and water into glucose and ___________.",
        optionA: "Oxygen",
        optionB: "Nitrogen",
        optionC: "Hydrogen",
        correctAnswer: "Oxygen",
      },
      {
        question: "The currency of Japan is called the Japanese ___________.",
        optionA: "Yen",
        optionB: "Euro",
        optionC: "Dollar",
        correctAnswer: "Yen",
      },
      {
        question:
          "The United Nations was founded in ___________ after World War II.",
        optionA: "1945",
        optionB: "1955",
        optionC: "1965",
        correctAnswer: "1945",
      },
      {
        question:
          "The human brain consists of approximately 86 billion ___________.",
        optionA: "Neurons",
        optionB: "Cells",
        optionC: "Muscles",
        correctAnswer: "Neurons",
      },
      {
        question:
          "The Statue of Liberty was a gift from ___________ to the United States.",
        optionA: "France",
        optionB: "England",
        optionC: "Spain",
        correctAnswer: "France",
      },
      {
        question: "The ___________ is the world's largest mammal.",
        optionA: "Elephant",
        optionB: "Blue Whale",
        optionC: "Giraffe",
        correctAnswer: "Blue Whale",
      },
      {
        question: "The Eiffel Tower is located in the city of ___________.",
        optionA: "London",
        optionB: "Paris",
        optionC: "Rome",
        correctAnswer: "Paris",
      },
      {
        question: "The capital of Australia is ___________.",
        optionA: "Sydney",
        optionB: "Melbourne",
        optionC: "Canberra",
        correctAnswer: "Canberra",
      },
      {
        question: "Water boils at ___________ degrees Celsius at sea level.",
        optionA: "100",
        optionB: "0",
        optionC: "50",
        correctAnswer: "100",
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
