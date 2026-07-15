export const chapter = "Chapter - 8: Animal's World ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Some wild animals are kept in the __________ also",
        optionA: "park",
        optionB: "zoo",
        optionC: "garden",

        correctAnswer: "",
      },

      {
        question: "Animals live on/in the _________",
        optionA: "earth",
        optionB: "none",
        optionC: "sky",

        correctAnswer: "",
      },

      {
        question: "_________ is a natural shelter for many wild animals",
        optionA: "zoo",
        optionB: "forest",
        optionC: "house",

        correctAnswer: "",
      },

      {
        question: "We should not be _________ to animals",
        optionA: "kind",
        optionB: "both",
        optionC: "cruel",

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
        question: "Animals are our true __________",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Many wild animals live in the ___________ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "________  animals are kept in farms",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We should treat _______ with love and care",
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
        question: "The cow is a domestic animal",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We should be kind to the animals",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Zoo is a shelter for domestic animals",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Forests are the natural shelter for farm animals",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
