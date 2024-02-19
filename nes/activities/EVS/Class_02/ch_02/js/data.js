export const chapter = "Chapter - 2: Our Wonderful Senses";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What are the main sense organs mentioned in the text?",
          optionA: "Eyes, Ears, Nose, Tongue, Heart",
          optionB: "Eyes, Ears, Nose, Tongue, Skin",
          optionC: "Eyes, Nose, Stomach, Lungs, Brain",
          correctAnswer: "Eyes, Ears, Nose, Tongue, Skin",
        },

        {
          question: "What is the function of the eyes according to the text?",
          optionA: "Hear",
          optionB: "See",
          optionC: "Taste",
          correctAnswer: "See",
        },

        {
          question: "Which sense organ helps us to taste?",
          optionA: "Eyes",
          optionB: "Tongue",
          optionC: "Ears",
          correctAnswer: "Tongue",
        },

        {
          question:
            "What should you avoid putting in the ears according to the text?",
          optionA: "Pencil",
          optionB: "Water",
          optionC: "Beauty products",
          correctAnswer: "Pencil",
        },

        {
          question:
            "How should you not wash the eyes, as mentioned in the text?",
          optionA: "Cold water",
          optionB: "Hot water",
          optionC: "Lukewarm water",
          correctAnswer: "Hot water",
        },

        {
          question:
            "What should you avoid putting in the nose according to the text?",
          optionA: "Pencil",
          optionB: "Pointed thing",
          optionC: "Food",
          correctAnswer: "Pointed thing",
        },

        {
          question:
            "According to the text, what should you not put in the mouth?",
          optionA: "Cold food",
          optionB: "Hot food",
          optionC: "Sweet food",
          correctAnswer: "Hot food",
        },

        {
          question: "Which body part helps in running, according to the text?",
          optionA: "Legs",
          optionB: "Hands",
          optionC: "Stomach",
          correctAnswer: "Legs",
        },

        {
          question: "What body part helps in writing?",
          optionA: "Legs",
          optionB: "Hands",
          optionC: "Lungs",
          correctAnswer: "Hands",
        },

        {
          question:
            "What is responsible for pumping blood in our body, according to the text?",
          optionA: "Lungs",
          optionB: "Heart",
          optionC: "Brain",
          correctAnswer: "Heart",
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
            "Our body is made up of different parts, and the ones that help us sense different things are called __________.",
          optionA: "Body Parts",
          optionB: "Sense Organs",
          optionC: "Internal Organs",
          correctAnswer: "Sense Organs",
        },

        {
          question: "Eyes help us to __________.",
          optionA: "Hear",
          optionB: "Smell",
          optionC: "See",
          correctAnswer: "See",
        },

        {
          question: "Skin helps us to __________ and feel.",
          optionA: "Taste",
          optionB: "Touch",
          optionC: "Hear",
          correctAnswer: "Touch",
        },

        {
          question:
            "It is important to take good care of our sense organs and avoid putting __________ in the ears.",
          optionA: "Water",
          optionB: "Pencil",
          optionC: "Food",
          correctAnswer: "Pencil",
        },

        {
          question: "Do not wash the eyes with __________ water.",
          optionA: "Cold",
          optionB: "Hot",
          optionC: "Lukewarm",
          correctAnswer: "Hot",
        },

        {
          question:
            "It is advised not to put any pointed thing in the __________.",
          optionA: "Mouth",
          optionB: "Nose",
          optionC: "Eyes",
          correctAnswer: "Nose",
        },

        {
          question: "Do not put __________ in the mouth.",
          optionA: "Cold food",
          optionB: "Hot food",
          optionC: "Sweet food",
          correctAnswer: "Hot food",
        },

        {
          question: "Legs help us in __________.",
          optionA: "Seeing",
          optionB: "Running",
          optionC: "Breathing",
          correctAnswer: "Running",
        },

        {
          question: "Writing is done with the help of __________.",
          optionA: "Legs",
          optionB: "Hands",
          optionC: "Stomach",
          correctAnswer: "Hands",
        },

        {
          question:
            "The __________ is responsible for pumping blood through the heart.",
          optionA: "Lungs",
          optionB: "Heart",
          optionC: "Brain",
          correctAnswer: "Heart",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Eyes help us to hear.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },

        {
          question: "Nose helps us to see.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },

        {
          question: "Tongue helps us to taste.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },

        {
          question:
            "Putting a pencil in the ears is recommended for good ear health.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },

        {
          question: "Washing the eyes with hot water is advisable.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },

        {
          question: "Using too many beauty products on the skin is encouraged.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },

        {
          question: "Legs help us in running.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },

        {
          question: "Writing is done with the help of the stomach.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },

        {
          question: "Breathing is done with the help of the lungs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },

        {
          question: "Thinking is done with the help of the heart.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
   };
}

export var activityData;
