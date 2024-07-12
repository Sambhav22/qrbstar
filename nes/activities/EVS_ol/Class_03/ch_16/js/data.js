export const chapter = "Chapter - 16: Beautiful Clothes";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "We wear clothes to _________ our body",
        optionA: "cover",
        optionB: "protect",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "__________ is flooded with many clothes",
        optionA: "cloth market",
        optionB: "grain market",
        optionC: "vegetable market",

        correctAnswer: "",
      },

      {
        question: "Clothes are coloured using _________ ",
        optionA: "wax",
        optionB: "dye",
        optionC: "milk",

        correctAnswer: "",
      },

      {
        question: "________, designs are engraved on wooden blocks",
        optionA: "tie and die",
        optionB: "block printing",
        optionC: "kalamkari",

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
        question: "Embroidery is done with the help of ______ threads",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "In urban areas, _________ clothes are common",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "The women of Assam wear _________ ",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "The women of Gujarat wear _________ ",
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
        question: "Kalamkari is done with the help of special pen",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Salwar Kameez is worn in Punjab",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Saree is worn in India only",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "On special occasions, we wear traditional dresses",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
