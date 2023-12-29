export const chapter = "Chapter -19: I Wonder Why  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "Why is the grass green?",
          optionA: "Because of the sun",
          optionB: "Unknown",
          optionC: "Because of the wind",
          correctAnswer: "Because of the sun",
        },
        {
          question: "Why is the wind never seen?",
          optionA: "It's invisible",
          optionB: "Because it's shy",
          optionC: "It can only be felt",
          correctAnswer: "It's invisible",
        },
        {
          question: "Who taught the birds to build a nest?",
          optionA: "Other birds",
          optionB: "Nature",
          optionC: "Unknown",
          correctAnswer: "Nature",
        },
        {
          question: "What told the trees to take some rest?",
          optionA: "The moon",
          optionB: "The wind",
          optionC: "Unknown",
          correctAnswer: "Unknown",
        },
        {
          question:
            "When the moon is not quite round, where can the missing bit be found?",
          optionA: "Nowhere",
          optionB: "Behind the clouds",
          optionC: "Unknown",
          correctAnswer: "Nowhere",
        },
        {
          question: "Who lights the stars when they blow out?",
          optionA: "Other stars",
          optionB: "The moon",
          optionC: "Unknown",
          correctAnswer: "Unknown",
        },
        {
          question: "Who paints the rainbow in the sky?",
          optionA: "Rain",
          optionB: "The sun",
          optionC: "Unknown",
          correctAnswer: "Rain",
        },
        {
          question: "What hangs the fluffy clouds so high?",
          optionA: "The wind",
          optionB: "The trees",
          optionC: "Unknown",
          correctAnswer: "The wind",
        },
        {
          question: "Why won't dad tell the speaker about certain things?",
          optionA: "He doesn't know",
          optionB: "It's a secret",
          optionC: "Unknown",
          correctAnswer: "It's a secret",
        },
        {
          question: "Why is it that dad won't tell the speaker if he knows?",
          optionA: "It's a mystery",
          optionB: "He likes surprises",
          optionC: "Unknown",
          correctAnswer: "He likes surprises",
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
          question: "Why is the grass _____?",
          optionA: "Yellow",
          optionB: "Green",
          optionC: "Brown",
          correctAnswer: "Green",
        },
        {
          question: "Who taught the birds to build a _____?",
          optionA: "Bridge",
          optionB: "Nest",
          optionC: "Tower",
          correctAnswer: "Nest",
        },
        {
          question:
            "When the moon is not quite _____, where can the missing bit be found?",
          optionA: "Bright",
          optionB: "Round",
          optionC: "Full",
          correctAnswer: "Round",
        },
        {
          question: "Who lights the stars when they _____ out?",
          optionA: "Fade",
          optionB: "Blow",
          optionC: "Shine",
          correctAnswer: "Blow",
        },
        {
          question: "Who paints the rainbow in the _____?",
          optionA: "Desert",
          optionB: "Ocean",
          optionC: "Sky",
          correctAnswer: "Sky",
        },
        {
          question:
            "Why is it now, do you suppose, that dad won't _____ me if he knows?",
          optionA: "Ask",
          optionB: "Tell",
          optionC: "Share",
          correctAnswer: "Tell",
        },
        {
          question: "And told the trees to take some _____?",
          optionA: "Action",
          optionB: "Rest",
          optionC: "Flight",
          correctAnswer: "Rest",
        },
        {
          question: "What is it that dad won't tell me _____?",
          optionA: "Clearly",
          optionB: "If",
          optionC: "Ever",
          correctAnswer: "If",
        },
        {
          question: "Where can the missing bit of the moon be _____?",
          optionA: "Found",
          optionB: "Hidden",
          optionC: "Discovered",
          correctAnswer: "Found",
        },
        {
          question: "Why won't dad tell me about certain things _____?",
          optionA: "Anymore",
          optionB: "If he knows",
          optionC: "Quickly",
          correctAnswer: "If he knows",
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
          question: "Grass is always yellow.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The wind is visible to the naked eye.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Birds are naturally skilled architects.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Trees never need to take a break.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The missing bit of the moon can always be found.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Stars can be relit when they go out.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Rainbows are painted by the sun.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Clouds are hung low in the sky.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Dad always shares the mysteries he knows.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The wind is responsible for the green color of grass.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
