export const chapter = "Chapter - 22: Tag Questions";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the purpose of a Tag Question?",
          optionA: "To make a statement",
          optionB: "To seek agreement or confirmation",
          optionC: "To provide information",
          correctAnswer: "To seek agreement or confirmation",
        },
        {
          question:
            "Which type of tag question is used with a negative statement?",
          optionA: "Negative Tag",
          optionB: "Positive Tag",
          optionC: "Neutral Tag",
          correctAnswer: "Negative Tag",
        },
        {
          question:
            "In the sentence 'You are not ten years old, are you?' the tag question is:",
          optionA: "is it?",
          optionB: "aren't you?",
          optionC: "are you?",
          correctAnswer: "are you?",
        },
        {
          question:
            "What is the purpose of using a Tag Question with a positive statement?",
          optionA: "To state a fact",
          optionB: "To express uncertainty",
          optionC: "To seek confirmation or agreement",
          correctAnswer: "To seek confirmation or agreement",
        },
        {
          question:
            "In the sentence 'The grapes will taste delicious, won't they?' the tag question is:",
          optionA: "will they?",
          optionB: "won't they?",
          optionC: "do they?",
          correctAnswer: "won't they?",
        },
        {
          question:
            "Which type of tag question is used with a positive statement?",
          optionA: "Neutral Tag",
          optionB: "Negative Tag",
          optionC: "Positive Tag",
          correctAnswer: "Negative Tag",
        },
        {
          question: "What does a Tag Question add to a statement?",
          optionA: "Confusion",
          optionB: "Emphasis or confirmation",
          optionC: "Irrelevance",
          correctAnswer: "Emphasis or confirmation",
        },
        {
          question:
            "In the sentence 'There are some guests in the hall, aren't there?' the tag question is:",
          optionA: "isn't there?",
          optionB: "are there?",
          optionC: "aren't there?",
          correctAnswer: "aren't there?",
        },
        {
          question: "When is a Positive Tag used with a negative statement?",
          optionA: "To confuse the listener",
          optionB: "To emphasize the negativity",
          optionC: "To seek agreement or confirmation",
          correctAnswer: "To seek agreement or confirmation",
        },
        {
          question: "What is the purpose of a Tag Question in a sentence?",
          optionA: "To end the sentence",
          optionB: "To express doubt",
          optionC: "To engage the listener and seek agreement or confirmation",
          correctAnswer:
            "To engage the listener and seek agreement or confirmation",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question: "A negative statement takes a ________ Tag; for example:",
          options: ["isn't it", "are you", "__________"],
          correctAnswer: "are you",
        },
        {
          question: "The question was not difficult, __________?",
          options: ["is it", "__________", "was it"],
          correctAnswer: "was it",
        },
        {
          question: "You have not won the match, __________?",
          options: ["__________", "haven't you", "isn't it"],
          correctAnswer: "have it",
        },
        {
          question: "He does not write a letter, __________?",
          options: ["does he", "__________", "don't he"],
          correctAnswer: "does he",
        },
        {
          question: "A positive statement takes a __________ Tag; for example:",
          options: ["did you", "didn't you", "__________"],
          correctAnswer: "didn't you",
        },
        {
          question: "The grapes will taste delicious, __________?",
          options: ["__________", "will they", "isn't it"],
          correctAnswer: "won't they",
        },
        {
          question: "There are some guests in the hall, __________?",
          options: ["are there", "isn't there", "__________"],
          correctAnswer: "are there",
        },
        {
          question: "You can lift this box easily, __________?",
          options: ["__________", "isn't it", "can't you"],
          correctAnswer: "can't you",
        },
        {
          question: "When is a Positive Tag used with a negative statement?",
          options: [
            "to seek agreement or confirmation",
            "__________",
            "as a rhetorical device",
          ],
          correctAnswer: "to seek agreement or confirmation",
        },
        {
          question: "What is the purpose of a Tag Question in a sentence?",
          options: [
            "to engage the listener and seek agreement or confirmation",
            "__________",
            "as a grammatical requirement",
          ],
          correctAnswer:
            "to engage the listener and seek agreement or confirmation",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "A negative statement takes a Positive Tag.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The question was not difficult, was it?",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "You have not won the match, have you?",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "A positive statement takes a Negative Tag.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "There are some guests in the hall, aren't there?",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "You can lift this box easily, can't you?",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "A Full Stop is used to mark a short pause in a sentence.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "In direct speech, inverted commas are used to enclose the exact words of a speaker.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Each line of a poem begins with a lowercase letter.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The sign of exclamation is used to mark an assertive sentence.",
          optionA: "True",
        optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
