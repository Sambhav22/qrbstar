export const chapter = "Chapter - 2: Houses- Then and Now";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "______ was constructed in olden times",
        optionA: "bungalow",
        optionB: "haveli",
        optionC: "flat",

        correctAnswer: "",
      },

      {
        question: "A large open space in olden houses was called _____",
        optionA: "kitchen ",
        optionB: "farm",
        optionC: "verandah",

        correctAnswer: "",
      },

      {
        question: "Dharavi is the ______ largest slum area in the world.",
        optionA: "first",
        optionB: "third",
        optionC: "second",

        correctAnswer: "",
      },

      {
        question: "Pucca houses are___________ houses. ",
        optionA: "temporary",
        optionB: "permanent",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "______ is an example of modern house",
        optionA: "haveli",
        optionB: "hut",
        optionC: "bungalow",

        correctAnswer: "",
      },

      {
        question:
          "Houses of modern time are made in smaller area because of increase in________",
        optionA: "population",
        optionB: "pollution",
        optionC: "both",

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
        question: "______ houses are expensive and take a lot of time to build",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "______ and ______ are the examples of houses constructed in olden times",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "Houses provide ______ and ______ to the people who live in it",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Due to_________ people migrate from one city to other",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Poor people forced to live in ______ and on ______ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "In olden times, houses were ______ in size.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Apartments, flats and bungalows have all modern facilities",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Houses in olden times were made up of mud, bricks, wood, stone chips etc",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "In olden times, all family members sat together in evening in verandah.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Shelter is not a basic need for everyone.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "People who live in slums lead a miserable life",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
      {
        question: "Dharavi in Mumbai is the first largest slum in Asia.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
