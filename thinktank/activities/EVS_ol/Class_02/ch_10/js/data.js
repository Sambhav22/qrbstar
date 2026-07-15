export const chapter = "Chapter - 10: Games for All ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Games improve our ________",
        optionA: "both",
        optionB: "eyesight",
        optionC: "health",

        correctAnswer: "",
      },

      {
        question: "Playing games keeps our body _________",
        optionA: "fit",
        optionB: "unhealthy",
        optionC: "clean",

        correctAnswer: "",
      },

      {
        question: "Our _________ works actively after playing games",
        optionA: "none",
        optionB: "hand",
        optionC: "mind",

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
        question: " ________ is celebrated as National Sports Day",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________  is a fun and recreational activity",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Major Dhyan Chand was a legendary _________ ",
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
        question: "Games do not boost our skills",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We should not play games",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Playing games keeps our body fit",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
