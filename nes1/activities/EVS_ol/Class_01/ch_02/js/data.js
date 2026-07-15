export const chapter = "Chapter - 2: Clean and Green All Around ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "We should reduce the use of __________ ",
        optionA: "Food",
        optionB: "Vehicles",
        optionC: "None",

        correctAnswer: "",
      },

      {
        question: "The 'Clean India Mission' was launched by our __________",
        optionA: "None",
        optionB: "Chief Minister",
        optionC: "Prime Minister",

        correctAnswer: "",
      },

      {
        question: "Dirty surroundings can lead to ____________ ",
        optionA: "Hygiene",
        optionB: "Diseases",
        optionC: "Both",

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
        question: "________and _____ system should be checked regularly",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "We should throw the household waste in municipal _______ or __________",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "We should plant more __________ to keep the environment green.",
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
        question: "We should throw the waste in bins",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Planting more trees may lead to pollution",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We should check for the drains and sewage system regularly",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
