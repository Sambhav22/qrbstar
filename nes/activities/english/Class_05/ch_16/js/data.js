export const chapter = "Chapter -16: A Visit to Bank";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What rattles the narrator when they enter the bank?",
          optionA: "The manager",
          optionB: "The clerks",
          optionC: "The accountant",
          correctAnswer: "The clerks",
        },
        {
          question:
            "Why does the narrator approach the booth marked 'Accountant'?",
          optionA: "To withdraw money",
          optionB: "To open an account",
          optionC: "To complain about the clerks",
          correctAnswer: "To open an account",
        },
        {
          question:
            "What does the manager initially think the narrator is when asked to meet alone?",
          optionA: "A detective",
          optionB: "A spy",
          optionC: "A wealthy industrialist's son",
          correctAnswer: "A detective",
        },
        {
          question: "How much money does the narrator deposit initially?",
          optionA: "Fifty dollars",
          optionB: "Fifty-six dollars",
          optionC: "Six dollars",
          correctAnswer: "Fifty-six dollars",
        },
        {
          question:
            "What impression do the people in the bank have about the narrator?",
          optionA: "A millionaire",
          optionB: "A detective",
          optionC: "A spy",
          correctAnswer: "A millionaire",
        },
        {
          question: "Why does the narrator want to draw a cheque?",
          optionA: "To buy something expensive",
          optionB: "To pay bills",
          optionC: "For present use",
          correctAnswer: "For present use",
        },
        {
          question:
            "What mistake does the narrator make while writing the cheque?",
          optionA: "Wrong date",
          optionB: "Wrong signature",
          optionC: "Wrong amount",
          correctAnswer: "Wrong amount",
        },
        {
          question:
            "How does the narrator react when questioned about withdrawing the entire amount?",
          optionA: "Agrees to deposit more",
          optionB: "Explains the mistake",
          optionC: "Confirms withdrawal",
          correctAnswer: "Confirms withdrawal",
        },
        {
          question:
            "How does the clerk react when the narrator asks for the money?",
          optionA: "Laughs loudly",
          optionB: "Appears sympathetic",
          optionC: "Shows surprise",
          correctAnswer: "Laughs loudly",
        },
        {
          question: "Why does the narrator decide not to bank anymore?",
          optionA: "Bank's poor service",
          optionB: "Fear of insults",
          optionC: "Preference for cash savings",
          correctAnswer: "Preference for cash savings",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      [
        {
          question:
            "When the narrator goes into a bank, everything, including the clerks and cashier, __________.",
          optionA: "calms them",
          optionB: "rattles them",
          optionC: "ignores them",
          correctAnswer: "rattles them",
        },
        {
          question:
            "The narrator felt that the bank was the only place for their salary because it had been raised to __________ dollars a month.",
          optionA: "twenty",
          optionB: "fifty",
          optionC: "sixty",
          correctAnswer: "fifty",
        },
        {
          question:
            "The narrator shambled into the bank with the idea that a person about to open an account must consult the __________.",
          optionA: "cashier",
          optionB: "manager",
          optionC: "accountant",
          correctAnswer: "manager",
        },
        {
          question:
            "The accountant, a tall man, rattled the narrator just by __________.",
          optionA: "speaking loudly",
          optionB: "his serious voice",
          optionC: "his very sight",
          correctAnswer: "his very sight",
        },
        {
          question:
            "The manager concluded that the narrator was a son of a rich industrialist after learning about their __________.",
          optionA: "detective skills",
          optionB: "large account",
          optionC: "spy agency affiliation",
          correctAnswer: "large account",
        },
        {
          question:
            "The manager opened the door unkindly loud and called to Mr. Montgomery, informing him that the narrator is __________.",
          optionA: "withdrawing money",
          optionB: "opening an account",
          optionC: "closing their account",
          correctAnswer: "opening an account",
        },
        {
          question:
            "The narrator wanted to draw a cheque to get __________ dollars for present use.",
          optionA: "twenty",
          optionB: "fifty-six",
          optionC: "six",
          correctAnswer: "six",
        },
        {
          question:
            "The people in the bank had the impression that the narrator was a __________.",
          optionA: "millionaire",
          optionB: "detective",
          optionC: "spy",
          correctAnswer: "millionaire",
        },
        {
          question:
            "The narrator mistakenly wrote __________ instead of six dollars on the cheque.",
          optionA: "twenty",
          optionB: "fifty",
          optionC: "fifty-six",
          correctAnswer: "fifty-six",
        },
        {
          question:
            "When questioned by the clerk, the narrator decided to __________ their money from the bank.",
          optionA: "withdraw",
          optionB: "deposit",
          optionC: "double",
          correctAnswer: "withdraw",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question:
            "When the narrator goes into a bank, everything, including the clerks and cashier, rattles them.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The narrator's salary had been raised to sixty dollars a month.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The narrator shambled into the bank with the idea that a person about to open an account must consult the cashier.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The accountant, a short man, rattled the narrator just by speaking loudly.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The manager concluded that the narrator was a son of a poor industrialist.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The manager opened the door kindly loud and called to Mr. Montgomery, informing him that the narrator is closing their account.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The narrator wanted to draw a cheque to get fifty dollars for present use.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The people in the bank had the impression that the narrator was a detective.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The narrator mistakenly wrote sixty instead of six dollars on the cheque.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "When questioned by the clerk, the narrator decided to deposit more money into the bank.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
