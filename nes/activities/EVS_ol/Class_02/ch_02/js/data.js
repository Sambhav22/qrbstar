export const chapter = "Chapter - 2: Our Wonderful Senses";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "__________ are the parts of our body which help us to sense things",
        optionA: "none",
        optionB: "sense organs",
        optionC: "internal body parts",

        correctAnswer: "",
      },

      {
        question: "Digestion is done with the help of ________",
        optionA: "eyes",
        optionB: "nose",
        optionC: "stomach",

        correctAnswer: "",
      },

      {
        question: "There are _____ sense organs",
        optionA: "four",
        optionB: "six",
        optionC: "five",

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
        question: "We can _____ anything with our tongue",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "__________ helps us to touch and feel",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: " __________ help us to see",
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
        question: "Heart helps us to digest our food",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We smell with the help of our legs",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Ears help us to hear",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
