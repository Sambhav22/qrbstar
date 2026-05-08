export const chapter = "Chapter - 9: Story Of Food";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Fruits are rich in __________",
        optionA: "vitamins",
        optionB: "both",
        optionC: "minerals",

        correctAnswer: "",
      },

      {
        question: "People in a family eat according to their __________",
        optionA: "permanent",
        optionB: "kuchcha",
        optionC: "wooden",

        correctAnswer: "",
      },

      {
        question: "_________  is essential for our body",
        optionA: "names",
        optionB: "age",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "Protein-rich foods are also called ________ foods",
        optionA: "body building",
        optionB: "protective",
        optionC: "energy giving",

        correctAnswer: "",
      },

      {
        question: "Food rich in carbohydrates gives us _________",
        optionA: "heat",
        optionB: "both",
        optionC: "energy",

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
          "Food that is rich in ______ is helpful in speedy growth of kids",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Food is a substance that is ______ by us",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Old age people take _________ food.",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "We find diversity in Indian _________ ",
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
        question: "We get fruits, spices, pulses etc. from the plants",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Bats are eaten in China",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Infants take chapati and vegetable in the dinner",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We get our food from animals only",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
