export const chapter = "Chapter - 16: Work and Pleasure";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "When we do any work by using our intellect skills or brain, that work is known as _____",
        optionA: "manual",
        optionB: "intellectual ",
        optionC: "spiritual",

        correctAnswer: "",
      },

      {
        question: "Sweeping is an example of _____",
        optionA: "manual work",
        optionB: "intellectual work",
        optionC: "both ",

        correctAnswer: "",
      },

      {
        question: "No work should be considered_________or inferior.  ",
        optionA: "superior",
        optionB: "mental",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "Gandhiji called the manual workers as the _____",

        optionA: "jans of lord Hari ",
        optionB: "jans of lord Shiva",
        optionC: "both",

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
        question: "We all do some kind of work to earn_________",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Work is either ______ or manual in nature.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "______ jobs involve manual efforts ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Every work that is done with honesty deserves _____ _ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },
      {
        question: "______ is our father of the nation ",
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
        question: "Every work is small and we should not do any small work",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Manual workers are useful to us",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We must respect the works done by manual workers",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Intellectual work does not require skills and education.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
      {
        question: "Dignity of work means all kinds of works are equal",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
