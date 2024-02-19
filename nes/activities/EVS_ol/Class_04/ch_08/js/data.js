export const chapter = "Chapter - 8: Blooming Flowers";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "______ is the most beautiful part of a plant",
        optionA: "root",
        optionB: "stem",
        optionC: "flower",

        correctAnswer: "",
      },

      {
        question: "Roots of a plant are present ______ ",
        optionA: "upward",
        optionB: "underground",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "______absorb water from the soil.",
        optionA: "leaves",
        optionB: "flowers",
        optionC: "roots",

        correctAnswer: "",
      },

      {
        question: "Roots hold the plants firmly into the ______",
        optionA: "air",
        optionB: "soil",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "Many small roots grow from _____",
        optionA: "taproot",
        optionB: "fibrous root",
        optionC: "leaves",

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
        question: "Flowers have a nice__________",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "The petals are surrounded by _____",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "The ______ collect nectar from flowers to prepare honey.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "A person who sells flowers is called a ______",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },
      ,
    ],
    question: "______ are known as the food factory of plants.",
    optionA: "",
    optionB: "",
    optionC: "",

    correctAnswer: "",
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Some plants have one main root",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Fibrous root consists of many small roots",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Flowers are known as food factory of a plant",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Flowers only bloom once in a year.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Broccoli and cauliflower are eaten as vegetables",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
