export const chapter = "Chapter - 6: Our Family ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What is a family that consists of parents and one or two children called?",
        optionA: "Small nuclear family",
        optionB: "Big nuclear family",
        optionC: "Joint family",
        correctAnswer: "Small nuclear family",
      },
      {
        question:
          "How do you refer to a family with parents and more than two children?",
        optionA: "Small nuclear family",
        optionB: "Big nuclear family",
        optionC: "Joint family",
        correctAnswer: "Big nuclear family",
      },
      {
        question:
          "What type of family includes grandparents, parents, their children, uncles, aunts, and cousins living together?",
        optionA: "Small nuclear family",
        optionB: "Big nuclear family",
        optionC: "Joint family",
        correctAnswer: "Joint family",
      },
      {
        question:
          "What do you call the family members who are brothers and sisters together?",
        optionA: "Parents",
        optionB: "Siblings",
        optionC: "Cousins",
        correctAnswer: "Siblings",
      },
      {
        question: "What do you call the father's parents?",
        optionA: "Grandparents",
        optionB: "Paternal grandparents",
        optionC: "Maternal grandparents",
        correctAnswer: "Paternal grandparents",
      },
      {
        question:
          "What is the common last name shared by all the members of a family called?",
        optionA: "Family name",
        optionB: "Surname",
        optionC: "Middle name",
        correctAnswer: "Surname",
      },
      {
        question:
          "What does the father do for the family according to the text?",
        optionA: "Manages the house",
        optionB: "Looks after the family",
        optionC: "Goes out for work and earns money",
        correctAnswer: "Goes out for work and earns money",
      },
      {
        question: "What is the primary role of the mother in a family?",
        optionA: "Earns money for the family",
        optionB: "Manages the house",
        optionC: "Helps children with their homework",
        correctAnswer: "Manages the house",
      },
      {
        question:
          "How do members of a family share their happiness, sorrow, and problems?",
        optionA: "They don't share them at all",
        optionB: "They share them with friends instead",
        optionC: "They share them with each other",
        correctAnswer: "They share them with each other",
      },
      {
        question:
          "How do family members celebrate festivals, birthdays, and special occasions?",
        optionA: "Individually",
        optionB: "Separately",
        optionC: "Together",
        correctAnswer: "Together",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question:
          "A family having parents and their _______ children is called a small nuclear family.",
        optionA: "two",
        optionB: "one or two",
        optionC: "more than two",
        correctAnswer: "one or two",
      },
      {
        question:
          "A family having parents and more than _______ children is called a big nuclear family.",
        optionA: "one or two",
        optionB: "two",
        optionC: "three",
        correctAnswer: "three",
      },
      {
        question:
          "A family having grandparents, parents, their children, uncle, aunt, and cousins living together under one roof is called a _______ family.",
        optionA: "big nuclear",
        optionB: "joint",
        optionC: "small nuclear",
        correctAnswer: "joint",
      },
      {
        question: "Father and mother together are called _______.",
        optionA: "parents",
        optionB: "siblings",
        optionC: "relatives",
        correctAnswer: "parents",
      },
      {
        question:
          "Father's (or mother's) parents are called _______ grandparents.",
        optionA: "paternal",
        optionB: "maternal",
        optionC: "grandparents",
        correctAnswer: "grandparents",
      },
      {
        question: "Father's (or mother's) brother is called _______.",
        optionA: "uncle",
        optionB: "aunt",
        optionC: "cousin",
        correctAnswer: "uncle",
      },
      {
        question:
          "Have you ever noticed that all the members of a family share a common _______? It is called a family name or surname.",
        optionA: "family name",
        optionB: "last name",
        optionC: "middle name",
        correctAnswer: "last name",
      },
      {
        question: "Father goes out for work and earns _______ for the family.",
        optionA: "money",
        optionB: "happiness",
        optionC: "food",
        correctAnswer: "money",
      },
      {
        question:
          "Mother manages the house and looks after the family. Some mothers are _______ while some are working.",
        optionA: "homemakers",
        optionB: "teachers",
        optionC: "doctors",
        correctAnswer: "homemakers",
      },
      {
        question:
          "Members of a family spend time together. They celebrate festivals, birthdays, and special occasions together. Sometimes they go for shopping, movies, and _______ also.",
        optionA: "vacations",
        optionB: "picnics",
        optionC: "work",
        correctAnswer: "picnics",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Our family members help us learn.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Children contribute to the family by helping with household chores.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Family members care for one another and share work.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Parents fulfill all the needs of the family.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Family members support each other by ignoring each other.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Children learn to ride a bike and drive a car in the family.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Parents take care of their children and go on vacations.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "The family's needs are fulfilled by playing video games.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Family members help each other by arguing and fighting.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Children learn math and science in the family.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
