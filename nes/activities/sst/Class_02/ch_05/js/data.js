export const chapter = "Chapter - 5: My Body";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What are the five sense organs mentioned in the text?",
        optionA: "Eyes, ears, mouth, hands, and legs",
        optionB: "Eyes, nose, ears, tongue, and skin",
        optionC: "Eyes, hair, nose, tongue, and feet",
        correctAnswer: "Eyes, nose, ears, tongue, and skin",
      },
      {
        question:
          "Which body parts are responsible for making movements possible by bending?",
        optionA: "Eyes",
        optionB: "Joints",
        optionC: "Tongue",
        correctAnswer: "Joints",
      },
      {
        question: "What do we use to see with?",
        optionA: "Ears",
        optionB: "Nose",
        optionC: "Eyes",
        correctAnswer: "Eyes",
      },
      {
        question: "What is the purpose of sense organs in our body?",
        optionA: "To help with digestion",
        optionB: "To help us sense different things",
        optionC: "To help us sleep better",
        correctAnswer: "To help us sense different things",
      },
      {
        question:
          "What is the recommended daily activity for keeping the skin clean mentioned in the text?",
        optionA: "Brushing teeth",
        optionB: "Exercising",
        optionC: "Taking a bath",
        correctAnswer: "Taking a bath",
      },
      {
        question:
          "Which of the following is a 'Do' for maintaining a healthy lifestyle according to the text?",
        optionA: "Watching TV or mobile for a longer time",
        optionB: "Keeping yourself dirty",
        optionC: "Taking proper rest",
        correctAnswer: "Taking proper rest",
      },
      {
        question: "How many parts are mentioned as sense organs in the text?",
        optionA: "Three",
        optionB: "Four",
        optionC: "Five",
        correctAnswer: "Five",
      },
      {
        question:
          "What is the purpose of wiggling toes and fingers, writing with hands, and lifting things mentioned in the text?",
        optionA: "To strengthen muscles",
        optionB: "To bend the body parts",
        optionC: "To relax the body",
        correctAnswer: "To bend the body parts",
      },
      {
        question:
          "Which of the following is recommended as a 'Don't' in the text for a healthy lifestyle?",
        optionA: "Eating junk food",
        optionB: "Taking proper rest",
        optionC: "Playing outdoor games",
        correctAnswer: "Eating junk food",
      },
      {
        question:
          "How many activities are mentioned that we can do with our legs in the text?",
        optionA: "One",
        optionB: "Two",
        optionC:
          "Several, including kicking, walking, skipping, running, and jumping",
        correctAnswer:
          "Several, including kicking, walking, skipping, running, and jumping",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "We use our legs to ______, walk, skip, run, jump, etc.",
        optionA: "kick",
        optionB: "swim",
        optionC: "sing",
        correctAnswer: "kick",
      },
      {
        question: "Bending makes ______ possible.",
        optionA: "speaking",
        optionB: "movement",
        optionC: "sleeping",
        correctAnswer: "movement",
      },
      {
        question:
          "Some parts of our body are called sense organs. We have ______ sense organs.",
        optionA: "three",
        optionB: "four",
        optionC: "five",
        correctAnswer: "five",
      },
      {
        question: "We see with our ______.",
        optionA: "ears",
        optionB: "nose",
        optionC: "eyes",
        correctAnswer: "eyes",
      },
      {
        question: "We ______ with our nose.",
        optionA: "taste",
        optionB: "smell",
        optionC: "hear",
        correctAnswer: "smell",
      },
      {
        question: "We feel with our ______.",
        optionA: "ears",
        optionB: "tongue",
        optionC: "skin",
        correctAnswer: "skin",
      },
      {
        question: "We hear with our ______.",
        optionA: "eyes",
        optionB: "nose",
        optionC: "ears",
        correctAnswer: "ears",
      },
      {
        question:
          "To keep your skin clean, it's recommended to take a bath ______.",
        optionA: "hourly",
        optionB: "daily",
        optionC: "weekly",
        correctAnswer: "daily",
      },
      {
        question:
          "It is advised to brush your teeth well and clean the tongue with a tongue cleaner for maintaining ______ oral hygiene.",
        optionA: "poor",
        optionB: "good",
        optionC: "bad",
        correctAnswer: "good",
      },
      {
        question:
          "One of the 'Don'ts' mentioned is not to watch TV or mobile for ______.",
        optionA: "fun",
        optionB: "longer",
        optionC: "shorter",
        correctAnswer: "longer",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "We use our legs to kick, walk, skip, run, jump, etc.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "Bending makes movement possible.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Some parts of our body are called sense organs, and we have five of them.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "We see with our ears.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "We smell with our skin.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "We feel with our tongue.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "We hear with our eyes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "It's recommended to take a bath hourly to keep your skin clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Brushing teeth well and cleaning the tongue with a tongue cleaner is advised for good oral hygiene.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "One of the 'Don'ts' mentioned is not to eat junk food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
