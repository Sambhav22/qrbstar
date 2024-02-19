export const chapter = "Chapter - 1: Noun";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is a Common Noun?",
          optionA: "A name given to a particular person or thing",
          optionB:
            "A name given to any person, place, animal, or thing of the same class or kind",
          optionC:
            "A name given to a collection of persons, things, or animals taken together and spoken as a whole",
          correctAnswer: "B",
        },
        {
          question: "Which of the following is an example of a Proper Noun?",
          optionA: "A group of flowers",
          optionB: "A class of students",
          optionC: "Raman",
          correctAnswer: "C",
        },
        {
          question: "What is a Collective Noun?",
          optionA: "The name of a particular person, place, animal, or thing",
          optionB:
            "The name given to any person, place, animal, or thing of the same class or kind",
          optionC:
            "The name of a number or collection of persons, things, or animals taken together and spoken as a whole",
          correctAnswer: "C",
        },
        {
          question: "What does a Material Noun denote?",
          optionA:
            "The matter or substance of which things are made or found in the earth",
          optionB: "The name of a quality, action, state, or profession",
          optionC:
            "A name given to a particular person, place, animal, or thing",
          correctAnswer: "A",
        },
        {
          question: "Which of the following is an Abstract Noun?",
          optionA: "Wood",
          optionB: "Kindness",
          optionC: "Cabinet",
          correctAnswer: "B",
        },
        {
          question:
            "In the sentence 'The boy playing in the street is my friend,' what is the function of the Noun 'boy'?",
          optionA: "Subject of a Verb",
          optionB: "Direct Object of a Verb",
          optionC: "Indirect Object of a Verb",
          correctAnswer: "A",
        },
        {
          question:
            "What role does a Noun play when it functions as a modifier of another Noun?",
          optionA: "Subject of a Verb",
          optionB: "Direct Object of a Verb",
          optionC: "Functions like an Adjective",
          correctAnswer: "C",
        },
        {
          question:
            "Identify the Noun that functions as a Complement in the sentence 'You will be an engineer one day.'",
          optionA: "Teacher",
          optionB: "Graduate",
          optionC: "Engineer",
          correctAnswer: "C",
        },
        {
          question:
            "What type of Noun is 'honesty' in the sentence 'He fought for his honesty.'?",
          optionA: "Common Noun",
          optionB: "Proper Noun",
          optionC: "Abstract Noun",
          correctAnswer: "C",
        },
        {
          question: "Which sentence contains a Material Noun?",
          optionA: "The large brown sack had rice in it.",
          optionB: "She was knitting a sweater.",
          optionC: "Furniture is made from wood.",
          correctAnswer: "C",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      [
        {
          question:
            "Common Nouns are names given to any person, place, animal, or thing of the same __________ or __________.",
          optionA: "Size, Color",
          optionB: "Class, Kind",
          optionC: "Species, Habitat",
          correctAnswer: "B",
        },
        {
          question:
            "A Proper Noun is a name given to a specific person, place, animal, or thing; for example, Whitey can be the name of a particular __________ and not all dogs.",
          optionA: "Bird",
          optionB: "Dog",
          optionC: "Elephant",
          correctAnswer: "B",
        },
        {
          question:
            "A Collective Noun is the name of a number or collection of persons, things, or animals taken together and spoken as a whole; for example, a group of flowers is called a __________.",
          optionA: "Grove",
          optionB: "Bouquet",
          optionC: "Herd",
          correctAnswer: "B",
        },
        {
          question:
            "Material Nouns denote the matter or substance of which things are made or found in the earth; for example, furniture is made from __________.",
          optionA: "Gold",
          optionB: "Wood",
          optionC: "Silk",
          correctAnswer: "B",
        },
        {
          question:
            "An Abstract Noun is usually the name of a quality, action, state, science, art, subject, or profession; for example, honesty, opposition, kindness, truth, liberty, peace, __________, fight, old age.",
          optionA: "Adulthood",
          optionB: "Adolescence",
          optionC: "Infancy",
          correctAnswer: "B",
        },
        {
          question:
            "A Noun can function as the Subject of a Verb; for example, 'The large brown sack had rice __________.'",
          optionA: "Over it",
          optionB: "In it",
          optionC: "On it",
          correctAnswer: "B",
        },
        {
          question:
            "As a Direct Object of a Verb, the Noun receives the action of the verb; for example, 'The coach trained the player in __________.'",
          optionA: "Running",
          optionB: "Bowling",
          optionC: "Swimming",
          correctAnswer: "B",
        },
        {
          question:
            "As an Indirect Object of a Verb, the Noun receives the action indirectly; for example, 'The teacher offered the student __________.'",
          optionA: "A reward",
          optionB: "A punishment",
          optionC: "A book",
          correctAnswer: "A",
        },
        {
          question:
            "As an Object of a Preposition, the Noun is used to indicate direction or location; for example, 'They were going to __________.'",
          optionA: "Office",
          optionB: "Park",
          optionC: "School",
          correctAnswer: "C",
        },
        {
          question:
            "As a Modifier of Another Noun, the Noun functions like an __________.",
          optionA: "Adverb",
          optionB: "Adjective",
          optionC: "Pronoun",
          correctAnswer: "B",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question:
            "Common Nouns are names given to any person, place, animal, or thing of the same class or kind.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Proper Nouns are names given to some particular person, place, animal, or thing.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Collective Nouns are the names of individual persons, things, or animals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Material Nouns denote the matter or substance of which things are made or found in the earth.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Abstract Nouns are usually the names of qualities, actions, states, sciences, arts, subjects, or professions.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "A Noun can function as the Subject of a Verb.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "As an Indirect Object of a Verb, the Noun receives the action directly.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "As an Object of a Preposition, the Noun is used to indicate direction or location.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "As a Modifier of Another Noun, the Noun functions like an Adjective.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The modern period in India officially began in the 15th century.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
