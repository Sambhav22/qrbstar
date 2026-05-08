export const chapter = "Chapter - 19:Rhyming Words";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What are words that rhyme with each other called?",
            options: ["Synonyms", "Antonyms", "Rhyming Words"],
            answer: "Rhyming Words",
          },
          {
            question:
              "Which pair of words demonstrates rhyming in the given example?",
            options: ["well-house", "hit-cake", "house-mouse"],
            answer: "house-mouse",
          },
          {
            question: "In the example, what is the rhyming pair for 'hit'?",
            options: ["pit", "cake", "well"],
            answer: "pit",
          },
          {
            question: "Which term describes words that have similar meanings?",
            options: ["Homophones", "Synonyms", "Antonyms"],
            answer: "Synonyms",
          },
          {
            question: "What is the purpose of the example 'cake-bake'?",
            options: [
              "Illustrating homophones",
              "Demonstrating alliteration",
              "Providing an example of rhyming words",
            ],
            answer: "Providing an example of rhyming words",
          },
          {
            question: "Which pair does NOT rhyme in the given example?",
            options: ["house-mouse", "well-bell", "hit-pit"],
            answer: "hit-pit",
          },
          {
            question:
              "What do we call words that sound the same but have different meanings and spellings?",
            options: ["Homophones", "Synonyms", "Antonyms"],
            answer: "Homophones",
          },
          {
            question: "In the example, what is the rhyming pair for 'well'?",
            options: ["bell", "house", "hit"],
            answer: "bell",
          },
          {
            question: "Which term refers to words that have opposite meanings?",
            options: ["Homophones", "Synonyms", "Antonyms"],
            answer: "Antonyms",
          },
          {
            question:
              "What is the relationship between the words 'cake' and 'bake' in the example?",
            options: ["Homophones", "Synonyms", "Rhyming words"],
            answer: "Rhyming words",
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
              "The words that rhyme with each other are called Rhyming Words.",
            options: ["sound", "rhyme", "relate"],
            answer: "rhyme",
          },
          {
            question:
              "Rhyming words create a similarity in __________ between them.",
            options: ["pronunciation", "meaning", "structure"],
            answer: "pronunciation",
          },
          {
            question: "An example of rhyming words is well-________.",
            options: ["ring", "bell", "tell"],
            answer: "bell",
          },
          {
            question:
              "In the pair house-________, what is the rhyming word for 'house'?",
            options: ["mouse", "hit", "pit"],
            answer: "mouse",
          },
          {
            question:
              "The pair cake-________ exemplifies the concept of rhyming words.",
            options: ["bake", "break", "make"],
            answer: "bake",
          },
          {
            question: "Rhyming words often share a common __________.",
            options: ["prefix", "suffix", "ending sound"],
            answer: "ending sound",
          },
          {
            question: "The words 'well' and '________' form a rhyming pair.",
            options: ["tell", "yell", "sell"],
            answer: "tell",
          },
          {
            question:
              "What do we call words that rhyme with each other? Rhyming __________.",
            options: ["phrases", "pairs", "words"],
            answer: "words",
          },
          {
            question:
              "The rhyming pair hit-________ illustrates the concept of rhyming words.",
            options: ["bit", "sit", "pit"],
            answer: "pit",
          },
          {
            question:
              "The example 'cake-________' demonstrates the principle of rhyming words.",
            options: ["make", "take", "bake"],
            answer: "bake",
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
            question:
              "Rhyming words create a similarity in pronunciation between them.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "In the pair house-mouse, 'mouse' is not a rhyming word.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "The words 'well' and 'tell' form a rhyming pair.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "Rhyming words often share a common suffix.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Prepositions are used to show the quantity of something in relation to another.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The primary function of a preposition is to show the relationship of one thing with another.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "The words 'under,' 'on,' 'near,' and 'in' are examples of adjectives.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "The cat is inside the tree.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Rhyming words primarily indicate emotions between one thing and another.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The example 'cake-bake' demonstrates the concept of homophones.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
