export const chapter = "Chapter - 7: Air All Around";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "We can only ________ the air",
        optionA: "Touch",
        optionB: "Feel",
        optionC: "See",

        correctAnswer: "",
      },

      {
        question: "We need air to ________ ",
        optionA: "Breath",
        optionB: "Bath",
        optionC: "Eat",

        correctAnswer: "",
      },

      {
        question: "_________ is present all around us",
        optionA: "Air",
        optionB: "Water",
        optionC: "None",

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
        question: "________ is used to grow plants",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Impure air is very _________ for our health",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Air is used to ________ balloons",
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
        question: "Air pollution is good for health",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We should control air pollution",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "We should plant more and more trees to control air pollution",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
