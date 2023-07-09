export const chapter = "Chapter - 6: Clothes We Wear ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: " ________ protect our body",
        optionA: "both",
        optionB: "clothes",
        optionC: "leaves",

        correctAnswer: "",
      },

      {
        question: "We wear cotton clothes in __________ season",
        optionA: "summer",
        optionB: "winter",
        optionC: "rainy",

        correctAnswer: "",
      },

      {
        question: "Clothes make us look _________ ",
        optionA: "smart",
        optionB: "ugly",
        optionC: "dull",

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
        question: "We wear raincoat in _____ season",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Woollen clothes are worn by us in ___________",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We wear __________ clothes in summer",
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
        question: "Raincoat is used in winter season",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Summer clothes are light to wear",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Woollen clothes are made of cotton",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
