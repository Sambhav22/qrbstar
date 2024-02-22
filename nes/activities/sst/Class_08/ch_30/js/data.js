export const chapter = "Chapter - 30: Getting Justice ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What are the two main types of legal cases mentioned in the text?",
        optionA: "Criminal and traffic",
        optionB: "Civil and criminal",
        optionC: "Domestic and international",
        correctAnswer: "B) Civil and criminal",
      },
      {
        question:
          "In a civil case, who is responsible for initiating the legal process by filing a petition in the civil court?",
        optionA: "The police",
        optionB: "The defendant",
        optionC: "The plaintiff (private person or organization)",
        correctAnswer: "C) The plaintiff (private person or organization)",
      },
      {
        question: "In a civil case, what is the typical outcome in court?",
        optionA: "Conviction of the accused",
        optionB: "A fine or damages awarded to the victim",
        optionC: "Jail sentence for the accused",
        correctAnswer: "B) A fine or damages awarded to the victim",
      },
      {
        question:
          "Who is responsible for fighting a criminal case on behalf of the State or government?",
        optionA: "The judge",
        optionB: "The police",
        optionC: "The Public Prosecutor",
        correctAnswer: "C) The Public Prosecutor",
      },
      {
        question: "What is the role of the judge in a criminal case?",
        optionA: "Initiating the legal process",
        optionB: "Presenting the case before the court",
        optionC: "Deciding whether a person is guilty or not",
        correctAnswer: "C) Deciding whether a person is guilty or not",
      },
      {
        question:
          "What is the purpose of the 'First Information Report' (FIR) filed with the police?",
        optionA: "To accuse someone of a crime",
        optionB: "To initiate a civil case",
        optionC: "To inform the police about a crime",
        correctAnswer: "C) To inform the police about a crime",
      },
      {
        question: "In a criminal case, who can file an FIR with the police?",
        optionA: "Only the victim",
        optionB: "Only the police",
        optionC: "The victim, a relative of the victim, or any other person",
        correctAnswer:
          "C) The victim, a relative of the victim, or any other person",
      },
      {
        question:
          "Why can't the victim settle a criminal case with the accused outside of court?",
        optionA: "Because it's against the law",
        optionB: "Because the police is involved",
        optionC: "Because one of the parties is the State (government)",
        correctAnswer:
          "C) Because one of the parties is the State (government)",
      },
      {
        question:
          "What is the primary reason for the right to appeal in legal cases?",
        optionA: "To increase the workload of the courts",
        optionB: "To provide additional compensation to the victim",
        optionC: "To correct errors in interpreting the law or evidence",
        correctAnswer:
          "C) To correct errors in interpreting the law or evidence",
      },
      {
        question:
          "In case the police refuses to file an FIR, what can a complainant do?",
        optionA: "Nothing, the complainant has no recourse",
        optionB: "Approach a higher-ranking police officer or the court of law",
        optionC: "File a civil case against the police",
        correctAnswer:
          "B) Approach a higher-ranking police officer or the court of law",
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
          "In a civil case, a _________, who may be a private person or organization, initiates the process by filing a petition in the civil court.",
        options: ["defendant", "plaintiff", "witness"],
        answer: "plaintiff",
      },
      {
        question:
          "In a criminal case, a crime is understood to have been committed against _________, and the State or government fights this case.",
        options: ["individuals", "the police", "society or common people"],
        answer: "society or common people",
      },
      {
        question:
          "The police initiates the legal procedure for a criminal case with the filing of an _________.",
        options: ["affidavit", "indictment", "FIR (First Information Report)"],
        answer: "FIR (First Information Report)",
      },
      {
        question:
          "An accused in a criminal case is considered innocent until the crime has been proved beyond a reasonable _________.",
        options: ["measure", "inference", "doubt"],
        answer: "doubt",
      },
      {
        question:
          "In a criminal case, the judge can sentence a person to jail, award a fine, or even grant a _________.",
        options: ["pardon", "suspension", "death penalty"],
        answer: "death penalty",
      },
      {
        question:
          "The right to _________ has been given because a judge can sometimes commit an error in interpreting the law or evidence.",
        options: ["dispute", "appeal", "sue"],
        answer: "appeal",
      },
      {
        question:
          "The police initiates the procedure with the filing of an FIR, which stands for _________.",
        options: [
          "First Insightful Record",
          "First Information Report",
          "First Investigative Request",
        ],
        answer: "First Information Report",
      },
      {
        question:
          "The role of the _________ is crucial in the administration of justice, as the success or failure of a case depends on this individual to a large extent.",
        options: ["judge", "plaintiff", "Public Prosecutor"],
        answer: "Public Prosecutor",
      },
      {
        question:
          "The judge decides a case on the basis of the evidence presented before him, following the principle of the 'rule of _________.",
        options: ["equality", "law", "power"],
        answer: "law",
      },
      {
        question:
          "By law, the police cannot refuse to file an FIR, as it is the duty of the police, and the Supreme Court has given clear instructions that they cannot refuse to accept an FIR under any _________.",
        options: ["situation", "circumstances", "incident"],
        answer: "circumstances",
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
          "The Judiciary interprets the Constitution and its spirit, protects the rights conferred by the Constitution, and preserves high democratic ideals as enunciated by the Constitution.",
        optionA: "True",
        optionB: "False",correctAnswer: "A",
      },
      {
        question:
          "In India, the government does not discriminate between individuals from different backgrounds, castes, religions, languages, regions, or sexes based on the principle of the 'rule of law.'",
        optionA: "True",
        optionB: "False",correctAnswer: "A",
      },
      {
        question:
          "The Judiciary's primary function is to enforce laws created by the Legislature.",
        optionA: "True",
        optionB: "False",correctAnswer: "B",
      },
      {
        question:
          "Subordinate courts handle cases related to the resolution of agreements between individuals and organizations.",
        optionA: "True",
        optionB: "False",correctAnswer: "B",
      },
      {
        question:
          "The Judiciary is responsible for protecting Fundamental Rights, and it has the power to interpret and enforce them.",
        optionA: "True",
        optionB: "False",correctAnswer: "A",
      },
      {
        question:
          "The Indian Judiciary operates at two tiers: the Supreme Court and the High Courts.",
        optionA: "True",
        optionB: "False",correctAnswer: "B",
      },
      {
        question:
          "The Judiciary in India is not an integrated system, with the three tiers operating independently of each other.",
        optionA: "True",
        optionB: "False",correctAnswer: "B",
      },
      {
        question:
          "In some districts, there may be two different individuals holding the positions of District Judge, one as a Sessions Judge and the other as a Civil Judge.",
        optionA: "True",
        optionB: "False",correctAnswer: "A",
      },
      {
        question:
          "Judges in India can be easily removed from their positions once they are appointed.",
        optionA: "True",
        optionB: "False",correctAnswer: "B",
      },
      {
        question:
          "A Public Interest Litigation (PIL) can be filed only by government officials to address bureaucratic issues.",
        optionA: "True",
        optionB: "False",correctAnswer: "B",
      },
    ],
  };
}

export var activityData;
