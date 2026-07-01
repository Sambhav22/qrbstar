export const chapter = "Chapter - 10: Aquatic Life";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "Many beautiful creatures are living deep inside the_____________",
        optionA: "water",
        optionB: "air",
        optionC: "land",

        correctAnswer: "",
      },

      {
        question:
          "Roots of____________ plants fix themselves at one place to the bottom of the water body",
        optionA: "floating",
        optionB: "fixed",
        optionC: "underwater",

        correctAnswer: "",
      },

      {
        question: " ___________plants have light and spongy body. ",
        optionA: "fixed",
        optionB: "floating",
        optionC: "underwater",

        correctAnswer: "",
      },

      {
        question:
          "Plants like hydrilla, pondweed, tape grass etc. are the examples of_____________",
        optionA: "weeds",
        optionB: "underwater plants",
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
        question:
          "Fixed plants leaves have pores in the upper part called ______ for respiration",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Animals that live in water are called_________",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "The body of ______ is streamlined in shape which helps in the movement in water easily. ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "______ and ______ are aquatic mammals.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "__________live both in water or on land",
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
        question: "Underwater plants have narrow leaves with no pores.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Weeds are the plants that grow unwantedly",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Animals that live in water are called amphibians",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Whale is an example of aquatic animal",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Fish breathe through gills",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
