export const chapter = "Chapter - 13: Let's Travel";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Early men used to walk to cover _________ distances",
        optionA: "short",
        optionB: "long",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: " _________ and ________ are land transport",
        optionA: "road,rail",
        optionB: "water,air",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "_________ is the cheapest means of transport",
        optionA: "helicopter",
        optionB: "ship",
        optionC: "aeroplane",

        correctAnswer: "",
      },

      {
        question: "________ is the fastest means of transport",
        optionA: "airways",
        optionB: "roadways",
        optionC: "waterways",

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
        question: "From an _________ aeroplane takes off and lands",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________ takes us across big seas and oceans",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________ is a desert area",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "The _________ is known as the ship of desert",
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
        question: "Cars run on tracks",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "In Ladakh, camel is used as a means of transport",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "In Delhi, we have roadways and railways to go from one place to other",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Several vehicles emit smoke which causes air pollution",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
