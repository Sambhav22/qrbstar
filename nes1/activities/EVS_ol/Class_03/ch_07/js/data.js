export const chapter = "Chapter - 7: Beautiful World of the Animals";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Turtle lives on/in __________",
        optionA: "land",
        optionB: "water",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "Insects and birds are__________",
        optionA: "crawlers",
        optionB: "flyers",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "Elephant is a ______ animal",
        optionA: "small",
        optionB: "water",
        optionC: "big",

        correctAnswer: "",
      },

      {
        question: "Animals are almost ________",
        optionA: "everywhere",
        optionB: "somewhere",
        optionC: "nowhere",

        correctAnswer: "",
      },

      {
        question: "Lizard is a _________ ",
        optionA: "reptile",
        optionB: "big animal",
        optionC: "water animal",

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
          "The dog is an ________ as it eats both plant products and flesh",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Reptiles are also called _________ animals",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "Lions and tigers are _________ as they eat flesh of other animals",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Cows and buffaloes are _________ as they eat plants",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question:
          "The hyena is a ______ as it eats the rotten flesh of dead animals",
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
        question: "Each and every animal is different in its feeding habit",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "The crocodile is a land animal",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "The horse is a small animal",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Animals that eat plants are herbivores",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Animals that eat flesh of other animals are carnivores",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
