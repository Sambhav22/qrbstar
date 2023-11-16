export const chapter = "Chapter - 22: Our Government     ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What are the three types of organizations that constitute the organs of government?",
        optionA: "Legislature, executive, judiciary",
        optionB: "President, Parliament, Governor",
        optionC: "Defence, foreign affairs, finance",
        correctAnswer: "A",
      },
      {
        question:
          "Who is the head of the entire nation in India and is responsible for signing bills into law?",
        optionA: "Prime Minister",
        optionB: "Governor",
        optionC: "President",
        correctAnswer: "C",
      },
      {
        question:
          "Which of the following is not a house of the Indian Parliament?",
        optionA: "Lok Sabha",
        optionB: "Rajya Sabha",
        optionC: "Vidhan Sabha",
        correctAnswer: "C",
      },
      {
        question: "How many members can Lok Sabha comprise at most?",
        optionA: "250",
        optionB: "545",
        optionC: "200",
        correctAnswer: "B",
      },
      {
        question: "Who becomes the Prime Minister of India?",
        optionA: "The President",
        optionB: "The leader of the majority party in Lok Sabha",
        optionC: "The Governor",
        correctAnswer: "B",
      },
      {
        question:
          "Who is the highest authority of a state and acts as a link between the state government and the central government?",
        optionA: "Prime Minister",
        optionB: "Chief Minister",
        optionC: "Governor",
        correctAnswer: "C",
      },
      {
        question: "What is the highest judicial body in India?",
        optionA: "District Court",
        optionB: "High Court",
        optionC: "Supreme Court",
        correctAnswer: "C",
      },
      {
        question:
          "Which court is the highest court of law in every state in India?",
        optionA: "District Court",
        optionB: "Supreme Court",
        optionC: "High Court",
        correctAnswer: "C",
      },
      {
        question: "At how many levels is the judiciary organized in India?",
        optionA: "One level",
        optionB: "Two levels",
        optionC: "Three levels",
        correctAnswer: "C",
      },
      {
        question:
          "What is the primary responsibility of the executive in both central and state governments?",
        optionA: "Making laws",
        optionB: "Enforcing laws",
        optionC: "Interpreting laws",
        correctAnswer: "B",
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
          "__________ is the way of expressing our thoughts. In other words, communication means sending or receiving messages from one end to the other.",
        options: ["Transport", "Conduction", "Communication"],
        correctAnswer: "Communication",
      },
      {
        question:
          "Postal service, telephone, e-mail, and fax are some examples of means of private __________.",
        options: ["Transactions", "Communication", "Transport"],
        correctAnswer: "Communication",
      },
      {
        question:
          "India has the most widespread postal network in the world. The biggest post office is __________ GPO.",
        options: ["Delhi", "Mumbai", "Kolkata"],
        correctAnswer: "Mumbai",
      },
      {
        question:
          "Telephone is the fastest means of oral and private __________. It carries human voice to long distances within or outside the country just in a few seconds.",
        options: ["Transportation", "Communication", "Transaction"],
        correctAnswer: "Communication",
      },
      {
        question:
          "A person can send messages through electronic mail, popularly known as e-mail if he has internet connection. It is one of the fastest ways of sending or receiving messages. For this service, a person needs a computer or a mobile phone, a modem, and an e-mail address which is known as __________.",
        options: ["Identification", "Code", "E-mail ID"],
        correctAnswer: "E-mail ID",
      },
      {
        question:
          "Mass communication refers to the means of communicating with the masses or a large number of people. Print media, radio, television, social networking sites, performing arts, and satellites are examples of means of mass __________.",
        options: ["Transaction", "Transportation", "Communication"],
        correctAnswer: "Communication",
      },
      {
        question:
          "Print media refers to paper publications circulated in the form of physical editions of books, magazines, journals, and newsletters. It is circulated in various languages and is very effective as a means of mass __________.",
        options: ["Communication", "Transaction", "Transportation"],
        correctAnswer: "Communication",
      },
      {
        question:
          "Nowadays, television is the most popular means of mass communication. A television has an audio-visual system. We can hear as well as watch programs on it. So, it is also considered as a better means of communication than __________.",
        options: ["Radio", "Transportation", "Satellite"],
        correctAnswer: "Radio",
      },
      {
        question:
          "What is the primary drawback of air transport mentioned in the text?",
        options: [
          "It is not suitable for long distances",
          "It requires a large investment in infrastructure",
          "It is the riskiest form of transport",
        ],
        correctAnswer: "It is the riskiest form of transport",
      },
      {
        question: "India launched its first satellite Aryabhata on __________.",
        options: ["19 April 1975", "15 August 1947", "5 July 1980"],
        correctAnswer: "19 April 1975",
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
          "Communication refers to sending or receiving messages from one end to the other.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Postal service is one of the means of private communication.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Mobile phones have become less popular with advancements in technology.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Fax machines transmit documents using electronic means.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "To send messages through electronic mail (e-mail), you need a computer or a mobile phone, a modem, and an e-mail address.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Print media is only effective for literate people.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Radio is considered the most popular means of mass communication.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Rail transport is suitable for carrying small and fragile goods.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Air transport is the most eco-friendly mode of transportation.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "India launched its first satellite, Aryabhata, on 19 April 1975.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
