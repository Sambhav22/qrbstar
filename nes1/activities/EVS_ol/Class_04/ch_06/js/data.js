export const chapter = "Chapter - 6: Playing is Fun ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "Sports and games play a major role in keeping a person________",
        optionA: "fit and fine",
        optionB: "lazy and sick",
        optionC: "sad and disturbed",

        correctAnswer: "",
      },

      {
        question: "Playing games helps in boosting the__________",
        optionA: "ego",
        optionB: "immunity",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question:
          " _______have adopted sports as an integral part of the curriculum. ",
        optionA: "schools",
        optionB: "hospitals",
        optionC: "cinema halls",

        correctAnswer: "",
      },

      {
        question: "______is an example of outdoor game",
        optionA: "monopoly",
        optionB: "cards",
        optionC: "cricket",

        correctAnswer: "",
      },

      {
        question: "_________ is the national sport of Bangladesh",
        optionA: "cricket",
        optionB: "hockey",
        optionC: "kabaddi",

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
        question: "______ games are played inside the homes",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "______ games are played outside the homes.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "______ equipment are kept in schools to promote sports among students. ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Kabaddi is popular in _____ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Sports bring the best out of the _____",
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
        question: "Games played in schools are technical and hard to play.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "The materials which are required to play are sports equipment.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Games do not develop discipline in children",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Students get training of sports in school.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Rules are essential to play a game",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
