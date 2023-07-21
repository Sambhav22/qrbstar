export const chapter = "Chapter - 5: Differently Abled ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "The deaf cannot _______",
        optionA: "hear",
        optionB: "speak",
        optionC: "see",

        correctAnswer: "",
      },

      {
        question: "Due to hereditary factors, a child may get the __________",
        optionA: "ability",
        optionB: "disability",
        optionC: "fever",

        correctAnswer: "",
      },

      {
        question: "An infant grows into a/an ________",
        optionA: "child",
        optionB: "old",
        optionC: "adult",

        correctAnswer: "",
      },

      {
        question:
          "Before baby's birth, if a mother does not take nutritious diet, it results in ________",
        optionA: "similarity",
        optionB: "none",
        optionC: "disability",

        correctAnswer: "",
      },

      {
        question: "The blind cannot ________",
        optionA: "see",
        optionB: "hear",
        optionC: "speak",

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
        question: "_________ are our windows",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Our body is a ______ machine",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: " With our ears, we hear different kinds of ________",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "________ invented Braille",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Braille has _________ embossed on a thick paper",
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
        question: "We speak with the help of our tongue",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Mentally retarded people can communicate their feelings and emotions easily",
        optionA: "True",
        optionB: "False",

        correctAnswer: "True",
      },

      {
        question: "Severe accidents can cause a lot of harm to our body",
        optionA: "True",
        optionB: "False",

        correctAnswer: "False",
      },

      {
        question: "If one is blind, he can use Braille script",
        optionA: "True",
        optionB: "False",

        correctAnswer: "False",
      },

      {
        question: "The dumb cannot speak",
        optionA: "True",
        optionB: "False",

        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
