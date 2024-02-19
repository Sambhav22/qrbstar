export const chapter = "Chapter - 3: My Family ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "Parents and their children together make a ________",
        optionA: "function",
        optionB: "neighbourhood",
        optionC: "family",

        correctAnswer: "",
      },

      {
        question: "We celebrate many festivals together with our ________",
        optionA: "family",
        optionB: "friends",
        optionC: "both",

        correctAnswer: "",
      },

      {
        question: "We learn many ________ from our family",
        optionA: "good things",
        optionB: "both",
        optionC: "bad things",

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
        question: "Families are of _____ kinds",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Families are of _________ kinds",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "In the family of Abhya, there are _______ members",
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
        question: "A joint family has four members",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We celebrate special occasions with our family",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Family teaches us good things",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
