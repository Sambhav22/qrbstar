export const chapter = "Chapter - 25: State Government";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What are the three tiers of government mentioned in the text?",
        optionA: "Federal, Unitary, Local",
        optionB: "Central, State, Local",
        optionC: "Union, Concurrent, State",
        correctAnswer: "B) Central, State, Local",
      },
      {
        question:
          "In India, the power is divided between which two levels of government?",
        optionA: "Local and Federal",
        optionB: "State and Union",
        optionC: "Central and Concurrent",
        correctAnswer: "B) State and Union",
      },
      {
        question:
          "Which list includes subjects like defence and currency, dealt with by the central government?",
        optionA: "Union List",
        optionB: "Concurrent List",
        optionC: "State List",
        correctAnswer: "A) Union List",
      },
      {
        question:
          "What can be introduced in the Vidhan Sabha only with the Speaker's assent?",
        optionA: "Bills",
        optionB: "Resolutions",
        optionC: "Both A and B",
        correctAnswer: "C) Both A and B",
      },
      {
        question:
          "Who appoints the Chief Minister and different ministers in a state government?",
        optionA: "President of India",
        optionB: "Governor",
        optionC: "Prime Minister",
        correctAnswer: "B) Governor",
      },
      {
        question:
          "What is the highest court of law in a state, according to the text?",
        optionA: "District Court",
        optionB: "Supreme Court",
        optionC: "High Court",
        correctAnswer: "C) High Court",
      },
      {
        question:
          "Which organ of the state government is responsible for making laws?",
        optionA: "Executive",
        optionB: "Legislature",
        optionC: "Judiciary",
        correctAnswer: "B) Legislature",
      },
      {
        question:
          "How long is a Vidhan Sabha elected for, according to the text?",
        optionA: "2 years",
        optionB: "4 years",
        optionC: "5 years",
        correctAnswer: "C) 5 years",
      },
      {
        question: "Who is the real executive in a state government?",
        optionA: "Chief Secretary",
        optionB: "Chief Minister",
        optionC: "Governor",
        correctAnswer: "B) Chief Minister",
      },
      {
        question:
          "In the case study, what is the first step required for building a junior high school?",
        optionA: "Executive Action",
        optionB: "Judicial Action",
        optionC: "Legislative Action",
        correctAnswer: "C) Legislative Action",
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
          "A government can deal with certain subjects, which are given in our Constitution of India. These subjects are arranged into three Lists: __________, Concurrent List, and State List.",
        options: ["Federal List", "Union List", "Central List"],
        correctAnswer: "Union List",
      },
      {
        question:
          "The central government can deal with subjects in the __________, which comprises subjects of national importance, like defence and currency.",
        options: ["State List", "Concurrent List", "Union List"],
        correctAnswer: "Union List",
      },
      {
        question:
          "A state government can deal with the subjects mentioned in the __________ within its territory, comprising subjects of state importance, like irrigation and policing.",
        options: ["Union List", "State List", "Concurrent List"],
        correctAnswer: "State List",
      },
      {
        question:
          "The three organs of the government—legislature, executive, and judiciary—form the __________.",
        options: ["Central Government", "State Government", "Local Government"],
        correctAnswer: "State Government",
      },
      {
        question:
          "A representative to the state legislature is called an __________.",
        options: ["MP", "MLA", "MLC"],
        correctAnswer: "MLA",
      },
      {
        question:
          "The state executive comprises the Governor, the Chief Minister, and the Council of Ministers. The Governor is a representative of the union government and is appointed by the President of India on the advice of __________.",
        options: [
          "The Chief Minister",
          "The Prime Minister",
          "The Chief Justice",
        ],
        correctAnswer: "The Prime Minister",
      },
      {
        question:
          "After general elections, the Governor appoints the leader of the majority party/coalition in the Vidhan Sabha as the Chief Minister and invites him to form the government. The Chief Minister then appoints ministers of the Council of Ministers on the advice of __________.",
        options: ["The Governor", "The President", "The Chief Minister"],
        correctAnswer: "The Chief Minister",
      },
      {
        question:
          "The Chief Minister is the real executive, though all functions are performed in the name of the Governor. The Council of Ministers acts as a single team. If a bill is not passed in the Vidhan Sabha, the Council of Ministers has to __________.",
        options: ["Resign", "Dissolve", "Appeal"],
        correctAnswer: "Resign",
      },
      {
        question:
          "The Chief Minister looks after the state administration through the State Secretariat, headed by the Chief Secretary. Each state has a High Court, the highest court of law in the state, which has a number of judges and is headed by a __________.",
        options: ["Chief Minister", "Governor", "Chief Justice"],
        correctAnswer: "Chief Justice",
      },
      {
        question:
          "A High Court deals with both civil and criminal cases, and its jurisdiction includes cases of violation of Fundamental Rights. Judges of the High Court are appointed by the President of India, and they serve up to the age of __________.",
        options: ["60 years", "62 years", "65 years"],
        correctAnswer: "62 years",
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
          "A state government can deal with subjects mentioned in the Union List within its territory.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The Governor of a state is appointed by the Chief Minister of that state.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The Chief Minister is the supreme authority in the Vidhan Sabha.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The state executive includes the President of India.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The High Court is the highest court of law in the state.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The Chief Minister is directly elected by the people of the state.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The Vidhan Sabha is elected for a period of ten years.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The Chief Minister and Council of Ministers are collectively responsible to the Governor.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The Chief Secretary looks after the state administration through the State Secretariat.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The jurisdiction of a High Court includes only civil cases.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
