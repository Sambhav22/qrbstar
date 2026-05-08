export const chapter = "Chapter - 11: Let's See a Family in Transit";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "A__________ is regarded as our first school.",
        optionA: "temple",
        optionB: "family",
        optionC: "neighbourhood",

        correctAnswer: "",
      },

      {
        question: "A family is defined as a__________",
        optionA: " group of people",
        optionB: "group of females",
        optionC: "group of friends",

        correctAnswer: "",
      },

      {
        question: "A family tree depicts the ______ between family members. ",
        optionA: " shifting",
        optionB: "relationship",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question:
          "Forceful movement or shifting of people from one country to other is defined as _____",
        optionA: "migration",
        optionB: "displacement",
        optionC: "both",

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
        question: "The movement in search of new beginning is called _____",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "The people who migrate are called _____",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "In ______ migration, a migrant does not come back.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "With the change in time, families ______ change.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          " It was seen earlier that the son of a goldsmith became a _____",
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
        question: "A family is made up of friends and neighbours",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "In a family, all members are not related to one another",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "A family tree usually shows three generations.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Migration is very easy for people.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "With the change in time, traditional practices of families stop",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
