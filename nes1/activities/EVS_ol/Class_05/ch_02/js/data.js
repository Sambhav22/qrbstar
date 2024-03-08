export const chapter = "Chapter - 2: Animals and their Masters";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          " ______ are trapped and sold for their skin, teeth etc., in Indian and international markets.",
        optionA: "wild animals ",
        optionB: "pet animals",
        optionC: "domestic animals",

        correctAnswer: "",
      },

      {
        question: "Illegal hunting of animals is called_____________",
        optionA: "roaching",
        optionB: "poaching",
        optionC: "watching",

        correctAnswer: "",
      },

      {
        question: "_______ are poached for tusks",
        optionA: "cats",
        optionB: "tigers",
        optionC: "elephants",

        correctAnswer: "",
      },

      {
        question: "______ are poached for hairy glands",
        optionA: "cows",
        optionB: "gorillas",
        optionC: "musk deers",

        correctAnswer: "",
      },

      {
        question: " ___________is an extinct animal. ",
        optionA: "tiger",
        optionB: "elephant",
        optionC: "dinosaur",

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
        question: "______ play a very important role in human life.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "To balance the environment, ______ should also be maintained.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          " Animals like horse, donkey, ox etc. are used for ______ purposes",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: " ______ depend on animals to satisfy their living",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Blue whale is an example of ______ animals",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },
      ,
    ],
    question: "Dodo is an example of ______ animals",
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
        question: "Illegal hunting of animals is a right practice",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We should hunt animals for their skin, tusks etc.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We should destroy the wildlife.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question:
          "We should not destroy the natural habitats of animals in order to protect wildlife",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Many masters of animals depend on them for their livelihood",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
