export const chapter = "Chapter - 14: Safety at First ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What is the primary purpose of following safety rules at home?",
        optionA: "For entertainment",
        optionB: "To stay safe",
        optionC: "To break the rules",
        correctAnswer: "To stay safe",
      },
      {
        question: "Which of the following is NOT a safety rule at home?",
        optionA: "Playing with matches",
        optionB: "Handling electrical appliances on your own",
        optionC: "Playing on the road",
        correctAnswer: "Handling electrical appliances on your own",
      },
      {
        question: "What should you avoid doing in a moving bus?",
        optionA: "Dancing",
        optionB: "Leaning out of the bus",
        optionC: "Playing games",
        correctAnswer: "Leaning out of the bus",
      },
      {
        question: "What should you always follow when it comes to traffic?",
        optionA: "The weather forecast",
        optionB: "Traffic rules and lights",
        optionC: "Your friends' advice",
        correctAnswer: "Traffic rules and lights",
      },
      {
        question: "What is recommended when you want to play outside?",
        optionA: "Play with anyone you find",
        optionB: "Play with the children of your age",
        optionC: "Play with strangers",
        correctAnswer: "Play with the children of your age",
      },
      {
        question: "Which activity is discouraged inside the classroom?",
        optionA: "Studying",
        optionB: "Playing",
        optionC: "Listening to the teacher",
        correctAnswer: "Playing",
      },
      {
        question: "What is a dangerous action on the staircase?",
        optionA: "Walking carefully",
        optionB: "Running",
        optionC: "Skipping steps",
        correctAnswer: "Running",
      },
      {
        question: "What should you avoid when near a moving swing?",
        optionA: "Pushing it gently",
        optionB: "Jumping from it",
        optionC: "Swinging gently",
        correctAnswer: "Jumping from it",
      },
      {
        question:
          "What is NOT recommended in terms of interactions with other students?",
        optionA: "Making friends",
        optionB: "Fighting with other students",
        optionC: "Talking with them",
        correctAnswer: "Fighting with other students",
      },
      {
        question: "What should you avoid doing with strangers?",
        optionA: "Making new friends",
        optionB: "Going or talking with them",
        optionC: "Accepting gifts from them",
        correctAnswer: "Going or talking with them",
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
          "Do not play with sharp objects like _____, blade, and scissors.",
        options: ["paper", "knife", "toy"],
        correctAnswer: "knife",
      },
      {
        question: "Never play with a _______.",
        options: ["soccer ball", "matchbox", "toy car"],
        correctAnswer: "matchbox",
      },
      {
        question: "Never light a _______.",
        options: ["candle", "fire", "flashlight"],
        correctAnswer: "fire",
      },
      {
        question: "Do not handle electrical appliances on your _____.",
        options: ["own", "head", "back"],
        correctAnswer: "own",
      },
      {
        question: "Do not hide inside the _______.",
        options: ["closet", "cupboard", "drawer"],
        correctAnswer: "cupboard",
      },
      {
        question: "Do not play on the _______.",
        options: ["swings", "road", "field"],
        correctAnswer: "road",
      },
      {
        question: "Never get in or out of a moving _______.",
        options: ["car", "train", "bus"],
        correctAnswer: "bus",
      },
      {
        question: "Never run across the _______.",
        options: ["bridge", "road", "park"],
        correctAnswer: "road",
      },
      {
        question: "Do not take _______ from strangers.",
        options: ["gifts", "offerings", "money"],
        correctAnswer: "offerings",
      },
      {
        question: "Always follow the _______.",
        options: ["teacher's instructions", "safety rules", "traffic lights"],
        correctAnswer: "traffic lights",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Safety rules are unimportant for us.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "To maintain good health, we must follow healthy habits in our routine.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Physical exercise and activity are not key factors for good health.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "One of the 'Do's mentioned in the text is to brush your teeth twice a day.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "It's unnecessary to take a bath regularly for good health.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Washing your hands after using the toilet is recommended for maintaining cleanliness.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Wearing neat and clean clothes is not important for health.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "A balanced diet, including fruits and green vegetables, is crucial for good health.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "It's acceptable to eat stale food and food that is kept in the open for good health.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Chewing your food well is not a good eating practice for digestion.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
