export const chapter = "Chapter - 16: Pandemic Outbreak";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          " ___________is an epidemic that spreads quickly over a short span of time",
        optionA: "pandemic",
        optionB: "vaccine",
        optionC: "outbreak",

        correctAnswer: "",
      },

      {
        question: " ___________is the health specialised agency",
        optionA: "WHO",
        optionB: "NASA",
        optionC: "ISRO",

        correctAnswer: "",
      },

      {
        question: "____________is the single tool to prevent from infection. ",
        optionA: "vaccine",
        optionB: "disease",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "The corona virus is believed to have started in_________",
        optionA: "China",
        optionB: "Pakistan",
        optionC: "India",

        correctAnswer: "",
      },
    ],
    question:
      "On____________ the Prime Minister announced a complete 21-day lockdown",
    optionA: "March 20, 2020",
    optionB: "March 24, 2020",
    optionC: "April 1, 2020",

    correctAnswer: "",
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        question: "__________ has decided the name of virus Covid-19",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "Corona virus disease has broken down__________ of the infrastructure",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "______ experts are working round the clock to develop COVID-19 vaccine ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "______ spreads in a short span of time ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },
      {
        question:
          "Lockdown is imposed to restrict the spread of the ______ virus.",
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
        question: "WHO declared Covid-19 a pandemic",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Vaccine is an only tool to fight with the spread of Covid-19",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "We shouldn't wash our hands regularly to save form Covid-19 infection",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Corona warriors are the real heroes during this pandemic.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Corona virus devastated the health and economic infrastructure of the country.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
