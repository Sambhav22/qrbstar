export const chapter = "Chapter - 4: Smart Senses";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "We have ______ sense organs.",
        optionA: "four",
        optionB: "five",
        optionC: "six",

        correctAnswer: "",
      },

      {
        question:
          "__________ has different taste buds that detect different taste.",
        optionA: "tongue",
        optionB: "gum",
        optionC: "nose",

        correctAnswer: "",
      },

      {
        question:
          "The ______ processes the signals and sends message to sense organs.",
        optionA: "heart",
        optionB: "brain",
        optionC: " skin",

        correctAnswer: "",
      },

      {
        question: "______ helps us to feel the objects. ",
        optionA: "ear",
        optionB: "skin",
        optionC: "nose",

        correctAnswer: "",
      },

      {
        question:
          "______ present in our nose pick up the smell from the environment",
        optionA: "taste buds",
        optionB: "receptors",
        optionC: "none of these",

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
        question: "Touch that keeps us safe is a ______ touch",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "Touch that hurts our feelings or body parts is a ______ touch.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "______ is the organ responsible for the sense of smell",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "An ______ sense of smell is as good as dog's.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "The helps us to feel different objects through touch.",
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
        question: "Ear is the organ of vision.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Through auditory perception, our ears detect vibrations and sounds",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "Good and bad touches are realised because of the sense of touch",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Skin is made up of two layers.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "The nerves pick up the signals from the outside world and carry them to the brain.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
