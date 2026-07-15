export const chapter = "Chapter -22: Letter Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is the main reason Arijit Garg is writing the letter to his father for?",
          optionA: "To update about his health",
          optionB: "To request money for quarterly fee",
          optionC:
            "To share news about securing a position in the annual examination",
          correctAnswer: "To request money for quarterly fee",
        },
        {
          question: "Where does Arijit Garg currently reside?",
          optionA: "Delhi",
          optionB: "Sonipat",
          optionC: "Panchkuti Colony",
          correctAnswer: "Sonipat",
        },
        {
          question: "When does Arijit need the money from his father?",
          optionA: "In two months",
          optionB: "Next week",
          optionC: "In the next quarterly examination",
          correctAnswer: "Next week",
        },
        {
          question: "What is the subject of Rahul's letter to the S.H.O.?",
          optionA: "Appreciation for the police station",
          optionB: "Reporting a bicycle theft",
          optionC: "Inquiring about the bicycle shop",
          correctAnswer: "Reporting a bicycle theft",
        },
        {
          question: "Where did the bicycle theft happen?",
          optionA: "Kalkaji Police Station",
          optionB: "Kalkaji Temple",
          optionC: "Delhi Cycle Works",
          correctAnswer: "Kalkaji Temple",
        },
        {
          question: "What is the color of Rahul's stolen bicycle?",
          optionA: "Red",
          optionB: "Black",
          optionC: "Blue",
          correctAnswer: "Black",
        },
        {
          question:
            "What is the purpose of Karan's letter to his sister, Chanchal?",
          optionA: "Discussing family matters",
          optionB: "Sharing news about standing first in exams",
          optionC: "Reminding about a promise",
          correctAnswer: "Sharing news about standing first in exams",
        },
        {
          question: "What does Karan promise to continue doing in his letter?",
          optionA: "Continue playing sports",
          optionB: "Continue studying very hard",
          optionC: "Continue visiting home regularly",
          correctAnswer: "Continue studying very hard",
        },
        {
          question: "Where does Karan currently live?",
          optionA: "Bhopal",
          optionB: "Sadar Bazaar",
          optionC: "Panchkuti Colony",
          correctAnswer: "Bhopal",
        },
        {
          question:
            "What does Karan express in his letter about his future studies?",
          optionA: "Hope to get a scholarship",
          optionB: "Planning to quit studying",
          optionC: "Uninterested in academics",
          correctAnswer: "Hope to get a scholarship",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question: "Arijit Garg resides in ___________.",
          options: ["Delhi", "Sonipat", "Panchkuti Colony"],
          correctAnswer: "Sonipat",
        },
        {
          question:
            "Arijit has to pay his quarterly fee in the next ___________.",
          options: ["two months", "next week", "next quarterly examination"],
          correctAnswer: "next week",
        },
        {
          question: "Rahul's bicycle, a Robin Hood, has ___________.",
          options: ["red color", "black color", "blue color"],
          correctAnswer: "black color",
        },
        {
          question:
            "Rahul purchased his bicycle from ___________ in July 20xx.",
          options: [
            "Kalkaji Police Station",
            "Kalkaji Temple",
            "Delhi Cycle Works",
          ],
          correctAnswer: "Delhi Cycle Works",
        },
        {
          question:
            "Karan has stood ___________ in the half-yearly examinations.",
          options: ["second", "first", "third"],
          correctAnswer: "first",
        },
        {
          question:
            "Karan promises to continue studying very hard to achieve a ___________.",
          options: ["scholarship", "sports award", "leadership position"],
          correctAnswer: "scholarship",
        },
        {
          question:
            "In the second text, Avnish Khanna is requesting leave due to ___________.",
          options: ["school event participation", "fever", "family function"],
          correctAnswer: "fever",
        },
        {
          question:
            "According to the third text, where does the student suggest constructing a speed-breaker?",
          options: [
            "inside the school premises",
            "on both sides of the school gate",
            "away from the school vicinity",
          ],
          correctAnswer: "on both sides of the school gate",
        },
        {
          question:
            "According to the fifth text, what does Naina request from the Principal?",
          options: [
            "permission to organize an event",
            "approval for a school project",
            "planning an excursion to a museum",
          ],
          correctAnswer: "planning an excursion to a museum",
        },
        {
          question:
            "In the first text, how many library periods does the student currently have in a week?",
          options: ["one", "two", "four"],
          correctAnswer: "two",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Arijit Garg resides in Delhi.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Arijit has to pay his quarterly fee in the next two months.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Rahul's bicycle, a Robin Hood, has a red color.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Rahul purchased his bicycle from Kalkaji Temple in July 20xx.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Karan has stood third in the half-yearly examinations.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Karan promises to continue playing sports to achieve a scholarship.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In the second text, Avnish Khanna is requesting leave due to a family function.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "According to the third text, the student suggests constructing a speed-breaker away from the school vicinity.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "According to the fifth text, Naina requests permission to organize an event.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In the first text, the student currently has four library periods in a week.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
