export const chapter = "Chapter - 14: Let's Send a Letter ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        passage:
          "Birds are singing beautifully in the morning. Two dogs are barking at each other. Aditya is writing a letter to her sister. Kavya is talking over the phone. Communication is transferring messages, ideas, and thoughts from one person to another. Earlier when people were not aware of the modes of communication, they communicated by using different signs and signals. Let's learn in detail:\n\nSigns: It is a form of language that directly communicates with the targeted audiences. For example, a dancer through gestures communicates her feelings to the audience during a performance.\n\nSymbols: It is a representation of an object, function, or process. For example, paintings on the walls of caves give a message in a symbolic form to the audience.\n\nMeans of Communication\nWith the passage of time, the modes of communication get developed, and now we have a number of means that have made our lives easy and comfortable.\n\nCommunication through Post\nThe cheapest way to communicate with people who live in different villages, towns, cities, and countries is through a letter. We use postcards and inland letters to send messages. To send a letter to someone who lives outside India, we use an aerogramme or airmail. Urgent letters can be sent through speed post or courier. Parcels and money orders can also be sent by post.\n\nCommunication through Phones\nMobile phones or cellular phones can be carried anywhere. They have made communication very easy. These are the fastest means of personal communication, and one can send his message to others instantly.\n\nCommunication with Masses\nExchanging information on a large scale is called mass communication. To communicate such messages, we need radio, TV, internet, journal, and newspaper as the medium of exchanging information. With the help of mass communication, we are able to know what is happening around the world.\n\nNeed for Communication\nLike food, water, and shelter, communication is also an important requirement for the survival of humans. What we want and what we need, all can be answered through communication only. People who do not speak also express their feelings and needs through their sign language. Similarly, in offices, schools, and at every place of work, we communicate with one another to convey our messages and ideas to others.",
        questions: [
          {
            question: "What is the primary focus of the passage?",
            options: [
              "Birds singing in the morning",
              "Modes of communication",
              "Aditya writing a letter",
            ],
            answer: "Modes of communication",
          },
          {
            question:
              "Which of the following is an example of symbolic communication?",
            options: [
              "Two dogs barking",
              "Aditya writing a letter",
              "Paintings on cave walls",
            ],
            answer: "Paintings on cave walls",
          },
          {
            question:
              "What is the cheapest way to communicate with people in different locations?",
            options: [
              "Mobile phones",
              "Letters through post",
              "Speed post or courier",
            ],
            answer: "Letters through post",
          },
          {
            question:
              "Which is considered the fastest means of personal communication?",
            options: ["Radio", "Letters through post", "Mobile phones"],
            answer: "Mobile phones",
          },
          {
            question: "What is mass communication?",
            options: [
              "Communicating with pets",
              "Exchanging information on a large scale",
              "Sending letters through airmail",
            ],
            answer: "Exchanging information on a large scale",
          },
          {
            question: "What is the purpose of using an aerogramme or airmail?",
            options: [
              "To send urgent letters",
              "To communicate with masses",
              "To send letters outside India",
            ],
            answer: "To send letters outside India",
          },
          {
            question:
              "What is the importance of communication for humans according to the passage?",
            options: [
              "It is a luxury",
              "It is necessary for survival",
              "It is only for those who can speak",
            ],
            answer: "It is necessary for survival",
          },
          {
            question:
              "Which form of communication is used by a dancer to convey feelings during a performance?",
            options: ["Signs", "Symbols", "Letters"],
            answer: "Signs",
          },
          {
            question: "What can be sent through speed post or courier?",
            options: ["Money orders", "Parcels", "Letters through post"],
            answer: "Parcels",
          },
          {
            question: "What is the focus of mass communication in the passage?",
            options: [
              "Personal messages",
              "Exchanging information on a large scale",
              "Communicating with animals",
            ],
            answer: "Exchanging information on a large scale",
          },
        ],
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
            "Birds are singing beautifully in the _______. Two dogs are barking at each other.",
          optionA: "afternoon",
          optionB: "evening",
          optionC: "morning",
          correctAnswer: "morning",
        },
        {
          question:
            "Aditya is writing a letter to _______ sister. Kavya is talking over the phone.",
          optionA: "her",
          optionB: "his",
          optionC: "their",
          correctAnswer: "her",
        },
        {
          question:
            "Communication is the transferring of messages, ideas, and thoughts from one person to _______.",
          optionA: "animal",
          optionB: "another",
          optionC: "object",
          correctAnswer: "another",
        },
        {
          question:
            "Earlier when people were not aware of the modes of communication, they communicated by using different _______ and signals.",
          optionA: "sounds",
          optionB: "signs",
          optionC: "symbols",
          correctAnswer: "signs",
        },
        {
          question:
            "Symbols are a representation of an object, function, or _______.",
          optionA: "emotion",
          optionB: "person",
          optionC: "process",
          correctAnswer: "process",
        },
        {
          question:
            "The cheapest way to communicate with people who live in different villages, towns, cities, and countries is through a _______.",
          optionA: "phone call",
          optionB: "letter",
          optionC: "radio broadcast",
          correctAnswer: "letter",
        },
        {
          question:
            "Mobile phones or cellular phones can be carried anywhere, making communication very _______.",
          optionA: "difficult",
          optionB: "easy",
          optionC: "expensive",
          correctAnswer: "easy",
        },
        {
          question:
            "Exchanging information on a large scale is called _______ communication.",
          optionA: "personal",
          optionB: "mass",
          optionC: "direct",
          correctAnswer: "mass",
        },
        {
          question:
            "Like food, water, and shelter, communication is also an important requirement for the _______ of humans.",
          optionA: "entertainment",
          optionB: "survival",
          optionC: "happiness",
          correctAnswer: "survival",
        },
        {
          question:
            "People who do not speak also express their feelings and needs through their _______ language.",
          optionA: "spoken",
          optionB: "written",
          optionC: "sign",
          correctAnswer: "sign",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Birds sing beautifully in the morning.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Aditya is writing a letter to his sister.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Symbols are a representation of an object, function, or emotion.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Mobile phones are the slowest means of personal communication.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Mass communication involves exchanging information on a small scale.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Communication is not considered an important requirement for the survival of humans.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "People who do not speak can express their feelings through sign language.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Symbols can only represent objects, not functions or processes.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Letters through post are the most expensive way to communicate with people in different locations.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Communication with masses involves the use of personal letters.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
   };
}

export var activityData;
