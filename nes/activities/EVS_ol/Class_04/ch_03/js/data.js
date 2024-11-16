export const chapter = "Chapter - 3: Relationships";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          " ______family members comprise of parents and children living together in a house",
        optionA: "immediate",
        optionB: "extended",
        optionC: "neighbourhood",

        correctAnswer: "",
      },

      {
        question: "When a child takes birth, it is a/an________",
        optionA: "kid",
        optionB: "adult",
        optionC: "infant",

        correctAnswer: "",
      },

      {
        question:
          "________  implies sending money and clothes to orphan children. ",
        optionA: "fostering",
        optionB: "adoption",
        optionC: "charity",

        correctAnswer: "",
      },

      {
        question: "Family__________ provide opportunity to meet our relatives.",
        optionA: "gatherings",
        optionB: "locations",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "Family values are related to their________",
        optionA: "culture",
        optionB: "traditions",
        optionC: "both",

        correctAnswer: "",
      },
      {
        question: "Couple who foster a child are called____________",
        optionA: "grandparents",
        optionB: "temporary parents",
        optionC: "foster parentsh",

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
        question: "_________ and ______ are our paternal grandparents",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "A ______ is a group of people who live together.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We learn many things from our _____ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "A ______ develops inside the womb of its mother",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "In_____________couples become legal parents of a child",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "A baby elephant holds its mother's ______ to follow her",
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
        question: "Like humans, animals also produce their young ones. ",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Extended family members live with us in the same house. ",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Our relatives who do not live with us called our immediate family.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Family values in different families are similar",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "In olden times, ladies covered their face in front of their fathers-in-law.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
