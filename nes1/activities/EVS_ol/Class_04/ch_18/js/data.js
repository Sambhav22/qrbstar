export const chapter = "Chapter - 16: Building Bridges";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Thousands of years ago, men lived in__________",
        optionA: "havelis",
        optionB: "flats",
        optionC: "caves",

        correctAnswer: "",
      },

      {
        question: "__________ is a chief building material.",
        optionA: "brick",
        optionB: "paper",
        optionC: "soil",

        correctAnswer: "",
      },

      {
        question:
          "In small towns or rural areas,________ bridges were created. ",
        optionA: "beam",
        optionB: "bamboo",
        optionC: "arch",

        correctAnswer: "",
      },

      {
        question:
          "To construct a bridge,____________ measurements are required.",
        optionA: "olympic",
        optionB: "scientific",
        optionC: "none",

        correctAnswer: "",
      },
    ],
    question: "The bridge is one of the oldest types of bridges.",
    optionA: "beam",
    optionB: "suspension",
    optionC: "arch",

    correctAnswer: "",
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        question: "__________were created with an aim to cross small streams.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "______ is used in wood work and shuttering",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "The ______ bridge has a long span. ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          " _______types of cables are attached to construct a suspension bridge. ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },
      ,
    ],
    question: " The ______ bridge has several independent beams ",
    optionA: "",
    optionB: "",
    optionC: "",

    correctAnswer: "",
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The arch bridge is one of the modern types of bridges.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Plumb bob is used to remove excess or waste hard concrete",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "The cantilever bridge consists of vertical beams.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "A flyover is different from a bridge.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
      {
        question: "Civil engineers construct bridges for us",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
