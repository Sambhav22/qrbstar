export const chapter = "Chapter - 15: Let's Communicate ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: " Sending and receiving of messages is called _________ ",
        optionA: "communication",
        optionB: "both",
        optionC: "transport",

        correctAnswer: "",
      },

      {
        question: "_________is the oldest means of communication",
        optionA: "radio",
        optionB: "letter",
        optionC: "mobile",

        correctAnswer: "",
      },

      {
        question: "We use ________ for chatting",
        optionA: "mobile",
        optionB: "none",
        optionC: "e-mail",

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
        question: "________ is the oldest means of communication",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Sending and receiving of messages is known as _________ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We go to the _________ to post a letter",
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
        question: "We use telephone for watching TV",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "E-mail is used for sending mails",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We use mobile for talking",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
