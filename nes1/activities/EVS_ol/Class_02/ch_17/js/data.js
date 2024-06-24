export const chapter = "Chapter - 15: Weather and Seasons ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "In summer, we feel  _________ ",
        optionA: "cold",
        optionB: "hot",
        optionC: "wet",

        correctAnswer: "",
      },

      {
        question: "We enjoy riding cycles and flying kites in _________ season",
        optionA: "summer",
        optionB: "winter",
        optionC: "spring ",

        correctAnswer: "",
      },

      {
        question:
          "________ is the state of atmosphere at a particular place and time",
        optionA: "season",
        optionB: "weather",
        optionC: "winter",

        correctAnswer: "",
      },

      {
        question: "In autumn, the weather is neither so _________ not so cold",
        optionA: "hot",
        optionB: "rainy",
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
        question: "We experience ________ seasons in a year",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "In winter, the weather is _________ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "In _________ the earth experiences less amount of sunlight",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We experience ________ in rainy season",
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
        question: "In summer, the weather is very hot",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "June 21 is known as the shortest sunniest day of the year",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Trees shed their leaves in winters",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "In autumn, the weather is hot and humid",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
