export const chapter = "Chapter - 10: Let's Learn Cooking";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Apple is an example of _________ food",
        optionA: "raw",
        optionB: "boiled",
        optionC: "cooked",

        correctAnswer: "",
      },

      {
        question: "While steaming, food is placed in a __________",
        optionA: "baker",
        optionB: "steamer",
        optionC: "pressure cooker",

        correctAnswer: "",
      },

      {
        question: "_________ is an example of baking",
        optionA: "cake",
        optionB: "chocolate",
        optionC: "pakora",

        correctAnswer: "",
      },

      {
        question: "________ is a method of cooking",
        optionA: "cutting",
        optionB: "frying",
        optionC: "mixing",

        correctAnswer: "",
      },

      {
        question: "Cooked food is _________ to digest",
        optionA: "easy",
        optionB: "hard",
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
        question: "______ and ______ are used in villages to cook food",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________ gas stove is used in cities for cooking",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "In rural India, a large proportion of households use ______ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "In earlier times, people used ______ and ______ pots to cook their food",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________ Yojana provides LPG connections to rural people",
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
        question: "Some food can be eaten in raw form",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "While roasting, food is placed in oven",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "While boiling, food is placed in hot water",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "To cook food, we need certain vessels",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We use only one method to cook our food",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
