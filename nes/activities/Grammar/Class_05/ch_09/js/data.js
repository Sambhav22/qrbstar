export const chapter = "Chapter - 9: Articles A, An, The";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What are the two kinds of articles mentioned in the text?",
          optionA: "Definite and Indefinite",
          optionB: "An and The",
          optionC: "Consonant and Vowel",
          correctAnswer: "Definite and Indefinite",
        },
        {
          question: "When is the indefinite article 'A' used?",
          optionA: "Before words starting with a vowel sound",
          optionB: "Before names of organizations",
          optionC: "Before words starting with a consonant or non-vowel sound",
          correctAnswer:
            "Before words starting with a consonant or non-vowel sound",
        },
        {
          question:
            "Which article is used before a word or an abbreviation beginning with a vowel sound?",
          optionA: "An",
          optionB: "The",
          optionC: "A",
          correctAnswer: "An",
        },
        {
          question:
            "In which situations is the definite article 'The' used, according to the text?",
          optionA: "Before proper nouns",
          optionB: "Before an unknown noun",
          optionC: "Before a noun that represents its whole class",
          correctAnswer: "Before a noun that represents its whole class",
        },
        {
          question:
            "What is the rule for using articles with superlative degrees of adjectives?",
          optionA: "Use 'An' before superlative degrees",
          optionB: "Use 'A' before superlative degrees",
          optionC: "Use 'The' before superlative degrees",
          correctAnswer: "Use 'The' before superlative degrees",
        },
        {
          question:
            "In which case are articles not used according to the text?",
          optionA: "Before proper nouns",
          optionB: "Before material nouns",
          optionC:
            "Before names of places when visited or used for their primary purpose",
          correctAnswer: "Before material nouns",
        },
        {
          question:
            "Which of the following is an example of a proverbial phrase where articles are omitted?",
          optionA: "In the market",
          optionB: "At sunrise",
          optionC: "On foot",
          correctAnswer: "At sunrise",
        },
        {
          question:
            "What is the definite article used before the names of natural things, rivers, religious books, and oceans?",
          optionA: "A",
          optionB: "An",
          optionC: "The",
          correctAnswer: "The",
        },
        {
          question:
            "When can articles be used with names of places such as bed, church, hospital, market, etc.?",
          optionA: "Always",
          optionB: "When they are visited or used for their primary purpose",
          optionC: "Never",
          correctAnswer:
            "When they are visited or used for their primary purpose",
        },
        {
          question:
            "Which article is used before the names of political parties, organizations, nationalities, races, and communities?",
          optionA: "An",
          optionB: "A",
          optionC: "The",
          correctAnswer: "The",
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
            "Indefinite Articles are of two kinds: ______ and Definite Articles.",
          optionA: "A",
          optionB: "An",
          optionC: "Some",
          correctAnswer: "A",
        },
        {
          question:
            "Article A is used before a word or an abbreviation beginning with a ______ or non-Vowel sound.",
          optionA: "Consonant",
          optionB: "Vowel",
          optionC: "Silent letter",
          correctAnswer: "Consonant",
        },
        {
          question:
            "Article An is used before a word or an abbreviation beginning with a ______ sound.",
          optionA: "Consonant",
          optionB: "Vowel",
          optionC: "Silent letter",
          correctAnswer: "Vowel",
        },
        {
          question: "The only Definite Article is ______.",
          optionA: "A",
          optionB: "An",
          optionC: "The",
          correctAnswer: "The",
        },
        {
          question: "Article The is used before a Noun already ______.",
          optionA: "Unknown",
          optionB: "Known",
          optionC: "Mentioned",
          correctAnswer: "Known",
        },
        {
          question:
            "Article The is used before a Noun that represents its whole ______.",
          optionA: "Class",
          optionB: "Species",
          optionC: "Category",
          correctAnswer: "Class",
        },
        {
          question:
            "Article The is used before the names of natural things, rivers, and ______.",
          optionA: "Mountains",
          optionB: "Deserts",
          optionC: "Oceans",
          correctAnswer: "Oceans",
        },
        {
          question: "Article The is used before superlative degree of ______.",
          optionA: "Nouns",
          optionB: "Adjectives",
          optionC: "Verbs",
          correctAnswer: "Adjectives",
        },
        {
          question: "Articles are not used before a ______ Noun.",
          optionA: "Proper",
          optionB: "Abstract",
          optionC: "Material",
          correctAnswer: "Proper",
        },
        {
          question:
            "Articles are not used with names of places such as bed, church, hospital, market, etc. when these places are ______ or used for their primary purpose.",
          optionA: "Visited",
          optionB: "Ignored",
          optionC: "Mentioned",
          correctAnswer: "Visited",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Indefinite Articles include A and An.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Article A is used before words starting with a Vowel sound.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Article The is used before a Noun already known or mentioned.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The Definite Article is An.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Article The is used before the names of natural things, rivers, and oceans.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Articles are always used before Proper Nouns.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Superlative degrees of Adjectives are preceded by the article A.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Articles are not used with names of places such as bed, church, and school when visited for their primary purpose.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The first generation of AIBO, the robotic dog, was discontinued in 2013.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "ELIZA used Neural Network methodology to stimulate conversation between humans and machines.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
