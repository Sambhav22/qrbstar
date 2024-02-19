export const chapter = "Chapter - 16: Times of Emergency";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "___ waves are produced when some form of energy stored in earth's crust is suddenly released.",
        optionA: "rocky",
        optionB: "seismic",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "A ___ detects the vibrations caused by an earthquake",
        optionA: "glass",
        optionB: "scale",
        optionC: "seismometer",

        correctAnswer: "",
      },

      {
        question: "___ are defined as strong rotating windstorms",
        optionA: "cyclones",
        optionB: "floods",
        optionC: "famines",

        correctAnswer: "",
      },

      {
        question:
          "Government and non-government organizations rescue the ________",
        optionA: "affected people",
        optionB: "normal people",
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
        question: "______ is defined as the sudden shaking of the ground.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "A ______ is used to measure the magnitude of an earthquake",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "Earthquake measuring around ______ to ______ on Richter scale can be devastating",

        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "Several NGOs collect ______ and necessary commodities for affected people ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },
      ,
    ],
    uestion: "A break in the bone is called____________",
    optionA: "",
    optionB: "",
    optionC: "",

    correctAnswer: "",
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Bhopal Gas Tragedy is an example of man-made disaster",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Disasters are good for us and for our property",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Several government agencies came forward to rescue the affected people.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Red Cross Society is a government funding organisation that provides funds to needy people.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
      {
        question: "We should apply hot water to the burnt part of the skin",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
