export const chapter = "Chapter - 19: Prepositions";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What do prepositions show in a sentence?",
          optionA: "Verb tense",
          optionB: "Noun relationships",
          optionC: "Adjective placement",
          correctAnswer: "Noun relationships",
        },
        {
          question:
            "In the sentence 'A child is behind a tree,' what is 'behind' classified as?",
          optionA: "Adjective",
          optionB: "Noun",
          optionC: "Preposition",
          correctAnswer: "Preposition",
        },
        {
          question:
            "Choose the correct preposition in the sentence 'A mouse is under the chair.'",
          optionA: "Above",
          optionB: "Under",
          optionC: "Beside",
          correctAnswer: "Under",
        },
        {
          question:
            "What does the sentence 'She went to school by bus' demonstrate?",
          optionA: "Time sequence",
          optionB: "Cause and effect",
          optionC: "Mode of transportation",
          correctAnswer: "Mode of transportation",
        },
        {
          question:
            "Which preposition is used in the sentence 'We shall go to Shimla in January'?",
          optionA: "To",
          optionB: "In",
          optionC: "By",
          correctAnswer: "In",
        },
        {
          question:
            "In the sentence 'A child is on the wall,' what is the preposition indicating?",
          optionA: "Location",
          optionB: "Time",
          optionC: "Purpose",
          correctAnswer: "Location",
        },
        {
          question:
            "Identify the preposition in the sentence 'It was raining heavily in the evening.'",
          optionA: "Rain",
          optionB: "In",
          optionC: "Evening",
          correctAnswer: "In",
        },
        {
          question:
            "Which preposition is used to express a relationship between two things in the sentence 'A child is running after a cat'?",
          optionA: "After",
          optionB: "Running",
          optionC: "Cat",
          correctAnswer: "After",
        },
        {
          question:
            "What does the preposition 'without' indicate in a sentence?",
          optionA: "Time",
          optionB: "Possession",
          optionC: "Absence or lack",
          correctAnswer: "Absence or lack",
        },
        {
          question:
            "Choose the correct preposition in the sentence 'The school starts at 7 o'clock in the morning.'",
          optionA: "At",
          optionB: "In",
          optionC: "On",
          correctAnswer: "At",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question: "A child is ________ the wall.",
          options: ["above", "on", "between"],
          correctAnswer: "on",
        },
        {
          question: "A child is running ________ a cat.",
          options: ["before", "after", "beside"],
          correctAnswer: "after",
        },
        {
          question: "A mouse is ________ the chair.",
          options: ["under", "on", "in"],
          correctAnswer: "under",
        },
        {
          question: "The school starts at 7 o'clock ________ the morning.",
          options: ["in", "on", "at"],
          correctAnswer: "in",
        },
        {
          question: "She went to school ________ bus.",
          options: ["at", "by", "with"],
          correctAnswer: "by",
        },
        {
          question: "It was raining heavily ________ the evening.",
          options: ["in", "on", "at"],
          correctAnswer: "in",
        },
        {
          question: "A mouse is ________ his hole.",
          options: ["under", "in", "on"],
          correctAnswer: "in",
        },
        {
          question: "We do not go to school ________ Sunday.",
          options: ["at", "on", "in"],
          correctAnswer: "on",
        },
        {
          question: "We shall go to Shimla ________ January.",
          options: ["in", "on", "at"],
          correctAnswer: "in",
        },
        {
          question: "She was born ________ 10 October.",
          options: ["on", "in", "at"],
          correctAnswer: "on",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "A child is on the wall.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "A mouse is on the chair.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "A child is running after a cat.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "A child is in his hole.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The school starts at 7 o'clock in the morning.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "She went to school by car.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "We shall go to Shimla in July.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "A mouse is under the chair.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "It was raining heavily in the evening.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "She was born on 10 November.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
