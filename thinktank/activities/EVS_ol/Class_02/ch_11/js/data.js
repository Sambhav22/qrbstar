export const chapter = "Chapter - 11: Fabrics and Festivals ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Silk comes from ________",
        optionA: "silkworm",
        optionB: "cotton plant",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "We wear _____ to protect our body",
        optionA: "papers",
        optionB: "clothes",
        optionC: "leaves",

        correctAnswer: "",
      },

      {
        question: "_________ grows in pods",
        optionA: "silk",
        optionB: "cotton",
        optionC: "wool",

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
        question:
          "In India, we also celebrate __________ festivals with great pomp and show",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________ is made by chemical reactions",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________is the main festival of the Hindus",
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
        question: "We wear woollen clothes in summer",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We wear fancy clothes on festivals",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Republic Day is our national festival",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
