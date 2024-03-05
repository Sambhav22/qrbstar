export const chapter = "Chapter - 1: Clean Surroundings";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "We all live in a surrounding which includes ______ things",
        optionA: "only living",
        optionB: "living and non-living",
        optionC: "only non-living",

        correctAnswer: "",
      },

      {
        question: "________ is of two types",
        optionA: "pollution",
        optionB: "waste",
        optionC: "method of waste disposal trees",

        correctAnswer: "",
      },

      {
        question: "In___________ waste is separated in thin layers.",
        optionA: "landfill",
        optionB: "open dumping",
        optionC: "composting",

        correctAnswer: "",
      },

      {
        question: "In___________ the waste is burned",
        optionA: "composting ",
        optionB: "landfill",
        optionC: "incineration",

        correctAnswer: "",
      },

      {
        question:
          "About__________ percent of waste is reduced through incineration ",
        optionA: "20",
        optionB: "90",
        optionC: "50",

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
        question: ". ______ means to give new form to old things",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Fruits and vegetables peels are ______ wastes.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Metal is a__________ waste",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "______ process of waste disposal is slow but gives compost which is rich in nutrients for soil fertility",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Use things that are easy to ______ off.",
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
        question: "Things that are not in use are wastes",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Disposal of waste creates pollution.",
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
