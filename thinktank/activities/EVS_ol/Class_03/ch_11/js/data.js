export const chapter = "Chapter - 11: Work We Do";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "__________ are low paid workers",
        optionA: "doctors",
        optionB: "teachers",
        optionC: "sweepers",

        correctAnswer: "",
      },

      {
        question:
          "Law and civil services are __________ in the eyes of society",
        optionA: "respectable",
        optionB: "not respectable",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "People do different kinds of works to earn their _________ ",
        optionA: "things",
        optionB: "livelihood",
        optionC: "needs",

        correctAnswer: "",
      },

      {
        question: "A _________ treats patients",
        optionA: "doctor",
        optionB: "teacher",
        optionC: "lawyer",

        correctAnswer: "",
      },

      {
        question: "Greengrocers sell _________",
        optionA: "clothes",
        optionB: "vegetables",
        optionC: "cakes",

        correctAnswer: "",
      },

      {
        question: "Every work does not give high ______ in return",
        optionA: "articles",
        optionB: "none",
        optionC: "income",

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
        question: "The ______ sweeps streets in the morning",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "The ___________ brings newspaper in the morning",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "The __________ teaches us different subjects in school",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "The __________ mends our shoes",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: " We do fun activities in our _________ time",
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
        question: "The poor children work in factories",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "The cobblers bring us newspapers",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Child labour is a crime in India",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Music is a kind of fun activity which we do in our busy time",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Our government has not taken any step to stop child labour",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
