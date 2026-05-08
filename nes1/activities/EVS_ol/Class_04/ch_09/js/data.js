export const chapter = "Chapter - 9: Animals Around Us";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "Animals are found everywhere on land in water, air and under the_______",
        optionA: "roof",
        optionB: "ground",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "Most animals have__________ legs",
        optionA: "four",
        optionB: "three",
        optionC: "two",

        correctAnswer: "",
      },

      {
        question: "Some animals use their___________ to protect themselves.",
        optionA: "horns",
        optionB: "tails",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "Water animals use their tails and fins to__________",
        optionA: "walk",
        optionB: "swim",
        optionC: "run",

        correctAnswer: "",
      },

      {
        question:
          "A ______ has the ability to change its colour according to its surroundings",
        optionA: "cat",
        optionB: "cow",
        optionC: "chameleon",

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
        question: "Most of the ______ animals also live and eat in groups",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "The animals that spend a majority of their lives without other members are called _____ animals",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "Some animals are shy in nature and avoid the company of _____.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Cows and buffaloes are ______ eating animals",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },
      ,
    ],
    question: "________ and __________suck the blood of other animals. ",
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
        question: "A kangaroo uses its tail to jump long distances",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "A squirrel uses its tail to climb trees",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Animals do not have ears.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Monkeys have internal ears",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
    question: "Most animals live in groups for their safety.",
    optionA: "True",
    optionB: "False",

    correctAnswer: "",
  };
}

export var activityData;
