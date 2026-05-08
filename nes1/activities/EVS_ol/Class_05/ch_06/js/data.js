export const chapter = "Chapter - 6: Forests and Forest Life ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "A large area of land densely covered with trees is called a________",
        optionA: "river",
        optionB: "forest",
        optionC: "wildlife",

        correctAnswer: "",
      },

      {
        question: "Forests are important as they increase ______ on the earth.",
        optionA: "rainfall",
        optionB: "population",
        optionC: "pollution",

        correctAnswer: "",
      },

      {
        question: "______ people live in forests",
        optionA: " tribal",
        optionB: "adivasis",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "____________is removal or destruction of forests. ",
        optionA: "deforestation",
        optionB: "forestation",
        optionC: "farming",

        correctAnswer: "",
      },

      {
        question:
          "To protect the wildlife, government provide ______ to animals.",
        optionA: "clothes",
        optionB: "shelters",
        optionC: "food",

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
        question: "______ are the tribal people belong to Assam",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "______ are the tribal people of Jharkhand",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Gir national park is in ______  ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Sundarlal Bahuguna was the leader of ______ Movement.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "______ groves are worshipped and have religious importance",
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
        question: "We should destroy forest areas",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We should recycle the things to save our environment",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Social forestry provides efficient conservation of water and soil.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Government imposed a ban on cutting down of trees",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Some of the plants and trees are sacred",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
