export const chapter = "Chapter - 16: Tale of a River";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "______ is a natural flowing water body",
        optionA: "river",
        optionB: "rain",
        optionC: "pond",

        correctAnswer: "",
      },

      {
        question: "From mountains, snow melts down and forms rivers on__________",
        optionA: "hills",
        optionB: "plains",
        optionC: "deserts",

        correctAnswer: "",
      },

      {
        question: "The process by which water changes into vapour is called _____",
        optionA: "evaporation",
        optionB: "condensation ",
        optionC: "water cycle",

        correctAnswer: "",
      },

      {
        question: "The process by which water vapour changes back to water is called _____",
        optionA: "evaporation",
        optionB: "condensation",
        optionC: "rain",

        correctAnswer: "",
      },
    ],question: "The life of ______ animals and plants also gets endangered due to water pollution",
        optionA: "wild",
        optionB: "pet",
        optionC: "aquatic",

        correctAnswer: "",
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        question: "__________ is the main source of water",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Rain is the source of___________water. ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Due to heat, ______ water gets exhausted.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Dams are helpful in producing ______ also",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      , questions: "__________ water causes several harmful effects.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Water evaporates on heating.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Dams are the natural sources of water.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Dams are constructed to check the flow of river water.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Inland waters include the streams flow in foreign countries",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],  question: "Many diseases are caused by polluted water.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
  };
}

export var activityData;
