export const chapter = "Chapter - 11: Water ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: " ________is the source of water",
        optionA: "river",
        optionB: "rain",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "All living things need _________ ",
        optionA: "water",
        optionB: "AC",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "Plants need water to _________ ",
        optionA: "take bath",
        optionB: "drink",
        optionC: "live",

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
        question: "Water covers around __________ of the earth's surface",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________ is necessary for us.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________ is the main source of water",
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
        question: "We can also get water from wells",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We need water for dancing",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We should drink water only two times in a day",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
