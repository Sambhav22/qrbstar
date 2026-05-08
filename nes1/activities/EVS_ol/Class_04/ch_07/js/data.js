export const chapter = "Chapter - 7: Plants Around Us";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Big and tall plants are called _____ ",
        optionA: "herbs",
        optionB: "trees",
        optionC: "shrubs",

        correctAnswer: "",
      },

      {
        question: "Small plants with thin and woody stems are called _____",
        optionA: "herbs",
        optionB: "trees",
        optionC: "shrubs",

        correctAnswer: "",
      },

      {
        question:
          "Plants and trees are being cleared by the people for setting ______ ",
        optionA: "residential areas",
        optionB: "factories",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "Trees help us in soil _____ ",
        optionA: "conservation",
        optionB: "erosion",
        optionC: "deforestation",

        correctAnswer: "",
      },

      {
        question: "Plants are ______ beings.",
        optionA: "non-living",
        optionB: "living",
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
        question:
          "We should pluck out ______ and ______ time to time as they affect the growth of plants",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "In many houses, people plant ______ in their small lawns which are looked after by them",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "The crops grown on farmers' land belong to them and they are the ______ of farmlands",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "Plants that grow in forests or jungles are called ______ plants.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "Plants that grow in forests or jungles are called ______ plants.",
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
        question: "The forests are the habitat of many wild animals",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "When we cut down trees, animals feel happy",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Trees help in reducing pollution",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Plants cannot eat, grow and breathe",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Wild plants are grown by people.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
