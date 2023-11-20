export const chapter = "Chapter - 13: Life: It's Fun";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is described as a joy in the text?",
        optionA: "Life",
        optionB: "Birth",
        optionC: "Pleasure",
        correctAnswer: "B",
      },
      {
        question: "How should life be treated according to the text?",
        optionA: "As a burden",
        optionB: "Like a treasure",
        optionC: "With indifference",
        correctAnswer: "B",
      },
      {
        question: "What is compared to a treasure in the text?",
        optionA: "Birth",
        optionB: "Life",
        optionC: "Pleasure",
        correctAnswer: "B",
      },
      {
        question:
          "What should one do in the sun's warmth according to the text?",
        optionA: "Bask",
        optionB: "Hide",
        optionC: "Shiver",
        correctAnswer: "A",
      },
      {
        question: "What is described as 'a poetry' in the text?",
        optionA: "Nature's marvels",
        optionB: "The flight of birds",
        optionC: "Twinkling stars",
        correctAnswer: "A",
      },
      {
        question:
          "What dispels the gloom of the darkness of the night in the text?",
        optionA: "Radiant moon",
        optionB: "Twinkling stars",
        optionC: "Flight of birds",
        correctAnswer: "A",
      },
      {
        question: "How should one relate to others according to the text?",
        optionA: "As foes",
        optionB: "As friends",
        optionC: "With indifference",
        correctAnswer: "B",
      },
      {
        question: "Who are referred to as 'His own creatures' in the text?",
        optionA: "Humans only",
        optionB: "Beasts and birds only",
        optionC: "Everyone - men, beasts, and birds",
        correctAnswer: "C",
      },
      {
        question: "What should not be squandered, according to the text?",
        optionA: "Time",
        optionB: "Money",
        optionC: "Energy",
        correctAnswer: "A",
      },
      {
        question:
          "What is encouraged in the text instead of judging others' worth?",
        optionA: "Treating everyone as foes",
        optionB: "Relating with everyone as friends",
        optionC: "Avoiding interaction with others",
        correctAnswer: "B",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "Birth is a _______________ joy.",
        options: ["great", "wonderful", "joyful"],
        correctAnswer: "wonderful",
      },
      {
        question: "Life is a _______________ pleasure.",
        options: ["beautiful", "delightful", "pleasurable"],
        correctAnswer: "pleasurable",
      },
      {
        question: "Treat life like a _______________ treasure.",
        options: ["hidden", "precious", "mysterious"],
        correctAnswer: "precious",
      },
      {
        question: "Bask in the sun's _______________ warmth.",
        options: ["gentle", "soothing", "radiant"],
        correctAnswer: "radiant",
      },
      {
        question: "Inhale the aroma of _______________ Earth.",
        options: ["fertile", "fragrant", "vibrant"],
        correctAnswer: "fragrant",
      },
      {
        question: "Feast your eyes on Nature's _______________ marvels.",
        options: ["breathtaking", "awe-inspiring", "majestic"],
        correctAnswer: "awe-inspiring",
      },
      {
        question: "The flight of the birds in the _______________ sky.",
        options: ["limitless", "boundless", "infinite"],
        correctAnswer: "boundless",
      },
      {
        question: "The twinkling stars so _______________.",
        options: ["brilliant", "shimmering", "dazzling"],
        correctAnswer: "dazzling",
      },
      {
        question: "The radiant moon dispelling the _______________ gloom.",
        options: ["endless", "intense", "pervading"],
        correctAnswer: "pervading",
      },
      {
        question: "Squander not time so _______________ precious.",
        options: ["extremely", "exceptionally", "incredibly"],
        correctAnswer: "incredibly",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The disease mentioned in the text is caused by a virus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Maintaining cleanliness is not essential for preventing diseases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The text recommends eating snacks from the market for a healthy diet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Physical exercise can include activities like running and playing games.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Brushing your teeth and taking a bath daily are mentioned as ways to maintain cleanliness.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "It is essential to wash your hands with soap when entering the house from outside.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The text suggests that sleeping late and rising late is beneficial for health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Snacks are considered good for health because they are tasty to eat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Maintaining hygiene can help keep diseases away.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "According to the text, thinking is a method to take a rest for the brain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
