export const chapter = "Chapter - 16: Games for All";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "______ can be played in two ways..",
        optionA: "sports",
        optionB: "cricket",
        optionC: "football",

        correctAnswer: "",
      },

      {
        question: "______ is a sport loving nation.",
        optionA: "India",
        optionB: "Bangladesh",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "When both men and women play jointly, it is called _____ ",
        optionA: "singles",
        optionB: "doubles",
        optionC: "mixed doubles",

        correctAnswer: "",
      },

      {
        question: "Kho-kho was invented in_____________",
        optionA: " Maharashtra",
        optionB: "Gujarat",
        optionC: "Bihar",

        correctAnswer: "",
      },
      {
        question: "______ game is also known as hu-tu-tu",
        optionA: "  kho-kho",
        optionB: " cricket",
        optionC: "kabaddi",

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
        question: "Football is played in a _____",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "In cricket, ______ players play on a field.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Sports are generally_________ oriented. ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "______ are especially treated unfit to participate in sports. ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },
      {
        question: "Games and sports help us in ______ and -----�rowth ",
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
        question: "We all play games to entertain ourselves",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Mithali Raj is the famous player of cricket female team",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Games do not have any traditional importance.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Local games reflect the tradition and culture of the particular place.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
      {
        question: "Sports increase our mental stress..",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
