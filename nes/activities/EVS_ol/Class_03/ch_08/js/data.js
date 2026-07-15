export const chapter = "Chapter - 8: Birds Flying High";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Birds have _________ to fly",
        optionA: "wings",
        optionB: "head",
        optionC: "tail",

        correctAnswer: "",
      },

      {
        question: "The ________ digs a hole in the tree trunk",
        optionA: "peacock",
        optionB: "lyrebird",
        optionC: "woodpecker",

        correctAnswer: "",
      },

      {
        question: "Birds make ________ to live in",
        optionA: "nests",
        optionB: "caves",
        optionC: "burrows",

        correctAnswer: "",
      },

      {
        question: "________ feathers keep the body of birds warm",
        optionA: "down",
        optionB: "flight",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "Birds have _________ shaped body",
        optionA: "boat",
        optionB: "van",
        optionC: "car",

        correctAnswer: "",
      },

      {
        question:
          "Birds that move from colder places to warmer places are called _______ birds",
        optionA: "migratory",
        optionB: "flying",
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
        question: "The eagles have ______ beaks",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "The weaver bird has an ability to  ______ its nest",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "The sparrows have ______ beaks",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "The cranes have pointed beaks to catch _____",
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
        question: "The ostrich can fly",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "The body of the birds is covered with feathers",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "The parrot has a horny beak",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Birds use their beaks only to collect their food",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "The peacock has a crown on its head",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
