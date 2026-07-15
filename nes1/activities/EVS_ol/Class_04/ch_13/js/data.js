export const chapter = "Chapter - 13: Beaks and claws";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Birds use their_________to eat",
        optionA: "beaks",
        optionB: "tails",
        optionC: "claws",

        correctAnswer: "",
      },

      {
        question: "Eagles have________beaks",
        optionA: "flat",
        optionB: "hooked",
        optionC: "straw-like",

        correctAnswer: "",
      },

      {
        question: "The beaks of_________ are broad and flat",
        optionA: "parrots",
        optionB: "ducks",
        optionC: "pelicans",

        correctAnswer: "",
      },

      {
        question: "________has spear-shaped beak",
        optionA: "pelican",
        optionB: "kingfisher",
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
        question:
          "Birds use their beaks and claws for pick up their ______ and to eat.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "______ type of beaks help the birds to suck the nectar from flowers.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "The claws which have strong nails and toes are called ______ claws.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Scratching claws are very ______ and ______ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },
      ,
    ],
    question: "Ducks and swans have__________ claws.",
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
        question: "Kingfisher uses its beak to catch fish.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "The claws of birds help them to hold the things",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Sparrow is a perching bird",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "The birds which hunt have perching claws.",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
