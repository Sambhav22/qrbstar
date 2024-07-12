export const chapter = "Chapter - 1: Plant More Trees ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    questions: [
      {
        question:
          "What benefits do trees provide to us according to the passage?",
        optionA: "Food and shelter",
        optionB: "Food, oxygen, and medicine",
        optionC: "Oxygen and furniture",
        correctAnswer: "Food, oxygen, and medicine",
      },
      {
        question: "What is Ramu Kaka doing to make the school garden green?",
        optionA: "Plucking leaves and flowers",
        optionB: "Scratching tree trunks",
        optionC: "Planting more trees",
        correctAnswer: "Planting more trees",
      },
      {
        question:
          "What is the term used to describe big and strong plants in the passage?",
        optionA: "Shrubs",
        optionB: "Herbs",
        optionC: "Trees",
        correctAnswer: "Trees",
      },
      {
        question:
          "How are small-sized plants with woody stems referred to in the passage?",
        optionA: "Shrubs",
        optionB: "Trees",
        optionC: "Herbs",
        correctAnswer: "Shrubs",
      },
      {
        question:
          "What is the term used to describe very small-sized plants with green stems?",
        optionA: "Shrubs",
        optionB: "Trees",
        optionC: "Herbs",
        correctAnswer: "Herbs",
      },
      {
        question:
          "According to the passage, what should you not do to care for the garden?",
        optionA: "Walk on grass harshly",
        optionB: "Pluck leaves or flowers",
        optionC: "Scratch on tree trunks",
        correctAnswer: "All of the above",
      },
      {
        question: "What do trees provide that helps us breathe?",
        optionA: "Food",
        optionB: "Oxygen",
        optionC: "Medicine",
        correctAnswer: "Oxygen",
      },
      {
        question: "What do trees give us that can be used to make furniture?",
        optionA: "Food",
        optionB: "Oxygen",
        optionC: "Medicine",
        correctAnswer: "Wood",
      },
      {
        question: "What is the main idea of the passage?",
        optionA: "The importance of school gardens",
        optionB: "The benefits of trees to humans",
        optionC: "Ramu Kaka's gardening skills",
        correctAnswer: "The benefits of trees to humans",
      },
      {
        question:
          "Why should you not scratch on tree trunks, according to the passage?",
        optionA: "It will hurt the trees",
        optionB: "It's not mentioned in the passage",
        optionC: "It will damage the furniture",
        correctAnswer: "It will hurt the trees",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        question: "Trees give _________ to birds and animals",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "_________ give us oxygen",
        optionA: "",
        optionB: "",
        optionC: "",

        correctAnswer: "",
      },

      {
        question: "Small sized plants with woody stems are called ___________ ",
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
        question: "Very small sized plants with woody stems are called herbs",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "Big and strong plants are called shrubs",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },

      {
        question: "We get fruits from plants",
        optionA: "True",
        optionB: "False",

        correctAnswer: "",
      },
    ],
  };
}

export var activityData;
