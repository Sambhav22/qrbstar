export const chapter = "Chapter - 14: Let's Send a Letter ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "Exchanging information on a large scale is called ______ communication",
        optionA: "mass",
        optionB: "personal",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question:
          "Earlier when people were not aware of the modes of communication,they communicated through _____",
        optionA: "stamps",
        optionB: "signs",
        optionC: "writings",

        correctAnswer: "",
      },

      {
        question: "A _________collects letters from the letter box",
        optionA: "postman",
        optionB: "policeman",
        optionC: "guard",

        correctAnswer: "",
      },

      {
        question: "________ is a means of mass communication",
        optionA: "newspaper",
        optionB: "letter",
        optionC: "e-mail",

        correctAnswer: "",
      },

      {
        question:
          "Like food, water and shelter, ______ is also an important requirement for the survival of humans",
        optionA: "thing",
        optionB: "need",
        optionC: "communication",

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
        question: "A _________ delivers letters",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "An __________ can also be written like a letter",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "With the help of ______ communication, we are able to know what is happening around the world.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "You write the _________ of the person to whom you want to send the letter",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "When people were not aware of the modes of communication, they used _______ and ______ to communicate",
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
        question:
          "Symbol is a form of language that directly communicates with the targeted audience",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Communication is transferring of messages",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "A dancer through gestures communicates her feelings to audience during a performance",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We do not write address on letter before posting it",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "People who do not speak also express their feelings and needs through their sign language",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
