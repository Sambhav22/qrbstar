export const chapter = "Chapter - 16: Pandemic-Outbreak in the World";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "A/An _________is a disease that spreads quickly over a wide area in a short span of time",
        optionA: "pandemic",
        optionB: "outbreak",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "COVID-19 spread first in________",
        optionA: "India",
        optionB: "Pakistan ",
        optionC: "China",

        correctAnswer: "",
      },

      {
        question:
          " __________is an organisation which is responsible for building the better health conditions ",
        optionA: "WHO",
        optionB: "ILO",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: " ________is the sure way to prevent from infection.",
        optionA: "vaccine",
        optionB: "personal hygiene",
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
          "A pandemic causes bad effects on ______ and ______ activities",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "On _____ WHO declared COVID-19 as a pandemic.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          " _________supports countries to improve their health infrastructure ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "The__________ had imposed a lockdown from March 24 to June 1 in India",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },
      {
        question:
          "We should help ______ and ______ by sharing information and resources",
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
        question:
          "The first transmission of corona virus to human was in Wuhan, China",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "WHO is responsible for building a better health conditions for everyone worldwide.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "WHO came into existence in the year 2010",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We should not clean and sanitize our home on regular basis.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
    question: "Prevention is better than cure.",
    optionA: "True",
    optionB: "False",

    correctAnswer: "",
  };
}

export var activityData;
