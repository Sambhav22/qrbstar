export const chapter = "Chapter - 14: Let's Go on a Tour ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "To go on a tour, you need means of ________",
        optionA: "transport",
        optionB: "both",
        optionC: "communication",

        correctAnswer: "",
      },

      {
        question: "________ and ________ are the means of transport",
        optionA: "car/pencil",
        optionB: "bus/train",
        optionC: "mobile/TV",

        correctAnswer: "bus/train",
      },

      {
        question: "_________ is a water transport",
        optionA: "aeroplane",
        optionB: "submarine",
        optionC: "metro rail",

        correctAnswer: "",
      },

      {
        question: "_________transport is the fastest means of transport",
        optionA: "air",
        optionB: "water",
        optionC: "land",

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
        question: "Car is an example of ________ transport",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Boat is an example of _____ transport",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________ flies in the air",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Helicopter is an example of _______ transport",
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
        question: "We use bicycles to cover long distances",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "There are two types of transport",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "You should only use train to travel from one place to other",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Air transport is the fastest means of transport",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
