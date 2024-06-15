export const chapter = "Chapter - 13: Work and Play ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Indoor games are played _________ the house",
        optionA: "outside",
        optionB: "both",
        optionC: "inside",

        correctAnswer: "",
      },

      {
        question: "_________ is done to teach the students",
        optionA: "none",
        optionB: "planting",
        optionC: "teaching",

        correctAnswer: "",
      },

      {
        question: "_________  is done by people for earning money",
        optionA: "work",
        optionB: "walking",
        optionC: "sleeping",

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
        question: "A ________ treats the sick people",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Work is done by people to earn _________ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________ is an indoor game",
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
        question: "Indoor games are played in the ground",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Ludo is an indoor game",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "A doctor teaches the students",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
