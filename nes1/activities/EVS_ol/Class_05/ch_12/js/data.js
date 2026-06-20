export const chapter = "Chapter - 12: Conduct in a Family";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "__________plays a key role in determining our likes and dislikes",
        optionA: "family",
        optionB: "school",
        optionC: "friend",

        correctAnswer: "",
      },

      {
        question:
          "If one body part or organ does not work properly, that person is called _____",
        optionA: "differently abled",
        optionB: "normal",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question:
          "Family provides ______ to special children to become self dependent",
        optionA: "opportunities",
        optionB: "education",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question:
          "Family treats special children with lots of ______ and _____",
        optionA: " love, care",
        optionB: "hatred, jealousy",
        optionC: "none",

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
        question: "If we belong to a traditional family, we follow ______ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Some members of a family share common ______ and _____",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "Physically or mentally challenged children are treated as ______ children ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Special children get education through ______ Script ",
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
        question: "Everybody likes the same food in family",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Family plays a major role in determining our like and dislikes",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Society or environment are the key players in settling the state of mind",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "All members of a family share same traits",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "A healthy person has all the body parts working properly.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
