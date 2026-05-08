export const chapter = "Chapter - 3: Subject and Predicate";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What are the two main parts of a sentence?",
            options: {
              A: "Verb and Object",
              B: "Subject and Predicate",
              C: "Noun and Adjective",
            },
            answer: "B",
          },
          {
            question:
              "Which part of a sentence describes what is said about the subject?",
            options: {
              A: "Verb",
              B: "Predicate",
              C: "Object",
            },
            answer: "B",
          },
          {
            question:
              "Which sentence correctly identifies the subject and predicate?",
            options: {
              A: '"The cat chased the mouse."',
              B: '"Running swiftly, the athlete won the race."',
              C: '"In the garden, flowers bloom beautifully."',
            },
            answer: "A",
          },
          {
            question:
              'In the sentence "The girl ate an apple," what is the subject?',
            options: {
              A: "Girl",
              B: "Ate",
              C: "Apple",
            },
            answer: "A",
          },
          {
            question:
              'What is the predicate in the sentence "New Delhi is the capital of India"?',
            options: {
              A: "New Delhi",
              B: "Is the capital of India",
              C: "India",
            },
            answer: "B",
          },
          {
            question:
              "Which sentence has its subject and predicate correctly identified?",
            options: {
              A: '"The book on the table."',
              B: '"She sings beautifully."',
              C: '"In the morning, birds chirp."',
            },
            answer: "B",
          },
          {
            question: "What is the role of the predicate in a sentence?",
            options: {
              A: "It describes the action or state of the subject.",
              B: "It tells about the place of the subject.",
              C: "It describes the subject's appearance.",
            },
            answer: "A",
          },
          {
            question:
              'What is the subject in the sentence "The dog barked at the beggar"?',
            options: {
              A: "Beggar",
              B: "Barked",
              C: "Dog",
            },
            answer: "C",
          },
          {
            question: "Which part of the sentence typically includes the verb?",
            options: {
              A: "Subject",
              B: "Predicate",
              C: "Object",
            },
            answer: "B",
          },
          {
            question: "What does the subject of a sentence refer to?",
            options: {
              A: "It refers to the action.",
              B: "It refers to what is said about the subject.",
              C: "It is the part about which something is said in the sentence.",
            },
            answer: "C",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        questions: [
          {
            question:
              "The _____ of a sentence is that part about which something is said in it.",
            options: {
              A: "Predicate",
              B: "Verb",
              C: "Subject",
            },
            answer: "C",
          },
          {
            question:
              "The _____ in a sentence is that part which is said about the Subject.",
            options: {
              A: "Verb",
              B: "Predicate",
              C: "Object",
            },
            answer: "B",
          },
          {
            question:
              'In the sentence "The girl ate an apple," the _____ is "ate an apple."',
            options: {
              A: "Subject",
              B: "Predicate",
              C: "Verb",
            },
            answer: "B",
          },
          {
            question:
              "The part of a sentence that describes what is said about the subject is the _____.",
            options: {
              A: "Verb",
              B: "Predicate",
              C: "Object",
            },
            answer: "B",
          },
          {
            question:
              'The sentence "New Delhi is the capital of India" has "New Delhi" as the _____.',
            options: {
              A: "Object",
              B: "Predicate",
              C: "Subject",
            },
            answer: "C",
          },
          {
            question:
              'In the sentence "The dog barked at the beggar," the _____ is "barked at the beggar."',
            options: {
              A: "Predicate",
              B: "Subject",
              C: "Verb",
            },
            answer: "A",
          },
          {
            question:
              "The part of a sentence that includes what is said about the subject is the _____.",
            options: {
              A: "Subject",
              B: "Predicate",
              C: "Object",
            },
            answer: "B",
          },
          {
            question:
              "The sentence part that is said about the subject is the _____.",
            options: {
              A: "Verb",
              B: "Predicate",
              C: "Object",
            },
            answer: "B",
          },
          {
            question:
              "The _____ is the part about which something is said in a sentence.",
            options: {
              A: "Verb",
              B: "Predicate",
              C: "Subject",
            },
            answer: "C",
          },
          {
            question:
              "The _____ in a sentence tells us what the subject does or what is done to the subject.",
            options: {
              A: "Predicate",
              B: "Verb",
              C: "Object",
            },
            answer: "B",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        questions: [
          {
            question: "The subject of a sentence is always a person.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question:
              "The predicate in a sentence tells something about the subject.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question: "The verb is part of the predicate in a sentence.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question:
              "In 'The cat chased the mouse,' 'The cat' is the predicate.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question:
              "The subject and predicate are the only parts of a sentence.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question: "The subject is always a noun or a pronoun.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question:
              "The predicate includes the action or state of the subject.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
          {
            question: "The object is a part of the subject in a sentence.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question: "The subject of a sentence cannot be a thing or an idea.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "B",
          },
          {
            question: "The predicate always contains a verb.",
            options: {
              A: "True",
              B: "False",
            },
            answer: "A",
          },
        ],
      },
    ],
  };
}

export var activityData;
