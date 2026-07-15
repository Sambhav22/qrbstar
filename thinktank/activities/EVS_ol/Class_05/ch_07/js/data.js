export const chapter = "Chapter - 7: The World of Food";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "We should not store ______ food items for long",
        optionA: "perishable",
        optionB: "non-perishable",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question:
          "Food preservation is the process of treating and handling food to prevent its__________",
        optionA: "growth",
        optionB: "spoilage",
        optionC: "smell",

        correctAnswer: "",
      },

      {
        question: "Food gets________ when germs begins to grow",
        optionA: "spoiled",
        optionB: "cold",
        optionC: "stale",

        correctAnswer: "",
      },

      {
        question: "Preservatives like_________ are added to food.",
        optionA: "sodium carbonate ",
        optionB: "sodium benzoate",
        optionC: "sodium chloride",

        correctAnswer: "",
      },

      {},
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        question: "Food is very important for our _____",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Food is of ______ types.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Pulses and grains are the examples of ______ food items.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Vegetables and fruits are the examples of ______ food items",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Food spoils or ______ with time",
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
          "Canning involves cooking and preserving the food in sealed jars",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Pasteurization is the method of preserving milk.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Milk does not get spoilt.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We should waste food",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Scarcity of food can be done through man-made activities only",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
