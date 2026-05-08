export const chapter = "Chapter - 14: Means of Transport ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Means of ________ are used to travel",
        optionA: "transport",
        optionB: "both",
        optionC: "communication",

        correctAnswer: "",
      },

      {
        question: "A _________ has wheels to move",
        optionA: "bicycle",
        optionB: "cat",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "_________ is the cheapest means of transport",
        optionA: "aeroplane",
        optionB: "train",
        optionC: "car",

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
        question: "Trains also carry _____ from one place to another",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "A car has _____ wheels",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________ take us from one place to another",
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
        question: "Bicycle can be used to sing",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Transports are used to travel",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We use trains to go over long distances",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
