export const chapter = "Chapter - 3: Nouns";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is a Common Noun?",
          optionA: "A specific person's name",
          optionB: "A naming word representing a whole class",
          optionC: "A name given to a particular place",
          correctAnswer: "B) A naming word representing a whole class",
        },
        {
          question: "How is a Proper Noun distinguished from a Common Noun?",
          optionA: "It starts with a lowercase letter",
          optionB: "It represents a whole class",
          optionC: "It starts with a capital letter",
          correctAnswer: "C) It starts with a capital letter",
        },
        {
          question: "What does a Collective Noun represent?",
          optionA: "A specific person",
          optionB: "A group of persons, places, animals, or things",
          optionC: "An abstract quality",
          correctAnswer: "B) A group of persons, places, animals, or things",
        },
        {
          question: "Which category includes nouns like honey, sand, and milk?",
          optionA: "Abstract Nouns",
          optionB: "Material Nouns",
          optionC: "Collective Nouns",
          correctAnswer: "B) Material Nouns",
        },
        {
          question: "What does an Abstract Noun represent?",
          optionA: "A tangible object",
          optionB: "A quality, action, state, feeling, or subject",
          optionC: "A group of people",
          correctAnswer: "B) A quality, action, state, feeling, or subject",
        },
        {
          question: "How is the Possessive Case formed for a Singular Noun?",
          optionA: "By adding 's",
          optionB: "By adding ' only",
          optionC: "By adding s'",
          correctAnswer: "A) By adding 's",
        },
        {
          question: 'Which is correct for a Singular Noun ending in "s"?',
          optionA: "Adding 's only",
          optionB: "Adding ' only",
          optionC: "Both a and b",
          correctAnswer: "C) Both a and b",
        },
        {
          question:
            'How is the Possessive Case formed for a Plural Noun ending in "s"?',
          optionA: "By adding 's",
          optionB: "By adding ' only",
          optionC: "By adding s'",
          correctAnswer: "B) By adding ' only",
        },
        {
          question:
            "In \"Charles's pen or Charles' pen,\" which is a correct Possessive Case?",
          optionA: "Charles' pen",
          optionB: "Charles's pen",
          optionC: "Charles's' pen",
          correctAnswer: "B) Charles's pen",
        },
        {
          question:
            "When is Apostrophe ('s) used with the last word of a Noun made of several words?",
          optionA: "Always",
          optionB: "Only for specific nouns",
          optionC: "When denoting possession",
          correctAnswer: "C) When denoting possession",
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
            "Common Nouns represent a whole ________ of a particular kind, such as girl, farmer, king, forest, farm, zoo, horse, giraffe, tiger, table, needle, etc.",
          options: {
            A: "Variety",
            B: "Class",
            C: "Selection",
          },
          correctAnswer: "B",
        },
        {
          question:
            "A Proper Noun begins with a ________ letter and is a name given to persons, places, animals, or things.",
          options: {
            A: "Lowercase",
            B: "Uppercase",
            C: "Italicized",
          },
          correctAnswer: "B",
        },
        {
          question:
            "A Collective Noun represents a group of persons, places, animals, or things, for example, an army of ________.",
          options: {
            A: "Soldiers",
            B: "Farmers",
            C: "Musicians",
          },
          correctAnswer: "A",
        },
        {
          question:
            "Material Nouns are things extracted from the earth or used to make other things, such as honey, sand, ________, and rubber.",
          options: {
            A: "Wood",
            B: "Iron",
            C: "Plastic",
          },
          correctAnswer: "C",
        },
        {
          question:
            "An Abstract Noun names some quality, action, state, feeling, or subject which we can only think of or feel but can't ________ or touch.",
          options: {
            A: "See",
            B: "Taste",
            C: "Smell",
          },
          correctAnswer: "A",
        },
        {
          question:
            "The Possessive Case is formed by adding Apostrophe ('s) to a ________ Noun.",
          options: {
            A: "Plural",
            B: "Singular",
            C: "Collective",
          },
          correctAnswer: "B",
        },
        {
          question:
            "Either Apostrophe ('s) or only Apostrophe(') can be used with Singular Nouns ending in the sounds of ________.",
          options: {
            A: "T",
            B: "S, SH",
            C: "P, F",
          },
          correctAnswer: "B",
        },
        {
          question:
            "Apostrophe ('s) is used with the last word of a Noun made of several words, as in father-in-law's ________.",
          options: {
            A: "Car",
            B: "House",
            C: "Garden",
          },
          correctAnswer: "B",
        },
        {
          question:
            "A Collective Noun representing a group of musicians is called a ________ of musicians.",
          options: {
            A: "Band",
            B: "Orchestra",
            C: "Choir",
          },
          correctAnswer: "A",
        },
        {
          question:
            "In \"Charles's pen or Charles' pen,\" which is a correct Possessive Case?",
          options: {
            A: "Charles' pen",
            B: "Charles's pen",
            C: "Charles's' pen",
          },
          correctAnswer: "B",
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
            "A Common Noun represents a specific person, place, animal, or thing.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
        {
          question: "Proper Nouns always start with a lowercase letter.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
        {
          question:
            "Material Nouns are extracted from the earth or used to make other things.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A",
        },
        {
          question:
            "Abstract Nouns represent tangible objects that can be seen or touched.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
        {
          question:
            "Apostrophe ('s) is used with Plural Nouns when they end in 's'.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
        {
          question:
            "A Collective Noun represents a group of persons, places, animals, or things.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A",
        },
        {
          question:
            "Material Nouns include things like honey, sand, and rubber.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A",
        },
        {
          question:
            "An Abstract Noun can represent qualities, actions, states, feelings, or subjects.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A",
        },
        {
          question:
            "Possessive Case is used to denote possession and is formed by adding Apostrophe ('s) to a Singular Noun.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "A",
        },
        {
          question:
            "The Text Highlight Color drop-down arrow on the Home tab is used to select the desired font color for highlighting text.",
          options: {
            A: "True",
            B: "False",
          },
          correctAnswer: "B",
        },
      ],
  };
}

export var activityData;
