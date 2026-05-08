export const chapter = "Chapter - 15: Let's Communicate ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "The process of sending and receiving information is called _________",
        optionA: "communication",
        optionB: "both",
        optionC: "communicator",

        correctAnswer: "",
      },

      {
        question: "_________virus is spreading worldwide",
        optionA: "Corona",
        optionB: "none",
        optionC: "Copola",

        correctAnswer: "",
      },

      {
        question: "________ and ________ are the means of communication",
        optionA: "pen/pencil",
        optionB: "computer/TV",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "To stay safe from Corona virus, you should wear ________ ",
        optionA: "tie",
        optionB: "socks",
        optionC: "mask",

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
        question: "Newspaper is an example of means of _________ communication",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Email is known as a ________ means of communication",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________  is the medium of sending information to masses",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Through ______, information spreads quickly to the masses",
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
        question: "Letter is known as the latest means of communication",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Radio is an example of mass communication",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "You should wash your hands frequently to stay safe from Corona virus",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Communication means to transport people from one place to other.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
