export const chapter = "Chapter - 1: Amazing Plants";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Plants are ________ things",
        optionA: "living",
        optionB: "non living",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "Tall and big plants are called__________",
        optionA: "herbs",
        optionB: "shrubs",
        optionC: "trees",

        correctAnswer: "",
      },

      {
        question: "Plants breathe and ____________ ",
        optionA: "fly",
        optionB: "grow",
        optionC: "walk",

        correctAnswer: "",
      },

      {
        question: "____________ plants have thin, green or woody stems",
        optionA: "none",
        optionB: "small",
        optionC: "big",

        correctAnswer: "",
      },

      {
        question: "Rose is an example of ____________ ",
        optionA: "shrub",
        optionB: "herb",
        optionC: "tree",

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
        question: "Deodar grows on ________",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "________ are hot and sandy",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "________  is a non-green plant",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "________ plant eats insects",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "__________ and _________ grow deep under the sea",
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
        question: "Herbs are generally smaller than shrubs",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Plants grow everywhere",
        optionA: "True",
        optionB: "False",

        correctAnswer: "True",
      },

      {
        question: "Creepers are tall and thick plants",
        optionA: "True",
        optionB: "False",

        correctAnswer: "True",
      },

      {
        question: "Kikar and babool grow in deserts",
        optionA: "True",
        optionB: "False",

        correctAnswer: "True",
      },

      {
        question: "Cactus is a herb",
        optionA: "True",
        optionB: "False",

        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
