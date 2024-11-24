export const chapter = "Chapter - 12: Air ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: " ________ is necessary for living",
        optionA: "cooking",
        optionB: "dancing",
        optionC: "air",

        correctAnswer: "",
      },

      {
        question: "We use air for _________ ",
        optionA: "both",
        optionB: "drinking",
        optionC: "breathing",

        correctAnswer: "",
      },

      {
        question: "_________ air is good for our health",
        optionA: "polluted",
        optionB: "none",
        optionC: "fresh",

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
        question: "________ is used to fly a kite",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________ is all around us",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________ need air to grow",
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
        question: "Air is not a basic need",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We need air for breathing",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Air is used for drinking",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
