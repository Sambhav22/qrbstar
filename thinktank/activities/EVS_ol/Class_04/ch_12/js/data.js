export const chapter = "Chapter - 12: Teeth and Tongue";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "We chew the food with the help of our _____",
        optionA: "tongue",
        optionB: "teeth",
        optionC: "nose",

        correctAnswer: "",
      },

      {
        question: "Teeth are divided into ______ types.",
        optionA: "four",
        optionB: "three",
        optionC: "two",

        correctAnswer: "",
      },

      {
        question:
          " __________are the chisel-shaped teeth at the front of our mouth",
        optionA: "incisors",
        optionB: "canines",
        optionC: "molars",

        correctAnswer: "",
      },

      {
        question:
          " ___________are the large, pointed teeth just behind the incisors.",
        optionA: "incisors",
        optionB: "canines",
        optionC: "molars",

        correctAnswer: "",
      },

      {
        question: "An adult man has___________teeth",
        optionA: "32",
        optionB: "34",
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
        question: "In babies, teeth start to grow at the age of _____",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Milk teeth are ______ teeth.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "On your tongue, ______ are located. ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Tongue weighs about _____",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },
      ,
    ],
    question: "We sense ______ types of taste",
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
        question: "Brush your teeth thrice a day.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Eat less sugary food to avoid tooth decay.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Tongue is about 10 cm long organ.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "We should not rinse the mouth thoroughly with clean water after every meal",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
    question: "Teeth mix the food in our mouth.",
    optionA: "True",
    optionB: "False",

    correctAnswer: "",
  };
}

export var activityData;
