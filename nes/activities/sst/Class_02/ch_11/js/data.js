export const chapter = "Chapter - 11: Directions and Time ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What are the four major directions?",
        optionA: "Up, Down, Left, Right",
        optionB: "East, West, North, South",
        optionC: "Front, Back, Left, Right",
        correctAnswer: "B) East, West, North, South",
      },
      {
        question:
          "Which direction is behind us when we are facing the rising sun?",
        optionA: "East",
        optionB: "West",
        optionC: "South",
        correctAnswer: "B) West",
      },
      {
        question: "What helps in finding directions, such as East and West?",
        optionA: "The moon",
        optionB: "The sun",
        optionC: "The stars",
        correctAnswer: "B) The sun",
      },
      {
        question: "What is the time of day when the sun is about to set?",
        optionA: "Dawn",
        optionB: "Morning",
        optionC: "Evening",
        correctAnswer: "C) Evening",
      },
      {
        question: "How many hours are there in one day?",
        optionA: "12 hours",
        optionB: "24 hours",
        optionC: "48 hours",
        correctAnswer: "B) 24 hours",
      },
      {
        question: "What is the time when Sanya goes to sleep?",
        optionA: "8 o'clock in the evening",
        optionB: "9 o'clock in the evening",
        optionC: "9 o'clock in the morning",
        correctAnswer: "B) 9 o'clock in the evening",
      },
      {
        question: "What time does Sanya have breakfast?",
        optionA: "6 o'clock",
        optionB: "8 o'clock",
        optionC: "9 o'clock",
        correctAnswer: "B) 8 o'clock",
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
          "The sun rises in the ______ and sets in the ______. So if we are facing the rising sun, we are facing the ______, West is behind us, North is towards our left, and South is towards our right.",
        options: ["East", "West", "East"],
        correctAnswer: "East",
      },
      {
        question:
          "We divide the time of one day (one day + one night) into ______ hours.",
        options: ["24"],
        correctAnswer: "24",
      },
      {
        question: "An hour has ______ minutes. A minute has ______ seconds.",
        options: ["60", "60"],
        correctAnswer: "60",
      },
      {
        question: "Sanya wakes up at 6 o'clock in the ______.",
        options: ["morning"],
        correctAnswer: "morning",
      },
      {
        question: "She goes to school at ______ o'clock.",
        options: ["9"],
        correctAnswer: "9",
      },
      {
        question: "She and her friends have lunch at ______ at noon.",
        options: ["12"],
        correctAnswer: "12",
      },
      {
        question: "She goes to play at ______ in the evening.",
        options: ["5"],
        correctAnswer: "5",
      },
      {
        question: "She has dinner at ______ at night.",
        options: ["8"],
        correctAnswer: "8",
      },
      {
        question: "She goes to sleep at ______ at night.",
        options: ["9"],
        correctAnswer: "9",
      },
      {
        question: "It is ______ when it gets dark.",
        options: ["night"],
        correctAnswer: "night",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "A tailor is responsible for stitching our clothes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A milkman sells us milk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A carpenter can make furniture.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A cobbler can mend our shoes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A barber cuts our hair.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A policeman protects us from thieves and robbers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A postman delivers us letters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A doctor can treat us when we fall ill.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A watchman guards our houses at night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "A shopkeeper sells us many things and services.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
