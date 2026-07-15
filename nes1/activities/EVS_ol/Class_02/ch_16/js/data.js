export const chapter = "Chapter - 16: Beauty of the Earth ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "We live on the _________ ",
        optionA: "sky",
        optionB: "roof",
        optionC: "earth",

        correctAnswer: "",
      },

      {
        question: "The earth is covered with ________ and ________",
        optionA: "land/water",
        optionB: "none",
        optionC: "water/animal",

        correctAnswer: "",
      },

      {
        question: "A farmer grows crops easily in ________",
        optionA: "mountain",
        optionB: "desert",
        optionC: "plain",

        correctAnswer: "",
      },

      {
        question: "Rivers and lakes are called ________ bodies",
        optionA: "salty water",
        optionB: "freshwater",
        optionC: "stale water",

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
        question: "Our earth has ________ % of land",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Flat and even land is called  _________ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________ is available in various forms on the earth",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________ is a freshwater body",
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
        question: "The earth is an ugly planet",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Our earth has about 70% of water",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "A farmer grows crops on land",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "A lake is a freshwater body",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
