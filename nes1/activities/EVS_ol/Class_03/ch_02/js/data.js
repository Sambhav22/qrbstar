export const chapter = "Chapter - 2: Things from Plants";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Leaves of spinach are used as __________",
        optionA: "powder",
        optionB: "none",
        optionC: "food",

        correctAnswer: "",
      },

      {
        question: "_________are very popular in India",
        optionA: "leaf motifs",
        optionB: "both",
        optionC: "leaf patterns",

        correctAnswer: "",
      },

      {
        question: "_______ is a spice which we get from plants",
        optionA: "Sandal",
        optionB: "Mango",
        optionC: "Cardamom",

        correctAnswer: "",
      },

      {
        question: "Plants give us _______",
        optionA: "medicines",
        optionB: "fibres",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "We get many things from ________",
        optionA: "Plants",
        optionB: "Vegetables",
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
        question: "We get __________ from cotton plant",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "_________ and ________ have medicinal properties and are used in medicines",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: " __________ of certain plants are used to make perfumes",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: " __________ also use leaf motifs to design the walls",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: " __________ are an important part of a plant",
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
        question: "Leaves do not fall in autumn season",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Leaves are only green coloured",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Compost from leaves is good manure for plants",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Fruits are a rich source of vitamins and minerals",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We do not get wood from plants",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
