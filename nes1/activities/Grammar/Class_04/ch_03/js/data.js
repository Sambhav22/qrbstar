export const chapter = "Chapter - 3: Nouns";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is a Common Noun?",
          optionA: "A name of a particular person, place, animal, or thing.",
          optionB: "A special name starting with a capital letter.",
          optionC: "A word representing a whole class of a particular kind.",
          correctAnswer: "C",
        },
        {
          question: "Which of the following is a Proper Noun?",
          optionA: "girl",
          optionB: "street",
          optionC: "New Delhi",
          correctAnswer: "C",
        },
        {
          question:
            "What is the key difference between a Common Noun and a Proper Noun?",
          optionA: "Proper Nouns begin with a capital letter.",
          optionB: "Common Nouns represent specific individuals.",
          optionC: "Proper Nouns represent a whole class of a particular kind.",
          correctAnswer: "B",
        },
        {
          question: "What is a Collective Noun?",
          optionA: "A special name starting with a capital letter.",
          optionB: "A word representing a whole class of a particular kind.",
          optionC: "A group of persons, animals, or things considered as one.",
          correctAnswer: "C",
        },
        {
          question: "Which of the following is a Material Noun?",
          optionA: "jump",
          optionB: "gold",
          optionC: "civics",
          correctAnswer: "B",
        },
        {
          question: "What does an Abstract Noun represent?",
          optionA: "A special name starting with a capital letter.",
          optionB: "Something extracted from the earth.",
          optionC:
            "Quality, action, state, feeling, or an idea that can't be seen or touched.",
          correctAnswer: "C",
        },
        {
          question: "What category do countable nouns belong to?",
          optionA: "Proper Nouns",
          optionB: "Material Nouns",
          optionC: "Countable Nouns",
          correctAnswer: "C",
        },
        {
          question:
            "Which of the following is an example of an Uncountable Noun?",
          optionA: "key",
          optionB: "book",
          optionC: "water",
          correctAnswer: "C",
        },
        {
          question: "What does a Material Noun represent?",
          optionA: "Quality, action, state, feeling, or an idea.",
          optionB:
            "A thing extracted from the earth or used to make other things.",
          optionC: "A group of persons, animals, or things considered as one.",
          correctAnswer: "B",
        },
        {
          question:
            "Give an example of an Abstract Noun representing a state or condition.",
          optionA: "civics",
          optionB: "poverty",
          optionC: "movement",
          correctAnswer: "B",
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
            "A ___________ Noun is a word that names a person, place, animal, or thing.",
          optionA: "Proper",
          optionB: "Common",
          optionC: "Collective",
          correctAnswer: "B",
        },
        {
          question:
            "A ___________ Noun begins with a Capital Letter; for example: Kamal, Rajni, New Delhi, Asia, Bunny, Godrej, Coca Cola, the Ramayana etc.",
          optionA: "Material",
          optionB: "Abstract",
          optionC: "Proper",
          correctAnswer: "C",
        },
        {
          question:
            "A ___________ Noun denotes a group of persons, animals, or things considered as one; for example: army, class, flock, fleet, jury etc.",
          optionA: "Collective",
          optionB: "Abstract",
          optionC: "Common",
          correctAnswer: "A",
        },
        {
          question:
            "A ___________ Noun is a thing extracted from the earth or used to make other things; for example: water, wood, gold, stone etc.",
          optionA: "Collective",
          optionB: "Material",
          optionC: "Abstract",
          correctAnswer: "B",
        },
        {
          question:
            "An ___________ Noun names some quality, action, state, feeling, or an idea which we can only think of or feel but can't see or touch; for example: honesty, grammar, jump, illness etc.",
          optionA: "Material",
          optionB: "Collective",
          optionC: "Abstract",
          correctAnswer: "C",
        },
        {
          question:
            "Some Nouns can be counted. They are called ___________ Nouns; for example: key, book, boat etc.",
          optionA: "Uncountable",
          optionB: "Collective",
          optionC: "Countable",
          correctAnswer: "C",
        },
        {
          question:
            "Countable Nouns belong to the category of ___________ Nouns.",
          optionA: "Abstract",
          optionB: "Proper",
          optionC: "Countable",
          correctAnswer: "C",
        },
        {
          question:
            "___________ Nouns cannot be counted. They are called Uncountable Nouns; for example: water, sand, gold etc.",
          optionA: "Common",
          optionB: "Material",
          optionC: "Uncountable",
          correctAnswer: "C",
        },
        {
          question:
            "A ___________ Noun represents a whole class of a particular kind; for example: man, girl, house, town, lion, bird, fan etc.",
          optionA: "Common",
          optionB: "Proper",
          optionC: "Collective",
          correctAnswer: "A",
        },
        {
          question:
            "An ___________ Noun is a word that names a particular person, place, animal, or thing. It begins with a Capital Letter; for example: Kamal, Rajni, New Delhi, Asia, Bunny, Godrej, Coca Cola, the Ramayana etc.",
          optionA: "Collective",
          optionB: "Common",
          optionC: "Proper",
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
          question:
            "A Common Noun represents a whole class of a particular kind.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Proper Nouns begin with a lowercase letter.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Collective Nouns denote individual persons, animals, or things.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Material Nouns are things extracted from the air.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Abstract Nouns can be touched or seen.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "All Nouns are countable.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Uncountable Nouns cannot be counted individually.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "A Proper Noun can represent any person, place, or thing.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Collective Nouns refer to a group of persons, animals, or things considered as one.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Material Nouns are used to make other things.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
