export const chapter = "Chapter - 5: Visit to a Fair ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Traditional fairs are generally organised in _____ ",
        optionA: "villages",
        optionB: "cities",
        optionC: "none of these",

        correctAnswer: "",
      },

      {
        question: "In traditional fairs, ______ items are sold",
        optionA: "animal",
        optionB: "handicraft",
        optionC: "plant",

        correctAnswer: "",
      },

      {
        question: "______ and supermarkets are opened for recreation.",
        optionA: "schools",
        optionB: "malls",
        optionC: "libraries",

        correctAnswer: "",
      },

      {
        question: "A/An ______ has fun rides.",
        optionA: "exhibition",
        optionB: "amusement park",
        optionC: "fair",

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
        question:
          ". ______ activities are done by the people in their free time.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "In olden times, people had very less recreational _____",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: " In _____ traditional fairs are organised on festivals",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "In a ______ fair, the books of renowned authors are displayed.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "In ______ fairs, exhibitors and visitors meet together.",
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
        question: "Fair is the only method of recreation and fun.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Traditional fairs are organised on festivals and special occasions.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Modern fairs are similar to traditional fairs",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Auto Expo promotes new and upcoming vehicles",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Theme parks are permanently established in big cities for recreational purposes.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
