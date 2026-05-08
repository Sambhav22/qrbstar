export const chapter = "Chapter - 8: Farmers on Farm";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "A ______ is a person who is engaged on farm for growing crops",
        optionA: "farmer",
        optionB: "teacher",
        optionC: "pilot",

        correctAnswer: "",
      },

      {
        question: " ____________farmers hold a large piece of land",
        optionA: "mixed",
        optionB: "commercial",
        optionC: "dairy",

        correctAnswer: "",
      },

      {
        question: " _________rear milk giving animals.",
        optionA: "commercial farmers",
        optionB: "dairy farmers",
        optionC: "small farmers",

        correctAnswer: "",
      },

      {
        question: "The first step of growing crops is preparing the _______",
        optionA: "soil",
        optionB: "plants",
        optionC: "seeds",

        correctAnswer: "",
      },

      {
        question: " _________is used for sowing seeds quickly",
        optionA: "harrow",
        optionB: "sprayer",
        optionC: "seed drill",

        correctAnswer: "",
      },

      {},
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        question: "______ is providing water to crop fields.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "By adding_________ soil gets extra nutrients",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "When the crop is ready, it is ______ by a sickle or by big machines",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          " Harvested crops are then ______ with the help of threshing machines",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: " ______ is used as a tool to level the soil.",
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
        question: "Small farmers are also known as marginal farmers.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Mixed farmers involve in growing of crops and rearing of animals both",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Seeds can be sowed by applying five methods.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Storage is the final step is which dried grains are stored in containers.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "The main kinds of plants that farmers grow are grains and legumes",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
