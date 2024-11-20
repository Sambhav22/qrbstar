export const chapter = "Chapter - 14: Drop of Water ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "______ of water is fresh water on the earth.",
        optionA: "1%",
        optionB: "2.7% ",
        optionC: "3%",

        correctAnswer: "",
      },

      {
        question:
          "For farmers_____________, was the main source of water earlier. ",
        optionA: "rain",
        optionB: "tube well",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: " _________is also used in industry. ",
        optionA: "rain",
        optionB: "water",
        optionC: "sewage",

        correctAnswer: "",
      },

      {
        question: "Because of the excess use by humans, water is___________",
        optionA: "unlimited",
        optionB: "scarce",
        optionC: "both",

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
        question: "______ is the most precious gift of nature",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Electricity which is produced by water is called _____",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "______ water is a breeding place for mosquitoes.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "______ spread diseases like malaria, dengue, yellow fever etc",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Sugar ______ in water easily",
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
        question:
          "In the olden times, farmers were totally dependent on rivers",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "In a Persian wheel, a wheel is attached with buckets",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Denkli is also called shaduf",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Denkli is also used in Egypt for irrigation purpose",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Sugar does not dissolve in water",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
