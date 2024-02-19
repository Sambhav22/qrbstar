export const chapter = "Chapter - 6: KNOWING YOUR BODY ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the main function of hands in our body?",
          optionA: "To see",
          optionB: "To hear",
          optionC: "To catch and hold things",
          correctAnswer: "To catch and hold things",
        },
        {
          question: "Which sense organ helps us to walk, run, jump, and kick?",
          optionA: "Eyes",
          optionB: "Legs",
          optionC: "Ears",
          correctAnswer: "Legs",
        },
        {
          question: "What is the function of eyes in our body?",
          optionA: "To smell",
          optionB: "To hear",
          optionC: "To see",
          correctAnswer: "To see",
        },
        {
          question: "How do ears contribute to our sensory experience?",
          optionA: "To taste",
          optionB: "To hear",
          optionC: "To catch and hold things",
          correctAnswer: "To hear",
        },
        {
          question:
            "Which part of the body helps us to taste different flavors?",
          optionA: "Eyes",
          optionB: "Nose",
          optionC: "Tongue",
          correctAnswer: "Tongue",
        },
        {
          question: "What is the main function of the skin in our body?",
          optionA: "To hear",
          optionB: "To see",
          optionC: "To feel",
          correctAnswer: "To feel",
        },
        {
          question: "How many sense organs do we have according to the text?",
          optionA: "Three",
          optionB: "Four",
          optionC: "Five",
          correctAnswer: "Five",
        },
        {
          question: "Which sense organ helps us to smell different scents?",
          optionA: "Eyes",
          optionB: "Ears",
          optionC: "Nose",
          correctAnswer: "Nose",
        },
        {
          question: "What is the primary function of legs in our body?",
          optionA: "To taste",
          optionB: "To walk, run, jump, and kick",
          optionC: "To catch and hold things",
          correctAnswer: "To walk, run, jump, and kick",
        },
        {
          question: "What role do sense organs play in our body?",
          optionA: "To confuse",
          optionB: "To sense our surroundings in different ways",
          optionC: "To hide",
          correctAnswer: "To sense our surroundings in different ways",
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
          question: "Our hands help us to catch and hold ___________.",
          optionA: "Colors",
          optionB: "Things",
          optionC: "Sounds",
          correctAnswer: "Things",
        },
        {
          question:
            "Sense organs are those parts of the body that help us to sense our surroundings in different ___________.",
          optionA: "Directions",
          optionB: "Ways",
          optionC: "Shapes",
          correctAnswer: "Ways",
        },
        {
          question: "Eyes help us to ___________.",
          optionA: "Taste",
          optionB: "See",
          optionC: "Hear",
          correctAnswer: "See",
        },
        {
          question: "Nose helps us to ___________.",
          optionA: "Speak",
          optionB: "Smell",
          optionC: "Hear",
          correctAnswer: "Smell",
        },
        {
          question: "Tongue helps us to ___________.",
          optionA: "See",
          optionB: "Taste",
          optionC: "Smell",
          correctAnswer: "Taste",
        },
        {
          question: "Skin helps us to ___________.",
          optionA: "Hear",
          optionB: "See",
          optionC: "Feel",
          correctAnswer: "Feel",
        },
        {
          question: "We have ___________ sense organs.",
          optionA: "Three",
          optionB: "Four",
          optionC: "Five",
          correctAnswer: "Five",
        },
        {
          question: "Ears help us to ___________.",
          optionA: "Taste",
          optionB: "Hear",
          optionC: "See",
          correctAnswer: "Hear",
        },
        {
          question: "Legs help us to walk, run, jump, and ___________.",
          optionA: "Swim",
          optionB: "Fly",
          optionC: "Kick",
          correctAnswer: "Kick",
        },
        {
          question:
            "Sense organs help us to sense our ___________ in different ways.",
          optionA: "Thoughts",
          optionB: "Surroundings",
          optionC: "Dreams",
          correctAnswer: "Surroundings",
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
          question: "Our hands help us to taste different flavors.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Eyes help us to hear sounds.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Nose helps us to see things.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Tongue helps us to feel textures.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Skin helps us to sense our surroundings.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "We have six sense organs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Ears help us to taste different flavors.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Legs help us to walk, run, jump, and kick.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Sense organs help us to confuse our surroundings.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The primary function of eyes is to hear sounds.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
