export const chapter = "Chapter - 11: Eating Food";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "To get food, the field is firs________",
        optionA: "ploughed",
        optionB: "watered",
        optionC: "eft for some time",

        correctAnswer: "",
      },

      {
        question: "The____________ is watered at regular intervals",
        optionA: "harvested crop",
        optionB: "field",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "Langar is a community eating held in__________ ",
        optionA: "temples",
        optionB: "gurdwaras",
        optionC: "churches",

        correctAnswer: "",
      },

      {
        question: " __________started the practice of langar. ",
        optionA: "Mahatma Gandhi",
        optionB: "Guru Nanak Dev Ji",
        optionC: "Mother Teresa",

        correctAnswer: "",
      },

      {
        question: "Mid-day meal is provided in_______",
        optionA: "government schools",
        optionB: "private schools",
        optionC: "both",

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
        question: "We get our most of the food items from ______",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Eating together as a family establishes a bond of _____",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We should eat at least one meal together with our _____",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "______ is a group of people living together",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: " The founder of Sikhism was_________",
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
        question: "We do not eat food every day",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We should always eat in community",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Langar refers to the separate kitchen organised on special days",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Mid-day meal is provided to children to boost their physical and mental health",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Children have a lot of fun during lunch break at school",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
