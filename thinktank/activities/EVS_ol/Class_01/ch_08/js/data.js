export const chapter = "Chapter - 8: Shelter to Live ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "We live in a _________ with our family",
        optionA: "house",
        optionB: "zoo",
        optionC: "kitchen",

        correctAnswer: "",
      },

      {
        question: "Animals also need _________ to live in",
        optionA: "apartment",
        optionB: "bungalow",
        optionC: "shelter",

        correctAnswer: "",
      },

      {
        question: "We take bath in a _________ ",
        optionA: "kitchen",
        optionB: "bathroom",
        optionC: "none",

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
        question: "Food is cooked in the __________",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Flats are the type of ___________ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "________ is an important basic need",
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
        question: "We take bath in our bedroom",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We should keep our house neat and clean",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We sleep in a kitchen",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
