export const chapter = "Chapter - 12: Safety First ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "We should not go anywhere with ________",
        optionA: "a friend",
        optionB: "a stranger",
        optionC: "our father",

        correctAnswer: "",
      },

      {
        question: "We should always follow certain safety _________ to be safe",
        optionA: "rules",
        optionB: "people",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "Rules keep us _________ and _________ ",
        optionA: "unhealthy and unhappy",
        optionB: "none",
        optionC: "safe and alert",

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
        question: "Rules keep us ________ from coming dangers",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We should not play with the _____ objects",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We should not eat anything given by a _________",
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
        question: "We should run or play on the road",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Following safety rules keeps us safe",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We should disturb the bus driver while driving",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
