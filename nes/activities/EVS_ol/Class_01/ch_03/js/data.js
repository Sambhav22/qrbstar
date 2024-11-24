export const chapter = "Chapter - 3: Our Body ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Our eyes help us to __________ ",
        optionA: "Hear",
        optionB: "Speak",
        optionC: "See",

        correctAnswer: "",
      },

      {
        question: "We can run with the help of our __________",
        optionA: "Hands",
        optionB: "Legs",
        optionC: "Toes",

        correctAnswer: "",
      },

      {
        question: "Our hands help us to ____________ ",
        optionA: "Talk",
        optionB: "Walk",
        optionC: "Hold Things",

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
        question: "We have _____ eyes",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We can hear with our __________",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We use our hands to _______ ",
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
        question: "Chest is an external body part",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We can use our ears to see the world",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We can smell with our nose",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
