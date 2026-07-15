export const chapter = "Chapter - 28: Law-making in the Country ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the basis for all laws in India?",
        optionA: "Indian Penal Code",
        optionB: "Constitution of India",
        optionC: "Muslim Women (Protection of Rights on Marriage) Act 2019",
        correctAnswer: "B. Constitution of India",
      },
      {
        question: "How many subjects are included in the Union List?",
        optionA: "66",
        optionB: "97",
        optionC: "47",
        correctAnswer: "B. 97",
      },
      {
        question:
          "Which list contains subjects that can be important to both the central government and state governments?",
        optionA: "Union List",
        optionB: "State List",
        optionC: "Concurrent List",
        correctAnswer: "C. Concurrent List",
      },
      {
        question:
          "Which power allows the Parliament to make laws on subjects not identified in the three lists?",
        optionA: "Residuary Power",
        optionB: "Concurrent Power",
        optionC: "Exclusive Power",
        correctAnswer: "A. Residuary Power",
      },
      {
        question: "What is a proposal for a law called in the Parliament?",
        optionA: "Regulation",
        optionB: "Bill",
        optionC: "Statute",
        correctAnswer: "B. Bill",
      },
      {
        question:
          "In which reading is a bill introduced and circulated in the house?",
        optionA: "First Reading",
        optionB: "Second Reading",
        optionC: "Third Reading",
        correctAnswer: "A. First Reading",
      },
      {
        question:
          "Who decides whether a bill has received approval from the house during the voting process?",
        optionA: "Prime Minister",
        optionB: "President",
        optionC: "Speaker",
        correctAnswer: "C. Speaker",
      },
      {
        question:
          "What type of bill is related to taxation and government income and expenditure?",
        optionA: "Ordinary Bill",
        optionB: "Money Bill",
        optionC: "Special Bill",
        correctAnswer: "B. Money Bill",
      },
      {
        question:
          "How does the Parliament resolve conflicts between the Lok Sabha and Rajya Sabha on a bill?",
        optionA: "By convening a joint session",
        optionB: "By referring the matter to the Supreme Court",
        optionC: "By seeking approval from the President",
        correctAnswer: "A. By convening a joint session",
      },
      {
        question:
          "What is issued by the government when there is an urgent need for making a law when the Parliament is not in session?",
        optionA: "Resolution",
        optionB: "Ordinance",
        optionC: "Regulation",
        correctAnswer: "B. Ordinance",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        question: "The basis for all laws in India is the ____________.",
        options: [
          "Indian Penal Code",
          "Constitution of India",
          "Muslim Women (Protection of Rights on Marriage) Act 2019",
        ],
        answer: "Constitution of India",
      },
      {
        question:
          "Union List comprises ____________ subjects authorized for laws by the Parliament.",
        options: ["97", "66", "47"],
        answer: "97",
      },
      {
        question:
          "The State List includes ____________ subjects for state legislatures to make laws.",
        options: ["97", "66", "47"],
        answer: "66",
      },
      {
        question:
          "The Concurrent List contains ____________ subjects that can be important to both the center and states.",
        options: ["97", "66", "47"],
        answer: "47",
      },
      {
        question:
          "In case of a conflict between center and states, the law made by the ____________ shall prevail.",
        options: ["Center", "State", "Concurrent"],
        answer: "Center",
      },
      {
        question:
          "The power to make a law on a subject not identified in the three lists is called ____________ power.",
        options: ["Concurrent", "Residuary", "Exclusive"],
        answer: "Residuary",
      },
      {
        question:
          "A proposal for a law presented in the Parliament is called a ____________.",
        options: ["Regulation", "Bill", "Statute"],
        answer: "Bill",
      },
      {
        question:
          "In the first reading of a bill, it is ____________ and circulated in the house.",
        options: ["Debated", "Introduced", "Voted on"],
        answer: "Introduced",
      },
      {
        question:
          "When a bill has been passed by one house, it is sent to the ____________ house.",
        options: ["Same", "Upper", "Other"],
        answer: "Other",
      },
      {
        question:
          "An ordinance is a ____________ law issued by the government with the President's assent.",
        options: ["Permanent", "Temporary", "Federal"],
        answer: "Temporary",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question:
          "The Indian Succession Act is part of the Indian Constitution.",
        optionA: "False",
        optionB: "True",
        correctAnswer: "A",
      },
      {
        question:
          "The President has the power to give his assent to a bill or send it back for reconsideration.",
        optionA: "True",
        optionB: "False",correctAnswer: "A",
      },
      {
        question:
          "In a parliamentary form of government, the real power is vested in the Prime Minister.",
        optionA: "True",
        optionB: "False",correctAnswer: "A",
      },
      {
        question:
          "The Parliament is required to hold at least four sessions in a year.",
        optionA: "False",
        optionB: "True",
        correctAnswer: "B",
      },
      {
        question: "The Lok Sabha can only give suggestions on a money bill.",
        optionA: "True",
        optionB: "False",correctAnswer: "B",
      },
      {
        question:
          "Residuary power allows the Parliament to make laws on subjects not identified in the three lists.",
        optionA: "True",
        optionB: "False",correctAnswer: "A",
      },
      {
        question: "The Parliament can issue ordinances when it is in session.",
        optionA: "False",
        optionB: "True",
        correctAnswer: "B",
      },
      {
        question:
          "A money bill is related to the taxation and income and expenditure of the government.",
        optionA: "True",
        optionB: "False",correctAnswer: "A",
      },
      {
        question:
          "The opposition in a parliamentary form of government often leads to stability.",
        optionA: "False",
        optionB: "True",
        correctAnswer: "B",
      },
      {
        question:
          "A law is a rule with the force of the government behind it, and compliance is optional.",
        optionA: "False",
        optionB: "True",
        correctAnswer: "B",
      },
    ],
  };
}

export var activityData;
