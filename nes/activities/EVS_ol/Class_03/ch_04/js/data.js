export const chapter = "Chapter - 4: Wonderful Family";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "A family tree shows _________ generations together",
        optionA: "three",
        optionB: "two",
        optionC: "six",

        correctAnswer: "",
      },

      {
        question:
          "The relatives from the _________ side are our paternal relatives",
        optionA: "mother's",
        optionB: "father's",
        optionC: "none",

        correctAnswer: "",
      },

      {
        question: "A ______ family consists of parents and their children",
        optionA: "nuclear",
        optionB: "both",
        optionC: "joint",

        correctAnswer: "",
      },

      {
        question: "In a family, all members are __________ with each other",
        optionA: "excluded",
        optionB: "separated",
        optionC: "related",

        correctAnswer: "",
      },

      {
        question: "We like to spend time with our __________",
        optionA: "family",
        optionB: "enemies",
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
        question: "Family is regarded as the _________ school for children",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "________ relatives are from mother's side",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Parents and their children together make a _______",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Tia and Pia are _________",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Nuclear family has _________ and their children",
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
        question: "A family is a support system for an individual",
        optionA: "True",
        optionB: "False",

        correctAnswer: "False",
      },

      {
        question: "We do not look similar to our family members",
        optionA: "True",
        optionB: "False",

        correctAnswer: "False",
      },

      {
        question: "We do not learn anything from our family members",
        optionA: "True",
        optionB: "False",

        correctAnswer: "True",
      },

      {
        question: "Twins born at the same time from a same mother",
        optionA: "True",
        optionB: "False",

        correctAnswer: "False",
      },

      {
        question: "Sometimes, twins have identical features",
        optionA: "True",
        optionB: "False",

        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
