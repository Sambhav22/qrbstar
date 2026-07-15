export const chapter = "Chapter - 5: Our Basic Needs ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: " ________ and _________ are needed to survive",
        optionA: "AC/car",
        optionB: "both",
        optionC: "food/shelter",

        correctAnswer: "",
      },

      {
        question: "We eat _________ to satisfy our hunger",
        optionA: "food",
        optionB: "clothes",
        optionC: "air",

        correctAnswer: "",
      },

      {
        question: "We can live in _________ ",
        optionA: "water",
        optionB: "shelter",
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
        question: "________ helps us to grow",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We wear _________ to protect our body",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We drink _________ to survive",
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
        question: "Air is not a necessity",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Furniture is a materialistic thing",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "The sun provides us sunlight",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
