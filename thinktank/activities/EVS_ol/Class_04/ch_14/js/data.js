export const chapter = "Chapter - 14: Travel - A Fun";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "______ gives the chance to discover new culture of various places",
        optionA: "shelter",
        optionB: "travelling",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "Buses, aeroplanes etc. are the means of__________ transport",
        optionA: "public",
        optionB: "private",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "Money made of metal is called________",
        optionA: "coin",
        optionB: "note",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: " __________and____________ are the two sides of coins. ",
        optionA: "head, tail ",
        optionB: "head, neck",
        optionC: "head, face",

        correctAnswer: "",
      },

      {
        question: " ___________is the Indian currency. ",
        optionA: "Yen",
        optionB: "Dollar",
        optionC: "Rupee",

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
        question:
          "The _______ and _______ are imprinted on notes to discourage the making of fake note",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "______ rupee note has the picture of Sun Temple.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "50 rupee note has the picture of _____.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "The signature of the _______ of Reserve Bank of India is shown on Indian notes.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_______ are also used for travelling.",
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
        question: "We buy tickets to travel in public transport",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "In November 2016, the government demonetised the notes oft 500 and t 1000",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Bank notes are made up of special paper.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Both sides of notes are different.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Coins have a great historical importance",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
