export const chapter = "Chapter - 1: Noun ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What type of noun is 'student' in the sentence 'All the students of this school are very disciplined'?",
          optionA: "Proper Noun",
          optionB: "Common Noun",
          optionC: "Collective Noun",
          correctAnswer: "B",
        },
        {
          question:
            "Which type of noun is 'Manav' in the sentence 'Manav and Mayank went together'?",
          optionA: "Proper Noun",
          optionB: "Common Noun",
          optionC: "Collective Noun",
          correctAnswer: "A",
        },
        {
          question: "'A group of soldiers is called an...'",
          optionA: "Army",
          optionB: "Squadron",
          optionC: "Collective",
          correctAnswer: "C",
        },
        {
          question:
            "What type of noun is 'honey' in the sentence 'I like honey greatly'?",
          optionA: "Common Noun",
          optionB: "Material Noun",
          optionC: "Abstract Noun",
          correctAnswer: "B",
        },
        {
          question: "Which of the following is an Abstract Noun?",
          optionA: "Wood",
          optionB: "Kindness",
          optionC: "Squadron",
          correctAnswer: "B",
        },
        {
          question: "Countable Nouns can be:",
          optionA: "Counted",
          optionB: "Uncounted",
          optionC: "Both a and b",
          correctAnswer: "A",
        },
        {
          question:
            "What kind of noun is 'child' in the sentence 'A little naughty child was playing in the room'?",
          optionA: "Subject Noun",
          optionB: "Indirect Object Noun",
          optionC: "Countable Noun",
          correctAnswer: "A",
        },
        {
          question:
            "In the sentence 'They brought a new saree for the mother,' what is the function of 'for the mother'?",
          optionA: "Subject",
          optionB: "Direct Object",
          optionC: "Object of a Preposition",
          correctAnswer: "C",
        },
        {
          question:
            "'She is a film artist.' - In this sentence, 'film' functions as a(n):",
          optionA: "Subject",
          optionB: "Indirect Object",
          optionC: "Modifier of Another Noun",
          correctAnswer: "C",
        },
        {
          question:
            "What does 'Her father was an engineer' demonstrate in terms of noun function?",
          optionA: "Indirect Object",
          optionB: "Complement",
          optionC: "Direct Object",
          correctAnswer: "B",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question:
            "Common Nouns are names given to any person, place, animal, or thing of the same __________ or kind.",
          options: {
            a: "Group",
            b: "Class",
            c: "Type",
          },
          correctAnswer: "b",
        },
        {
          question:
            "A Proper Noun is a name given to some particular person, place, animal, or thing; for example, Alex can be the name of a particular __________.",
          options: {
            a: "Dog",
            b: "Boy",
            c: "Tree",
          },
          correctAnswer: "a",
        },
        {
          question:
            "A Collective Noun is the name of a number (or collection) of persons, things, or animals taken together and spoken as a __________.",
          options: {
            a: "Total",
            b: "Whole",
            c: "Unit",
          },
          correctAnswer: "b",
        },
        {
          question:
            "Material Nouns denote the matter or substance of which things are made or which is found in the __________.",
          options: {
            a: "Air",
            b: "Water",
            c: "Earth",
          },
          correctAnswer: "c",
        },
        {
          question:
            "An Abstract Noun is usually the name of a quality, action, state, science, art, subject, or __________.",
          options: {
            a: "Job",
            b: "Profession",
            c: "Carpentry",
          },
          correctAnswer: "b",
        },
        {
          question:
            "We can classify Nouns into Countable and Uncountable Nouns. Countable Nouns can be __________.",
          options: {
            a: "Counted",
            b: "Measured",
            c: "Ignored",
          },
          correctAnswer: "a",
        },
        {
          question: "A little naughty child was playing in the __________.",
          options: {
            a: "Park",
            b: "Room",
            c: "School",
          },
          correctAnswer: "b",
        },
        {
          question: "They brought a new saree __________ the mother.",
          options: {
            a: "To",
            b: "For",
            c: "With",
          },
          correctAnswer: "b",
        },
        {
          question:
            "In the sentence 'I met a book promoter yesterday,' the Noun 'book' functions like a(n) __________.",
          options: {
            a: "Adjective",
            b: "Subject",
            c: "Object",
          },
          correctAnswer: "a",
        },
        {
          question: "Her father was __________ engineer.",
          options: {
            a: "The",
            b: "An",
            c: "A",
          },
          correctAnswer: "c",
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
            "Common Nouns are specific names given to particular persons, places, animals, or things.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "false",
        },
        {
          question:
            "A Proper Noun can refer to any individual person, place, or thing of a particular kind or class.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "false",
        },
        {
          question:
            "Collective Nouns represent a collection of persons, things, or animals spoken of as a whole.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "true",
        },
        {
          question:
            "Material Nouns signify the matter or substance from which things are made or found in the earth.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "true",
        },
        {
          question:
            "Abstract Nouns are usually names of specific people, places, or things.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "false",
        },
        {
          question:
            "Countable Nouns are those that cannot be counted or quantified.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "false",
        },
        {
          question:
            "Nouns can function as modifiers of other nouns, acting like adjectives.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "true",
        },
        {
          question:
            "An Indirect Object of a verb refers to the person, place, or thing that receives the action directly.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "false",
        },
        {
          question:
            "Material Nouns include substances like wool, cotton, and rice.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "true",
        },
        {
          question:
            "The word 'Abstract' in Abstract Nouns refers to something tangible and concrete.",
          options: {
            true: "True",
            false: "False",
          },
          correctAnswer: "false",
        },
      ],
  };
}

export var activityData;
