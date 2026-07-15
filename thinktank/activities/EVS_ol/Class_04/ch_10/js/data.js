export const chapter = "Chapter - 10: Habitats of Animals";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Like humans, animals too need__________to live",
        optionA: "shelter",
        optionB: "clothing",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "Animals which live on land are called____________animals",
        optionA: "aquatic",
        optionB: "terrestrial",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "Monkeys live on________",
        optionA: "trees",
        optionB: "roofs",
        optionC: "caves",

        correctAnswer: "",
      },

      {
        question: "Birds make different types of__________",
        optionA: "nests",
        optionB: "homes",
        optionC: "burrows",

        correctAnswer: "",
      },

      {
        question: "The seashore provides shelter to _____",
        optionA: "crabs",
        optionB: "fish ",
        optionC: "lions",

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
        question: "______ and ______ are semi-aquatic animals",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Snakes make_________to live in. ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Some fish make their homes in______",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "______ animals spend most of their time on trees",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "The ______ provides shelter to crabs, turtles and sea worms.",
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
        question: "Lions and tigers live in water",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "The habitat of terrestrial animals is found in water.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Rabbits make a hole deep inside the ground.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "No animal live in water.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "The eagle makes its nest on the topmost branch of a tall tree",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
