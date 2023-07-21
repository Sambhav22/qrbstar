export const chapter = "Chapter - 6: Our Houses and Neighbourhood ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "In cities, we see __________ houses",
        optionA: "temporary",
        optionB: "kuchcha",
        optionC: "permanent",

        correctAnswer: "",
      },

      {
        question:
          "__________ houses are constructed in such areas which are prone to earthquake",
        optionA: "permanent",
        optionB: "kuchcha",
        optionC: "wooden",

        correctAnswer: "",
      },

      {
        question: "We have _________ cardinal directions",
        optionA: "two",
        optionB: "five",
        optionC: "four",

        correctAnswer: "",
      },

      {
        question: "In hilly areas, houses have ________ roofs",
        optionA: "straight",
        optionB: "sloping",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question:
          "_________ tells where a place is located on the earth's surface",
        optionA: "location",
        optionB: "none",
        optionC: "direction",

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
        question: "Unusual houses are ________ in nature",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "In hilly areas, houses have _________ roofs",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Houses in deserts are plastered with _________ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "Houses in flooded areas are constructed over raised _________ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "______ and ______ should be cleaned daily ",
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
        question: "We see flats in villages",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "The policemen protect us from theft and robberies",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "GPS in our phones takes us where we want to go",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "When you face the rising sun, it is East direction",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "A map is very typical to observe",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
