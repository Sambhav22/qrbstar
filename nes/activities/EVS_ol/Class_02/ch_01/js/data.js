export const chapter = "Chapter - 1: Clean and Green India";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "We should not spit on/in the__________",
        optionA: "school",
        optionB: "road",
        optionC: "Both",

        correctAnswer: "Both",
      },

      {
        question: "__________is our country",
        optionA: "India",
        optionB: "Turkey",
        optionC: "Nepal",

        correctAnswer: "India",
      },

      {
        question: "We should throw the waste ____________ ",
        optionA: "on the road",
        optionB: "none",
        optionC: "in the dustbin",

        correctAnswer: "in the dustbin",
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
          "The ________ of India started the Clean and Green India campaign",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We should not wash our clothes on the ________ bank",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Our duty is to make our ________ clean and green.",
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
        question: "We should defecate in the open",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "India is a beautiful country",
        optionA: "True",
        optionB: "False",

        correctAnswer: "True",
      },

      {
        question: "We should plant more and more trees",
        optionA: "True",
        optionB: "False",

        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
