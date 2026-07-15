export const chapter = "Chapter - 13: Phrases and Clauses";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "Why did he enter the room in the first sentence?",
          optionA: "A) To sleep",
          optionB: "B) To read a book",
          optionC: "C) To have dinner",
          correctAnswer: "A) To sleep",
        },
        {
          question:
            "What type of phrase is 'to go to bed' in the first sentence?",
          optionA: "A) Adverb Phrase",
          optionB: "B) Noun Phrase",
          optionC: "C) Verb Phrase",
          correctAnswer: "C) Verb Phrase",
        },
        {
          question:
            "In the second sentence, what type of clause is 'that he might go to bed'?",
          optionA: "A) Principal Clause",
          optionB: "B) Subordinate Clause",
          optionC: "C) Coordinate Clause",
          correctAnswer: "B) Subordinate Clause",
        },
        {
          question: "Which group contains phrases?",
          optionA: "A) Group I",
          optionB: "B) Group II",
          optionC: "C) Both Group I and II",
          correctAnswer: "C) Both Group I and II",
        },
        {
          question:
            "What is a group of words in a sentence that functions like a Noun called?",
          optionA: "A) Adverb Phrase",
          optionB: "B) Noun Phrase",
          optionC: "C) Adjective Phrase",
          correctAnswer: "B) Noun Phrase",
        },
        {
          question:
            "Which type of phrase contains different forms of a verb and functions like a single verb?",
          optionA: "A) Noun Phrase",
          optionB: "B) Adjective Phrase",
          optionC: "C) Verb Phrase",
          correctAnswer: "C) Verb Phrase",
        },
        {
          question:
            "What is a group of words in a sentence that functions like an Adverb called?",
          optionA: "A) Adverb Phrase",
          optionB: "B) Adjective Phrase",
          optionC: "C) Noun Phrase",
          correctAnswer: "A) Adverb Phrase",
        },
        {
          question:
            "In the sentence 'We stopped at the roadside and looked at the pedestrians,' what are the two clauses?",
          optionA: "A) Principal and Subordinate Clauses",
          optionB: "B) Coordinate Clauses",
          optionC: "C) Subordinate Clauses",
          correctAnswer: "B) Coordinate Clauses",
        },
        {
          question: "What type of clause is a Subordinate Clause?",
          optionA: "A) Principal Clause",
          optionB: "B) Coordinate Clause",
          optionC: "C) Subordinate Clause",
          correctAnswer: "C) Subordinate Clause",
        },
        {
          question:
            "In a Conditional Clause, what does a hypothetical condition depend on?",
          optionA: "A) The fulfillment of a proposition",
          optionB: "B) The fulfillment of a real condition",
          optionC: "C) The fulfillment of an open condition",
          correctAnswer: "A) The fulfillment of a proposition",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question: "He entered the room to ______________.",
          optionA: "A) read a book",
          optionB: "B) go to bed",
          optionC: "C) have dinner",
          correctAnswer: "B) go to bed",
        },
        {
          question:
            "In the second sentence, the words 'that he might go to bed' form a ______________.",
          optionA: "A) Phrase",
          optionB: "B) Clause",
          optionC: "C) Verb",
          correctAnswer: "B) Clause",
        },
        {
          question:
            "Group I sentences contain phrases, and in Group II, the words are structured as ______________.",
          optionA: "A) Clauses",
          optionB: "B) Phrases",
          optionC: "C) Sentences",
          correctAnswer: "A) Clauses",
        },
        {
          question: "A Noun Phrase may have a ______________ as its main word.",
          optionA: "A) Pronoun",
          optionB: "B) Verb",
          optionC: "C) Adjective",
          correctAnswer: "A) Pronoun",
        },
        {
          question: "An Adjective Phrase functions like an ______________.",
          optionA: "A) Noun",
          optionB: "B) Adjective",
          optionC: "C) Verb",
          correctAnswer: "B) Adjective",
        },
        {
          question: "Verb Phrases contain different forms of ______________.",
          optionA: "A) Noun",
          optionB: "B) Adjective",
          optionC: "C) Verb",
          correctAnswer: "C) Verb",
        },
        {
          question: "Adverb Phrases function like an ______________.",
          optionA: "A) Noun",
          optionB: "B) Adjective",
          optionC: "C) Adverb",
          correctAnswer: "C) Adverb",
        },
        {
          question:
            "In the sentence 'We stopped at the roadside and looked at the pedestrians,' the word 'and' joins ______________.",
          optionA: "A) Phrases",
          optionB: "B) Clauses",
          optionC: "C) Sentences",
          correctAnswer: "B) Clauses",
        },
        {
          question:
            "Subordinate Clauses are dependent upon ______________ for their meaning.",
          optionA: "A) Pronouns",
          optionB: "B) Clauses",
          optionC: "C) Nouns",
          correctAnswer: "B) Clauses",
        },
        {
          question:
            "In a Conditional Clause, the fulfillment of a hypothetical condition depends on the fulfillment of ______________.",
          optionA: "A) a real condition",
          optionB: "B) a proposition",
          optionC: "C) a sentence",
          correctAnswer: "B) a proposition",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3)
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "He entered the room to go to bed.",
          optionA: "A) True",
          optionB: "B) False",
          correctAnswer: "A) True",
        },
        {
          question: "The two sentences carry different meanings.",
          optionA: "A) True",
          optionB: "B) False",
          correctAnswer: "B) False",
        },
        {
          question: "In the first sentence, 'to go to bed' is a Phrase.",
          optionA: "A) True",
          optionB: "B) False",
          correctAnswer: "A) True",
        },
        {
          question:
            "In the second sentence, 'that he might go to bed' is a Clause.",
          optionA: "A) True",
          optionB: "B) False",
          correctAnswer: "A) True",
        },
        {
          question: "All sentences in Group I contain phrases.",
          optionA: "A) True",
          optionB: "B) False",
          correctAnswer: "B) False",
        },
        {
          question: "Noun Phrases may only have a Noun as their main word.",
          optionA: "A) True",
          optionB: "B) False",
          correctAnswer: "B) False",
        },
        {
          question: "Adjective Phrases function like a Verb.",
          optionA: "A) True",
          optionB: "B) False",
          correctAnswer: "B) False",
        },
        {
          question: "Verb Phrases contain different forms of Adjectives.",
          optionA: "A) True",
          optionB: "B) False",
          correctAnswer: "B) False",
        },
        {
          question: "Coordinate Clauses are dependent on Principal Clauses.",
          optionA: "A) True",
          optionB: "B) False",
          correctAnswer: "B) False",
        },
        {
          question: "Hypothetical Conditional Sentences always use Past Tense.",
          optionA: "A) True",
          optionB: "B) False",
          correctAnswer: "A) True",
        },
      ],
  };

export var activityData;
