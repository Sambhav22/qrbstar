export const chapter = "Chapter - 4: My House ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "We all live in a house with our________",
        optionA: "friends",
        optionB: "family",
        optionC: "neighbours",

        correctAnswer: "",
      },

      {
        question: "Everyone needs a _________ to live in",
        optionA: "House",
        optionB: "Road",
        optionC: "Zoo",

        correctAnswer: "",
      },

      {
        question: "There are _________ types of houses",
        optionA: "two",
        optionB: "four",
        optionC: "three",

        correctAnswer: "",
      },

      {
        question: "We should keep our house ________",
        optionA: "Clean",
        optionB: "Dirty",
        optionC: "Mismanaged",

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
        question: "There are many _______ in our house",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We ________ food in the kitchen.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We sleep in our _______",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We must ______ our house daily",
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
        question: "We sleep in the kitchen",
        optionA: "True",
        optionB: "False",

        correctAnswer: "False",
      },

      {
        question: "Permanent houses are made up of clothes",
        optionA: "True",
        optionB: "False",

        correctAnswer: "False",
      },

      {
        question: "We study in the study room",
        optionA: "True",
        optionB: "False",

        correctAnswer: "True",
      },

      {
        question: "We live on the roads",
        optionA: "True",
        optionB: "False",

        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
