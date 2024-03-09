export const chapter = "Chapter -15: Let's Communicate";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What is the process of sending and receiving information called?",
          optionA: "Transportation",
          optionB: "Communication",
          optionC: "Transference",
          correctAnswer: "Communication",
        },
        {
          question:
            "What is the oldest means of communication among the given options?",
          optionA: "Email",
          optionB: "Fax",
          optionC: "Letter",
          correctAnswer: "Letter",
        },
        {
          question: "What is the deadly virus mentioned in the news text?",
          optionA: "H1N1",
          optionB: "Ebola",
          optionC: "Corona virus",
          correctAnswer: "Corona virus",
        },
        {
          question:
            "What is the primary medium of sending information to masses mentioned in the text?",
          optionA: "Fax",
          optionB: "Television",
          optionC: "Radio",
          correctAnswer: "Television",
        },
        {
          question:
            "Which of the following is not mentioned as a measure to prevent the spread of the virus in the TV show?",
          optionA: "Wash your hands frequently",
          optionB: "Wear a mask",
          optionC: "Use hand sanitizer",
          correctAnswer: "Use hand sanitizer",
        },
        {
          question:
            "What are means of private communication used between two individuals?",
          optionA: "Radio and television",
          optionB: "Letter and fax",
          optionC: "Email and phone",
          correctAnswer: "Letter and fax",
        },
        {
          question:
            "What affects the respiratory system of individuals according to the news text?",
          optionA: "Bacterial infection",
          optionB: "Corona virus",
          optionC: "Allergies",
          correctAnswer: "Corona virus",
        },
        {
          question:
            "Which means of communication is specifically mentioned for sending information to many people at one point of time?",
          optionA: "Letter",
          optionB: "Magazine",
          optionC: "Radio",
          correctAnswer: "Radio",
        },
        {
          question:
            "In the TV show, what is the advice given to people to prevent themselves from the virus?",
          optionA: "Wear a mask only",
          optionB: "Stay Home Stay Safe",
          optionC: "Use hand sanitizers only",
          correctAnswer: "Stay Home Stay Safe",
        },
        {
          question:
            "What are the means of mass communication mentioned in the text?",
          optionA: "Email and phone",
          optionB: "Radio, newspaper, and magazine",
          optionC: "Fax and television",
          correctAnswer: "Radio, newspaper, and magazine",
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
            "The process of sending and receiving information is known as ____________.",
          optionA: "Transport",
          optionB: "Communication",
          optionC: "Connection",
          correctAnswer: "Communication",
        },
        {
          question:
            "Letter is considered as the ____________ means of communication among the mentioned options.",
          optionA: "Newest",
          optionB: "Oldest",
          optionC: "Quickest",
          correctAnswer: "Oldest",
        },
        {
          question:
            "The deadly virus mentioned in the news is named ____________.",
          optionA: "H1N1",
          optionB: "Ebola",
          optionC: "Corona virus",
          correctAnswer: "Corona virus",
        },
        {
          question:
            "In the TV show, people are advised to wash their hands frequently, use hand sanitizers, and wear a mask to prevent themselves from ____________.",
          optionA: "Influenza",
          optionB: "Virus",
          optionC: "Bacteria",
          correctAnswer: "Virus",
        },
        {
          question: "__ is the medium of sending information to the masses.",
          optionA: "Email",
          optionB: "Television",
          optionC: "Radio",
          correctAnswer: "Television",
        },
        {
          question:
            "Means of private communication, used between two persons, include ____________.",
          optionA: "Email and phone",
          optionB: "Letter and fax",
          optionC: "Radio and television",
          correctAnswer: "Letter and fax",
        },
        {
          question:
            "The Corona virus outbreak affects the ____________ system of people.",
          optionA: "Digestive",
          optionB: "Respiratory",
          optionC: "Circulatory",
          correctAnswer: "Respiratory",
        },
        {
          question:
            "The TV show anchor advises people to step out from home only in need or else ____________.",
          optionA: "Stay Home Stay Safe",
          optionB: "Use hand sanitizers",
          optionC: "Wear a mask",
          correctAnswer: "Stay Home Stay Safe",
        },
        {
          question:
            "Radio, newspaper, and magazine are known as means of ____________ communication.",
          optionA: "Public",
          optionB: "Private",
          optionC: "Mass",
          correctAnswer: "Mass",
        },
        {
          question:
            "Information can be transmitted quickly to many people at one point of time through ____________.",
          optionA: "Email and phone",
          optionB: "Television and radio",
          optionC: "Fax and letter",
          correctAnswer: "Television and radio",
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
            "The process of sending and receiving information is known as communication.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Letter is considered the newest means of communication among the given options.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The deadly virus mentioned in the news is named H1N1.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In the TV show, people are advised to use hand sanitizers to prevent themselves from the virus.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Television is the only medium mentioned for sending information to the masses.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Means of private communication are used between two persons.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The Corona virus outbreak affects the digestive system of people.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The TV show anchor advises people to step out from home only in need or else wear a mask.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Information can be transmitted quickly to many people at one point of time through radio, newspaper, and magazine.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Email and phone are considered means of mass communication.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
