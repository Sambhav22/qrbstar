export const chapter = "Chapter - 1: Super Senses";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: " ________are the windows from our body to the outside world",
        optionA: "foods",
        optionB: "sense organs",
        optionC: "clothes",

        correctAnswer: "",
      },

      {
        question:
          "Animals that are_________ have much keener sense of smell than humans. ",
        optionA: "mammals",
        optionB: "birds",
        optionC: "reptiles",

        correctAnswer: "",
      },

      {
        question: " __________are trained to sniff drugs and explosives.  ",
        optionA: "tigers",
        optionB: "cats",
        optionC: "dogs",

        correctAnswer: "",
      },

      {
        question: "A tiger can see_________ times better than humans at night.",
        optionA: "five",
        optionB: "six",
        optionC: "two",

        correctAnswer: "",
      },

      {
        question: "Dogs communicate through_________ ",
        optionA: "sound",
        optionB: "symbols",
        optionC: "both",

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
          "Grazing animals sense of ______ provide them warning of approaching predators. ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "A cat refuses to eat food when its nose is________",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "A ______ vision is exceptionally well adapted for hunting. ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "__________birds can see four times as far as humans can",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "Some animals create a___________sound to communicate with others",
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
        question: "Sense organs are helpful to animals only.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "The sense of taste is poor in animals.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "True",
      },

      {
        question:
          "Taste is mainly understandable because of the sense of vision",
        optionA: "True",
        optionB: "False",

        correctAnswer: "True",
      },

      {
        question:
          "Insects like ants, bees etc. release special chemicals to communicate.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "True",
      },

      {
        question: "When a dog is happy, it wags its tail",
        optionA: "True",
        optionB: "False",

        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
