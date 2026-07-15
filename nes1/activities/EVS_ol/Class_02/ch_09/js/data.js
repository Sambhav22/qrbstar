export const chapter = "Chapter - 9: Plant Life ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "_________ grows under the ground",
        optionA: "stem",
        optionB: "root",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "Plants provide us __________",
        optionA: "food and fresh air",
        optionB: "milk and curd",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "__________ are our green friends",
        optionA: "plants ",
        optionB: "animals",
        optionC: "both",

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
        question: "We should __________ the plants regularly",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "__________ is the food factory of a plant",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Flower is the most _________ part of a plant",
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
        question: "Flower bears fruits",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Fruits are eatable",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Leaves are not attached to the roots",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
