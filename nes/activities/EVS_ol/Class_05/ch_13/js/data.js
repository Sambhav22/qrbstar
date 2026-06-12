export const chapter = "Chapter - 13: Shelter for All";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Ants live in_________",
        optionA: "houses",
        optionB: "colonies",
        optionC: "hives",

        correctAnswer: "",
      },

      {
        question: "Bees live together in a/an_________",
        optionA: "anthill",
        optionB: "beehive",
        optionC: "house",

        correctAnswer: "",
      },

      {
        question: "Rich people live in___________",
        optionA: "bungalows",
        optionB: "mud houses",
        optionC: "normal houses",

        correctAnswer: "",
      },

      {
        question:
          "The same region in which people live with their families is called___________",
        optionA: "neighbourhood",
        optionB: "area",
        optionC: "park",

        correctAnswer: "",
      },
    ],
    question: "______ is a permanent and densely settled place",
    optionA: "village",
    optionB: "city",
    optionC: "town",

    correctAnswer: "",
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        question: "__________are the shelters for humans. ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Bees are__________ insects.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Animals who live on land are called___________ animals",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Animals who live in water are called__________ animals",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },
      ,
    ],
    question: "Animals who fly in air are called_________ animals. ",
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
        question: "Ants are social insects",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Animals do not need shelters to live in",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Some animals live on land and in water also.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Village is usually smaller than a town",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
    question: "City is a large human settlement",
    optionA: "True",
    optionB: "False",

    correctAnswer: "",
  };
}

export var activityData;
