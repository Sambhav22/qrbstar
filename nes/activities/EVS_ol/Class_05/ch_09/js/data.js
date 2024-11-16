export const chapter = "Chapter - 9: Food for plants and Animals";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "Green plants make their own food, so they are called __________",
        optionA: "autotrophs",
        optionB: "biotrophs",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "Pitcher plant is an/a__________ plant",
        optionA: "carnivorous",
        optionB: "insectivorous",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "Omnivores eat both__________ and___________",
        optionA: "plants, animals",
        optionB: "plants, nutrients",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "A network of many_________ is called a food web.",
        optionA: "food chains",
        optionB: "food cycles",
        optionC: "none",

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
          "The sugar released during photosynthesis is converted into _____",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "__________ also eat insects as their food to fulfill nutrients.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________ are also called primary consumers.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________ kill other animals and eat their flesh ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Food chains follow a ______ path. ",
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
        question: "All animals have same food eating habits.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Goat is an example of herbivores animals",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Herbivores have strong teeth to chew their food.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Parasites eat the flesh of dead animals",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Scavengers depend on other living animals for food.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
