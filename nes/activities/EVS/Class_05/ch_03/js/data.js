export const chapter = "Chapter - 3: Breathe In and Out";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Breathing comprises of__________ processes.",
        optionA: "four",
        optionB: "two",
        optionC: "three",

        correctAnswer: "",
      },

      {
        question: "Inhalation implies___________",
        optionA: "breathe in",
        optionB: "breathe out",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "Exhalation implies____________",
        optionA: "breathe in ",
        optionB: "breathe out",
        optionC: "None",

        correctAnswer: "",
      },

      {
        question: "The frequency of breathing remains ________",
        optionA: "constant",
        optionB: "flexible",
        optionC: "inconstant",

        correctAnswer: "",
      },

      {
        question:
          "Sending a stream of air with force from mouth is called________",
        optionA: "flowing",
        optionB: "blowing",
        optionC: "lowing",

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
        question: ". ______ is a long tube that leads down to chest",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "______ is the strong muscle located just below the lungs",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "______ breathing is one of the best ways to lower stress.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "______ rate keeps changing from time to time ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "In winters, we blow on our palms to keep them _____",
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
        question: "A pair of air bags located in our chest is called heart",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We breathe in carbon dioxide",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We breathe out oxygen",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "During winters, glass surfaces become cloudy when we blow on them",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "We use our breath to make hot things cold and cold things hot",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
