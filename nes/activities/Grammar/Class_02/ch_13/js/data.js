export const chapter = "Chapter - 13: Affirmative : Sentences ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What auxiliary verb is used with singular persons or things, excluding 'I' and 'you,' in affirmative sentences?",
          optionA: "am",
          optionB: "is",
          optionC: "are",
          correctAnswer: "is",
        },
        {
          question:
            "In affirmative sentences, which auxiliary verb is used with 'I'?",
          optionA: "is",
          optionB: "are",
          optionC: "am",
          correctAnswer: "am",
        },
        {
          question:
            "Identify the correct verb in the sentence: 'They are in the playground.'",
          optionA: "am",
          optionB: "is",
          optionC: "are",
          correctAnswer: "are",
        },
        {
          question:
            "In past tense, what auxiliary verb is used with all subjects, excluding 'you'?",
          optionA: "has",
          optionB: "were",
          optionC: "was",
          correctAnswer: "was",
        },
        {
          question:
            "Choose the correct verb in the sentence: 'I was a player.'",
          optionA: "is",
          optionB: "am",
          optionC: "was",
          correctAnswer: "was",
        },
        {
          question:
            "Which verb is correct in the sentence: 'You have washed the car.'",
          optionA: "have",
          optionB: "is",
          optionC: "had",
          correctAnswer: "have",
        },
        {
          question:
            "Identify the correct verb in the sentence: 'Her dress was on the hanger.'",
          optionA: "were",
          optionB: "was",
          optionC: "are",
          correctAnswer: "was",
        },
        {
          question:
            "What auxiliary verb is used with all plurals in the present tense?",
          optionA: "am",
          optionB: "has",
          optionC: "have",
          correctAnswer: "have",
        },
        {
          question: "Choose the correct verb: 'Chandra was/were a policeman.'",
          optionA: "was",
          optionB: "were",
          optionC: "is",
          correctAnswer: "was",
        },
        {
          question:
            "In affirmative sentences, which auxiliary verb is used with all plurals?",
          optionA: "are",
          optionB: "is",
          optionC: "am",
          correctAnswer: "are",
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
            "What auxiliary verb is used with singular persons or things, excluding 'I' and 'you,' in affirmative sentences?",
          options: ["am", "is", "are"],
          correctAnswer: "is",
        },
        {
          question:
            "In affirmative sentences, which auxiliary verb is used with 'I'?",
          options: ["is", "are", "am"],
          correctAnswer: "am",
        },
        {
          question:
            "Identify the correct verb in the sentence: 'They are in the playground.'",
          options: ["am", "is", "are"],
          correctAnswer: "are",
        },
        {
          question:
            "In past tense, what auxiliary verb is used with all subjects, excluding 'you'?",
          options: ["has", "were", "was"],
          correctAnswer: "was",
        },
        {
          question:
            "Choose the correct verb in the sentence: 'I was a player.'",
          options: ["is", "am", "was"],
          correctAnswer: "was",
        },
        {
          question:
            "Which verb is correct in the sentence: 'You have washed the car.'",
          options: ["have", "is", "had"],
          correctAnswer: "have",
        },
        {
          question:
            "Identify the correct verb in the sentence: 'Her dress was on the hanger.'",
          options: ["were", "was", "are"],
          correctAnswer: "was",
        },
        {
          question:
            "What auxiliary verb is used with all plurals in the present tense?",
          options: ["am", "has", "have"],
          correctAnswer: "have",
        },
        {
          question: "Choose the correct verb: 'Chandra was/were a policeman.'",
          options: ["was", "were", "is"],
          correctAnswer: "was",
        },
        {
          question:
            "In affirmative sentences, which auxiliary verb is used with all plurals?",
          options: ["are", "is", "am"],
          correctAnswer: "are",
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
          question: "Affirmative sentences affirm something.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "We use 'is' with Singular persons or things but not with 'I' and 'you'.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "We use 'are' with you and all Plurals.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In the sentence 'She is angry.', 'is' is a past tense verb.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "We use 'was' with all Singular persons or things but not with 'you'.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In the sentence 'I was a player.', 'was' indicates an action in the past.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "We use 'have' with all Plurals in the Present Tense.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In the sentence 'She has three dolls.', 'has' is used with 'you'.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "We use 'had' with all subjects in the Past Tense.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "In the sentence 'We had met many friends.', 'had' is used with 'I'.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
