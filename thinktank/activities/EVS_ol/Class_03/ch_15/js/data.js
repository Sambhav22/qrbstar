export const chapter = "Chapter - 15: Pottery-Wonderful Fun! ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "On ________ we lit up our houses with diyas",
        optionA: "Holi",
        optionB: "Diwali",
        optionC: "Christmas",

        correctAnswer: "",
      },

      {
        question: "We can make ______ from clay",
        optionA: "handi",
        optionB: "surahi",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "Diyas and earthen lamps are also made by _________",
        optionA: "potters",
        optionB: "students",
        optionC: "tailors",

        correctAnswer: "",
      },

      {
        question: "The art of making pots from clay is called ________",
        optionA: "notary",
        optionB: "pottery",
        optionC: "lottery",

        correctAnswer: "",
      },

      {
        question: "Potters bake pots in _________",
        optionA: "furnance",
        optionB: "tumbler",
        optionC: "none",

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
        question: "Potters make vessels from ________",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "Markets are flooded with a number of beautiful and decorated _________ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Potters give shape to the pots with their _________ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "In olden times, earthen pots were made to collect _________ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "______ and ______ are vessels made out of clay",
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
        question: "Potters make pots from clay",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Potters get the clay by digging the ground",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Clay is first kneaded to make pots",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We can make a variety of things from clay",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Potter's wheel is used to give shape to the clay",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
