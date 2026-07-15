export const chapter = "Chapter - 16: Forms of Water";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "About___________ of the earth's surface is covered with water",
        optionA: "71%",
        optionB: "80%",
        optionC: "40%",

        correctAnswer: "",
      },

      {
        question: "There are_________ forms of water. ",
        optionA: "four",
        optionB: "three",
        optionC: "five",

        correctAnswer: "",
      },

      {
        question: "__________ maintain the water balance on earth.",
        optionA: "evaporation",
        optionB: "condensation",
        optionC: "water cycle",

        correctAnswer: "",
      },

      {
        question: "______ water is used for drinking.",
        optionA: "potable",
        optionB: "rain",
        optionC: "salty",

        correctAnswer: "",
      },

      {
        question: "______ water is used for drinking.",
        optionA: "potable",
        optionB: "rain",
        optionC: "salty",

        correctAnswer: "",
      },
      {
        question: "______ is limited.",
        optionA: "freshwater",
        optionB: "salty water",
        optionC: "dirty water",

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
        question: "To purify water, ______ gas is passed through it.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Water gets purified in__________ steps.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Check the usage of water in ______ and _____",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "In ______ people also purify the tap water to make it fit for drinking. ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We should install ______ to check the usage of water",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Water is present everywhere.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "The gaseous form of water is water vapour.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "The liquid form of water is present at mountains",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "On special occasions, we wear traditional dresses",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
    question: "We should use shower to bathe.",
    optionA: "True",
    optionB: "False",

    correctAnswer: "",
  };
}

export var activityData;
