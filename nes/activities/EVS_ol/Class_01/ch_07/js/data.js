export const chapter = "Chapter - 7: Food We Eat ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: " We get eggs from _________",
        optionA: "hen/duck",
        optionB: "none",
        optionC: "cow/buffalo",

        correctAnswer: "",
      },

      {
        question: "We take breakfast in/at ________ ",
        optionA: "afternoon",
        optionB: "night",
        optionC: "morning",

        correctAnswer: "",
      },

      {
        question: "_________ is our basic need",
        optionA: "food",
        optionB: "both",
        optionC: "egg",

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
        question: "We get cereals from ________",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We take _________ at noon",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________ gives us energy to do work",
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
        question: "We get milk from the cow",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We get vegetables from the plants",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We should take only one type of food",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
