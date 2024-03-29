export const chapter = "Chapter - 4: Be Clean,Healthy and Fit ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "We should cut our nails with a ______ ",
        optionA: "knife",
        optionB: "none",
        optionC: "nail cutter",

        correctAnswer: "",
      },

      {
        question: "To stay healthy, we should __________",
        optionA: "do yoga",
        optionB: "both",
        optionC: "eat junk food",

        correctAnswer: "",
      },

      {
        question: "We should brush our teeth ____________ ",
        optionA: "twice",
        optionB: "once",
        optionC: "thrice",

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
        question: "_________ is the best exercise to keep us fit",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We should take a _____ daily",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We should wear _____ clothes ",
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
        question: "We should not brush our teeth",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Exercise helps us to stay fit",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We should not get up early in the morning",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
