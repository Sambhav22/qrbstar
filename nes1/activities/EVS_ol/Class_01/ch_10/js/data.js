export const chapter = "Chapter - 10: Festivals Round the Year ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: " ________ is the festival of colours",
        optionA: "Holi",
        optionB: "Gurpurab",
        optionC: "Diwal",

        correctAnswer: "",
      },

      {
        question: "Diwali is the festival of _________",
        optionA: "lights",
        optionB: "colours",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "_________ is the birthday of Jesus Christ",
        optionA: "Christmas",
        optionB: "Diwali",
        optionC: "Holi",

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
        question: "Independence Day is celebrated on ________",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________ is the festival of lights",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Gandhi Jayanti is celebrated on _________ ",
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
        question: "Hali is the festival of lights",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Republic Day is celebrated on 26th January",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Diwali is celebrated by lighting diyas and burning crackers",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
