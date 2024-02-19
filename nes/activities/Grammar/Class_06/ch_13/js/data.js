export const chapter = "Chapter - 13: Phrases and Clauses";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What are the three types of phrases mentioned in the text?",
          optionA: "Verb Phrases",
          optionB: "Noun Phrases",
          optionC: "Prepositional Phrases",
          correctAnswer: "Noun Phrases",
        },
        {
          question:
            "Which of the following is an example of an Adjective Phrase?",
          optionA: "She hopes to secure the first division.",
          optionB: "The soldiers fought with courage.",
          optionC: "The old man with a stick is my granddad.",
          correctAnswer: "The old man with a stick is my granddad.",
        },
        {
          question: "What is a Principal Clause according to the text?",
          optionA: "A clause that is dependent on another clause.",
          optionB:
            "The chief clause in a sentence that is not dependent on any other clause.",
          optionC: "A subordinate clause that stands alone.",
          correctAnswer:
            "The chief clause in a sentence that is not dependent on any other clause.",
        },
        {
          question:
            "In the sentence 'Seema is a singer and Suman is a dancer,' what type of clauses are 'Seema is a singer' and 'Suman is a dancer'?",
          optionA: "Principal Clauses",
          optionB: "Subordinate Clauses",
          optionC: "Coordinate Clauses",
          correctAnswer: "Coordinate Clauses",
        },
        {
          question:
            "Which type of clause is dependent on another clause for its meaning?",
          optionA: "Principal Clause",
          optionB: "Subordinate Clause",
          optionC: "Coordinate Clause",
          correctAnswer: "Subordinate Clause",
        },
        {
          question: "What is the function of an Adverb Phrase?",
          optionA: "Modifies a noun",
          optionB: "Modifies a verb, adjective, or adverb",
          optionC: "Acts as the subject of a sentence",
          correctAnswer: "Modifies a verb, adjective, or adverb",
        },
        {
          question:
            "Which of the following sentences contains a Subordinate Clause?",
          optionA: "The soldiers fought with courage.",
          optionB: "This is the hospital where Bhanu was born.",
          optionC: "I like drawing but my sister loves dancing.",
          correctAnswer: "This is the hospital where Bhanu was born.",
        },
        {
          question: "What is the primary function of Noun Phrases?",
          optionA: "Modify verbs",
          optionB: "Function as nouns",
          optionC: "Describe adjectives",
          correctAnswer: "Function as nouns",
        },
        {
          question: "Which phrase functions like an Adjective in a sentence?",
          optionA: "Adverb Phrase",
          optionB: "Prepositional Phrase",
          optionC: "Adjective Phrase",
          correctAnswer: "Adjective Phrase",
        },
        {
          question:
            "In the sentence 'I bought what I wanted most,' what type of clause is 'what I wanted most'?",
          optionA: "Principal Clause",
          optionB: "Subordinate Clause",
          optionC: "Coordinate Clause",
          correctAnswer: "Subordinate Clause",
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
            "1. Noun Phrases: A group of words in a sentence that functions like a __________ is called a Noun Phrase.",
          options: ["a) Verb", "b) Noun", "c) Adjective"],
          correctAnswer: "b) Noun",
        },
        {
          question:
            "2. Adjective Phrases: A group of words in a sentence that functions like an Adjective is called an Adjective __________.",
          options: ["a) Clause", "b) Phrase", "c) Noun"],
          correctAnswer: "b) Phrase",
        },
        {
          question:
            "3. Principal Clauses: A Principal Clause is the chief clause in a sentence and is not dependent on any other __________ for its meaning.",
          options: ["a) Verb", "b) Clause", "c) Phrase"],
          correctAnswer: "b) Clause",
        },
        {
          question:
            "4. Coordinate Clauses: A Coordinate Clause is a clause in a sentence which is not the Principal Clause but can express its meaning fully; for example, 'Seema is a singer and Suman is a dancer.' Both these clauses have __________ meanings.",
          options: ["a) Independent", "b) Dependent", "c) Subordinate"],
          correctAnswer: "a) Independent",
        },
        {
          question:
            "5. Subordinate Clauses: A Subordinate Clause is a clause in a sentence that is dependent upon any other clause for its __________.",
          options: ["a) Structure", "b) Meaning", "c) Length"],
          correctAnswer: "b) Meaning",
        },
        {
          question:
            "6. Adverb Phrases: A group of words in a sentence that functions like an Adverb is called an Adverb __________.",
          options: ["a) Noun", "b) Phrase", "c) Adjective"],
          correctAnswer: "b) Phrase",
        },
        {
          question:
            "7. Correlative Conjunctions: In the sentence 'She will either sing on the stage or at the backstage,' the correlative pair is 'either __________.'",
          options: ["a) And", "b) Or", "c) But"],
          correctAnswer: "b) Or",
        },
        {
          question:
            "8. Coordinating Conjunctions: Identify the Coordinating Conjunction in the sentence: 'Kavita was going in but Suman was coming out.'",
          options: ["a) In", "b) But", "c) And"],
          correctAnswer: "b) But",
        },
        {
          question:
            "9. Phrases and Clauses: A Subordinate Clause is a clause in a sentence that is __________ upon any other clause for its meaning.",
          options: ["a) Independent", "b) Dependent", "c) Coordinated"],
          correctAnswer: "b) Dependent",
        },
        {
          question:
            "10. Types of Clauses: Principal Clauses are the chief clauses in a sentence and are not dependent on any other __________ for their meaning.",
          options: ["a) Sentence", "b) Clause", "c) Phrase"],
          correctAnswer: "b) Clause",
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
            "Noun Phrases are groups of words in a sentence that function like verbs.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Adjective Phrases function like adjectives in a sentence.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Principal Clauses are dependent on other clauses for their meaning.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Coordinate Clauses can express their meaning fully and independently.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Subordinate Clauses are not dependent upon any other clause for their meaning.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Adverb Phrases modify nouns in a sentence.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Correlative Conjunctions always occur as single, standalone words.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Coordinating Conjunctions are used to join words or sentences of different classes.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "A Principal Clause is the chief clause in a sentence and is dependent on other clauses.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Phrasal Verbs give a particular meaning to some nouns, verbs, or adjectives when used with certain prepositions.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
