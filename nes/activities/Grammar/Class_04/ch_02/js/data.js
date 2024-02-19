export const chapter = "Chapter - 2: Subject and Predicate";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What are the two main parts of a sentence mentioned in the text?",
          optionA: "Object and Verb",
          optionB: "Subject and Predicate",
          optionC: "Noun and Adjective",
          correctAnswer: "B",
        },
        {
          question: "How is a subject defined in a sentence?",
          optionA: "It is the action of the sentence.",
          optionB: "It is about whom or what something is said.",
          optionC: "It is always a place or thing.",
          correctAnswer: "B",
        },
        {
          question:
            "Which of the following is NOT mentioned as a possible subject in the text?",
          optionA: "The peacock",
          optionB: "Some old men and women",
          optionC: "Running in the field",
          correctAnswer: "C",
        },
        {
          question: "What is a predicate in a sentence?",
          optionA: "The main idea of the sentence.",
          optionB: "The subject of the sentence.",
          optionC: "The part that describes the subject.",
          correctAnswer: "C",
        },
        {
          question:
            "What does the sentence 'The dog barking at the passers-by' illustrate?",
          optionA: "A subject with multiple words",
          optionB: "A complex sentence structure",
          optionC: "The importance of punctuation",
          correctAnswer: "A",
        },
        {
          question:
            "Which option correctly pairs a subject with its corresponding predicate?",
          optionA: "Children - are talking about science.",
          optionB: "My elder brother - has bought a chocolate.",
          optionC: "The girl wearing a pink shirt - were reading in the room.",
          correctAnswer: "B",
        },
        {
          question: "What is the role of the predicate in a sentence?",
          optionA: "It identifies the subject.",
          optionB: "It describes the subject.",
          optionC: "It is optional in a sentence.",
          correctAnswer: "B",
        },
        {
          question: "What can a subject be according to the text?",
          optionA: "Only a person or animal",
          optionB: "Only a place or thing",
          optionC: "Person, animal, place, or thing",
          correctAnswer: "C",
        },
        {
          question: "Which sentence structure does the text emphasize?",
          optionA: "Simple sentence",
          optionB: "Compound sentence",
          optionC: "Complex sentence",
          correctAnswer: "A",
        },
        {
          question:
            "In the sentence 'The peacock danced in the forest,' what is the subject?",
          optionA: "The peacock",
          optionB: "Danced",
          optionC: "In the forest",
          correctAnswer: "A",
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
            "The __________ of a sentence is about whom or what something is said.",
          optionA: "Verb",
          optionB: "Predicate",
          optionC: "Subject",
          correctAnswer: "C",
        },
        {
          question:
            "The __________ is the part of a sentence that describes the subject.",
          optionA: "Noun",
          optionB: "Predicate",
          optionC: "Adjective",
          correctAnswer: "B",
        },
        {
          question: "The peacock __________ in the forest.",
          optionA: "is a doctor.",
          optionB: "danced",
          optionC: "were reading in the room.",
          correctAnswer: "B",
        },
        {
          question:
            "The Subject and Predicate of a sentence can be made of a __________.",
          optionA: "single word",
          optionB: "number of words",
          optionC: "punctuation",
          correctAnswer: "B",
        },
        {
          question:
            "The girl wearing a pink shirt is the __________ of the sentence.",
          optionA: "Predicate",
          optionB: "Subject",
          optionC: "Object",
          correctAnswer: "B",
        },
        {
          question: "Some old men and women __________ about science.",
          optionA: "has bought a chocolate.",
          optionB: "are talking",
          optionC: "were reading in the room.",
          correctAnswer: "B",
        },
        {
          question:
            "The dog barking at the passers-by is the __________ of the sentence.",
          optionA: "Subject",
          optionB: "Predicate",
          optionC: "Verb",
          correctAnswer: "A",
        },
        {
          question: "My elder brother __________ a doctor.",
          optionA: "is",
          optionB: "has bought",
          optionC: "were reading",
          correctAnswer: "A",
        },
        {
          question: "Children were reading in __________.",
          optionA: "the forest",
          optionB: "the room",
          optionC: "the park",
          correctAnswer: "B",
        },
        {
          question:
            "The main parts of a sentence are __________ and __________.",
          optionA: "Verb, Noun",
          optionB: "Predicate, Object",
          optionC: "Subject, Predicate",
          correctAnswer: "C",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "The peacock danced in the forest.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "My elder brother is a doctor.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The girl wearing a pink shirt were reading in the room.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Some old men and women are talking about science.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Children were reading in the forest.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The dog barking at the passers-by is the subject of the sentence.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The peacock has bought a chocolate.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "My elder brother were reading in the room.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The main parts of a sentence are Verb and Noun.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Microcomputers, also known as personal computers, fall under the Fourth generation of computers.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
