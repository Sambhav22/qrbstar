export const chapter = "Chapter - 15: Enhance Your Skills";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "______ is/are required to perform a job",
        optionA: "laziness",
        optionB: "skill",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question:
          "In earlier times, the choice of occupation depended on _____",
        optionA: "neighbours",
        optionB: "families",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "_________is the seniormost cook in a restaurant",
        optionA: "architect ",
        optionB: "chef",
        optionC: "doctor",

        correctAnswer: "",
      },

      {
        question:
          "The work of ______ is to apply design and beauty to the clothes.",
        optionA: "fashion designer",
        optionB: "chef",
        optionC: " architect",

        correctAnswer: "",
      },

      {
        question:
          "An/A ______ plans, designs and reviews the construction of buildings.",
        optionA: "doctor",
        optionB: "architect",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "A _________is a leader of defence force.",
        optionA: "pilot",
        optionB: "engineer",
        optionC: "defence officer",

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
        question: "We are a part of a ______ community",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "A ______ operates the directional flight controls of an aircraft. ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "An ______ is a space traveller",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Earlier, _________and__________ were considered weak. ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Girls were not allowed to work_________ in olden times. ",
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
        question:
          "Skills are learned and anyone can be a master with his knowledge and experience",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Some people work for us to earn their living",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "In olden times, children of milk traders bought and sold milk only to earn their living.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Manish Malhotra is the great name in architectural industry",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "The potters make plans of the buildings",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "The Navy protects the country at sea.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
