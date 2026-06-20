export const chapter = "Chapter - 12: Games for Fun";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "__________ is done for recreational pleasure",
        optionA: "eating food",
        optionB: "playing",
        optionC: "learning",

        correctAnswer: "",
      },

      {
        question: "__________ is the most popular outdoor game",
        optionA: "kho-kho",
        optionB: "chess",
        optionC: "cricket",

        correctAnswer: "",
      },

      {
        question: "Traditional games were played by our _________",
        optionA: "grandparents",
        optionB: "parents",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "________ is a traditional game",
        optionA: "kabaddi",
        optionB: "gilli-danda",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "Modern games are played by _________ techniques",
        optionA: "modern",
        optionB: "old",
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
        question:
          "Playing means you are spending time in an _________ activity",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________  keep us fit and active",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "_________ games teach social skills and creativity to the children ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Games also promote the feeling of _________ ",
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
        question: "There are two types of games-indoor and outdoor games",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Traditional games are not in practice now",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Games can also be played at an individual level",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Indoor games are played outside the house",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
