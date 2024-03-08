export const chapter = "Chapter - 5: Food For All ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "We should take food _____ times in a day",
        optionA: "Three",
        optionB: "Two",
        optionC: "Four",

        correctAnswer: "",
      },

      {
        question: "Food is a fuel which helps us to ________",
        optionA: "Sleep",
        optionB: "Function",
        optionC: "watch TV",

        correctAnswer: "",
      },

      {
        question: "Food is our basic ________",
        optionA: "none",
        optionB: "help",
        optionC: "need",

        correctAnswer: "",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        question: "Vegetables and cereals are the food we get from _________",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We take ________ in the noon",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We get our food from ________ and ________",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      ,
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "A cucumber contains 50% of water",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We take breakfast in the morning",
        optionA: "True",
        optionB: "False",

        correctAnswer: "True",
      },

      {
        question: "We get eggs and milk from plants",
        optionA: "True",
        optionB: "False",

        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
