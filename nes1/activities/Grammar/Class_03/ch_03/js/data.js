export const chapter = "Chapter - 3: Nouns";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            'What kind of noun is "Milkmen" in the sentence "Milk is brought by milkmen"?',
          optionA: "Common Noun",
          optionB: "Proper Noun",
          optionC: "Collective Noun",
          correctAnswer: "A) Common Noun",
        },
        {
          question:
            'In the sentence "Ashoka was a great king," what type of noun is "Ashoka"?',
          optionA: "Countable Noun",
          optionB: "Proper Noun",
          optionC: "Abstract Noun",
          correctAnswer: "B) Proper Noun",
        },
        {
          question:
            'Identify the kind of noun in the sentence "The police caught a gang of robbers."',
          optionA: "Countable Noun",
          optionB: "Abstract Noun",
          optionC: "Collective Noun",
          correctAnswer: "C) Collective Noun",
        },
        {
          question:
            'What type of noun is "Wood" in the sentence "Wood is a product of trees"?',
          optionA: "Common Noun",
          optionB: "Material Noun",
          optionC: "Uncountable Noun",
          correctAnswer: "B) Material Noun",
        },
        {
          question: 'Which category does the noun "book" belong to?',
          optionA: "Common Noun",
          optionB: "Countable Noun",
          optionC: "Uncountable Noun",
          correctAnswer: "B) Countable Noun",
        },
        {
          question:
            'In "She has a Samsung mobile," what kind of noun is "Samsung"?',
          optionA: "Countable Noun",
          optionB: "Proper Noun",
          optionC: "Uncountable Noun",
          correctAnswer: "B) Proper Noun",
        },
        {
          question:
            'What is the category of the noun "air" in "gold, air, sand"?',
          optionA: "Countable Noun",
          optionB: "Uncountable Noun",
          optionC: "Abstract Noun",
          correctAnswer: "B) Uncountable Noun",
        },
        {
          question:
            'Identify the type of noun in the sentence "The patient died of cancer."',
          optionA: "Abstract Noun",
          optionB: "Proper Noun",
          optionC: "Uncountable Noun",
          correctAnswer: "A) Abstract Noun",
        },
        {
          question: 'Differentiate between "Common Noun" and "Proper Noun."',
          optionA:
            "A Common Noun represents a specific person, place, or thing, while a Proper Noun refers to a general class.",
          optionB:
            "A Common Noun is the name of a particular person, place, animal, or thing, while a Proper Noun represents a whole class.",
          optionC:
            "A Common Noun represents the whole class of its kind, while a Proper Noun is the name of a particular person, place, animal, or thing.",
          correctAnswer:
            "C) A Common Noun represents the whole class of its kind, while a Proper Noun is the name of a particular person, place, animal, or thing.",
        },
        {
          question:
            'What is the type of noun in the sentence "Childhood is the best period in life"?',
          optionA: "Abstract Noun",
          optionB: "Collective Noun",
          optionC: "Countable Noun",
          correctAnswer: "A) Abstract Noun",
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
            "A ________ that names a person, place, animal, or thing is called a Common Noun.",
          optionA: "Specific Noun",
          optionB: "General Noun",
          optionC: "Proper Noun",
          correctAnswer: "B",
        },
        {
          question:
            "The special or particular name given to a person, place, animal, or thing is called a ________ Noun.",
          optionA: "Specific",
          optionB: "Particular",
          optionC: "Proper",
          correctAnswer: "C",
        },
        {
          question:
            "A ________ Noun is the name of a group of persons, animals, or things.",
          optionA: "Group",
          optionB: "Team",
          optionC: "Collective",
          correctAnswer: "C",
        },
        {
          question:
            "A ________ Noun is a thing extracted from the earth or used to make other things.",
          optionA: "Physical",
          optionB: "Material",
          optionC: "Essential",
          correctAnswer: "B",
        },
        {
          question:
            "An ________ Noun is the name of a quality, action, state, feeling, or an idea which we can only think of or feel but cannot see or touch.",
          optionA: "Imaginary",
          optionB: "Abstract",
          optionC: "Concrete",
          correctAnswer: "B",
        },
        {
          question: "A noun that can be counted is called a ________ Noun.",
          optionA: "Numerical",
          optionB: "Countable",
          optionC: "Quantitative",
          correctAnswer: "B",
        },
        {
          question:
            "A noun which cannot be counted is called an ________ Noun.",
          optionA: "Infinite",
          optionB: "Uncountable",
          optionC: "Indefinite",
          correctAnswer: "B",
        },
        {
          question:
            "A Common Noun represents the ________ class of its kind, while a Proper Noun is the name of a particular person, place, animal, or thing.",
          optionA: "Entire",
          optionB: "General",
          optionC: "Whole",
          correctAnswer: "B",
        },
        {
          question:
            "________ Nouns Example: A ________ of sheep was grazing in the field.",
          optionA: "Flock",
          optionB: "Herd",
          optionC: "Swarm",
          correctAnswer: "A",
        },
        {
          question:
            "________ Nouns Example: ________ is the best period in life.",
          optionA: "Youth",
          optionB: "Childhood",
          optionC: "Adulthood",
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
            "A Common Noun represents the whole class of its kind, while a Proper Noun is the name of a particular person, place, animal, or thing.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Material Nouns are things extracted from the earth or used to make other things.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "An Abstract Noun is the name of a specific person, place, animal, or thing.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Collective Nouns represent a group of persons, animals, or things and can be used for an individual of the group.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Countable Nouns cannot be counted and include items like oil, water, and milk.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Proper Nouns always begin with a capital letter.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Uncountable Nouns include items like book, pen, apple, and city.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Common Nouns are specific names given to a person, place, animal, or thing.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Abstract Nouns represent qualities, actions, states, feelings, or ideas that can be seen or touched.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "All Proper Nouns represent a whole class of a particular kind.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
