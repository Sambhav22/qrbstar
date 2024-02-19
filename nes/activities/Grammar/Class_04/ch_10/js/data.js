export const chapter = "Chapter -10: Verbs";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What can a verb show?",
          optionA: "Only existence",
          optionB: "Existence, action, or occurrence",
          optionC: "Only action",
          correctAnswer: "Existence, action, or occurrence",
        },
        {
          question: "Identify a sentence where a verb shows existence:",
          optionA: "The boys are in the playground.",
          optionB: "A boy is kicking at a football.",
          optionC: "He has gone to school.",
          correctAnswer: "The boys are in the playground.",
        },
        {
          question:
            "In the sentence 'Lata sang a song,' when did the action take place?",
          optionA: "Present",
          optionB: "Past",
          optionC: "Future",
          correctAnswer: "Past",
        },
        {
          question:
            "Which of the following sentences contains a transitive verb?",
          optionA: "A baby cries.",
          optionB: "The sun shone brightly.",
          optionC: "She knits a sweater.",
          correctAnswer: "She knits a sweater.",
        },
        {
          question: "What is the object in the sentence 'He reads a book'?",
          optionA: "He",
          optionB: "Reads",
          optionC: "A book",
          correctAnswer: "A book",
        },
        {
          question:
            "Which category of verbs does not need an object to complete their sense?",
          optionA: "Intransitive Verbs",
          optionB: "Transitive Verbs",
          optionC: "Both A and B",
          correctAnswer: "Intransitive Verbs",
        },
        {
          question:
            "Identify the intransitive verb in the sentence 'The bell rings.'",
          optionA: "Rings",
          optionB: "Bell",
          optionC: "The",
          correctAnswer: "Rings",
        },
        {
          question:
            "What type of verbs can be both transitive and intransitive?",
          optionA: "Transitive Verbs",
          optionB: "Intransitive Verbs",
          optionC: "Both A and B",
          correctAnswer: "Both A and B",
        },
        {
          question:
            "In the sentence 'She is cooking the food,' what is the object?",
          optionA: "She",
          optionB: "Is cooking",
          optionC: "The food",
          correctAnswer: "The food",
        },
        {
          question: "Choose the sentence with an intransitive verb:",
          optionA: "Priya reads the story well.",
          optionB: "The aeroplane flew.",
          optionC: "A girl is singing a song.",
          correctAnswer: "The aeroplane flew.",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question:
            "A Verb can show some existence: These apples __________ delicious.",
          optionA: "taste",
          optionB: "are",
          optionC: "is",
          correctAnswer: "taste",
        },
        {
          question:
            "A Verb can show some action: A boy is kicking __________ a football.",
          optionA: "in",
          optionB: "at",
          optionC: "on",
          correctAnswer: "at",
        },
        {
          question:
            "A Verb can show some occurrence: He has gone __________ school.",
          optionA: "at",
          optionB: "to",
          optionC: "for",
          correctAnswer: "to",
        },
        {
          question:
            "An action may have taken place in the Past: Lata sang __________.",
          optionA: "a song",
          optionB: "the song",
          optionC: "song",
          correctAnswer: "a song",
        },
        {
          question: "Now she is singing __________.",
          optionA: "the song",
          optionB: "a song",
          optionC: "song",
          correctAnswer: "a song",
        },
        {
          question: "She will sing a song __________.",
          optionA: "tomorrow",
          optionB: "today",
          optionC: "yesterday",
          correctAnswer: "tomorrow",
        },
        {
          question:
            "Some Verbs need an Object to make proper sense: She knits __________.",
          optionA: "a sweater",
          optionB: "the sweater",
          optionC: "sweater",
          correctAnswer: "a sweater",
        },
        {
          question:
            "The Verbs which do not need an Object to complete their sense are called __________.",
          optionA: "Intransitive Verbs",
          optionB: "Transitive Verbs",
          optionC: "Both A and B",
          correctAnswer: "Intransitive Verbs",
        },
        {
          question: "The peon rings __________.",
          optionA: "a bell",
          optionB: "the bell",
          optionC: "bell",
          correctAnswer: "the bell",
        },
        {
          question:
            "Some Verbs can be both Transitive and Intransitive: A girl is singing __________.",
          optionA: "a song",
          optionB: "the song",
          optionC: "song",
          correctAnswer: "a song",
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
            "A smart house controls attributes like lighting, climate change sensors, and entertainment system.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Smart cameras in a smart house use WiFi to send notifications whenever motion is detected or the doorbell is pressed.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Light control systems in smart houses are primarily designed to increase energy consumption.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Smart TVs, also known as Connected TVs, lack integrated Internet and web features.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Smart speakers are devices that provide peer-to-peer interaction and hands-free activation using integrated virtual voice assistance.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The primary benefit of a light control system in a smart house is reducing energy consumption.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Smart gadgets work based on the features of artificial intelligence to make a house 'smart'.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Smart cameras in a smart house can process images but cannot send notifications to users' phones.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A video doorbell in a smart house is not a web-connected system.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Smart speakers utilize only wired connections, such as USB, for playback and control.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
