export const chapter = "Chapter - 1: Plant More Trees ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "We get fruits and vegetables from ",
        optionA: "Animals",
        optionB: "Trees",
        optionC: "Both",

        correctAnswer: "",
      },

      {
        question: "Shrubs have __________ ",
        optionA: "Woody Stems",
        optionB: "Both",
        optionC: "Strong Stems",

        correctAnswer: "",
      },

      {
        question: "Big and strong plants are called ____________ ",
        optionA: "Herbs",
        optionB: "Trees",
        optionC: "Shrubs",

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
        question: "Trees give _________ to birds and animals",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________ give us oxygen",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Small sized plants with woody stems are called ___________ ",
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
        question: "Very small sized plants with woody stems are called herbs",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Big and strong plants are called shrubs",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We get fruits from plants",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
