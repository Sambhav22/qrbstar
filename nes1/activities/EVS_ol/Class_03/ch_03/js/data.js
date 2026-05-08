export const chapter = "Chapter - 3: Water";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "The chief source of water is ________",
        optionA: "rain",
        optionB: "well",
        optionC: "hand pump",

        correctAnswer: "",
      },

      {
        question: "Plants need water to ________",
        optionA: "live",
        optionB: "grow",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "________ is essential for all living beings",
        optionA: "Water",
        optionB: "Plant",
        optionC: "None",

        correctAnswer: "",
      },

      {
        question: "Animals also need water to ________",
        optionA: "sleep",
        optionB: "run",
        optionC: "drink",

        correctAnswer: "",
      },

      {
        question: "We get groundwater from ________",
        optionA: "hand pump",
        optionB: "both",
        optionC: "tubewell",

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
        question: "_________ is a system by which rainwater gets stored",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "About ________ of the earth's surface is covered with water",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "The water in oceans gets __________ up by the sun",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We should keep the _________ close when not in use",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "Every city has a water department that ________ water to the houses",
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
        question: "It is not necessary to save water",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Rainwater is the main source of water on the earth",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Many villages in India still do not have adequate amount of drinking water",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We have enough quantity of freshwater",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We should use excess of water to wash our clothes",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
