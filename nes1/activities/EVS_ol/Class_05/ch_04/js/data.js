export const chapter = "Chapter - 4: Digestion and Deficiency Diseases";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Our body is a machine and ______ is the fuel for it",
        optionA: "sugar",
        optionB: "glucose",
        optionC: "food",

        correctAnswer: "",
      },

      {
        question: "Large intestine is about____________ long",
        optionA: "7 metres",
        optionB: "1.5 metres",
        optionC: "13 metres",

        correctAnswer: "",
      },

      {
        question:
          "People who do not get right amount of nutrients or food suffer from ____",
        optionA: "hunger",
        optionB: "stomach ache",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question:
          "Deficiency of dietary proteins, carbohydrates and fats result in _____",
        optionA: "SEM",
        optionB: "REM",
        optionC: "PEM",

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
        question: "The system related to digestion is called _____",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "______ makes the food soft and easy to swallow",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "The food from oesophagus passes to a muscular bag known as _____",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "______ intestine is the last stop of the digestive system",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Liver produces a juice called _____",
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
        question:
          "When you swallow the food, it enters a tube called food pipe",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Food pipe is also known as oesophagus.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Food stays in the small intestine for upto 8 to 9 hours",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Due to poverty, people are able to get rich balanced diet",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Marasmus is caused due to the deficiency of iron in body",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
