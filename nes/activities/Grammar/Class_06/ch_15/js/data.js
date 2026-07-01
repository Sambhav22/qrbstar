export const chapter = "Chapter - 15: Question Tags";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the purpose of a Question Tag?",
          optionA: "To express disagreement",
          optionB: "To emphasize a statement",
          optionC: "To agree or confirm a statement",
          correctAnswer: "To agree or confirm a statement",
        },
        {
          question:
            "Which of the following is true about forming Question Tags?",
          optionA: "A negative tag is added to a negative statement",
          optionB: "A positive tag is added to a positive statement",
          optionC: "A positive tag is added to a negative statement",
          correctAnswer: "A positive tag is added to a negative statement",
        },
        {
          question:
            "In which type of sentence is 'Will you' used as a Question Tag?",
          optionA: "Exclamatory sentence",
          optionB: "Interrogative sentence",
          optionC: "Imperative sentence",
          correctAnswer: "Imperative sentence",
        },
        {
          question:
            "Which of the following is the correct Question Tag for the statement 'They bring a lot of gifts for us'?",
          optionA: "don't they?",
          optionB: "do they?",
          optionC: "do not they?",
          correctAnswer: "don't they?",
        },
        {
          question:
            "What is the negative Question Tag for the statement 'I am playing well'?",
          optionA: "amn't I?",
          optionB: "aren't I?",
          optionC: "am I not?",
          correctAnswer: "aren't I?",
        },
        {
          question:
            "Which Question Tag is used with the imperative sentence 'Shut the door'?",
          optionA: "will you?",
          optionB: "won't you?",
          optionC: "do you?",
          correctAnswer: "will you?",
        },
        {
          question:
            "What is the positive Question Tag for the statement 'We have not met them yet'?",
          optionA: "have we?",
          optionB: "haven't we?",
          optionC: "do we?",
          correctAnswer: "have we?",
        },
        {
          question:
            "Which Question Tag is used with the statement 'Don't play on the road'?",
          optionA: "will you?",
          optionB: "won't you?",
          optionC: "do you?",
          correctAnswer: "won't you?",
        },
        {
          question:
            "What is the positive Question Tag for the statement 'I am not in agreement with this'?",
          optionA: "amn't I?",
          optionB: "am I?",
          optionC: "aren't I?",
          correctAnswer: "am I?",
        },
        {
          question:
            "What is the negative Question Tag for the statement 'We have finished our work'?",
          optionA: "have we?",
          optionB: "haven't we?",
          optionC: "do we?",
          correctAnswer: "haven't we?",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question:
            "1. The purpose of a Question Tag is to ____________ or confirm the statement.",
          options: ["a) disagree", "b) emphasize", "c) agree"],
          correctAnswer: "c) agree",
        },
        {
          question:
            "2. A negative tag is added to a ____________ statement and a positive tag is added to a ____________ one.",
          options: [
            "a) positive, negative",
            "b) negative, positive",
            "c) neutral, neutral",
          ],
          correctAnswer: "b) negative, positive",
        },
        {
          question:
            "3. 'Will you' is used as a Question Tag with an ____________ sentence.",
          options: ["a) exclamatory", "b) interrogative", "c) imperative"],
          correctAnswer: "c) imperative",
        },
        {
          question:
            "4. The negative Question Tag for 'I' is ____________ and the positive Question Tag for 'I' is ____________.",
          options: [
            "a) aren't I, am I",
            "b) amn't I, am I",
            "c) am I, aren't I",
          ],
          correctAnswer: "a) aren't I, am I",
        },
        {
          question:
            "5. In the statement 'Shut the door', the Question Tag used is ____________.",
          options: ["a) will you", "b) won't you", "c) shall we"],
          correctAnswer: "a) will you",
        },
        {
          question:
            "6. The positive Question Tag for 'We have not met them yet' is ____________.",
          options: ["a) have we", "b) haven't we", "c) do we"],
          correctAnswer: "a) have we",
        },
        {
          question:
            "7. The Question Tag used with 'Don't play on the road' is ____________.",
          options: ["a) will you", "b) won't you", "c) shall we"],
          correctAnswer: "b) won't you",
        },
        {
          question:
            "8. The negative Question Tag for 'I am not in agreement with this' is ____________.",
          options: ["a) am I", "b) aren't I", "c) amn't I"],
          correctAnswer: "b) aren't I",
        },
        {
          question:
            "9. The Question Tag for 'They bring a lot of gifts for us' is ____________.",
          options: ["a) do they", "b) don't they", "c) do not they"],
          correctAnswer: "b) don't they",
        },
        {
          question:
            "10. The negative Question Tag for 'We have finished our work' is ____________.",
          options: ["a) have we", "b) haven't we", "c) do we"],
          correctAnswer: "b) haven't we",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question:
            "Question Tag is used more often in speech than in writing.",
          optionA: "True",
          optionB: "False",
          answer: "True",
        },
        {
          question:
            "A negative tag is added to a negative statement and a positive tag is added to a positive one.",
          optionA: "True",
          optionB: "False",
          answer: "False",
        },
        {
          question:
            "Will you is used as a Question Tag with an Imperative Sentence.",
          optionA: "True",
          optionB: "False",
          answer: "True",
        },
        {
          question: "The negative Question Tag for I is amn't I.",
          optionA: "True",
          optionB: "False",
          answer: "False",
        },
        {
          question: "The positive Question Tag for I is aren't I.",
          optionA: "True",
          optionB: "False",
          answer: "False",
        },
        {
          question:
            "The positive Question Tag for 'We have not met them yet' is haven't we.",
          optionA: "True",
          optionB: "False",
          answer: "True",
        },
        {
          question:
            "The negative Question Tag for 'I am not in agreement with this' is am I.",
          optionA: "True",
          optionB: "False",
          answer: "False",
        },
        {
          question:
            "The Question Tag used with 'Don't play on the road' is will you.",
          optionA: "True",
          optionB: "False",
          answer: "False",
        },
        {
          question:
            "The Question Tag for 'They bring a lot of gifts for us' is don't they.",
          optionA: "True",
          optionB: "False",
          answer: "True",
        },
        {
          question:
            "The negative Question Tag for 'We have finished our work' is have we.",
          optionA: "True",
          optionB: "False",
          answer: "True",
        },
      ],
  };
}

export var activityData;
