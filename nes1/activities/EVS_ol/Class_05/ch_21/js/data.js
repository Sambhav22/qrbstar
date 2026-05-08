export const chapter = "Chapter - 16: Monyments and Buildings";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "The _____ is famous for its annual Rath Yatra.",
        optionA: "Lingaraja Temple",
        optionB: "Jagannath Temple",
        optionC: "Golden Temple",

        correctAnswer: "",
      },

      {
        question:
          " _________consists of fourteen storeys and rises to a height of 190 feet",
        optionA: "Lal Quila",
        optionB: "Jantar Mantar",
        optionC: "Brihadiswara Temple",

        correctAnswer: "",
      },

      {
        question: " __________is the highest stone tower in India.  ",
        optionA: "Qutub Minar",
        optionB: "Sanchi Stupa",
        optionC: "Golden Temple",

        correctAnswer: "",
      },

      {
        question: "Red Fort was built about 360 years ago by___________",
        optionA: "Shah Jahan",
        optionB: "Akbar",
        optionC: "Raja Jai Singh",

        correctAnswer: "",
      },
    ],
    question: "The members of all communities can go and pray in____________",
    optionA: "Rashtrapati Bhavan",
    optionB: "Lotus Temple",
    optionC: "Sanchi Stupa",

    correctAnswer: "",
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        question: "The monuments of India are part of our country's _____",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "The ______ shows the developed state of metal casting in ancient times.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "______ was built by the Chandala kings",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "__________ is the second tallest minar in India.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },
      {
        question: "The ______ was built by the followers of Bahai sect",
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
        question: "The Iron Pillar at Mehrauli was built by the Gupta Kings.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Sher Shah's Mausoleum was built by Sher Shah.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "The construction of the Qutub Minar was completed by Qutub-ud-din Aibak.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Red Fort is also called the Lal Quila",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
    question:
      "Rashtrapati Bhavan is the grand residence of the President of India",
    optionA: "True",
    optionB: "False",

    correctAnswer: "",
  };
}

export var activityData;
