export const chapter = "Chapter - 5: Growing Plants";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "The process of growing plants from seeds is called _____",
        optionA: "germination",
        optionB: "embryo",
        optionC: "cotyledons",

        correctAnswer: "",
      },

      {
        question:
          "Plants make their own food through the process of __________",
        optionA: "breathing",
        optionB: "photosynthesis",
        optionC: "evaporation",

        correctAnswer: "",
      },

      {
        question:
          "______ is the scattering of seeds to far off places from the parent plants",
        optionA: "explosion",
        optionB: "dispersal",
        optionC: "dropping",

        correctAnswer: "",
      },

      {
        question: "Tea was discovered in________",
        optionA: "Assam",
        optionB: "Nepal",
        optionC: "China",

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
        question:
          "All plants need right temperature_____,____________ air and nutrients to grow",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Most of the plants take birth from ______ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          " The ______ consists of one or two tiny seeds called cotyledons.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "For germination of plants, ______ things are important.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Plants can reproduce through___________,________ and leaf",
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
        question: "Plants are only grown from seeds.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Plant like sugarcane, rose etc. can grow from stem cuttings",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Apple can grow from the roots of the mother plant.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Seeds are dispersed by wind only",
        optionA: "True",
        optionB: "",

        correctAnswer: "",
      },

      {
        question: " Seeds of lotus are carried away by water.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
