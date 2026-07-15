export const chapter = "Chapter - 6: Importance of Water ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "We all should try to save ________",
        optionA: "water",
        optionB: "building",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "__________ is the main source of water",
        optionA: "rain",
        optionB: "air",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "We cannot live without _________ ",
        optionA: "Water",
        optionB: "Cold Drink",
        optionC: "Juice",

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
        question: "The _________ water gets deposited into ponds",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We need water for ________ and _______",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We use water for washing our ________",
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
        question: "We should not save water",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We use water for watering plants",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Water is not exhausting day by day",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
