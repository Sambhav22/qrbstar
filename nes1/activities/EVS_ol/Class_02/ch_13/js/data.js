export const chapter = "Chapter - 13: Up in the Sky ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "It is a wonder to see many _______ in the sky",
        optionA: "sun ",
        optionB: "kites",
        optionC: "stars",

        correctAnswer: "",
      },

      {
        question: "The ________ is a heavenly body",
        optionA: "water",
        optionB: "both",
        optionC: "sun",

        correctAnswer: "",
      },

      {
        question: "The moon is the only ________ of the earth",
        optionA: "hot ball",
        optionB: "natural satellite",
        optionC: "artificial satellite",

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
        question: "The _______ is a hot ball of fire",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "The stars shine very _________ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "The ________ is an arc made up of ________ colours",
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
        question: "The sun is round in shape",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "The moon is a heavenly body",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "The rainbow has eight colours",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
