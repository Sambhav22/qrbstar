export const chapter = "Chapter - 9: Our Family ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: " We all live in a _________ ",
        optionA: "school",
        optionB: "zoo",
        optionC: "family",

        correctAnswer: "",
      },

      {
        question: "A joint family consists of __________ generations",
        optionA: "two",
        optionB: "three",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "Parents and their __________ together make a family",
        optionA: "children",
        optionB: "friends",
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
        question: "A big family has more than ________ children",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Our mother and father are our __________ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Kaira's family is a ________ family",
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
        question: "There are three members in a joint family",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Parents and their one or two children together form a small family",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "A big family has only two members",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
