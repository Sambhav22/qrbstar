export const chapter = "Chapter - 15: Means of Communication ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is communication primarily about?",
        optionA: "Exchanging currency",
        optionB: "Sending and receiving information or messages",
        optionC: "Physical activities",
        correctAnswer: "Sending and receiving information or messages",
      },
      {
        question: "How can people communicate with others?",
        optionA: "Through telepathy",
        optionB: "By writing, orally, or through gestures",
        optionC: "Using smoke signals",
        correctAnswer: "By writing, orally, or through gestures",
      },
      {
        question:
          "In the past, how were messages delivered over long distances?",
        optionA: "Through telephones",
        optionB: "By foot or on animals",
        optionC: "Via email",
        correctAnswer: "By foot or on animals",
      },
      {
        question: "What is the PIN code used for in postal communication?",
        optionA: "To encrypt the letter's content",
        optionB: "To identify the sender",
        optionC: "To specify the delivery address",
        correctAnswer: "To specify the delivery address",
      },
      {
        question: "Who invented the telephone?",
        optionA: "Thomas Edison",
        optionB: "Alexander Graham Bell",
        optionC: "Isaac Newton",
        correctAnswer: "Alexander Graham Bell",
      },
      {
        question: "What does ISD stand for in telecommunication?",
        optionA: "International Subscriber Dialing",
        optionB: "In-Store Discount",
        optionC: "Internet Service Delivery",
        correctAnswer: "International Subscriber Dialing",
      },
      {
        question: "What is the primary advantage of a mobile phone?",
        optionA: "It can be used for cooking",
        optionB: "It allows browsing the internet",
        optionC: "It is large in size",
        correctAnswer: "It allows browsing the internet",
      },
      {
        question: "How is mass communication defined?",
        optionA: "Communication with a large group of ants",
        optionB: "Sending messages using carrier pigeons",
        optionC: "Sending messages to a large number of people simultaneously",
        correctAnswer:
          "Sending messages to a large number of people simultaneously",
      },
      {
        question:
          "Which channel of mass communication is used to send the latest news about what's happening around the world?",
        optionA: "Smoke signals",
        optionB: "Newspapers, radio, and television",
        optionC: "Telegrams",
        correctAnswer: "Newspapers, radio, and television",
      },
      {
        question: "What does STD stand for in telecommunication?",
        optionA: "Subscriber Telephony Device",
        optionB: "Subscriber Trunk Dialing",
        optionC: "Standard Telecommunication Device",
        correctAnswer: "Subscriber Trunk Dialing",
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
          "Communication involves sending and receiving ________ or messages.",
        options: ["Currency", "Emojis", "Information"],
        correctAnswer: "Information",
      },
      {
        question: "We can communicate through writing, orally, or by ________.",
        options: ["Telepathy", "Gestures", "Smoke signals"],
        correctAnswer: "Gestures",
      },
      {
        question:
          "In older times, people used to go on foot or on animals to deliver ________.",
        options: ["Emails", "Messages", "Telegrams"],
        correctAnswer: "Messages",
      },
      {
        question:
          "Trained pigeons were used to deliver messages to ________ places.",
        options: ["Nearby", "Faraway", "Inaccessible"],
        correctAnswer: "Faraway",
      },
      {
        question:
          "The three main means of communication mentioned are postal communication, ________, and mass communication.",
        options: ["Telegrams", "Telecommunication", "Carrier pigeons"],
        correctAnswer: "Telecommunication",
      },
      {
        question:
          "Postal communication includes delivering postcards, letters, and ________ physically.",
        options: ["Emails", "Parcels", "Smoke signals"],
        correctAnswer: "Parcels",
      },
      {
        question:
          "In postal communication, letters are sorted out at the ________ offices.",
        options: ["Postman", "Sorting", "Delivery"],
        correctAnswer: "Delivery",
      },
      {
        question: "Telephone was invented by ________.",
        options: ["Isaac Newton", "Alexander Graham Bell", "Thomas Edison"],
        correctAnswer: "Alexander Graham Bell",
      },
      {
        question: "The fastest means of communication is ________.",
        options: ["Smoke signals", "Telephone", "Carrier pigeons"],
        correctAnswer: "Telephone",
      },
      {
        question:
          "Mass communication sends messages to a large number of people through ________, radio, and television.",
        options: ["Newspapers", "Smoke signals", "Emails"],
        correctAnswer: "Newspapers",
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
          "Communication involves sending and receiving information or messages.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Trained pigeons were commonly used to deliver messages in modern times.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The telephone was invented by Alexander Graham Bell.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Mass communication allows messages to be sent to a large number of people at the same time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The fastest means of communication is email.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "In postal communication, letters are not sorted out at the delivery offices.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Mobile phones are large in size and not convenient to carry around.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "Telecommunication includes telephones and satellite phones.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "We communicate primarily through telepathy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Mass communication is the process of sending messages to a small, select group of people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
