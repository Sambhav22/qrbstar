export const chapter = "Chapter - 6: Growing in the Family ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What do we learn in our family?",
        optionA: "Math and science",
        optionB: "To walk and speak",
        optionC: "History and geography",
        correctAnswer: "To walk and speak",
      },
      {
        question: "Who helps us to learn in our family?",
        optionA: "Teachers",
        optionB: "Friends",
        optionC: "Parents and family members",
        correctAnswer: "Parents and family members",
      },
      {
        question: "What do family members do to help each other in the family?",
        optionA: "Play games together",
        optionB: "Share work and help each other",
        optionC: "Watch TV all day",
        correctAnswer: "Share work and help each other",
      },
      {
        question: "What do parents do for their children in the family?",
        optionA: "Play with them",
        optionB: "Earn for the family and fulfill its needs",
        optionC: "Go on vacations",
        correctAnswer: "Earn for the family and fulfill its needs",
      },
      {
        question:
          "How do children contribute to the family according to the text?",
        optionA: "By doing nothing",
        optionB: "By helping their parents with their work",
        optionC: "By playing all day",
        correctAnswer: "By helping their parents with their work",
      },
      {
        question:
          "What are some of the things mentioned that we learn in our family?",
        optionA: "To ride a bike and swim",
        optionB: "To share and care",
        optionC: "To drive a car",
        correctAnswer: "To share and care",
      },
      {
        question: "How do family members support each other in the text?",
        optionA: "By arguing and fighting",
        optionB: "By sharing work and helping each other",
        optionC: "By ignoring each other",
        correctAnswer: "By sharing work and helping each other",
      },
      {
        question:
          "Who takes care of the needs of the family according to the text?",
        optionA: "Friends",
        optionB: "Parents",
        optionC: "Strangers",
        correctAnswer: "Parents",
      },
      {
        question:
          "What is one of the ways children help their parents in the family?",
        optionA: "By cooking meals",
        optionB: "By helping with household chores",
        optionC: "By making a mess",
        correctAnswer: "By helping with household chores",
      },
      {
        question:
          "According to the text, what is one of the roles of parents in the family?",
        optionA: "Watching TV",
        optionB: "Fulfilling the needs of the family",
        optionC: "Playing video games",
        correctAnswer: "Fulfilling the needs of the family",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "We learn to _____ in our family.",
        optionA: "sing",
        optionB: "walk",
        optionC: "swim",
        correctAnswer: "walk",
      },
      {
        question: "Family members help us learn to _____ and _____.",
        optionA: "dance, sing",
        optionB: "behave well, share",
        optionC: "ride a bike, run",
        correctAnswer: "behave well, share",
      },
      {
        question:
          "Parents take care of their children and _____ for the family.",
        optionA: "cook",
        optionB: "earn",
        optionC: "travel",
        correctAnswer: "earn",
      },
      {
        question: "Family members _____ for one another.",
        optionA: "argue",
        optionB: "care",
        optionC: "fight",
        correctAnswer: "care",
      },
      {
        question: "Children help their parents in their _____.",
        optionA: "games",
        optionB: "work",
        optionC: "studies",
        correctAnswer: "work",
      },
      {
        question: "They fulfill all the _____ of the family.",
        optionA: "dreams",
        optionB: "needs",
        optionC: "wishes",
        correctAnswer: "needs",
      },
      {
        question: "Family members share _____.",
        optionA: "secrets",
        optionB: "work",
        optionC: "toys",
        correctAnswer: "work",
      },
      {
        question: "We learn to _____ in our family.",
        optionA: "ride a bike",
        optionB: "drive a car",
        optionC: "fly a plane",
        correctAnswer: "ride a bike",
      },
      {
        question:
          "Parents take care of their children and _____ for the family.",
        optionA: "play games",
        optionB: "earn",
        optionC: "go on vacations",
        correctAnswer: "earn",
      },
      {
        question: "Family members help each other and _____.",
        optionA: "ignore each other",
        optionB: "argue",
        optionC: "share work",
        correctAnswer: "share work",
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
